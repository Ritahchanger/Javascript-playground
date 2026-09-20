class TreeNode {
  constructor(value) {
    
    this.value = value;

    this.children = [];
  }
}

class Tree {

  constructor(rootValue) {
    this.root = new TreeNode(rootValue);
  }

  appendChild(parentNode, childValue) {
    const child = new TreeNode(childValue);
    parentNode.children.push(child);
  }

  findNode(value, node = this.root) {
    if (node.value === value) return node;
    for (let child of node.children) {
      const found = this.findNode(value, child);
      if (found) return found;
    }

    return null;
    
  }
}

const tree = new Tree("root");