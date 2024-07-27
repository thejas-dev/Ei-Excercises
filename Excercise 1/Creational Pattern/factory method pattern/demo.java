
import java.util.*;

public class demo{
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		System.out.println("Create Factory for\n1) Smart TV\n2) Smart AC\n3) Smart Fan\n4) Exit\n");
		int n = sc.nextInt();

		switch(n){
			case 1:
				smartTVFactory device = new smartTVFactory();
				device.initiateDevice();
				break;
			case 2:
				smartACFactory device2 = new smartACFactory();
				device2.initiateDevice();
				break;
			case 3:
				smartFanFactory device3 = new smartFanFactory();
				device3.initiateDevice();
				break;
			case 4:
				System.exit(0);
				break;
			default:
				System.out.println("Invalid Option");
				break;
		}

	}
}