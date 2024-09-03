public class fibonnic {
    public static void main(String[] args) {
        
        int n= 4;
        
          
          
        int a=0 , b=1;
        System.out.println(a);
        System.out.println(b);
        int c=a+b; 
        System.out.println(c);
        for(int i=0; i<=n; i++){
            
            
            // int c=a+b;
            a=b;  //1  ,2
            b=c;  //2  ,3
           c=a+b; //3  , 5
           
            System.out.println(c);
        
        }
    }
    
}
