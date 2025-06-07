import java.util.Scanner;

public class MultiplicationTable {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        // Prompt the user for a number
        System.out.print("Enter a number to print its multiplication table: ");
        int number = input.nextInt();

        // Print the multiplication table from 1 to 10
        System.out.println("Multiplication Table for " + number + ":");
        for (int i = 1; i <= 10; i++) {
            int result = number * i;
            System.out.println(number + " x " + i + " = " + result);
        }

        input.close();
    }
}
