import {bankAccountProxy} from './bankAccountProxy';

const permissions = ['withdraw','deposit','getbalance'];
const currentAmount = 1000;

const bankProxy :bankAccountProxy = new bankAccountProxy(permissions,currentAmount);

bankProxy.depositProxy(400);
bankProxy.withdrawProxy(500);
bankProxy.withdrawProxy(1500);
bankProxy.withdrawProxy(1);
bankProxy.depositProxy(10000);
bankProxy.depositProxy(200);
bankProxy.getbalanceProxy();
