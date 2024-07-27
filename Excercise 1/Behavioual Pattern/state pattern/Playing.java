// Concrete State
class Playing implements PlayerState{

	@Override
	public void play(PlayerControls player){
		System.out.print("Player is already playing...");
	}

	@Override
	public void pause(PlayerControls player){
		System.out.print("Player is pausing...");
		player.setState(new Paused());
	}

	@Override
	public void stop(PlayerControls player){
		System.out.print("Player was stopped...");
		player.setState(new Stopped());
	}

}