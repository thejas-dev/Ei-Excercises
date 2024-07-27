import java.util.ArrayList;

class BaseClassRoom{
	protected String name;
	protected String section;
	protected ArrayList<Student> students = new ArrayList<>();

	public BaseClassRoom(){
		this.name = "";
		this.section = "";
	}

	void setClassRoomDetails(String name, String section){
		this.name = name;
		this.section = section;
	}
}

// Singlethon Pattern
class ClassRoom extends BaseClassRoom{
	private static ClassRoom instance;

	private ClassRoom(){
		super();
	}

	public static ClassRoom getInstance(){
		if(instance == null){
			instance = new ClassRoom();
		}
		return instance;
	}

	void addStudentToClassRoom(Student s){
		students.add(s);
	}

	String getClassRoomName(){
		return this.name;
	}

	String getClassRoomSection(){
		return this.section;
	}

	void showStudentsInClassRoom(){
		System.out.println("\nStudents in Class " + this.name + this.section + "\n");
		for(int i = 0; i < students.size(); i++){
			System.out.println("Name: " + students.get(i).getStudentName() + " ==> Rollno: " + students.get(i).getStudentRollNo());
		}
		System.out.println("\n");
	}

	void removeStudentFromClass(String rollNo){
		for(int i = 0; i < students.size(); i++){
			String studRollNo = students.get(i).getStudentRollNo();

			if(studRollNo.equals(rollNo)){
				students.remove(i);
				System.out.println("\n" + rollNo + " Removed from ClassRoom Successfully\n");
			}
		}
		showStudentsInClassRoom();
	}

}