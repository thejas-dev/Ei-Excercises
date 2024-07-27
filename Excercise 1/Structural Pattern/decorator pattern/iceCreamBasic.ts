import {iceCreamInterface} from './iceCreamInterface';

export class iceCreamBasic implements iceCreamInterface{
	
	getDescription():string{
		return "This is a basic ice cream";
	}

	getCost():string{
		return "30rs - Basic Ice Cream";
	}
}