// How do you invert a binary tree

// Solution: Swap the left and right children recursively

function invertTree(root){

    if(!root) return null;

    const temp = root.left;

    root.left = root.right;

    root.right = temp

    invertTree(root.left);

    invertTree(root.right);

    return root;

}

// Time complexity 0(n) Every node is visited once,
// Space complexity 0(h) Recursion stack