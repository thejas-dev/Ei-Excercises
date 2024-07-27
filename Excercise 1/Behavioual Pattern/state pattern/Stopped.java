// Concrete State
class Stopped implements PlayerState{

	@Override
	public void play(PlayerControls player){
		System.out.print("Player is playing...");
		player.setState(new Playing());
	}

	@Override
	public void pause(PlayerControls player){
		System.out.print("Player is pausing...");
		player.setState(new Paused());
	}

	@Override
	public void stop(PlayerControls player){
		System.out.print("Player was already stopped...");
	}

}