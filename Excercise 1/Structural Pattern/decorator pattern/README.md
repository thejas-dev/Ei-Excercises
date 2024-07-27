# Decorator Pattern Solution Documentation

## Welcome
Welcome to the Decorator Pattern solution documentation. This solution demonstrates the use of the Decorator Pattern with an ice cream shop example. This document will guide through the implementation and usage of the Decorator Pattern as demonstrated in the `iceCreamShop.ts`, `iceCreamBasic.ts`, `iceCreamChoclate.ts`, `iceCreamButter.ts`, `iceCreamDecorator.ts`, and `iceCreamInterface.ts` files.

## Definition of Decorator Pattern
The Decorator Pattern allows behavior to be added to individual objects, either statically or dynamically, without affecting the behavior of other objects from the same class. It provides a flexible alternative to subclassing for extending functionality.

### File Descriptions
- **iceCreamShop.ts**: The main file that demonstrates how to use the Decorator Pattern to create various types of ice cream by decorating a basic ice cream with additional features.
- **iceCreamBasic.ts**: Contains the base implementation of an ice cream with a basic description and cost.
- **iceCreamChoclate.ts**: Decorates the basic ice cream with chocolate flavor.
- **iceCreamButter.ts**: Decorates the basic ice cream with butter scotch flavor.
- **iceCreamDecorator.ts**: Defines the abstract decorator class for adding features to the base ice cream.
- **iceCreamInterface.ts**: Defines the interface that both the base ice cream and decorators must implement.

## Steps to Get the Output

### Prerequisites
1. **Install Node.js**: Download and install Node.js from [Node.js official website](https://nodejs.org/).

2. **Install `ts-node` Library**: This library allows you to run TypeScript files directly. Install it globally using npm:
   ```bash
   npm i -g ts-node
    ```
### Running the example

1. Open a terminal and navigate to the Factory Method Pattern solution folder:
  ```bash
   cd /path/to/Exercises/Exercise 1/Structural Pattern/decorator pattern
   ```
2. Run the main typescript files:

```bash
   ts-node iceCreamShop.ts
```
Upon running the program, you will see the following output, demonstrating the usage of different ice cream decorators:

## Program Execution

```bash
This is a basic ice cream costs 30rs - Basic Ice Cream
This is a Choclate Ice Cream costs 50rs - Choclate Ice Cream
This is a Butter Scotch Ice Cream costs 80rs - Butter Scotch Ice Cream
```


Replace `/path/to/Excercises` with the actual path to project directory.

---
<a href="https://www.linkedin.com/in/thejashari/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="cyberspartan" height="30" width="40" /></a>
<a href="https://instagram.com/nuthejashari" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="karthithehacker" height="30" width="40" /></a>
---


