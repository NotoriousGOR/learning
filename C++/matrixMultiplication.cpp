#include <iostream>

// Matrix Multiplication Algorithm: This function multiplies two matrices A and B and stores the result in matrix C.
// The number of columns in A must equal the number of rows in B for the multiplication to be valid.

// Big O Analysis: The function uses three nested loops, each iterating over the dimensions of the matrices, leading to a time complexity of O(n^3) for square matrices.
// Omega Analysis: In the best case, the function still needs to perform the multiplication for all elements, resulting in a time complexity of Ω(n^3).
// Theta Analysis: On average, the function will also perform the multiplication for all elements, giving a time complexity of Θ(n^3).

int main()
{
    // Matrix dimensions
    const int rowsA = 4; // Number of rows in A
    const int colsA = 3; // Number of columns in A

    const int rowsB = 3; // Number of rows in B (must equal colsA)
    const int colsB = 4; // Number of columns in B

    // Matrix declarations with constant dimensions
    const int A[rowsA][colsA] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9},
        {2, 3, 4}};

    const int B[rowsB][colsB] = {
        {9, 8, 7, 6},
        {5, 4, 3, 2},
        {1, 2, 3, 4}};

    // Validation check for matrix multiplication compatibility
    if (colsA != rowsB)
    {
        std::cout << "Error: Matrix dimensions incompatible for multiplication" << std::endl;
        return 1;
    }

    int C[4][4] = {0}; // Resultant matrix [rowsA][colsB]

    // Print Matrix A
    std::cout << "Matrix A (4x3):" << std::endl;

    for (int i = 0; i < rowsA; i++)
    {
        for (int j = 0; j < colsA; j++)
        {
            std::cout << A[i][j] << " ";
        }
        std::cout << std::endl;
    }

    // New line for better readability
    std::cout << std::endl;

    // Print Matrix B
    std::cout << "Matrix B (3x4):" << std::endl;

    for (int i = 0; i < rowsB; i++)
    {
        for (int j = 0; j < colsB; j++)
        {
            std::cout << B[i][j] << " ";
        }
        std::cout << std::endl;
    }

    // New line for better readability
    std::cout << std::endl;

    // Perform matrix multiplication

    // loops over the rows of A
    for (int i = 0; i < rowsA; i++)
    {
        // loops over the columns of B
        for (int j = 0; j < colsB; j++)
        {
            // loops over the columns of A and rows of B
            for (int k = 0; k < colsA; k++)
            {
                // Accumulate the sum of products
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    // Print the resultant matrix
    std::cout << "Resultant Matrix C (4x4):" << std::endl;

    // loops over the rows of C
    for (int i = 0; i < rowsA; i++)
    {
        // loops over the columns of C
        for (int j = 0; j < colsB; j++)
        {
            // Print each element
            std::cout << C[i][j] << " ";
        }
        // New line after each row
        std::cout << std::endl;
    }

    return 0;
}
