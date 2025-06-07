public class OperatorPrecedenceDemo {
    public static void main(String[] args) {
        // Expression 1
        int result1 = 10 + 5 * 2;
        System.out.println("Expression: 10 + 5 * 2");
        System.out.println("Result: " + result1);
        System.out.println("Explanation: Multiplication (*) has higher precedence than addition (+), so 5 * 2 = 10, then 10 + 10 = 20.\n");

        // Expression 2
        int result2 = (10 + 5) * 2;
        System.out.println("Expression: (10 + 5) * 2");
        System.out.println("Result: " + result2);
        System.out.println("Explanation: Parentheses change the order, so 10 + 5 = 15 first, then 15 * 2 = 30.\n");

        // Expression 3
        int result3 = 100 / 5 + 3 * 2 - 8 % 3;
        System.out.println("Expression: 100 / 5 + 3 * 2 - 8 % 3");
        System.out.println("Result: " + result3);
        System.out.println("Explanation:");
        System.out.println("1. Division (100 / 5) = 20");
        System.out.println("2. Multiplication (3 * 2) = 6");
        System.out.println("3. Modulus (8 % 3) = 2");
        System.out.println("4. Then addition and subtraction from left to right: 20 + 6 - 2 = 24\n");

        // Expression 4
        int result4 = 5 + 3 * 2 / (7 - 4);
        System.out.println("Expression: 5 + 3 * 2 / (7 - 4)");
        System.out.println("Result: " + result4);
        System.out.println("Explanation:");
        System.out.println("1. Parentheses (7 - 4) = 3");
        System.out.println("2. Multiplication (3 * 2) = 6");
        System.out.println("3. Division (6 / 3) = 2");
        System.out.println("4. Addition 5 + 2 = 7");
    }
}
