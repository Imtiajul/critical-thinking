class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);


    if(this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  prepend() {

  }
  insert(index, value) {
    if(index === 0 ) {
      return this.prepend(value);;
    }

    if(index === this.length) {
      return this.append(value);
    }

    // if the index is in between
    // find the leading node 

    const leadingNode = this._traverseToIndex(index - 1);
    const holdingNode = leadingNode.next;

    const newNode = new Node(value);
    leadingNode.next = newNode;
    newNode.next = holdingNode;

    this.length++;
  }

  //private helper method
  _traverseToIndex(index) {
    let count = 0;
    let currentNode = this.head;

    while(count !== index) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode;
  }
remove(index) {
    if( index === 0) {
      const removedItem = this.head.value;
      this.head = this.head.next;

      if(this.length === 1 ) {
        this.tail = null;
      }
      this.length--;
      return removedItem;
    }

    const leadingNode = this._traverseToIndex(index - 1);
    const nodeToRemove = leadingNode.next;
    leadingNode.next = nodeToRemove.next;

    if( leadingNode.next === null) {
      this.tail = leadingNode;
    }

    this.length--;
    return nodeToRemove.value;
  }

  // privet helper method
  _traverseToIndex(index) {
    let count = 0;
    let currentNode = this.head;

    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode;
  }
  
  print() {
    while(this.head !== null) {
      console.log(this.head.value, " > ");
      this.head = this.head.next;
    }
  }
}



const linkList = new LinkedList();

linkList.append(10);
linkList.append(20);
linkList.append(30);  
linkList.insert(1, 15);
linkList.insert(1, 17);
linkList.insert(2, 5);
linkList.print();

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   append(value) {
//     const newNode = new Node(value);

//     // If the linked list is empty
//     if (this.head === null) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       // If the linked list is not empty
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }

//     this.length++;

//     return this;
//   }

//   prepend() {}

//   insert() {}

//   remove() {}

//   print() {
//     const arr = [];
//     let currentNode = this.head;

//     while (currentNode !== null) {
//       arr.push(currentNode.value);
//       currentNode = currentNode.next;
//     }

//     console.log(arr.join(" -> "), "-> null ");
//   }
// }
