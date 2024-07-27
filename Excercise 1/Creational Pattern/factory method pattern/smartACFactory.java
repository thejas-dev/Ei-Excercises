class smartACFactory extends DeviceFactoryInterface{

	@Override
	public DeviceInterface createDevice(){
		return new SmartAC();
	}
}