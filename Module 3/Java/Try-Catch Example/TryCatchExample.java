import java.util.Scanner;

public class TryCatchExample {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter the numerator (integer): ");
        int numerator = input.nextInt();

        System.out.print("Enter the denominator (integer): ");
        int denominator = input.nextInt();

        try {
            int result = numerator / denominator;
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Error: Division by zero is not allowed.");
        }

        input.close();
    }
}