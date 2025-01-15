const validParenthesis = (str) =>{

    const map = {
        '}':'{',
        ']':'[',
        ')':'('
    }

    const stack = []

    for(let item of str){

        if(item === '{' || item=== '(' || item === '['){

            stack.push(item)

        }else{

            if(stack.length === 0 || stack.pop() !== map[item]){

                return false;
            }

        }

    }

    return stack.length === 0

}

console.log(validParenthesis('{}}'))