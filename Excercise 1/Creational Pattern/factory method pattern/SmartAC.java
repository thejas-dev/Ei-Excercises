// Concrete device
class SmartAC implements DeviceInterface{
	private String state = "Off";

	@Override
	public void turnon(){
		System.out.println("Smart AC turning on");
		state = "On";
	}

	@Override
	public void turnoff(){
		System.out.println("Smart AC turning off");
		state = "Off";
	}

	@Override
	public void showStatus(){
		if(state == "On"){
			System.out.println("Smart AC is on");
		}else{
			System.out.println("Smart AC is off");
		}
	}
}