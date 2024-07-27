class smartTVFactory extends DeviceFactoryInterface{

	@Override
	public DeviceInterface createDevice(){
		return new SmartTV();
	}
}