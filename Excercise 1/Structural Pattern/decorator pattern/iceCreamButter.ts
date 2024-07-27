
import {iceCreamBasic} from './iceCreamBasic';
import {iceCreamDecorator} from './iceCreamDecorator';

export class iceCreamButter extends iceCreamDecorator{

	constructor(iceCream: iceCreamBasic){
		super(iceCream);
	}

	getDescription():string{
		return "This is a Butter Scotch Ice Cream";
	}

	getCost():string{
		return "80rs - Butter Scotch Ice Cream";
	}

}