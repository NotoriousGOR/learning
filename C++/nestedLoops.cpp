#include <iostream>

// Nested Loops Example: A simple example of nested loops to demonstrate their structure and behavior.

// Big O Analysis: In the worst case, we have two nested loops each iterating n times, leading to a time complexity of O(n^2).
// Omega Analysis: In the best case, if the inner loop runs a constant number of times regardless of the outer loop, the time complexity would be Ω(n).
// Theta Analysis: On average, with both loops iterating n times, the time complexity is Θ(n^2).

void nestedLoops(int target)
{
    for (int i = 0; i < target; i++)
    {
        for (int j = 0; j < target; j++)
        {
            std::cout << "Iteration: " << i << ", " << j << std::endl;
        }
    }
}

int main()
{
    int target = 5;
    nestedLoops(target);

    return 0;
}