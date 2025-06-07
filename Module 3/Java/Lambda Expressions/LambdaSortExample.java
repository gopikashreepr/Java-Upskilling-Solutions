import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class LambdaSortExample {
    public static void main(String[] args) {
        List<String> fruits = new ArrayList<>();
        fruits.add("Mango");
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Orange");

        // Sort using lambda expression
        Collections.sort(fruits, (s1, s2) -> s1.compareToIgnoreCase(s2));

        System.out.println("Sorted list:");
        fruits.forEach(System.out::println);
    }
}
