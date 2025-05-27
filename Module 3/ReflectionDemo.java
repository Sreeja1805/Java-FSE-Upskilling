import java.lang.reflect.Method;
import java.lang.reflect.Parameter;

class SampleClass {
    public void greet(String name) {
        System.out.println("Hello, " + name);
    }

    public int add(int a, int b) {
        return a + b;
    }
}

public class ReflectionDemo {
    public static void main(String[] args) throws Exception {
        Class<?> cls = Class.forName("SampleClass");
        Object obj = cls.getDeclaredConstructor().newInstance();

        Method[] methods = cls.getDeclaredMethods();
        for (Method method : methods) {
            System.out.println("Method: " + method.getName());
            Parameter[] parameters = method.getParameters();
            for (Parameter param : parameters) {
                System.out.println("Parameter: " + param.getName() + " Type: " + param.getType().getSimpleName());
            }

            if (method.getName().equals("greet")) {
                method.invoke(obj, "Sindhuja");
            } else if (method.getName().equals("add")) {
                Object result = method.invoke(obj, 10, 20);
                System.out.println("Result of add: " + result);
            }
        }
    }
}
