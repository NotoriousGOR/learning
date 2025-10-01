#include <iostream>

// Binary Search Algorithm
// Big O Analysis: In the worst case, we might have to divide the array in half log(n) times, meaning the worst-case time complexity is O(log n).
// Omega Analysis: In the best case, the element we are searching for might be the middle element of the array. In this case, the function would return after only one comparison. Therefore, the best-case time complexity is Ω(1).
// Theta Analysis: On average, we might expect to find the element after dividing the array in half log(n) times. The average case time complexity is Θ(log n).

int binarySearch(int arr[], int size, int target) {
    int left = 0;
    int right = size - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2; // To avoid potential overflow

        if (arr[mid] == target) {
            return mid; // Found at index mid
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
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
    int result = binarySearch(arr, size, target);

    if (result != -1) {
        std::cout << "Element found at index: " << result << std::endl;
    } else {
        std::cout << "Element not found in the array." << std::endl;
    }

    return 0;
}