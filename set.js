// SETS

function mySet() {
  var collection = [];

  // kiem tra xem mang co phan tu can tim khong
  this.has = function(element) {
    return collection.indexOf(element) !== -1;
  };

  // tra ve tat ca cac gia tri
  this.values = function() {
    return collection;
  };

  // them phan tu vao set
  this.add = function(element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  // loai bo phan tu trong set
  this.remove = function(element) {
    if (this.has(element)) {
      var index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  // tra ve size cua collection
  this.size = function() {
    return collection.length;
  };

  // merge two set
  this.union = function(ortherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = ortherSet.values();

    firstSet.forEach(function(element) {
      unionSet.add(element);
    });

    secondSet.forEach(function(element) {
      unionSet.add(element);
    });

    return unionSet.values();
  };

  // intersection two set
  this.intersection = function(ortherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();

    firstSet.forEach(function(element) {
      if (ortherSet.has(element)) {
        intersectionSet.add(element);
      }
    });

    return intersectionSet.values();
  };

  // different first set as new set
  this.difference = function(ortherSet) {
    var differenceSet = new mySet();
    var firstSet = this.values();

    firstSet.forEach(function(element) {
      if (!ortherSet.has(element)) {
        differenceSet.add(element);
      }
    });

    return differenceSet.values();
  };
}

var setA = new mySet();
var setB = new mySet();

setA.add("a");
setA.add("v");
setA.add("jkl");

setB.add("huyhuyhuy");
setB.add("v");

console.log(setA.values());
console.log(setA.size());
console.log(setA.union(setB));
console.log(setA.intersection(setB));
console.log(setA.difference(setB));
