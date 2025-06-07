import java.util.Scanner;

public class ArraySumAverage {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter the number of elements: ");
        int n = input.nextInt();

        if (n <= 0) {
            System.out.println("Number of elements must be positive.");
        } else {
            int[] arr = new int[n];

            System.out.println("Enter " + n + " elements:");

            for (int i = 0; i < n; i++) {
                arr[i] = input.nextInt();
            }

            int sum = 0;
            for (int num : arr) {
                sum += num;
            }

            double average = (double) sum / n;

            System.out.println("Sum of elements: " + sum);
            System.out.println("Average of elements: " + average);
        }

        input.close();
    }
}
