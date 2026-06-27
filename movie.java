import java.util.Scanner;

public class MovieRating {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter movie rating (1 to 5): ");
        double rating = sc.nextDouble();

        System.out.println("\nMovie Rating: " + rating);

        if (rating >= 4.5 && rating <= 5.0) {
            System.out.println("Excellent Movie ⭐⭐⭐⭐⭐");
        } else if (rating >= 3.5) {
            System.out.println("Very Good Movie ⭐⭐⭐⭐");
        } else if (rating >= 2.5) {
            System.out.println("Good Movie ⭐⭐⭐");
        } else if (rating >= 1.5) {
            System.out.println("Average Movie ⭐⭐");
        } else if (rating >= 1.0) {
            System.out.println("Poor Movie ⭐");
        } else {
            System.out.println("Invalid Rating!");
        }

        sc.close();
    }
}