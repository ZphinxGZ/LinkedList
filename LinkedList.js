class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  push(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let previous = current;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
    return current.data;
  }

  unshift(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  shift() {
    if (!this.head) return undefined;
    const temp = this.head;
    this.head = this.head.next;
    return temp.data;
  }

  get(index) {
    if (index < 0 || index >= this.size()) return undefined;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.data;
  }

  set(index, newData) {
    if (index < 0 || index >= this.size()) return false;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    current.data = newData;
    return true;
  }

  insert(index, data) {
    if (index < 0 || index > this.size()) return false;
    if (index === 0) {
      this.unshift(data);
      return true;
    }
    const newNode = new Node(data);
    let current = this.head;
    let previous = current;
    for (let i = 0; i < index; i++) {
      previous = current;
      current = current.next;
    }
    newNode.next = current;
    previous.next = newNode;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.size()) return undefined;
    if (index === 0) {
      return this.shift();
    }
    let current = this.head;
    let previous = current;
    for (let i = 0; i < index; i++) {
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
    return current.data;
  }

  reverse() {
    let current = this.head;
    let previous = null;
    let nextNode = null;
    while (current) {
      nextNode = current.next;
      current.next = previous;
      previous = current;
      current = nextNode;
    }
    this.head = previous;
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  display() {
    let current = this.head;
    let output = "";
    while (current) {
      output += `<span class="linked-list-item">${current.data}</span>`;
      current = current.next;
    }
    return output;
  }

  reset() {
    this.head = null;
  }
}

const linkedList = new LinkedList();

function pushData() {
  const dataInput = document.getElementById("dataInput").value;
  linkedList.push(dataInput);
  document.getElementById("dataInput").value = "";
  displayData();
}

function popData() {
  linkedList.pop();
  displayData();
}

function unshiftData() {
  const dataInput = document.getElementById("dataInput").value;
  linkedList.unshift(dataInput);
  document.getElementById("dataInput").value = "";
  displayData();
}

function shiftData() {
  linkedList.shift();
  displayData();
}

let s = document.getElementById("show");
function getData() {
  const index = prompt("ใส่ index เพื่อ get data:");
  const data = linkedList.get(parseInt(index));
  if (data !== undefined) {
    s.innerHTML = "ข้อมูลใน Index ที่ " + index + " คือ " + data;
  } else {
    s.innerHTML = "ไม่มีข้อมูลใน Index เพื่อ get ข้อมูล";
  }
}

function setData() {
  const index = prompt("ใส่ index เพื่อ set data :");
  const newData = prompt("ใส่ข้อมูลใหม่ :");
  if (linkedList.set(parseInt(index), newData)) {
    alert("set ข้อมูลแล้ว");
  } else {
    alert("ไม่มีข้อมูลใน Index");
  }
  displayData();
}

function insertData() {
  const index = prompt("ใส่ index เพื่อ insert data:");
  const newData = prompt("ใส่ข้อมูลที่จะแทรก :");
  if (linkedList.insert(parseInt(index), newData)) {
    alert("insert ข้อมูลแล้ว");
  } else {
    alert("ไม่มี Index ที่เลือก");
  }
  displayData();
}

function removeData() {
  const index = prompt("ใส่ index เพื่อ remove data:");
  const removedData = linkedList.remove(parseInt(index));
  if (removedData !== undefined) {
    alert(`ทำการลบ : ${removedData}`);
  } else {
    alert("ไม่มี Index หรือ Data ที่เลือก");
  }
  displayData();
}

function reverseData() {
  linkedList.reverse();
  displayData();
}

function displayData() {
  const linkedListDiv = document.getElementById("linkedList");
  linkedListDiv.innerHTML = linkedList.display();
}

function resetData() {
  linkedList.reset();
  displayData();
}
