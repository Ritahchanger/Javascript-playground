// 6. Passing Cars
// Problem:
// Count the number of passing cars. A 0 represents a car traveling east, and a 1 represents a car traveling west. Each 0 can pair with all subsequent 1s.

// Example:
// Input: [0, 1, 0, 1, 1]
// Output: 5

// Solution Idea:

// Use a counter to track the number of east-bound cars and calculate passing pairs.
// Time Complexity: O(n).
// javascript
// Copy code


function passingPairs(A){


    let eastCars = 0;

    let passingPairs = 0;

    for(const car of A){

        if(car === 0){

            eastCars++;
        }else{

            passingPairs+=eastCars

            if(passingPairs > 1000000000000){

                return -1

            }

        }

    }

    return passingPairs;

}