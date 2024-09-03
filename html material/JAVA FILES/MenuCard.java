import java.util.Scanner;
public class MenuCard {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int choice;
        System.out.println("Menu");
        System.out.println("Enter Choices(1 TO 4)");
        choice=sc.nextInt();
        switch (choice)
        {
        case 1:
        System.out.println("Burger");
        break;
        case 2:
        System.out.println("Briyani");
        break;
        case 3:
        System.out.println("egg");
        break;
        case 4:
        System.out.println("cake");
        break;
        }

    }
}
