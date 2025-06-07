import java.util.Scanner;
import java.util.Random;

public class NumberGuessingGame {
    public static void main(String[] args) {
        Random random = new Random();
        Scanner input = new Scanner(System.in);

        int numberToGuess = random.nextInt(100) + 1; // Generates a number between 1 and 100
        int userGuess = 0;

        System.out.println("Welcome to the Number Guessing Game!");
        System.out.println("Guess a number between 1 and 100.");

        // Loop until the user guesses the number
        while (userGuess != numberToGuess) {
            System.out.print("Enter your guess: ");
            if (input.hasNextInt()) {
                userGuess = input.nextInt();

                if (userGuess < 1 || userGuess > 100) {
                    System.out.println("Please guess a number within the range 1 to 100.");
                } else if (userGuess < numberToGuess) {
                    System.out.println("Too low! Try again.");
                } else if (userGuess > numberToGuess) {
                    System.out.println("Too high! Try again.");
                } else {
                    System.out.println("Congratulations! You guessed the number " + numberToGuess + " correctly.");
                }
            } else {
                System.out.println("Invalid input. Please enter an integer.");
                input.next(); // Clear the invalid input
            }
        }

        input.close();
    }
}
