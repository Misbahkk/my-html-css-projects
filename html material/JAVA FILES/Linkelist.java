public class Linkelist {

  Node head;
  private int size;
  Linkelist(){
    this.size=0;
  }
  
  class Node{
    int data;
    Node next;
    Node(int data){
      this.data=data;
      this.next= null;
      size++;
    }
  }
  

//Add first
   public void addfirst(int data){
    
      Node n=new Node(data);
      if (head ==null){
        head=n;
        return;
      }
      n.next=head;
      head=n;
    }
    //2
   //add-Last
   public void addlast(int data)  {
   
     Node n=new Node(data);
     if(head==null){
       head=n;
       return;
     }
     Node currNode=head;
     while(currNode.next!=null){
       currNode=currNode.next;
       
     }
     currNode.next=n;
   }
   
   
    
   //print
   public void printlist() {
  
     if(head==null){
       System.out.println("List is Empty");
       return;
         }
         Node currNode=head;
         while(currNode!=null){
           System.out.print(currNode.data+"->");
          currNode=currNode.next;
         }
       System.out.println("Null");
   }
   //Delete first
   public void deletfirst(){
      if(head==null){
       System.out.println("List is Empty");
       return;
     }
     size--;
     
      head=head.next;
   }
   
   //delete-Last
   
   public void deletelast()
   {
     if(head==null){
       System.out.println("list is Empty");
       return;
     }
     if(head.next==null){
       head=null;
       return;
     }
     Node seclast=head;
     Node lastNode=head.next;
     while(lastNode.next!=null){
       lastNode=lastNode.next;
       seclast=seclast.next;
     }
     seclast.next=null;
   }
    public int getsize(){
      return size;
    }
    
    //delet nth node
    
     public Node remove(){
     if(head.next==null){
       return null;
      }
      int n=3;
     if(n==size){
        return head.next;
      }
      
     int serch=size-n;
      Node prev=head;
      
      int i=1;
      while (i!=serch){
        prev=prev.next;
        i++;
      }
      prev.next=prev.next.next;
     return head;
    }
    
    
    //Minimum node
    
    public void minimum(){
     
    if(head == null) {  
         System.out.println("list is empty");
         return; 
            
       }  
      
      Node currNode = head;
      int min=head.data;
       while(currNode!=null){
        if(currNode.data<min){
          min=currNode.data;
        }
       currNode=currNode.next; 
      }
      System.out.println(min+" <- this is a minimum node");
    }
    
    
   //Maximum node
   
   public void maximum(){
     
    if(head == null) {  
         System.out.println("list is empty");
         return; 
            
       }  
      
      Node currNode = head;
      int max=head.data;
       while(currNode!=null){
        if(currNode.data>max){
          max=currNode.data;
        }
       currNode=currNode.next; 
      }
      System.out.println(max+" <- this is a maximum node");
    }
    
    
    //Reverse LinkedList
    
    
    public void reverse(){
      if(head==null || head.next==null){
        return;
      }
    Node prev=head;
    Node curr=head.next; 
     while(curr!=null){
       Node next=curr.next;
       curr.next=prev;
       ///UBDATED
       prev=curr;
       curr=next;
     }
     head.next=null;
     head=prev;
     
      }
      
    //Insert
    
    
    public void Insert(int data){
      Node newNode=new Node(data);
      if(head==null){
       head.next= newNode;
        return;
       //head.next= newNode;
      }
      if(head.next==null){
        head.next=newNode;
       // return head.next=newNode;
        return;
      }
      
      int n=5;
      int serch=size-n;
      Node tamp=head;
      int i=1;
      while(i!=serch){
        tamp=tamp.next;
        i++;
      }
      newNode.next=tamp.next;
      tamp.next=newNode;
      
    //return head;
    }
    
    
    
 public static void main(String[] args) {
   Linkelist list=new Linkelist();
   //1
   System.out.println("1.Add first Node in LinkedList");
   list.addfirst(3);
   list.addfirst(2);
   list.addfirst(1);
   list.addlast(4);
   list.addlast(5);
   list.addlast(6);
   list.addfirst(0);
   list.printlist(); 
   
   //2
   
   System.out.println("8.Reverse LinkedList");
   list.reverse();
   list.printlist();
   
   //3
   
   System.out.println("2.remove nth  Node in LinkedList");
   list.remove();
   list.printlist();
   
   //4
   
  System.out.println("3.delete first Node in LinkedList");
   list.deletfirst();
   list.printlist(); 
   
   //5
   
   System.out.println("4.delete last Node in LinkedList");
   list.deletelast();
   list.printlist();
   
   
  //6
   
   System.out.println(" 6.minimum node of LinkedList");
   list.minimum();
   
   //7
   
   System.out.println("7.Maximum Node in LinkedList");
   list.maximum();
   
   //8
   
   System.out.println("5.Size of LinkedList");
  System.out.println(list.getsize());
   
   //9
   
   System.out.println("9.Insert Node in LinkedList");
   list.Insert(90);
   list.printlist();
   
   
  }
  
 }

