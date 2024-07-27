# Observer Pattern Solution Documentation

## Welcome
Welcome to the Observer Pattern solution documentation. This solution contains a use case of the Observer Pattern in a classroom setting. This document will guide you through the implementation and usage of the Observer Pattern as demonstrated in the `School.java` and `ClassRoom.java` files.

## Definition of Observer Pattern

The Observer Pattern defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

### File Descriptions
<ul>
    <li> ClassRoom.java : Contains the implementation of the ClassRoom which manages the students and allows them to observe messages.
    </li>
    <li>School.java: The main file that interacts with the user and manages the options to add, remove, display students, and send messages to observers
    </li>
</ul>

## Steps to Get the Output

To run the Observer Pattern example, follow these steps:

1. Open a terminal and navigate to the Observer Pattern solution folder:
   ```shell
   cd /path/to/Exercises/Exercise 1/Behavioral Pattern/observer pattern
   ```
2. Compile the Java files:

```shell
   javac School.java
```

3. Run the School main file:

```shell
   java School
```

The program flow is described as follows.

## Program Flow
Upon running the program, it will prompt to select an option. Here is a sample flow of the program execution:

### Program Execution



1. Adding a student to class room


```bash
Select option
1) Add New Student
2) Remove Student
3) Show Students in Class
4) Make Students Observe the Class
5) Exit
1
Enter Student RollNo:-
213042
Enter Student Name:-
Thejas
{213042=Thejas}

Thejas Successfully added to ClassRoom

```

2. Adding another student
```bash
Select option
1) Add New Student
2) Remove Student
3) Show Students in Class
4) Make Students Observe the Class
5) Exit
1
Enter Student RollNo:-
213321
Enter Student Name:-
Sankar
{213042=Thejas, 213321=Sankar}

Sankar Successfully added to ClassRoom
```

3. Show the details of student in class
```bash

Select option
1) Add New Student
2) Remove Student
3) Show Students in Class
4) Make Students Observe the Class
5) Exit
3

Students In Class
{213042=Thejas, 213321=Sankar}
```

4. Making the student observe the speaker
```bash
Select option
1) Add New Student
2) Remove Student
3) Show Students in Class
4) Make Students Observe the Class
5) Exit
4
Enter:-
Hello

Hello Observed by Thejas
Hello Observed by Sankar

```
5. Removing student from class by roll number

```bash

Select option
1) Add New Student
2) Remove Student
3) Show Students in Class
4) Make Students Observe the Class
5) Exit
2
Enter Student RollNo to remove:- 213321
{213042=Thejas}

213321 has been removed from ClassRoom
```

6. Display the list of students in class room

```bash
Select option
1) Add New Student
2) Remove Student
3) Show Students in Class
4) Make Students Observe the Class
5) Exit
3

Students In Class
{213042=Thejas}

```

7. Making student listen in class room

```bash
Select option
1) Add New Student
2) Remove Student
3) Show Students in Class
4) Make Students Observe the Class
5) Exit
4
Enter:-
Good

Good Observed by Thejas
```

8. Exit the program

```bash
Select option
1) Add New Student
2) Remove Student
3) Show Students in Class
4) Make Students Observe the Class
5) Exit
5

Terminating the program
```

<code>Replace /path/to/Excercises with the actual path to project directory.
</code>


---

<a href="https://www.linkedin.com/in/thejashari/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="cyberspartan" height="30" width="40" /></a>
<a href="https://instagram.com/nuthejashari" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="karthithehacker" height="30" width="40" /></a>

---