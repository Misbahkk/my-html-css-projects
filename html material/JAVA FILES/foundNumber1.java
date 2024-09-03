import java.util.Scanner;
public class foundNumber1 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
    int ar[]={1,2,3,4,5,6};
    System.out.println("Enter the Found Number ");
    int el=sc.nextInt();
    int n=0;
    int k=0;
    for(int i=0; i<ar.length;i++){
    if(el==ar[i]){
       n=ar[i];
        k=i;
        }
        
    } 
    if(n>0){
    System.out.println(n+ " Number Found");
    System.out.println("The index Element is arry is :"+ k);
    }
    else if(k==0){
        System.out.println("Number is Not found");
    }
  }    
}
