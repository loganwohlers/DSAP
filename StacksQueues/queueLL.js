class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first
    }

    enqueue(value) {
        let newNode = new Node(value)
        if (this.length === 0) {
            this.first = newNode
        } else {
            this.last.next = newNode
        }
        this.length++
        this.last = newNode
        return newNode
    }

    dequeue() {
        if (!this.first) {
            return null;
        }
        if (this.first === this.last) {
            this.last = null;
        }
        let temp = this.first;
        this.first = this.first.next;
        this.length--;
        return temp;
    }

    isEmpty() {
        return this.length === 0
    }

}

const myQueue = new Queue();