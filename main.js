// stack

// var letter = [];
// var word = "huyyu";
// var rword = "";

// for (let i = 0; i < word.length; i++) {
//   letter.push(word[i]);
// }

// for (let i = 0; i < word.length; i++) {
//   rword += letter.pop();
// }

// if (word === rword) {
//   console.log(`${word} la chuoi doi xung`);
// } else {
//   console.log(`${word} la chuoi khong doi xung`);
// }

// creat a stack

// var Stack = function() {
//   this.count = 0;
//   this.storage = {};

//   // them gia tri vao cuoi stack
//   this.push = function(value) {
//     this.storage[this.count] = value;
//     this.count++;
//   };

//   // loai bo va tra ve phan tu cuoi
//   this.pop = function() {
//     if (this.count === 0) {
//       return undefined;
//     }

//     this.count--;
//     var result = this.storage[this.count];
//     delete this.storage[this.count];
//     return result;
//   };

//   // tra ve gia tri cuoi cung cua stack
//   this.peek = function() {
//     return this.storage[this.count - 1];
//   };

//   // tra ve so luong phan tu stack
//   this.size = function() {
//     return this.count;
//   };

//   this.returnStorage = function() {
//     return this.storage;
//   };
// };

// var stack = new Stack();

// stack.push(1);
// stack.push(2454454646);
// console.log(stack.push(123));
// console.log("pop", stack.pop());
// console.log("size", stack.size());
// console.log("peek", stack.peek());

// console.log(stack.returnStorage());

// SETS

// function mySet() {
//   var collection = [];

//   // kiem tra xem mang co phan tu can tim khong
//   this.has = function(element) {
//     return collection.indexOf(element) !== -1;
//   };

//   // tra ve tat ca cac gia tri
//   this.values = function() {
//     return collection;
//   };

//   // them phan tu vao set
//   this.add = function(element) {
//     if (!this.has(element)) {
//       collection.push(element);
//       return true;
//     }
//     return false;
//   };

//   // loai bo phan tu trong set
//   this.remove = function(element) {
//     if (this.has(element)) {
//       var index = collection.indexOf(element);
//       collection.splice(index, 1);
//       return true;
//     }
//     return false;
//   };

//   // tra ve size cua collection
//   this.size = function() {
//     return collection.length;
//   };

//   // merge two set
//   this.union = function(ortherSet) {
//     var unionSet = new mySet();
//     var firstSet = this.values();
//     var secondSet = ortherSet.values();

//     firstSet.forEach(function(element) {
//       unionSet.add(element);
//     });

//     secondSet.forEach(function(element) {
//       unionSet.add(element);
//     });

//     return unionSet.values();
//   };

//   // intersection two set
//   this.intersection = function(ortherSet) {
//     var intersectionSet = new mySet();
//     var firstSet = this.values();

//     firstSet.forEach(function(element) {
//       if (ortherSet.has(element)) {
//         intersectionSet.add(element);
//       }
//     });

//     return intersectionSet.values();
//   };

//   // different first set as new set
//   this.difference = function(ortherSet) {
//     var differenceSet = new mySet();
//     var firstSet = this.values();

//     firstSet.forEach(function(element) {
//       if (!ortherSet.has(element)) {
//         differenceSet.add(element);
//       }
//     });

//     return differenceSet.values();
//   };
// }

// var setA = new mySet();
// var setB = new mySet();

// setA.add("a");
// setA.add("v");
// setA.add("jkl");

// setB.add("huyhuyhuy");
// setB.add("v");

// console.log(setA.values());
// console.log(setA.size());
// console.log(setA.union(setB));
// console.log(setA.intersection(setB));
// console.log(setA.difference(setB));

// QUEUE

// function PriorityQueue() {
//   var collection = [];

//   this.printCollection = function() {
//     console.log(collection);
//   };

//   // kiem tra mang co rong
//   this.isEmpty = function() {
//     return collection.length === 0;
//   };

//   // them gia tri vao mang theo so thu tu
//   this.enqueue = function(element) {
//     if (this.isEmpty()) {
//       collection.push(element);
//     } else {
//       var added = false;
//       for (var i = 0; i < collection.length; i++) {
//         // check do uu tien
//         if (element[1] < collection[i][1]) {
//           collection.splice(i, 0, element);
//           added = true;
//           break;
//         }
//       }
//       if (!added) {
//         collection.push(element);
//       }
//     }
//   };

//   // remove and return gia tri dau
//   this.dequeue = function() {
//     var value = collection.shift();
//     return value[0];
//   };

//   this.front = function() {
//     return collection[0];
//   };

//   this.size = function() {
//     return collection.length;
//   };
// }

// var queueA = new PriorityQueue();

// queueA.enqueue(["dep", 5]);
// queueA.enqueue(["hoang", 2]);
// queueA.enqueue(["chai", 13]);
// queueA.enqueue(["huy", 4]);
// queueA.enqueue(["tran", 1]);
// queueA.enqueue(["hihihi", 20]);

// queueA.printCollection();
// console.log(queueA.dequeue());
// console.log(queueA.front());
// console.log(queueA.size());

// BINARY SEARCH TREE

// class Node {
//   constructor(data, left = null, right = null) {
//     this.data = data;
//     this.left = left;
//     this.right = right;
//   }
// }

// class BST {
//   constructor() {
//     this.root = null;
//   }

//   add(data) {
//     const node = this.root;
//     if (node === null) {
//       this.root = new Node(data);
//       return;
//     } else {
//       const searchTree = function(node) {
//         if (data < node.data) {
//           if (node.left === null) {
//             node.left = new Node(data);
//             return;
//           } else if (node.left !== null) {
//             return searchTree(node.left);
//           }
//         } else if (data > node.data) {
//           if (node.right === null) {
//             node.right = new Node(data);
//             return;
//           } else if (node.right !== null) {
//             return searchTree(node.right);
//           }
//         } else {
//           return null;
//         }
//       };
//       return searchTree(node);
//     }
//   }

//   findMin() {
//     let current = this.root;

//     while (current.left !== null) {
//       current = current.left;
//     }
//     return current.data;
//   }

//   findMax() {
//     let current = this.root;

//     while (current.right !== null) {
//       current = current.right;
//     }
//     return current.data;
//   }

//   find(data) {
//     let current = this.root;

//     while (current) {
//       if (current.data === data) {
//         return true;
//       } else {
//         if (data < current.data) {
//           current = current.left;
//         } else {
//           current = current.right;
//         }
//       }
//     }
//     return false;
//   }

//   remove(data) {
//     const removeNode = function(node, data) {
//       if (node == null) {
//         return null;
//       }

//       if (data === node.data) {
//         if (node.left == null && node.right == null) {
//           return null;
//         }

//         if (node.left == null) {
//           return node.right;
//         }

//         if (node.right == null) {
//           return node.left;
//         }

//         var tempNode = node.right;
//         while (tempNode.left !== null) {
//           tempNode = tempNode.left;
//         }

//         node.data = tempNode.data;
//         node.right = removeNode(node.right, tempNode.data);
//         return node;
//       } else if (data < node.data) {
//         node.left = removeNode(node.left, data);
//         return node;
//       } else {
//         node.right = removeNode(node.right, data);
//         return node;
//       }
//     };
//     return (this.root = removeNode(this.root, data));
//   }

//   findMinHeight(node = this.root) {
//     if (node == null) {
//       return -1;
//     }

//     let left = this.findMinHeight(node.left);
//     let right = this.findMinHeight(node.right);

//     if (left < right) {
//       return left + 1;
//     } else {
//       return right + 1;
//     }
//   }

//   findMaxHeight(node = this.root) {
//     if (node == null) {
//       return -1;
//     }

//     let left = this.findMaxHeight(node.left);
//     let right = this.findMaxHeight(node.right);

//     if (left > right) {
//       return left + 1;
//     } else {
//       return right + 1;
//     }
//   }

//   isBalanced() {
//     return this.findMinHeight() >= this.findMaxHeight() - 1;
//   }

//   inOrder() {
//     if (this.root == null) {
//       return null;
//     } else {
//       var result = new Array();
//       function traverseInOrder(node) {
//         node.left && traverseInOrder(node.left);
//         result.push(node.data);
//         node.right && traverseInOrder(node.right);
//       }
//       traverseInOrder(this.root);
//       return result;
//     }
//   }

//   preOrder() {
//     if (this.root == null) {
//       return null;
//     } else {
//       var result = new Array();
//       function traversePreOrder(node) {
//         result.push(node.data);
//         node.left && traversePreOrder(node.left);
//         node.right && traversePreOrder(node.right);
//       }
//       traversePreOrder(this.root);
//       return result;
//     }
//   }

//   postOrder() {
//     if (this.root == null) {
//       return null;
//     } else {
//       var result = new Array();
//       function traversePostOrder(node) {
//         node.left && traversePostOrder(node.left);
//         node.right && traversePostOrder(node.right);
//         result.push(node.data);
//       }
//       traversePostOrder(this.root);
//       return result;
//     }
//   }

//   levelOrder() {
//     var result = [];
//     var Q = [];
//     Q.push(this.root);

//     if (this.root !== null) {
//       while (Q.length > 0) {
//         var node = Q.shift();

//         result.push(node.data);
//         if (node.left !== null) {
//           Q.push(node.left);
//         }
//         if (node.right !== null) {
//           Q.push(node.right);
//         }
//       }
//       return result;
//     } else {
//       return null;
//     }
//   }
// }

// const treeA = new BST();

// treeA.add(9);
// treeA.add(4);
// treeA.add(17);
// treeA.add(3);
// treeA.add(6);

// treeA.add(22);
// treeA.add(5);
// treeA.add(7);
// treeA.add(20);
// treeA.add(10);

// console.log(treeA.root);
// console.log(treeA.findMin());
// console.log(treeA.findMax());
// console.log(treeA.find(8));

// console.log(treeA.findMinHeight());
// console.log(treeA.findMaxHeight());
// console.log(treeA.isBalanced());
// console.log(treeA.inOrder());
// console.log(treeA.preOrder());
// console.log(treeA.postOrder());
// console.log(treeA.levelOrder());

// HASH TABLE

// var hash = (string, max) => {
//   var hash = 0;
//   for (let i = 0; i < string.length; i++) {
//     hash += string.charCodeAt(i);
//   }
//   return hash % max;
// };

// let HashTable = function() {
//   let storage = [];
//   const storageLimit = 4;

//   this.print = function() {
//     console.log(storage);
//   };

//   this.add = function(key, value) {
//     var index = hash(key, storageLimit);
//     console.log("TCL: this.add -> index", index);

//     if (storage[index] === undefined) {
//       storage[index] = [[key, value]];
//     } else {
//       var inserted = false;
//       for (let i = 0; i < storage[index].length; i++) {
//         if (storage[index][i][0] === key) {
//           storage[index][i][1] = value;
//           inserted = true;
//         }
//       }
//       if (inserted === false) {
//         storage[index].push([key, value]);
//       }
//     }
//   };

//   this.remove = function(key) {
//     var index = hash(key, storageLimit);
//     if (storage[index].length === 1 && storage[index][0][0] === key) {
//       delete storage[index];
//     } else {
//       for (let i = 0; i < storage[index]; i++) {
//         if (storage[index][i][0] === key) {
//           delete storage[index][i];
//         }
//       }
//     }
//   };

//   this.lookup = function(key) {
//     var index = hash(key, storageLimit);
//     console.log("TCL: this.lookup -> index", index);

//     if (storage[index] === undefined) {
//       return undefined;
//     } else {
//       for (let i = 0; i < storage[index].length; i++) {
//         if (storage[index][i][0] === key) {
//           return storage[index][i][1];
//         }
//       }
//     }
//   };
// };

// // console.log(hash("beau", 10));

// let ht = new HashTable();
// ht.add("beau", "person");
// ht.add("fido", "dog");
// ht.add("rex", "dinosour");
// ht.add("tux", "peguin");
// console.log(ht.lookup("tux"));
// ht.print();

// LINKED LIST

// function LinkedList() {
//   var length = 0;
//   var heap = null;

//   var Node = function(element) {
//     this.element = element;
//     this.next = null;
//   };

//   this.size = function() {
//     return length;
//   };

//   this.heap = function() {
//     return heap;
//   };

//   this.add = function(key) {
//     let node = new Node(key);
//     if (heap === null) {
//       heap = node;
//     } else {
//       var currentNode = heap;

//       while (currentNode.next) {
//         currentNode = currentNode.next;
//       }
//       currentNode.next = node;
//     }
//     length++;
//   };

//   this.remove = function(element) {
//     var currentNode = heap;
//     var previousNode;

//     if (currentNode.element === element) {
//       heap = currentNode.next;
//     } else {
//       while (currentNode.element !== element) {
//         previousNode = currentNode;
//         currentNode = currentNode.next;
//       }
//       previousNode.next = currentNode.next;
//     }
//     length--;
//   };

//   this.isEmpty = function() {
//     return length === 0;
//   };

//   this.indexAt = function(element) {
//     let index = -1;
//     let currentNode = heap;

//     while (currentNode) {
//       index++;

//       if (currentNode.element === element) {
//         return index;
//       }
//       currentNode = currentNode.next;
//     }
//     return -1;
//   };

//   this.elementAt = function(index) {
//     var currentNode = heap;
//     var count = 0;

//     while (count < index) {
//       count++;
//       currentNode = currentNode.next;
//     }
//     return currentNode.element;
//   };

//   this.addAt = function name(index, elememt) {
//     let node = new Node(elememt);

//     var currentNode = heap;
//     var previousNode;
//     var currentIndex = 0;

//     if (index > length) {
//       return false;
//     }

//     if (index === 0) {
//       node.next = currentNode;
//       heap = node;
//     } else {
//       while (currentIndex < length) {
//         currentIndex++;
//         previousNode = currentNode;
//         currentNode = currentNode.next;
//       }
//       node.next = currentNode;
//       previousNode.next = node;
//     }
//     length++;
//   };

//   this.removeAt = function(index) {
//     var currentNode = heap;
//     var previousNode;
//     var currentIndex = 0;

//     if (index < 0 || index >= length) {
//       return null;
//     }

//     if (index === 0) {
//       heap = currentNode.next;
//     } else {
//       while (currentIndex < index) {
//         currentIndex++;
//         previousNode = currentNode;
//         currentNode = currentNode.next;
//       }
//       previousNode.next = currentNode.next;
//     }
//     length--;
//     return currentNode.element;
//   };
// }

// var conga = new LinkedList();

// conga.add("Kitten");
// conga.add("Puppy");
// conga.add("Dog");
// conga.add("Cat");
// conga.add("Fish");

// console.log(conga.size());
// console.log(conga.removeAt(3));
// console.log(conga.heap());
// console.log(conga.size());

// TRIE DATA STRUCTURE

// let Node = function() {
//   this.keys = new Map();
//   this.end = false;
//   this.setEnd = function() {
//     this.end = true;
//   };
//   this.isEnd = function() {
//     return this.end;
//   };
// };

// let Trie = function() {
//   this.root = new Node();

//   this.add = function(input, node = this.root) {
//     if (input.length == 0) {
//       node.setEnd();
//       return;
//     } else if (!node.keys.has(input[0])) {
//       node.keys.set(input[0], new Node());
//       return this.add(input.substr(1), node.keys.get(input[0]));
//     } else {
//       return this.add(input.substr(1), node.keys.get(input[0]));
//     }
//   };

//   this.isWord = function(word) {
//     let node = this.root;
//     while (word.length > 1) {
//       if (!node.keys.has(word[0])) {
//         return false;
//       } else {
//         node = node.keys.get(word[0]);

//         word = word.substr(1);
//       }
//     }
//     return node.keys.has(word) && node.keys.get(word).isEnd() ? true : false;
//   };

//   this.print = function() {
//     let words = new Array();

//     let search = function(node = this.root, string) {
//       if (node.keys.size != 0) {
//         for (let letter of node.keys.keys()) {
//           search(node.keys.get(letter), string.concat(letter));
//         }
//         if (node.isEnd()) {
//           words.push(string);
//         }
//       } else {
//         string.length > 0 ? words.push(string) : undefined;
//         return;
//       }
//     };
//     search(this.root, new String());
//     return words.length > 0 ? words : null;
//   };
// };

// myTrie = new Trie();
// myTrie.add("ball");
// myTrie.add("bat");
// myTrie.add("doll");
// myTrie.add("dark");
// myTrie.add("do");
// myTrie.add("dorm");
// myTrie.add("send");
// myTrie.add("sense");
// console.log(myTrie.isWord("doll"));
// console.log(myTrie.isWord("dor"));
// console.log(myTrie.isWord("dorf"));
// console.log(myTrie.print());
