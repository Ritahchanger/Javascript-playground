// 🎢 Find the Tallest Tree in a Forest (Binary Tree Maximum Depth)
// You’re walking in a forest filled with trees of different heights. A binary tree is just like a forest where each tree has branches (nodes) leading to other branches.

// Steps to Solve:
// Start from the root (base of the tree).
// Count the height of the left side and right side.
// Return the bigger height + 1 (for the root).


const maxDepth = (tree) =>{

  if(!tree) return 0;

  let leftHeight = maxDepth(tree.left);

  let rightHeight = maxDepth(tree.right);

  return Math.max(leftHeight,rightHeight) + 1

}



const treeExample = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: null,
    },
  },
  right: {
    value: 3,
    left: null,
    right: {
      value: 6,
      left: null,
      right: null,
    },
  },
};

console.log(maxDepth(treeExample));

const testCases = [
  {
    input: null,
    expected: 0,
  },
  {
    input: {
      value: 1,
      left: null,
      right: null,
    },
    expected: 1,
  },
  {
    input: {
      value: 1,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: {
        value: 3,
        left: null,
        right: null,
      },
    },
    expected: 2,
  },
  {
    input: {
      value: 1,
      left: {
        value: 2,
        left: {
          value: 3,
          left: null,
          right: null,
        },
        right: null,
      },
      right: null,
    },
    expected: 3,
  },
  {
    input: {
      value: 1,
      left: {
        value: 2,
        left: null,
        right: {
          value: 4,
          left: null,
          right: null,
        },
      },
      right: {
        value: 3,
        left: {
          value: 5,
          left: {
            value: 6,
            left: null,
            right: null,
          },
          right: null,
        },
        right: null,
      },
    },
    expected: 4,
  },
];

//   testCases.forEach((testCase, index) => {
//     const result = maxDepth(testCase.input);
//     console.log(
//       `Test Case ${index + 1}:`,
//       result === testCase.expected ? "Passed" : "Failed"
//     );
//     console.log(`  Input: ${JSON.stringify(testCase.input)}`);
//     console.log(`  Expected: ${testCase.expected}, Got: ${result}`);
//   });
