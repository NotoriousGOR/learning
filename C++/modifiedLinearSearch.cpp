#include <iostream>

// Modified Linear Search: Consider a linear search function that stops as soon as it finds the element or encounters an element greater than the target (assuming the array is sorted up to the point of the target). Analyze the Big O, Omega, and Theta complexities in this specific scenario.

// Big O Analysis: In the worst case, the function will iterate through the entire array, leading to a time complexity of O(n).
// Omega Analysis: In the best case, the function finds the target at the first position, resulting in a time complexity of Ω(1).
// Theta Analysis: On average, the function will iterate through half of the array, giving a time complexity of Θ(n).

int modifiedLinearSearch(int *arr, int size, int target)
{
    for (int i = 0; i < size; i++)
    {
        if (arr[i] == target)
        {
            return i; // Target found
        }
        else if (arr[i] > target)
        {
            break; // Stop searching as the array is sorted up to this point
        }
    }
    return -1; // Target not found
}

int main()
{
    int arr[] = {1, 3, 5, 7, 9, 11, 13, 15};
    int size = sizeof(arr) / sizeof(arr[0]);
    int target = 13;

    int index = modifiedLinearSearch(arr, size, target);

    if (index != -1)
    {
        std::cout << "Target: " << target << " was found at index: " << index;
    }
    else
    {
        std::cout << "Target: " << target << " was not found";
    }

    return 0;
}