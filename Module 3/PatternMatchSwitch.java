public class PatternMatchSwitch {
    public static void checkType(Object obj) {
        String result = switch (obj) {
            case Integer i -> "It's an Integer: " + i;
            case String s -> "It's a String: " + s;
            case Double d -> "It's a Double: " + d;
            case Float f -> "It's a Float: " + f;
            case Long l -> "It's a Long: " + l;
            case null -> "It's null";
            default -> "Unknown type";
        };
        System.out.println(result);
    }

    public static void main(String[] args) {
        checkType(42);
        checkType("hello");
        checkType(3.14);
        checkType(null);
        checkType(10L);
        checkType(2.5f);
        checkType(true);
    }
}