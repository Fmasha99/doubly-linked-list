const Node = require('./node');


class LinkedList {

  constructor() {
    this._head = null;
    this._tail = null;
    this.length = 0;
  }

  append(data) {
    if (this._head == null) {
      this._head = new Node(data, null, null);
      this._tail = this._head;
    } else {
      var currentNode = this._head;
      while (currentNode.next != null) {
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(data, currentNode, null);
      this._tail = currentNode.next;
    }
    this.length++;
    return this;
  }

  head() {
   if (this._head != null) {
     return this._head.data;
   }
   return null;
 }

 tail() {
   if (this._tail != null) {
     return this._tail.data;
   }
   return null;
 }

  at(index) {
    var node = this.getNodeAtIndex(index);

    if (node == null) {
      return null;
    }

    return node.data;
  }

  insertAt(index, data) {
  var node = this.getNodeAtIndex(index);
  if (node == null) {
    this._head = new Node(data, null, null);
    this._tail = this._head;
  } else if (node.prev != null) {
    var newNode = new Node(data, node.prev, node);
    node.prev.next = newNode;
    node.prev = newNode;
  }
  return this;
}

  isEmpty() {
    return this._head == null;
  }

  clear() {
    this._head = null;
    this._tail = null;
    this.length = 0;
    return this;
  }

  deleteAt(index) {
    var node = this.getNodeAtIndex(index);
    if(node.prev == null && node.next == null) {
      this._head = null;
      this._tail = null;
    } else if (node.prev == null && node.next != null) {
      _head = node.next;
      _head.prev = null;
    } else if (node.next == null && node.prev != null) {
      _tail = node.prev;
      _tail.next = null;
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
    this.length--;
    return this;
  }


  reverse() {
    this._tail = this._head;
    var current = this._head;
    var prev;
    var next;
    while (current != null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this._head = prev;
    return this;
  }

  indexOf(data) {
    var currentIndex = 0;
    var currentNode = this._head;
    while (currentNode.next != null && currentNode.data != data) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    if (currentNode.data != data) {
      return -1;
    }
    return currentIndex;
  }

  getNodeAtIndex(index) {
    var currentIndex = 0;
    var currentNode = this._head;
    while (currentIndex < index) {
      currentNode = currentNode.next;

      if (currentNode == null) {
        return null;
      }

      currentIndex++;
    }
    return currentNode;
  }
}

module.exports = LinkedList;
