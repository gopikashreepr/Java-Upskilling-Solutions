import java.util.Scanner;
public class PalindromeChecker {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter a string: ");
        String original = input.nextLine();

        // Remove non-alphanumeric and convert to lowercase
        String cleaned = original.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();

        // Check palindrome by comparing with reversed string
        String reversed = new StringBuilder(cleaned).reverse().toString();

        if (cleaned.equals(reversed)) {
            System.out.println("\"" + original + "\" is a palindrome.");
        } else {
            System.out.println("\"" + original + "\" is not a palindrome.");
        }

        input.close();
    }
}
