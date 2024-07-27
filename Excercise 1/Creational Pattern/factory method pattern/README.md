# Factory Method Pattern Solution Documentation

## Welcome
Welcome to the Factory Method Pattern solution documentation. This solution demonstrates the use of the Factory Method Pattern with a smart home system example. This document will guide through the implementation and usage of the Factory Method Pattern as demonstrated in the `demo.java`,  and other files in this project.

## Definition of Factory Method Pattern
The Factory Method Pattern defines an interface for creating an object but allows subclasses to alter the type of objects that will be created. This pattern is used to provide a way to create objects without specifying the exact class of object that will be created.

### File Descriptions
- **demo.java**: The main file that interacts with the user and provides options to create factories for different smart devices (Smart TV, Smart AC, Smart Fan).
- **DeviceFactoryInterface.java**: Defines the abstract factory interface with a method to create devices and initiate their operations.
- **DeviceInterface.java**: Defines the interface for the smart devices with methods to turn on, turn off, and show the status.
- **SmartAC.java**: Implements the `DeviceInterface` for a Smart AC.
- **SmartFan.java**: Implements the `DeviceInterface` for a Smart Fan.
- **SmartTV.java**: Implements the `DeviceInterface` for a Smart TV.
- **smartACFactory.java**: Concrete factory class to create instances of `SmartAC`.
- **smartFanFactory.java**: Concrete factory class to create instances of `SmartFan`.
- **smartTVFactory.java**: Concrete factory class to create instances of `SmartTV`.

## Steps to Get the Output
To run the Factory Method Pattern example, follow these steps:

1. Open a terminal and navigate to the Factory Method Pattern solution folder:
  ```bash
   cd /path/to/Exercises/Exercise 1/Creational Pattern/factory method pattern
   ```
2. Compile the Java files:

```bash
   javac demo.java
```

3. Run the School main file:

```bash
   java demo
```


The program flow is described as follows.

## Program Flow
Upon running the program, it will prompt to select an option. Here is a sample flow of the program execution:

### Program Execution

1. Create Factory for Smart TV:
```bash
Create Factory for
1) Smart TV
2) Smart AC
3) Smart Fan
4) Exit
1
Smart TV turning on
Smart TV turning off
Smart TV is off
```

2. Create Factory for Smart AC:
```bash
Create Factory for
1) Smart TV
2) Smart AC
3) Smart Fan
4) Exit
2
Smart AC turning on
Smart AC turning off
Smart AC is off
```

3. Create Factory for Smart Fan:

```bash
Create Factory for
1) Smart TV
2) Smart AC
3) Smart Fan
4) Exit
3
Smart Fan turning on
Smart Fan turning off
Smart Fan is off
```

4. Exit the Program:
```bash
Create Factory for
1) Smart TV
2) Smart AC
3) Smart Fan
4) Exit
4

Terminating the program
```

Replace `/path/to/Excercises` with the actual path to project directory.

---
<a href="https://www.linkedin.com/in/thejashari/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="cyberspartan" height="30" width="40" /></a>
<a href="https://instagram.com/nuthejashari" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="karthithehacker" height="30" width="40" /></a>
---


