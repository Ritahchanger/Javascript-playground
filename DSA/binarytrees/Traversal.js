// 5. Binary Tree Inorder Traversal
// Problem: Given the root of a binary tree, return the inorder traversal of its nodes' values.

function inorderTraversal(root) {
    const result = [];
    function traverse(node) {
      if (node) {
        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
      }
    }
    traverse(root);
    return result;
  }
  