
import {bankAccount} from './bankAccount';

export class bankAccountProxy extends bankAccount{
	protected permissions:string[] = [];

	constructor(permissions: string[],amount:number){
		super(amount);
		this.permissions = permissions;
	}

	depositProxy(money:number){
		if(this.permissions.includes("deposit")){
			this.deposit(money);
		}else{
			console.log("You dont have permission to deposit money!")
		}
	}

	withdrawProxy(money:number){
		if(this.permissions.includes("withdraw")){
			this.withdraw(money);
		}else{
			console.log("You dont have permission to withdraw money!")
		}
	}

	getbalanceProxy(){
		if(this.permissions.includes("getbalance")){
			this.getbalance();
		}else{
			console.log("You dont have permission to check balance!")
		}
	}


}