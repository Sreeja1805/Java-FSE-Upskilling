import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class JdbcTransaction {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/testdb";
        String user = "root";
        String password = "password";

        try (Connection con = DriverManager.getConnection(url, user, password)) {
            con.setAutoCommit(false);

            int fromAccount = 1;
            int toAccount = 2;
            double amount = 500;

            try (PreparedStatement debitStmt = con.prepareStatement("UPDATE accounts SET balance = balance - ? WHERE id = ?");
                 PreparedStatement creditStmt = con.prepareStatement("UPDATE accounts SET balance = balance + ? WHERE id = ?")) {

                debitStmt.setDouble(1, amount);
                debitStmt.setInt(2, fromAccount);
                int debitResult = debitStmt.executeUpdate();

                creditStmt.setDouble(1, amount);
                creditStmt.setInt(2, toAccount);
                int creditResult = creditStmt.executeUpdate();

                if (debitResult == 1 && creditResult == 1) {
                    con.commit();
                    System.out.println("Transfer successful");
                } else {
                    con.rollback();
                    System.out.println("Transfer failed, rollback performed");
                }
            } catch (SQLException e) {
                con.rollback();
                System.out.println("Exception occurred, rollback performed");
                e.printStackTrace();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
