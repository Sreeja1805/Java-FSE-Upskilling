public class OperatorPrecedenceDemo {
    public static void main(String[] args) {
        int result1 = 10 + 5 * 2;
        System.out.println("10 + 5 * 2 = " + result1);

        int result2 = (10 + 5) * 2;
        System.out.println("(10 + 5) * 2 = " + result2);

        int result3 = 20 / 5 + 3 * 4;
        System.out.println("20 / 5 + 3 * 4 = " + result3);

        int result4 = 20 / (5 + 3) * 4;
        System.out.println("20 / (5 + 3) * 4 = " + result4);

        int result5 = 10 + 6 / 3 - 2 * 4;
        System.out.println("10 + 6 / 3 - 2 * 4 = " + result5);
    }
}
