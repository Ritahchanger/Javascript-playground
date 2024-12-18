// Find the squareroot of a non negative number!

function mySqrt(x){

    if(x < 2) return x;

    let left = 1, right = Math.floor(x/2);

    while(left <= right ){

        let mid = Math.floor(left + (right - left) /2 );

        if(mid * mid === x) return mid;

        if(mid * mid < x){

            left = mid + 1;

        }else{

            right = mid - 1

        }

    }

    return right;

}

console.log(mySqrt(17))