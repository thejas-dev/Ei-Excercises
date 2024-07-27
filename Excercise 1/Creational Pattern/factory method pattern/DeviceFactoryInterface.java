// Abstract Class

public abstract class DeviceFactoryInterface{
	public abstract DeviceInterface createDevice();

	public void initiateDevice(){
		DeviceInterface createdDevice = createDevice();
		createdDevice.turnon();
		createdDevice.turnoff();
		createdDevice.showStatus();
	}
}