function outerFunction(outerVarriable){

    return function innerFunction(innerVarriable){

        console.log(`Outer: ${outerFunction}, Inner: ${innerVarriable}`);

    }

}

const closureFunc = outerFunction("outside");

closureFunc("inside")