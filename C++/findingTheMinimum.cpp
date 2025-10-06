#include <iostream>
#include <limits.h>

// Finding the Minimum: Write a function to find the minimum element in an unsorted array. What are the Big O, Omega, and Theta complexities?

// Big O Analysis: The function iterates through the array once, leading to a time complexity of O(n).
// Omega Analysis: In the best case, the function still needs to iterate through the entire array
// Theta Analysis: On average, the function will also iterate through the entire array, giving a time complexity of Θ(n).

int findMinimum(int *arr, int size)
{
    int lowestValue = INT_MAX;

    for (int i = 0; i < size; i++)
    {
        if(arr[i] < lowestValue) {
            lowestValue = arr[i];
        }
    }

    return lowestValue;
}

int main()
{
    int arr[] = {3, -1, 4, 0, 5, 9, 2, -6, 5};
    int size = sizeof(arr) / sizeof(arr[0]);
    int minElement = findMinimum(arr, size);

    std::cout << "Minimum element in the array: " << minElement << std::endl;

    return 0;
}