import {iceCreamBasic} from './iceCreamBasic';

export class iceCreamDecorator implements iceCreamBasic{
	private decoratedIceCream: iceCreamBasic;

	constructor(iceCream: iceCreamBasic){
		this.decoratedIceCream = iceCream;
	}

	getDescription():string{
		return this.decoratedIceCream.getDescription();
	}

	getCost():string{
		return this.decoratedIceCream.getCost();
	}

}