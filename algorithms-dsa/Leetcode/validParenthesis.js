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








function isValid(s){


    let stack = [];

    let map = { 

        ')':'(',

        '}':'{',

        ']':'['

    }

    for(let char of s){

        if(map[char]){
            
            if(stack.pop() !== map[char]) return false;

        }else{

            stack.push(char);

        }

    }

    return stack.length === 0;

}


console.log(isValid("(){}[]"))

