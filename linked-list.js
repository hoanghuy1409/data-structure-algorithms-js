// LINKED LIST

function LinkedList() {
  var length = 0;
  var heap = null;

  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.heap = function() {
    return heap;
  };

  this.add = function(key) {
    let node = new Node(key);
    if (heap === null) {
      heap = node;
    } else {
      var currentNode = heap;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    length++;
  };

  this.remove = function(element) {
    var currentNode = heap;
    var previousNode;

    if (currentNode.element === element) {
      heap = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
  };

  this.isEmpty = function() {
    return length === 0;
  };

  this.indexAt = function(element) {
    let index = -1;
    let currentNode = heap;

    while (currentNode) {
      index++;

      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }
    return -1;
  };

  this.elementAt = function(index) {
    var currentNode = heap;
    var count = 0;

    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.element;
  };

  this.addAt = function name(index, elememt) {
    let node = new Node(elememt);

    var currentNode = heap;
    var previousNode;
    var currentIndex = 0;

    if (index > length) {
      return false;
    }

    if (index === 0) {
      node.next = currentNode;
      heap = node;
    } else {
      while (currentIndex < length) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    length++;
  };

  this.removeAt = function(index) {
    var currentNode = heap;
    var previousNode;
    var currentIndex = 0;

    if (index < 0 || index >= length) {
      return null;
    }

    if (index === 0) {
      heap = currentNode.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
    return currentNode.element;
  };
}

var conga = new LinkedList();

conga.add("Kitten");
conga.add("Puppy");
conga.add("Dog");
conga.add("Cat");
conga.add("Fish");

console.log(conga.size());
console.log(conga.removeAt(3));
console.log(conga.heap());
console.log(conga.size());
