import java.util.Scanner;
public class StringReversal {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter a string: ");
        String original = input.nextLine();

        // Using StringBuilder's reverse() method
        String reversed = new StringBuilder(original).reverse().toString();

        System.out.println("Reversed string: " + reversed);

        input.close();
    }
}
