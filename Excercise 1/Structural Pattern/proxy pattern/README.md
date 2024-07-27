# Proxy Pattern Solution Documentation

## Welcome
Welcome to the Proxy Pattern solution documentation. This solution demonstrates the use of the Proxy Pattern with a bank account example. This document will guide through the implementation and usage of the Proxy Pattern as demonstrated in the `bankCustomer.ts`, `bankAccount.ts`, and `bankAccountProxy.ts` files.

## Definition of Proxy Pattern
The Proxy Pattern provides a surrogate or placeholder for another object to control access to it. The proxy acts as an intermediary that can manage access, perform operations, and control the functionality of the real object, usually to provide additional functionality or to handle access control.

### File Descriptions
- **bankCustomer.ts**: The main file that demonstrates how the Proxy Pattern is used to control access to a bank account by managing permissions and operations like deposit and withdrawal.
- **bankAccount.ts**: Contains the implementation of the real bank account with methods to deposit, withdraw, and get the balance.
- **bankAccountProxy.ts**: Implements the proxy class that controls access to the bank account, ensuring that operations are performed based on the permissions provided.

## Steps to Get the Output

### Prerequisites
1. **Install Node.js**: Download and install Node.js from [Node.js official website](https://nodejs.org/).

2. **Install `ts-node` Library**: This library allows you to run TypeScript files directly. Install it globally using npm:
   ```bash
   npm i -g ts-node
    ```

## Steps to Get the Output
To run the Singleton Pattern example, follow these steps:

1. Open a terminal and navigate to the Singleton Pattern solution folder:
  ```bash
   cd /path/to/Exercises/Exercise 1/Structural Pattern/proxy pattern
   ```
2. Run the main typescript files:

```bash
   ts-node bankCustomer.ts
```

Upon running the program, you will see the following output, demonstrating the usage of different ice cream decorators:

## Program Execution

```bash
Deposited 400, Your Current Balance 1400
Withdrawn 500, Your Current Balance 900
Failed to withdraw 1500. Insufficient Balance, you current balance 900
Withdrawn 1, Your Current Balance 899
Deposited 10000, Your Current Balance 10899
Deposited 200, Your Current Balance 11099
Your current balance is 11099
```



Replace `/path/to/Excercises` with the actual path to project directory.

---
<a href="https://www.linkedin.com/in/thejashari/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="cyberspartan" height="30" width="40" /></a>
<a href="https://instagram.com/nuthejashari" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="karthithehacker" height="30" width="40" /></a>
---




