import java.util.*;

public class College{
	ClassRoom classRoom = ClassRoom.getInstance();
	Scanner sc = new Scanner(System.in);

	void getStudentDetails(){
		System.out.println("Enter Student Name");
		String name = sc.next();
		System.out.println("Enter Student RollNo");
		String rollNo = sc.next();

		Student s1 = new Student(name,rollNo);
		s1.addStudentToClass();
	}

	void getStudentDetailsToRemove(){
		System.out.println("Enter Student RollNo to Remove");
		String rollNo = sc.next();
		classRoom.removeStudentFromClass(rollNo);

	}

	void showStudents(){
		classRoom.showStudentsInClassRoom();
	}

	void inputFromUser(){
		System.out.println("Select a option\n1) Add Student\n2) Remove Student\n3) Show Students in class\n4) Exit");
		int n = sc.nextInt();
		
		switch (n) {
			case 1:
				getStudentDetails();
				break;
			case 2:
				getStudentDetailsToRemove();
				break;
			case 3:
				showStudents();
				break;
			case 4:
				System.exit(0);
				break;
			default:
				System.out.println("Invalid Option");
				break;
		}

		inputFromUser();
	}

	void initialiseClassRoom(){

		System.out.println("Enter Class Room Name");
		String name = sc.next();
		System.out.println("Enter Class Section");
		String section = sc.next();

		classRoom.setClassRoomDetails(name,section);
		inputFromUser();
	}

	public static void main(String[] args){
		new College().initialiseClassRoom();

	}
}