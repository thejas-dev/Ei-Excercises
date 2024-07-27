
export class bankAccount{
	private balance:number = 0;

	constructor(amount:number){
		this.balance = amount;
	}

	protected deposit(money:number):void{
		this.balance+=money;
		console.log(`Deposited ${money}, Your Current Balance ${this.balance}`)
	}

	protected withdraw(money:number):void{
		if(this.balance - money >= 0){
			this.balance = this.balance-money;
			console.log(`Withdrawn ${money}, Your Current Balance ${this.balance}`)
		}else{
			console.log(`Failed to withdraw ${money}. Insufficient Balance, you current balance ${this.balance}`);
		}
	}

	protected getbalance():void{
		console.log(`Your current balance is ${this.balance}`);
	}

}