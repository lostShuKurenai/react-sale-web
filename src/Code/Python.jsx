import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import py from "../Images/py.jpg"
const Python = () => {
  const first = `print("Hello, World!")`;
  const second = `print("Hello, New World!")`;
  const third = `age = 16            # int
height = 5.8        # float
name = "Alice"      # str
is_student = True   # bool
`;
  const fourth = `num = 10
if num > 0:
    print("Positive number")
else:
    print("Non-positive number")
`;

  const fifth = `day = 3
if day == 1:
    print("Monday")
elif day == 2:
    print("Tuesday")
else:
    print("Other day")
`;

  const sixth = `num = int(input("Enter a number: "))
if num % 2 == 0:
    print("Even")
else:
    print("Odd")
`;

  const seven = `num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
sum = num1 + num2
print(f"Sum: {sum}")
`;
// const py = "https://static.vecteezy.com/system/resources/thumbnails/005/170/899/small_2x/python-programming-language-programing-workflow-abstract-algorithm-concept-on-virtual-screen-photo.jpg"
  return (
      <div
            className="background"
            style={{
              backgroundImage: `url(${py})`, // Use the imported bg image here
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
              width: "100%",
              filter:" brightness(80%)",
              color: "black", // Change text color to black
            }}
          >
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Learn Python with Ease</h1>
      <br />
      <h3>What is Python?</h3>
      <p>
        Python is a high-level, interpreted programming language known for its
        simplicity and readability. It is versatile and widely used for web
        development, data science, automation, and many other fields.
      </p>

      <center>
        <h1>Setting Up Python</h1>
      </center>

      <div className="card" style={{ marginBottom: "20px", padding: "15px" }}>
        <h3>Step 1 : Install Python</h3>
        <h5>
          Install Python
          <a
            style={{ marginLeft: "10px" }}
            href="https://www.python.org/downloads/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Python
          </a>
        </h5>
      </div>

      <div className="card" style={{ marginBottom: "20px", padding: "15px" }}>
        <h3>Step 2 : Set Up IDE</h3>
        <h5>Recommended IDEs: IntelliJ IDEA, Eclipse, NetBeans.</h5>
      </div>

      <div className="card" style={{ marginBottom: "20px", padding: "15px" }}>
        <h3>Step 3 : Learn & Practice</h3>
      </div>

      <center style={{ marginBottom: "100px" }}>
        <h1>Let's get Started..</h1>
      </center>

      <div className="first" style={{}}>
        <h1>1.)Your First Python Program</h1>
        <section className="card" style={{ padding: "15px" }}>
          <center>
            <h2>Example Code</h2>
          </center>
          <button
            className="button"
            onClick={() => navigator.clipboard.writeText(first)}
            style={{
              marginBottom: "10px",
              padding: "5px 15px",
              cursor: "pointer",
              borderRadius: "5px",
              backgroundColor: "#4CAF50",
              transform: "translate(500px ,0px)",
              width: "100px",
              color: "white",
              border: "none",
            }}
          >
            Copy
          </button>
          <pre>
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {first}
            </SyntaxHighlighter>
          </pre>
        </section>
      </div>
      <br />

      <div
        className="second"
        style={{ marginTop: "-360px", marginLeft: "750px" }}
      >
        <h1>2.)What are Variables and Data Types ?</h1>
        <h3>What are Variables?</h3>
        <h5>
          A variable is used to store values that can be referenced and
          manipulated.
        </h5>

        <section className="card" style={{ padding: "15px" }}>
          <center>
            <h2>Example Code</h2>
          </center>
          <button
            className="button"
            onClick={() => navigator.clipboard.writeText(second)}
            style={{
              marginBottom: "10px",
              padding: "5px 15px",
              cursor: "pointer",
              borderRadius: "5px",
              backgroundColor: "#4CAF50",
              width: "100px",
              transform: "translateX(500px)",
              color: "white",
              border: "none",
            }}
          >
            Copy
          </button>
          <pre>
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {second}
            </SyntaxHighlighter>
          </pre>
        </section>
      </div>
      <br />

      <div className="third" style={{ marginTop: "-10px" }}>
        <h1>3.)Data Types In Python</h1>
        <h5>Numeric Types</h5>
        <p>int: Integer numbers (whole numbers)</p>
        <p>float: Decimal numbers (e.g., 3.14)</p>
        <h6>Text Types :</h6>
        <p>str: A sequence of characters (e.g., "Hello")</p>
        <h6>Boolean Type:</h6>
        <p>bool: True or False</p>
        <h6>List Type:</h6>
        <p>A collection of items (e.g., [1, 2, 3, 4])</p>
        <h4>Examples of Data Types:</h4>

        <section className="card" style={{ padding: "15px" }}>
          <center>
            <h2>Example Code</h2>
          </center>
          <button
            className="button"
            onClick={() => navigator.clipboard.writeText(third)}
            style={{
              marginBottom: "10px",
              padding: "5px 15px",
              cursor: "pointer",
              borderRadius: "5px",
              backgroundColor: "#4CAF50",
              width: "100px",
              transform: "translateX(500px)",
              color: "white",
              border: "none",
            }}
          >
            Copy
          </button>
          <pre>
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {third}
            </SyntaxHighlighter>
          </pre>
        </section>
      </div>

      <br />
      <div
        className="fourth"
        style={{ marginTop: "-750px", marginLeft: "750px" }}
      >
        <h2>4.)Control Flow : Conditional Statements</h2>
        <h4>if-else Statement</h4>
        <h5>Example:</h5>

        <section className="card" style={{ padding: "15px" }}>
          <center>
            <h2>Example Code</h2>
          </center>
          <button
            className="button"
            onClick={() => navigator.clipboard.writeText(fourth)}
            style={{
              marginBottom: "10px",
              padding: "5px 15px",
              cursor: "pointer",
              borderRadius: "5px",
              backgroundColor: "#4CAF50",
              width: "100px",
              transform: "translateX(500px)",
              color: "white",
              border: "none",
            }}
          >
            Copy
          </button>
          <pre>
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {fourth}
            </SyntaxHighlighter>
          </pre>
        </section>
      </div>

      <br />
      <br />

      <div className="fifth" style={{ marginTop:'250px'}}>
        <h1>Another Example:</h1>

        <section className="card" style={{ padding: "15px" }}>
          <center>
            <h2>Example Code</h2>
          </center>
          <button
            className="button"
            onClick={() => navigator.clipboard.writeText(fifth)}
            style={{
              marginBottom: "10px",
              padding: "5px 15px",
              cursor: "pointer",
              borderRadius: "5px",
              width: "100px",
              transform: "translateX(500px)",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
            }}
          >
            Copy
          </button>
          <pre>
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {fifth}
            </SyntaxHighlighter>
          </pre>
        </section>
      </div>

      
      <div
        className="sixth"
        style={{ marginLeft:"750px" , marginTop:"-700px" }}
      >
        <h1>5.) Practice Problems</h1>
        <h4>Problem 1 : Odd or Even</h4>

        <section className="card" style={{ padding: "15px" }}>
          <center>
            <h2>Example Code</h2>
          </center>
          <button
            className="button"
            onClick={() => navigator.clipboard.writeText(sixth)}
            style={{
              marginBottom: "10px",
              padding: "5px 15px",
              cursor: "pointer",
              borderRadius: "5px",
              backgroundColor: "#4CAF50",
              color: "white",
              width: "100px",
              transform: "translateX(500px)",
              border: "none",
            }}
          >
            Copy
          </button>
          <pre>
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {sixth}
            </SyntaxHighlighter>
          </pre>
        </section>
      </div>

      <div
        className="seventh"
        style={{ marginTop:"300px" , marginLeft:"500px" , marginBottom:"100px" }}
      >
        <h1>Problem 2 : Simple Calculator</h1>

        <section className="card" style={{ padding: "15px" }}>
          <center>
            <h2>Example Code</h2>
          </center>
          <button
            className="button"
            onClick={() => navigator.clipboard.writeText(seven)}
            style={{
              marginBottom: "10px",
              padding: "5px 15px",
              cursor: "pointer",
              borderRadius: "5px",
              width: "100px",
              transform: "translateX(500px)",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
            }}
          >
            Copy
          </button>
          <pre>
            <SyntaxHighlighter language="python" style={solarizedlight}>
              {seven}
            </SyntaxHighlighter>
          </pre>
        </section>
      </div>
    </div>
    </div>
  );
};

export default Python;
