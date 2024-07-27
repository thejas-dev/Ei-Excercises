import java.util.*;

public class School{
	ClassRoom Class = ClassRoom.getInstance();
	Scanner sc = new Scanner(System.in);
	int rollNo;
	String name;

	void getStudentData(){
		System.out.print("Enter Student RollNo :- \n");
		rollNo = sc.nextInt();
		System.out.print("Enter Student Name :- \n");
		name = sc.next();
		
		Class.addStudentToClassRoom(name,rollNo);
		System.out.println("\n" + name + " Successfully added to ClassRoom");
		askUser();
	}

	void removeStudent(){
		System.out.print("Enter Student RollNo to remove:- ");
		int rollNo = sc.nextInt();

		Class.removeStudentFromClassRoom(rollNo);
		System.out.println("\n" + rollNo + " has been removed from  ClassRoom");
		askUser();
	}

	void showStudents(){
		Class.showStudentsInClass();
		askUser();
	}

	void teacherSpeaking(){
		System.out.print("Enter:- \n");
		String speech = sc.next();
		Class.makeStudentsObserve(speech);
		askUser();
	}

	void askUser(){
		System.out.print("\nSelect option\n1) Add New Student\n2) Remove Student\n3) Show Students in Class\n4) Make Students Observer the Class\n5) Exit\n");
		int n = 0;
		try{
			n = sc.nextInt();
		}catch (InputMismatchException e) {
			System.out.print("\nInput Mismatch, Safely Terminating the program\n");
			return;
		}

		switch(n){
			case 1:
				getStudentData();
				break;
			case 2:
				removeStudent();
				break;
			case 3:
				showStudents();
				break;
			case 4:
				teacherSpeaking();
				break;
			case 5:
				System.out.print("\nTerminatting the program\n");
				System.exit(0);
			default:
				System.out.print("Invalid Option\n");
				askUser();
				break; 
		}

	}

	public static void main(String[] args){
		new School().askUser();

	}
}