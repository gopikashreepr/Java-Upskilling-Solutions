import java.util.ArrayList;
import java.util.Scanner;

public class ArrayListExample {
    public static void main(String[] args) {
        ArrayList<String> studentNames = new ArrayList<>();
        Scanner input = new Scanner(System.in);
        String name;
        String choice;

        do {
            System.out.print("Enter a student name: ");
            name = input.nextLine();
            studentNames.add(name);

            System.out.print("Do you want to add another name? (yes/no): ");
            choice = input.nextLine().trim().toLowerCase();

        } while (choice.equals("yes"));

        System.out.println("\nList of student names:");
        for (String studentName : studentNames) {
            System.out.println(studentName);
        }

        input.close();
    }
}