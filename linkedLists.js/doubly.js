//if we aren't keeping track of the tail we would ahve to iterate thru to the end before adding
class DoublyLinkedList {
    constructor(value) {
        this.head = new DoubleListNode(value)
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        let newNode = new DoubleListNode(value);
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
        this.length++;
    }

    prepend(value) {

    }

    insert(index, value) {

    }

    remove(index) {

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

class DoubleListNode {
    constructor(data, prev = null, next = null) {
        this.data = data
        this.prev = prev
        this.next = next
    }
}

let double = new DoublyLinkedList(5)

double.append(6)
console.log(double)


