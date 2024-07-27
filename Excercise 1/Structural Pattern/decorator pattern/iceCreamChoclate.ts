
import {iceCreamBasic} from './iceCreamBasic';
import {iceCreamDecorator} from './iceCreamDecorator';

export class iceCreamChoclate extends iceCreamDecorator{

	constructor(iceCream: iceCreamBasic){
		super(iceCream);
	}

	getDescription():string{
		return "This is a Choclate Ice Cream";
	}

	getCost():string{
		return "50rs - Choclate Ice Cream";
	}

}