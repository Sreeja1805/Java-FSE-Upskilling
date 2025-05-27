import java.util.Scanner;
import java.util.Random;

public class NumberGuessingGame {
    public static void main(String[] args) {
        Random random = new Random();
        int numberToGuess = random.nextInt(100) + 1;
        Scanner scanner = new Scanner(System.in);
        int guess = 0;

        while (guess != numberToGuess) {
            System.out.print("Guess a number between 1 and 100: ");
            guess = scanner.nextInt();

            if (guess > numberToGuess) {
                System.out.println("Too high!");
            } else if (guess < numberToGuess) {
                System.out.println("Too low!");
            } else {
                System.out.println("Correct! You guessed the number.");
            }
        }
        scanner.close();
    }
}
