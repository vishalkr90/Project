import java.util.Scanner;

class Machine{
float Balance;
int Pin = 5678;
public void CheckPin(){

Scanner sc = new Scanner(System.in);
System.out.print("Enter the PIN : ");
int PIn = sc.nextInt();
if(PIn == Pin){
menu();
}
else{
System.out.println("Enter valid PIN");
}
}
public void menu(){
System.out.println("Enter your choice(Press between 1 to 4)");
System.out.println("1.Check Balance ");
System.out.println("2.Withdraw Money");
System.out.println("3.Deposit Money");
System.out.println("4.Exit ");

Scanner sc = new Scanner(System.in);
int opt = sc.nextInt();
if(opt == 1){
CheckBalance();
}
else if(opt == 2){
WithdrawMoney();
}
else if(opt == 3){
DepositMoney();
}
else if(opt == 4){
return;
}
else{
System.out.println("Enter a valid choice");
}

}

public void CheckBalance(){
System.out.println("Balance = "+ Balance);
menu();
}

public void WithdrawMoney(){
System.out.println("Enter the amount for withdrawal");
Scanner sc = new Scanner(System.in);
int amount = sc.nextInt();
if(amount > Balance){
System.out.println("Insufficient Balance");
}
else{
Balance = Balance - amount;
System.out.println("Withdrawal Successful");
}
menu();
}

public void DepositMoney(){
System.out.println("Enter the amount for deposit");
Scanner sc = new Scanner(System.in);
int amount = sc.nextInt();
Balance = Balance + amount;
menu();
}





}


class ATM{
   public static void main(String[] args){
   Machine obj = new Machine();
   obj.CheckPin();

}

}