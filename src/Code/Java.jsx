import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css"; // Choose a theme
import "prismjs/components/prism-java"; // Load Java syntax highlighting
import "../styles/java.css";
import java1 from "../Images/java.png";
import java from "../images/java.jpg";
import bg from "../Images/JavaBackground.png";
import jdk from "../Images/jdk.jpg";
import java3 from "../Images/java3.jpg";
const frist =
  "https://cdn.pixabay.com/photo/2024/05/21/19/58/code-8779051_1280.jpg";
const Java = () => {
  const copyCode = () => {
    // Add your copy code logic here
    navigator.clipboard.writeText(document.querySelector("code").textContent);
    alert("Code copied to clipboard");
  };

  useEffect(() => {
    Prism.highlightAll(); // This will highlight the syntax after the component renders
  }, []); // Empty dependency array to run only once

  return (
    <>
      <div
        className="background"
        style={{
          backgroundImage: `url(${java3})`, // Use the imported bg image here
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          width: "100%",
          filter:" brightness(80%)",
          color: "black", // Change text color to black
        }}
      >
        <h1
          style={{
            textAlign: "center",
            transform: "translateY(20px)",
            color: "black",
          }}
        >
          Learn Java with Ease
          <span>
            <img
              src={java1}
              alt=""
              style={{
                width: "47.375px",
                height: "64px",
                position: "fixed",
                transform: "translate(14px ,-10px)",
              }}
            />
          </span>
        </h1>
        <br />
        <br />

        <h3 style={{ color: "white", fontWeight: "700" }}>What is Java?</h3>

        <p
          style={{
            color: "white",
            font: "700",
            fontWeight: "700",
            fontSize: "larger",
          }}
        >
          Java is a high-level, object-oriented programming language designed to
          have as few implementation dependencies as possible. Known for its
          "Write Once, Run Anywhere" capability, Java powers millions of
          applications worldwide.
        </p>
        <br />
        <center>
          <h1 style={{ color: "white", fontWeight: "700" }}>
            How to Get Started?
          </h1>
        </center>
        <br />
        <h3 style={{ color: "white", fontWeight: "700" }}>
          Step 1 : Install Java
        </h3>
        <br />
        <h5
          style={{
            transform: "translate(10px , -190px)",
            color: "white",
            fontWeight: "700",
          }}
        >
          Download Java Development Kit (JDK)
          <a
            style={{ marginLeft: "10px" }}
            href="https://www.oracle.com/in/java/technologies/downloads/#jdk23-windows"
            target="_blank"
            rel="noopener noreferrer"
          >
            JDK
          </a>
          <img
            src={jdk}
            alt=""
            style={{
              height: "400px",

              width: "603px",
              borderRadius: "10px",

              transform: "translate(300px, 120px)",
            }}
          />
        </h5>
        <br />
        <h3
          style={{
            transform: "translate(10px , -350px)",
            color: "white",
            fontWeight: "700",
          }}
        >
          Step 2 : Set Up IDE
        </h3>
        <h5
          style={{
            transform: "translate(10px , -330px)",
            color: "white",
            fontWeight: "700",
          }}
        >
          Recommended IDEs: IntelliJ IDEA, Eclipse, NetBeans.
        </h5>
        <br />
        <h3
          style={{
            transform: "translate(10px , -200px)",
            color: "white",
            fontWeight: "700",
          }}
        >
          Step 3 : Learn & Practice
        </h3>
        <br />
        <h1
          style={{
            transform: "translateY(-200px)",
            color: "white",
            fontWeight: "700",
          }}
        >
          <center>Let's get Started..</center>
        </h1>
        <br />
        <div
          className="first"
          style={{ marginTop: "-200px", color: "white", fontWeight: "700" }}
        >
          <h3>1.) Print Hello World</h3>
          <section>
            <center>
              <h1 style={{ color: "white", fontWeight: "700" }}>
                Example Code
              </h1>
            </center>
            <button className="button" onClick={copyCode}>
              Copy
            </button>
            <pre>
              <code className="language-java">
                {`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`}
              </code>
            </pre>
          </section>
        </div>
        <br />
        <div
          className="second"
          style={{
            marginLeft: "800px",
            marginTop: "-360px",
            color: "white",
            fontWeight: "700",
          }}
        >
          <h3> 2.) Variables and Data Types :-</h3>
          <h5>Data Types</h5>
          <h6>Primitive: int, float, char, boolean, etc.</h6>
          <h6>Non-Primitive: Arrays, Classes, etc.</h6>
          <h2> ## Variable Declaration</h2>
          <section>
            <center>
              <h1 style={{ color: "black" }}>Example Code</h1>
            </center>
            <button className="button" onClick={copyCode}>
              Copy
            </button>
            <pre>
              <code className="language-java">
                {`public class HelloWorld {
    public static void main(String[] args) {
        int age = 16;
        float price = 9.99f;
        char grade = 'A';
        boolean isJavaFun = true;
    }
}`}
              </code>
            </pre>
          </section>
        </div>
        <br />
        <div
          className="third"
          style={{ marginTop: "20px", color: "white", fontWeight: "700" }}
        >
          <h2>3.) Control Statements</h2>
          <h5>Decision Making</h5>
          <h6>If - else Statement</h6>
          <section>
            <button onClick={copyCode} className="button">
              Copy
            </button>
            <pre>
              <code className="language-java">
                {`public class HelloWorld {
    public static void main(String[] args) {
        int number = 10;
        if (number > 0) {
            System.out.println("Positive number");
        } else {
            System.out.println("Negative number");
        }
    }
}`}
              </code>
            </pre>
          </section>
        </div>
        <br />

        <div
          className="fourth"
          style={{
            marginLeft: "800px",
            marginTop: "-450px",
            color: "white",
            fontWeight: "700",
          }}
        >
          <h1>4.) Switch Statement</h1>
          <section>
            <button onClick={copyCode} className="button">
              Copy
            </button>
            <pre>
              <code className="language-java">
                {`public class HelloWorld {
public static void main(String[] args) {
int day = 2;
switch (day) {
case 1:
    System.out.println("Monday");
    break;
case 2:
    System.out.println("Tuesday");
    break;
default:
    System.out.println("Other day");
}
}
}`}
              </code>
            </pre>
          </section>
        </div>

        <div className="fifth" style={{ color: "white", fontWeight: "700" }}>
          <h1>5.) Inputs in Java</h1>
          <h6>Use Scanner class for reading user input:</h6>
          <section>
            <button onClick={copyCode} className="button">
              Copy
            </button>
            <pre>
              <code className="language-java">
                {`import java.util.Scanner;

public class InputExample {
public static void main(String[] args) {
Scanner scanner = new Scanner(System.in);

System.out.println("Enter your name: ");
String name = scanner.nextLine();

System.out.println("Enter your age: ");
int age = scanner.nextInt();

System.out.println("Name: " + name + ", Age: " + age);
}
}`}
              </code>
            </pre>
          </section>
        </div>

        <div
          className="sixth"
          style={{
            marginLeft: "800px",
            marginTop: "-540px",
            color: "white",
            fontWeight: "700",
          }}
        >
          <h1> 6.) Practice Examples</h1>
          <h6>Simple Calculator</h6>
          <section>
            <button onClick={copyCode} className="button">
              Copy
            </button>
            <pre>
              <code className="language-java">
                {`import java.util.Scanner;

public class Calculator {
public static void main(String[] args) {
Scanner scanner = new Scanner(System.in);

System.out.println("Enter first number: ");
int num1 = scanner.nextInt();

System.out.println("Enter second number: ");
int num2 = scanner.nextInt();

int sum = num1 + num2;
System.out.println("Sum: " + sum);
}
}`}
              </code>
            </pre>
          </section>
        </div>
      </div>

      <br />
      <br />
    </>
  );
};

export default Java;
