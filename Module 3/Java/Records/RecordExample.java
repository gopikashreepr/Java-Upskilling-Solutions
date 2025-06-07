import java.util.List;
import java.util.stream.Collectors;

public class RecordExample {
    // Define a record named Person with two components: name and age
    public record Person(String name, int age) {}

    public static void main(String[] args) {
        // Create a list of Person records
        List<Person> people = List.of(
            new Person("Alice", 23),
            new Person("Bob", 17),
            new Person("Charlie", 30),
            new Person("Diana", 15)
        );

        // Print all person instances
        System.out.println("All people:");
        people.forEach(System.out::println);

        // Filter persons with age > 18 using Stream API
        List<Person> adults = people.stream()
                                   .filter(person -> person.age() > 18)
                                   .collect(Collectors.toList());

        System.out.println("\nAdults (age > 18):");
        adults.forEach(System.out::println);
    }
}
