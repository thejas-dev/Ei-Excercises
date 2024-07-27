

class BaseStudent{
	protected String name;
	protected String rollNo;

	public BaseStudent(String name,String rollNo){
		this.name = name;
		this.rollNo = rollNo;
	}

	String getStudentName(){
		return this.name;
	}

	String getStudentRollNo(){
		return this.rollNo;
	}

	void printStudentDetails(){
		System.out.println("Name : " + this.name + " RollNo : " + this.rollNo);
	}
}

class Student extends BaseStudent{
	ClassRoom classRoom = ClassRoom.getInstance();

	public Student(String name,String rollNo){
		super(name,rollNo);
	}

	void addStudentToClass(){
		classRoom.addStudentToClassRoom(this);
		System.out.println("\n" + name + " added successfully to class " 
			+ classRoom.getClassRoomName() + " " + classRoom.getClassRoomSection() 
			+ "\n");
	}

}