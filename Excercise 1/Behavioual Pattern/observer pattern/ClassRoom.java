import java.util.*;

class BaseClassRoom{
	protected Map<Integer,String> studentsObserver = new HashMap();
	protected int studentsCount;

	BaseClassRoom(){
		this.studentsCount = 0;
	}

}

class ClassRoom extends BaseClassRoom{
	private static ClassRoom instance;

	private ClassRoom(){
		super();
	}

	public static ClassRoom getInstance(){
		if(instance==null){
			instance = new ClassRoom();
		}
		return instance;
	}

	void getStudents(){
		System.out.print("Students in class are");
		System.out.print(studentsObserver);
		
	}

	void addStudentToClassRoom(String name,int rollNo){
		studentsObserver.put(rollNo,name);
		System.out.print(studentsObserver);
		System.out.print("\n");
	}

	void removeStudentFromClassRoom(int rollNo){
		studentsObserver.remove(rollNo);
		System.out.print(studentsObserver);
		System.out.print("\n");
	}

	void showStudentsInClass(){
		System.out.print("\nStudents In Class\n");
		System.out.print(studentsObserver);
		System.out.print("\n");
	}

	void makeStudentsObserve(String word){
		Collection<String> st = studentsObserver.values();
		this.notifyStudents(st,word);		
	}

	private void notifyStudents(Collection<String> studentNameArray,String word){
		List<String> studentsObserverList = new ArrayList<>(studentNameArray);
		System.out.print("\n");
		for(int i = 0; i < studentsObserverList.size(); i++){
			System.out.println(word + " Observed by " + studentsObserverList.get(i));
		}
	}
	
		// System.out.print("\n");
}