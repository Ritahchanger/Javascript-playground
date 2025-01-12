function detectCycle(head){

    let slow = head;

    let fast = head;

    while(fast && fast.next){

        slow = slow.next;

        fast = fast.next.next;

        if(slow === fast){

            removeCycle(slow,head);

            return true;

        }

    }

    return true

}


function removeCycle(loopNode,head){

    let ptr1 = head;

    let ptr2 = loopNode;

    while(ptr1.next !== ptr2.next){

        ptr1 = ptr1.next;

        ptr2 = ptr2.next;

    }

    ptr2.next = null;

}




// Problem: You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. How many distinct ways can you reach the top?

function climbStairs(n){

    if(n === 0 || n === 1) return 1;

    let first = 1, second = 2;

    for(let i = 3; i <= n; i++){

        let third = first + second;

        first = second;

        second = third;

    }

    return second

}

console.log(climbStairs(4)) //Output: 5