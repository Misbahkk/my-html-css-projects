import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

/**
 * FileHandling
 */
public class FileHandling {

    public static void main(String[] args) {

        //Code to creat a new file
        /* 
        File myfile = new File("chw111.txt");
        try {
            myfile.createNewFile();
        } catch (IOException e) {
           
            System.out.println("Unable to creat file");
            e.printStackTrace();
        }
       
//code to write file 
      try {
        FileWriter fileWriter = new FileWriter("chw111.txt");
        fileWriter.write("this our first file and we write some Thing \n this topic of our Data Base class");
        fileWriter.close();
    } catch (IOException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
    }
       

       // Reading file
       File myfile = new File("chw111.txt");
       try {
        Scanner sc = new Scanner(myfile);
        while(sc.hasNextLine()){
        String line =sc.nextLine();
        System.out.println(line);
        }
        sc.close();
    } catch (FileNotFoundException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
    }
*/

   // Delete File
   File myfile =new File("chw111.txt");
   if(myfile.delete()){
    System.out.println("i have deleted file" + myfile.getName());

   }
   else{
    System.out.println("Some problem deleted file");
   }
    }
}