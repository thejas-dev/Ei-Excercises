class smartFanFactory extends DeviceFactoryInterface{

	@Override
	public DeviceInterface createDevice(){
		return new SmartFan();
	}
}