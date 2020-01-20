package course.jse.jdbc.utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DbUtils {

	
	public static Connection createConnection() throws SQLException, InstantiationException, IllegalAccessException, ClassNotFoundException{
		
		 String userName = "root";
         String password = "toor";
         String url = "jdbc:mysql://localhost:3306/EShopMusic";
         Class.forName ("com.mysql.cj.jdbc.Driver").newInstance ();
         System.out.println ("*-*-* connection opened *-*-*");
         return  DriverManager.getConnection (url, userName, password);
	}
	
	
	public static void closeConnection(Connection connection){
		
		 if (connection != null){
             try   {
            	 connection.close ();
                 System.out.println ("-*-*- connection closed -*-*- \n");
             }
             catch (Exception e) { 
            	e.printStackTrace();
            }
         }
	}
}
