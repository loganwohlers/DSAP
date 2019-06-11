class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null
        this.bottom = null
        this.length = 0
    }

    peek() {
        return this.top
    }

    push(value) {
        let newNode = new Node(value)
        newNode.next = this.top
        this.top = newNode
        this.length++

        if (this.length === 1) {
            this.bottom = newNode
        }

        return newNode
    }

    pop() {
        let oldTop = this.top
        this.top = this.top.next
        oldTop.next = null
        this.length--

        if (this.length === 1) {
            this.bottom = this.top
        }
        return oldTop
    }

}