// stack

var letter = [];
var word = "huyyu";
var rword = "";

for (let i = 0; i < word.length; i++) {
  letter.push(word[i]);
}

for (let i = 0; i < word.length; i++) {
  rword += letter.pop();
}

if (word === rword) {
  console.log(`${word} la chuoi doi xung`);
} else {
  console.log(`${word} la chuoi khong doi xung`);
}

// creat a stack

var Stack = function() {
  this.count = 0;
  this.storage = {};

  // them gia tri vao cuoi stack
  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
  };

  // loai bo va tra ve phan tu cuoi
  this.pop = function() {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  // tra ve gia tri cuoi cung cua stack
  this.peek = function() {
    return this.storage[this.count - 1];
  };

  // tra ve so luong phan tu stack
  this.size = function() {
    return this.count;
  };

  this.returnStorage = function() {
    return this.storage;
  };
};

var stack = new Stack();

stack.push(1);
stack.push(2454454646);
console.log(stack.push(123));
console.log("pop", stack.pop());
console.log("size", stack.size());
console.log("peek", stack.peek());

console.log(stack.returnStorage());
