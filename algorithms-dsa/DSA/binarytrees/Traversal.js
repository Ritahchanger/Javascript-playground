// 5. Binary Tree Inorder Traversal
// Problem: Given the root of a binary tree, return the inorder traversal of its nodes' values.

function inorderTraversal(root) {
    const result = [];
    function traverse(root) {
      if (root) {
        traverse(root.left);
        result.push(root.val);
        traverse(root.right);
      }
    }
    traverse(root);
    return result;
  }
  

  function inOrderTraversal(root){

    if(root){

      const result = []

      inOrderTraversal(root.left);

      result.push(root.value);

      inOrderTraversal(root.right)


    }

  }