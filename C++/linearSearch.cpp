#include <iostream>

// Linear Search Algorithm: A simple search algorithm that checks each element in the array sequentially until it finds the target element or reaches the end of the array.

// Big O Analysis: In the worst case, we might have to iterate through the entire array, meaning the worst-case time complexity is O(n).
// Omega Analysis: In the best case, the element we are searching for might be the first element in the array. In this case, the function would return after only one comparison. Therefore, the best-case time complexity is Ω(1).
// Theta Analysis: On average, we might expect to find the element somewhere in the middle of the array. However, even on average, we still need to iterate through a portion of the array that scales linearly with the size of the array. The average case time complexity is Θ(n).

int linearSearch(int arr[], int size, int target) {
   for( int i = 0; i < size; i++) {
        if (arr[i] == target) {
            return i; // Found at index i
        }
   }

   return -1; // Not found
}

int main() {
    std::cout << "Hello, world!" << std::endl;

    int arr[] = {1,2,3,4,5,6,7,8};
    int target = 9;
    
    // Dividing the total bytes by one-element bytes yields the element count
    int size = sizeof(arr) / sizeof(arr[0]);
    int result = linearSearch(arr, size, target);

    if (result != -1) {
        std::cout << "Element found at index: " << result << std::endl;
    } else {
        std::cout << "Element not found in the array." << std::endl;
    }

    return 0;
}