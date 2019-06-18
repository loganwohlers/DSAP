class TreeNode {
    constructor(value = null) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BinaryTree {
    constructor() {
        this.root = null
    }
    //don't we want a private method to do this recursively?
    addNode(node, value) {
        if (!node) {
            node = new TreeNode(value)
            return node
        }
        if (value < node.value) {
            node.left = this.addNode(node.left, value)
        } else {
            node.right = this.addNode(node.right, value)
        }
        return node
    }

    searchNode(node, value) {
        if (!node) {
            return false
        }
        if (node.value === value) {
            return true
        }
        if (value < node.value) {
            return this.searchNode(node.left, value)
        } else {
            return this.searchNode(node.right, value)
        }
        return false
    }

    //we use a 'private' helper fn and then call it on our root w/ their value
    insert(value) {
        this.root = this.addNode(this.root, value)
        return this
    }

    searchValue(value) {
        return this.searchNode(this.root, value)
    }

    breadthFirst() {
        let queue = []
        let values = []

        queue.push(this.root)
        while (queue.length !== 0) {
            let curr = queue.shift()
            values.push(curr.value)

            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
        return values
    }

    printPreOrder() {
        this.printPreOrderNode(this.root)
    }

    printPreOrderNode(node) {
        if (node !== null) {
            this.printPreOrderNode(node.left)
            this.printPreOrderNode(node.right)
        }
    }

    printInOrder() {
        this.printInOrderNode(this.root)
    }

    printInOrderNode(node) {
        if (node !== null) {
            this.printInOrderNode(node.left)
            console.log(node.value)
            this.printInOrderNode(node.right)
        }
    }

    printPostOrder() {
        this.printPostOrderNode(this.root)
    }

    printPostOrderNode(node) {
        if (node !== null) {
            this.printPostOrderNode(node.left)
            this.printPostOrderNode(node.right)
            console.log(node.value)
        }
    }

}

let tree = new BinaryTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(8)
tree.insert(20)

tree.breadthFirst()
tree.printPreOrder()
console.log()
tree.printInOrder()
console.log()
tree.printPostOrder()

