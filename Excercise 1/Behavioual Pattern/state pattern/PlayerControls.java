// Context Class

class PlayerControls{
	private PlayerState currentState;

	public PlayerControls(){
		this.currentState = new Stopped();
	}

	public void setState(PlayerState state){
		this.currentState = state;
	}

	public void play(){
		currentState.play(this);
	}

	public void pause(){
		currentState.pause(this);
	}

	public void stop(){
		currentState.stop(this);
	}

}