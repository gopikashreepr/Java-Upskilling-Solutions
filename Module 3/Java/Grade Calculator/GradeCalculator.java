import java.util.Scanner;

public class GradeCalculator {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        // Prompt the user to enter marks out of 100
        System.out.print("Enter your marks (0-100): ");
        int marks = input.nextInt();

        char grade;

        // Assign grades based on marks
        if (marks >= 90 && marks <= 100) {
            grade = 'A';
        } else if (marks >= 80 && marks <= 89) {
            grade = 'B';
        } else if (marks >= 70 && marks <= 79) {
            grade = 'C';
        } else if (marks >= 60 && marks <= 69) {
            grade = 'D';
        } else if (marks >= 0 && marks < 60) {
            grade = 'F';
        } else {
            System.out.println("Invalid marks entered.");
            input.close();
            return;
        }

        // Display the grade
        System.out.println("Your grade is: " + grade);

        input.close();
    }
}
