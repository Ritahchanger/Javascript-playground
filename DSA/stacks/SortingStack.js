// Question, how do you sort a stack?
// Pop elements from the original stack and push them into the temporary stack in sorted order
function sortStack(stack){

    const tempStack = [];

    while(stack.length){

        const temp = stack.pop();

        while(tempStack.length && tempStack[tempStack.length - 1] > temp){

            stack.push(tempStack.pop());

        }

        tempStack.push(temp);

    }

    return tempStack;
}