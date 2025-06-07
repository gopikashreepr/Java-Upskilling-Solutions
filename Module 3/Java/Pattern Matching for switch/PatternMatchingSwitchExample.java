public class PatternMatchingSwitchExample {

    public static void identifyObjectType(Object obj) {
        // Switch expression with pattern matching for type checking
        String result = switch (obj) {
            case Integer i -> "It's an Integer with value " + i;
            case String s -> "It's a String with length " + s.length();
            case Double d -> "It's a Double with value " + d;
            case null -> "It's null";
            default -> "Unknown type: " + obj.getClass().getSimpleName();
        };
        
        System.out.println(result);
    }

    public static void main(String[] args) {
        identifyObjectType(42);
        identifyObjectType("Hello World");
        identifyObjectType(3.1415);
        identifyObjectType(true);
        identifyObjectType(null);
    }
}
