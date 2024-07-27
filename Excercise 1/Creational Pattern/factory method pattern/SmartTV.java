// Concrete device

class SmartTV implements DeviceInterface{
	private String state = "Off";

	@Override
	public void turnon(){
		System.out.println("Smart TV turning on");
		state = "On";
	}

	@Override
	public void turnoff(){
		System.out.println("Smart TV turning off");
		state = "Off";
	}

	@Override
	public void showStatus(){
		if(state == "On"){
			System.out.println("Smart TV is on");
		}else{
			System.out.println("Smart TV is off");
		}
	}
}