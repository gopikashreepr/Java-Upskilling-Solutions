import java.lang.reflect.Method;

public class ReflectionExample {
    public static void greet(String name) {
        System.out.println("Hello, " + name);
    }

    public static void main(String[] args) throws Exception {
        Class<?> clazz = Class.forName("ReflectionExample");

        Method[] methods = clazz.getDeclaredMethods();
        System.out.println("Declared Methods:");
        for (Method method : methods) {
            System.out.println(method.getName());
        }

        Method greetMethod = clazz.getDeclaredMethod("greet", String.class);
        greetMethod.invoke(null, "Pluto");
    }
}
