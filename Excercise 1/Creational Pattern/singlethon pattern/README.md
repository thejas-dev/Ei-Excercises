# Singleton Pattern Solution Documentation

## Welcome
Welcome to the Singleton Pattern solution documentation. This solution demonstrates the use of the Singleton Pattern with an example of managing a classroom and students. This document will guide through the implementation and usage of the Singleton Pattern as demonstrated in the `College.java`, `ClassRoom.java`, and `Student.java` files.

## Definition of Singleton Pattern
The Singleton Pattern ensures that a class has only one instance and provides a global point of access to that instance. This pattern is useful for scenarios where a single, consistent instance of a class is needed throughout the application.

### File Descriptions
- **College.java**: The main file that interacts with the user and provides options to add, remove, or display students in the classroom.
- **ClassRoom.java**: Implements the Singleton Pattern to ensure that only one instance of the classroom is created and used.
- **Student.java**: Represents a student with attributes such as name and roll number.

## Steps to Get the Output
To run the Singleton Pattern example, follow these steps:

1. Open a terminal and navigate to the Singleton Pattern solution folder:
  ```bash
   cd /path/to/Exercises/Exercise 1/Creational Pattern/singlethon pattern
   ```
2. Compile the Java files:

```bash
   javac College.java
```

3. Run the School main file:

```bash
   java College
```


The program flow is described as follows.

## Program Flow
Upon running the program, it will prompt to select an option. Here is a sample flow of the program execution:

### Program Execution

1. Start by entering the classroom details:
```bash
Enter Class Room Name
ECE
Enter Class Section
B
```
2. Select an option to add a student:
```bash
Select an option
1) Add Student
2) Remove Student
3) Show Students in class
4) Exit
1
Enter Student Name
Thejas
Enter Student RollNo
213042

Thejas added successfully to class ECE B
```

3. Add another student:

```bash
Select an option
1) Add Student
2) Remove Student
3) Show Students in class
4) Exit
1
Enter Student Name
Hari
Enter Student RollNo
213321

Hari added successfully to class ECE B
```

4. Show the list of students in the class:
```bash
Select an option
1) Add Student
2) Remove Student
3) Show Students in class
4) Exit
3

Students in Class ECE B

Name: Thejas ==> Rollno: 213042
Name: Hari ==> Rollno: 213321

```

5. Remove a student by roll number:

``` bash

Select an option
1) Add Student
2) Remove Student
3) Show Students in class
4) Exit
2
Enter Student RollNo to Remove
213042

213042 Removed from ClassRoom Successfully

Students in Class ECE B

Name: Hari ==> Rollno: 213321
```

6. Show the updated list of students in the class:

```bash
Select an option
1) Add Student
2) Remove Student
3) Show Students in class
4) Exit
3

Students in Class ECE B

Name: Hari ==> Rollno: 213321
```

7. Exit the program
```bash
Select an option
1) Add Student
2) Remove Student
3) Show Students in class
4) Exit
4

Terminating the program
```

Replace `/path/to/Excercises` with the actual path to project directory.

---
<a href="https://www.linkedin.com/in/thejashari/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="cyberspartan" height="30" width="40" /></a>
<a href="https://instagram.com/nuthejashari" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="karthithehacker" height="30" width="40" /></a>
---