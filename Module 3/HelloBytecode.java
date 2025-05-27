public class HelloBytecode {
    public void greet() {
        String message = "Hello, Bytecode!";
        System.out.println(message);
    }

    public static void main(String[] args) {
        HelloBytecode obj = new HelloBytecode();
        obj.greet();
    }
}
