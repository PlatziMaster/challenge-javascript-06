class Node {
  constructor(value) {
    this.value = value,
    this.left = null,
    this.right = null
  }
}

class BST {
  constructor(value) {
    this.root = new Node (value),
    this.count = 1
  }
  size(){
    return this.count
  }
  insert(value){
    this.count++

    let newNode = new Node (value)

    const searchTree = node => {
      if (value < node.value) {
        if(!node.left) {
          node.left = newNode
        }else {
          searchTree(node.left)
        }
      }else if (value > node.value) {
        if (!node.right) {
          node.right = newNode
        }else {
          searchTree(node.right)
        }
      }
    }
    searchTree(this.root)
  }
  min(){
    let currentNode = this.root 
    while(currentNode.left) {
      currentNode = currentNode.left
    }
    return currentNode.value
  }
  max(){
    let currentNode = this.root
    while (currentNode.right) {
      currentNode = currentNode.right
    }
    return currentNode.value
  }
  contains(value) {
    let currentNode = this.root 
    while (currentNode) {
      if (value === currentNode.value) {
        return true
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left
      }else {
        currentNode = currentNode.right
      }
    }
    return false 
  }
  
  //searching alogrithims
  //depth first search

  dfsInOrder(){
    let result = []
    const traverse = node => {
      if (node.left) traverse(node.left)
      result.push(node.value)
      if(node.right) traverse(node.right)
    }
    traverse(this.root)
    return result
  }

  dfsPreOrder(){
    let result = []
    const traverse = node => {
      result.push(node.value)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return result
  }
  dfsPostOrder(){
    let result = []
    const traverse = node => {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      result.push(node.value)
    }
    traverse(this.root)
    return result
  }
  //breadth first search
  bfs(){
    let result = []
    let queue = []
    queue.push(this.root)
    while(queue.length) {
      let currentNode = queue.shift()
      result.push(currentNode.value)
      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }
    return result
  }
}

const bst = new BST(15)
bst.insert(3)
bst.insert(36)
bst.insert(2)
bst.insert(12)
bst.insert(28)
bst.insert(39)

console.log(bst)
console.log(bst.size())
console.log(bst.min())
console.log(bst.max())
console.log(bst.contains(2))
console.log(bst.contains(9))

console.log(bst.dfsInOrder())
console.log(bst.dfsPreOrder())
console.log(bst.dfsPostOrder())
console.log(bst.bfs())
