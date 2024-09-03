/**
 * factorialRecursion
 */
public class factorialRecursion {

    public static int calcfactorial(int n){
        if(n==1 || n==0)
        {
            return 1;
        }
        int fac1 = calcfactorial(n-1);
        int fac2 = n*fac1;
        return fac2;
    }
      public static void main(String[] args)  {
         int n =5;
         int a = calcfactorial(n);
         System.out.println(a);
         
     }
}