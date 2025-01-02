// 3. Max Counters
// Problem:
// You have N counters, initialized to 0. A non-zero integer array A represents two operations:

// If A[i] ≤ N: Increment counter A[i].
// If A[i] = N + 1: Set all counters to the maximum value of any counter.
// Example:
// Input: N = 5, A = [3, 4, 4, 6, 1, 4, 4]
// Output: [3, 2, 2, 4, 2]

// Solution Idea:

// Use a lazy propagation approach to avoid resetting counters repeatedly when max_counter is applied.
// Time Complexity: O(n)

function maxCounters(N, A) {
    const counters = Array(N).fill(0);
    let maxCounter = 0;
    let currentMax = 0;

    for (const operation of A) {
        if (operation <= N) {
            counters[operation - 1] = Math.max(counters[operation - 1], maxCounter) + 1;
            currentMax = Math.max(currentMax, counters[operation - 1]);
        } else {
            maxCounter = currentMax;
        }
    }

    return counters.map(counter => Math.max(counter, maxCounter));
}
