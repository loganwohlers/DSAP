//if we aren't keeping track of the tail we would ahve to iterate thru to the end before adding
class LinkedList {
    constructor(value) {
        this.head = new ListNode(value)
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        this.tail.next = new ListNode(value);
        this.tail = this.tail.next;
        this.length++;
    }

    prepend(value) {
        let newHead = new ListNode(value)
        newHead.next = this.head
        this.head = newHead
        this.length++
    }

    insert(index, value) {
        if (value === this.length - 1) {
            this.tail.next = newNode = new ListNode(value)
            this.tail = this.tail.next
        } else {
            let curr = this.head
            let count = 0
            while (curr) {
                if (count === index) {
                    let temp = curr.next
                    let newNode = new ListNode(value)
                    curr.next = newNode
                    newNode.next = temp
                    this.length++
                }
                count++
                curr = curr.next
            }
        }
    }

    remove(index) {
        if (index === 0) {
            let temp = this.head.next
            //sever head
            this.head.next = null
            this.head = temp
            this.length--
        } else {
            let curr = this.traverseToIndex(index - 1)
            let removed = curr.next
            let temp = removed.next
            removed.next = null
            curr.next = temp
            if (index === this.length - 1) {
                this.tail = curr
            }
            this.length--
        }
    }

    //ex helper fn
    traverseToIndex(index) {
        let curr = this.head
        let count = 0
        while (count !== index) {
            count++;
            curr = curr.next
        }
        return curr
    }
}

class ListNode {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

let list = new LinkedList(4)
list.append(7)
list.prepend(1)

list.insert(0, 5)
list.remove(2)

let curr = list.head
let count = 0
while (curr) {
    console.log('data: ', curr.data, 'index: ', count)
    count++;
    curr = curr.next
}

