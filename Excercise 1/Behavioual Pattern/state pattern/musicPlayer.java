import java.util.*;

public class musicPlayer{
	PlayerControls player = new PlayerControls();

	void askInputToUser(){
		System.out.print("\n\nEnter Your Choice\n1) Play\n2) Pause\n3) Stop\n4) Exit\n");
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		System.out.print("\n");

		switch(n){
			case 1:
				player.play();
				break;
			case 2:
				player.pause();
				break;
			case 3:
				player.stop();
				break;
			case 4:
				System.exit(0);
				break;
			default:
				System.out.println("Invalid Option");
				break;
		}
		askInputToUser();
	}

	public static void main(String[] args){
		new musicPlayer().askInputToUser();

	}
}