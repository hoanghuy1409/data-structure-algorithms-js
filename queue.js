// QUEUE

function PriorityQueue() {
  var collection = [];

  this.printCollection = function() {
    console.log(collection);
  };

  // kiem tra mang co rong
  this.isEmpty = function() {
    return collection.length === 0;
  };

  // them gia tri vao mang theo so thu tu
  this.enqueue = function(element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      var added = false;
      for (var i = 0; i < collection.length; i++) {
        // check do uu tien
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };

  // remove and return gia tri dau
  this.dequeue = function() {
    var value = collection.shift();
    return value[0];
  };

  this.front = function() {
    return collection[0];
  };

  this.size = function() {
    return collection.length;
  };
}

var queueA = new PriorityQueue();

queueA.enqueue(["dep", 5]);
queueA.enqueue(["hoang", 2]);
queueA.enqueue(["chai", 13]);
queueA.enqueue(["huy", 4]);
queueA.enqueue(["tran", 1]);
queueA.enqueue(["hihihi", 20]);

queueA.printCollection();
console.log(queueA.dequeue());
console.log(queueA.front());
console.log(queueA.size());
