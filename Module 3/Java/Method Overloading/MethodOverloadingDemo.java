public class MethodOverloadingDemo {
    // Method to add two integers
    public static int add(int a, int b) {
        return a + b;
    }

    // Method to add two doubles
    public static double add(double a, double b) {
        return a + b;
    }

    // Method to add three integers
    public static int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        // Calling the add methods and displaying results
        int sumTwoInts = add(10, 20);
        double sumTwoDoubles = add(10.5, 20.7);
        int sumThreeInts = add(5, 10, 15);

        System.out.println("Sum of two integers (10 + 20): " + sumTwoInts);
        System.out.println("Sum of two doubles (10.5 + 20.7): " + sumTwoDoubles);
        System.out.println("Sum of three integers (5 + 10 + 15): " + sumThreeInts);
    }
}
