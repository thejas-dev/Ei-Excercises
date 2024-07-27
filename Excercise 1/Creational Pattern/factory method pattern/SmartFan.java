// Concrete device
class SmartFan implements DeviceInterface{
	private String state = "Off";

	@Override
	public void turnon(){
		System.out.println("Smart Fan turning on");
		state = "On";
	}

	@Override
	public void turnoff(){
		System.out.println("Smart Fan turning off");
		state = "Off";
	}

	@Override
	public void showStatus(){
		if(state == "On"){
			System.out.println("Smart Fan is on");
		}else{
			System.out.println("Smart Fan is off");
		}
	}
}