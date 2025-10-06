#include <iostream>

// Array Reversal Algorithm: This function takes an array and its size as input and returns a new array with the elements in reverse order.

// Big O Analysis: The function iterates through the array once, leading to a time complexity of O(n).
// Omega Analysis: In the best case, the function still needs to iterate through the entire array, resulting in a time complexity of Ω(n).
// Theta Analysis: On average, the function will also iterate through the entire array, giving a time complexity of Θ(n).

int *arrayReversal(int *arr, int size)
{
    int *reversedArr = new int[size];

    for (int i = 0; i < size; i++)
    {
        // Place elements from the end of the original array to the start of the new array
        reversedArr[i] = arr[size - 1 - i];
    }

    return reversedArr;
}

int main()
{
    int arr[] = {1, 2, 3, 4, 5, 6, 7, 8};
    int size = sizeof(arr) / sizeof(arr[0]);
    int *reversedArr = arrayReversal(arr, size);

    std::cout << "Original Array: ";
    for (int i = 0; i < size; i++)
    {
        std::cout << arr[i] << " "; // Output each element of the original array
    }
    std::cout << std::endl;

    std::cout << "Reversed Array: ";

    for (int i = 0; i < size; i++)
    {
        std::cout << reversedArr[i] << " "; // Output each element of the reversed array
    }

    std::cout << std::endl;
    return 0;
}