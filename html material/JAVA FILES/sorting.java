public class sorting {
    public static void bubleSort(int arr[]){
        for(int i=0; i<arr.length-1; i++){
            for(int j=0; j<arr.length-i-1; j++)
            {
                if(arr[j]>arr[j+1]){
                    int temp = arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;

                }
            }
        }
    }
    public static void printArray(int arr[]){
        for(int i=0; i<arr.length; i++){
            System.out.print(arr[i]+" ");
        }        
        System.out.println();
    }
    public static void slectionArray(int arr[]){
        for(int i=0; i<arr.length-1; i++){
            int small= i;
            for(int j=i+1;j<arr.length; j++){
                if(arr[small]>arr[j]){
                    small=j;
                }
            }
            int temp = arr[small];
            arr[small]=arr[i];
            arr[i]=temp;

        }
    }
    
    public static void main(String[] args) {
        int arr[]={8,9,1,4,2,6};
      //  bubleSort(arr);
       printArray(arr);
      slectionArray(arr);
      printArray(arr);
    }
}
