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

    searchValue(value) {
        return this.searchNode(this.root, value)
    }


    printLevel(level) {
        let currLevel = 1
    }

    getHeight() {
        console.log(this.heightHelper(this.root))
    }

    heightHelper(node) {
        if (node === null)
            return 0;
        else {
            /* compute  height of each subtree */
            let lheight = this.heightHelper(node.left);
            let rheight = this.heightHelper(node.right);
            console.log(lheight, rheight)
            /* use the larger one */
            return 1 + Math.max(lheight, rheight)
        }
    }
    constructTree(arr) {
        this.root = this.buildFromArr(arr, this.root, 0)
    }

    buildFromArr(arr, node, i) {
        if (i < arr.length) {
            let temp = new TreeNode(arr[i])
            node = temp
            node.left = this.buildFromArr(arr, node.left, 2 * i + 1)
            node.right = this.buildFromArr(arr, node.right, 2 * i + 2)
        }
        return node;
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
        console.log(values)
        return values
    }

    printPreOrder() {
        this.printPreOrderNode(this.root)
    }

    printPreOrderNode(node) {
        if (node !== null) {
            console.log(node.value)
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

let tree2 = new BinaryTree()
tree2.constructTree([1, 2, 3, 4, 5])

tree2.breadthFirst()
// tree.getHeight()
// tree2.printPreOrder()
// console.log()
// console.log()
// tree.printPostOrder()

