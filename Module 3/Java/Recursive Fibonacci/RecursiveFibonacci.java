import java.util.Scanner;

public class RecursiveFibonacci {
    // Recursive method to find the nth Fibonacci number
    public static int fibonacci(int n) {
        if (n == 1) {
            return 0;  // Fibonacci sequence starting with 0 as the first number
        } else if (n == 2) {
            return 1;  // Second Fibonacci number
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter the position (positive integer) of the Fibonacci number: ");
        int n = input.nextInt();

        if (n <= 0) {
            System.out.println("Please enter a positive integer.");
        } else {
            int fibNumber = fibonacci(n);
            System.out.println("Fibonacci number at position " + n + " is: " + fibNumber);
        }

        input.close();
    }
}
