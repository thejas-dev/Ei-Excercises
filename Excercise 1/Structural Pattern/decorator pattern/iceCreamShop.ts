import {iceCreamBasic} from './iceCreamBasic';
import {iceCreamChoclate} from './iceCreamChoclate';
import {iceCreamButter} from './iceCreamButter';

console.clear();

const basicIce : iceCreamBasic = new iceCreamBasic();

console.log(`${basicIce.getDescription()} costs ${basicIce.getCost()}`);

const choclateIce : iceCreamChoclate = new iceCreamChoclate(basicIce);

console.log(`${choclateIce.getDescription()} costs ${choclateIce.getCost()}`);

const butterIce : iceCreamButter = new iceCreamButter(basicIce);

console.log(`${butterIce.getDescription()} costs ${butterIce.getCost()}`);