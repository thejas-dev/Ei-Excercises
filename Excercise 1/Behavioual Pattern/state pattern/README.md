# State Pattern Solution Documentation

## Welcome
Welcome to the State Pattern solution documentation. This solution demonstrates the use of the State Pattern in a music player application. This document will guide you through the implementation and usage of the State Pattern as demonstrated in the `musicPlayer.java`, `PlayerControls.java`, and other related files.

## Definition of State Pattern
The State Pattern allows an object to alter its behavior when its internal state changes. The object will appear to change its class. This pattern is particularly useful for managing state transitions in an application.

### File Descriptions
- **musicPlayer.java**: The main file that drives the music player application and gets the input from the user to play, pause and stop.
- **PlayerControls.java**: Contains the context class that maintains an instance of a `PlayerState` representing the current state of the music player.
- **PlayerState.java**: An interface that defines the methods for state transitions: `play()`, `pause()`, and `stop()`.
- **Paused.java**: A concrete state class that represents the state where the music player is paused.
- **Playing.java**: A concrete state class that represents the state where the music player is playing music.
- **Stopped.java**: A concrete state class that represents the state where the music player is stopped.

## Steps to Get the Output
To run the State Pattern example, follow these steps:

1. Open a terminal and navigate to the State Pattern solution folder:
   ```bash
   cd /path/to/Exercises/Exercise 1/Behavioral Pattern/state pattern
    ```

2. Compile the Java files:

```shell
   javac musicPlayer.java
```

3. Run the musicPlayer main file:

```shell
   java musicPlayer
```

The program flow is described as follows.

## Program Flow
Upon running the program, it will prompt to select an option. Here is a sample flow of the program execution:

### Program Execution


```shell
Enter Your Choice
1) Play
2) Pause
3) Stop
4) Exit
1

Player is playing...

Enter Your Choice
1) Play
2) Pause
3) Stop
4) Exit
2

Player is pausing...

Enter Your Choice
1) Play
2) Pause
3) Stop
4) Exit
2

Player is already in pause...

Enter Your Choice
1) Play
2) Pause
3) Stop
4) Exit
3

Player was stopped...

Enter Your Choice
1) Play
2) Pause
3) Stop
4) Exit
3

Player was already stopped...

Enter Your Choice
1) Play
2) Pause
3) Stop
4) Exit
1

Player is playing...

Enter Your Choice
1) Play
2) Pause
3) Stop
4) Exit
4

Terminating the program



```

Replace `/path/to/Excercises` with the actual path to project directory.


---
<a href="https://www.linkedin.com/in/thejashari/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="cyberspartan" height="30" width="40" /></a>
<a href="https://instagram.com/nuthejashari" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="karthithehacker" height="30" width="40" /></a>
---

---
