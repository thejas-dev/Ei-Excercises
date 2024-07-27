// Concrete State
class Paused implements PlayerState{

	@Override
	public void play(PlayerControls player){
		System.out.print("Player is playing...");
		player.setState(new Playing());
	}

	@Override
	public void pause(PlayerControls player){
		System.out.print("Player is already in pause...");
	}

	@Override
	public void stop(PlayerControls player){
		System.out.print("Player was stopped...");
		player.setState(new Stopped());
	}

}