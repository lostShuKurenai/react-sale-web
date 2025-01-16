import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import c from "../Images/cplus.png"

const CppTutorial = () => {
  const firstExample = `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`;

  const secondExample = `#include <iostream>
using namespace std;

int main() {
    int age = 25;
    string name = "Alice";
    cout << "Name: " << name << ", Age: " << age << endl;
    return 0;
}`;

  const thirdExample = `#include <iostream>
using namespace std;

int main() {
    int number = 10;
    if (number > 0) {
        cout << "Positive number" << endl;
    } else {
        cout << "Negative number" << endl;
    }
    return 0;
}`;

  const fourthExample = `#include <iostream>
using namespace std;

int main() {
    for (int i = 0; i < 5; i++) {
        cout << "Iteration: " << i << endl;
    }
    return 0;
}`;

  const fifthExample = `#include <iostream>
using namespace std;

int main() {
    int num1, num2;
    cout << "Enter first number: ";
    cin >> num1;
    cout << "Enter second number: ";
    cin >> num2;
    cout << "Sum: " << num1 + num2 << endl;
    return 0;
}`;

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
  };

  return (
 <div
            className="background"
            style={{
              backgroundImage: `url(${c})`, // Use the imported bg image here
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
              width: "100%",
              filter:" brightness(80%)",
              color: "black", // Change text color to black
            }}
          >

    <div style={{ padding: "30px", maxWidth: "1200px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Learn C++ Programming
      </h1>
      
      <h2 style={{marginBottom:"100px"
        , color:"white"
      }}>
   
        C++ is a powerful, high-performance programming language. Let's dive
        into learning it step-by-step!
   
      </h2>

  <div className="first"
style={{marginLeft:"-150px"}}
  >
    
  <div style={{ marginBottom: "40px" }}>
        <h2 style={{  marginBottom: "20px" }}>
          1. Hello World Program
        </h2>
        <section
          style={{
            backgroundColor: "#f4f4f4",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginBottom: "20px",
          }}
        >
          <button
            onClick={() => copyToClipboard(firstExample)}
            style={{
              padding: "8px 20px",
              cursor: "pointer",
              borderRadius: "5px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              marginBottom: "15px",
            }}
          >
            Copy
          </button>
          <pre
            style={{
              padding: "15px",
              backgroundColor: "#272822",
              borderRadius: "5px",
              color: "#f8f8f2",
            }}
          >
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
              {firstExample}
            </SyntaxHighlighter>
          </pre>
        </section>
      </div>
  </div>

<br />

<div className="second"
style={{ marginTop:"-500px" , marginLeft:"600px"}}
>
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{  marginBottom: "20px" }}>
          2. Variables and Data Types
        </h2>
        <section
          style={{
            backgroundColor: "#f4f4f4",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginBottom: "20px",
          }}
        >
          <button
            onClick={() => copyToClipboard(secondExample)}
            style={{
              padding: "8px 20px",
              cursor: "pointer",
              borderRadius: "5px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              marginBottom: "15px",
            }}
          >
            Copy
          </button>
          <pre
            style={{
              padding: "15px",
              backgroundColor: "#272822",
              borderRadius: "5px",
              color: "#f8f8f2",
            }}
          >
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
              {secondExample}
            </SyntaxHighlighter>
          </pre>
        </section>
      </div>
      </div>

      <br />

<div className="third"
style={{marginLeft:"-150px"}}
>
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ marginBottom: "20px" }}>
          3. Conditional Statements
        </h2>
        <section
          style={{
            backgroundColor: "#f4f4f4",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginBottom: "20px",
          }}
        >
          <button
            onClick={() => copyToClipboard(thirdExample)}
            style={{
              padding: "8px 20px",
              cursor: "pointer",
              borderRadius: "5px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              marginBottom: "15px",
            }}
          >
            Copy
          </button>
          <pre
            style={{
              padding: "15px",
              backgroundColor: "#272822",
              borderRadius: "5px",
              color: "#f8f8f2",
            }}
          >
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
              {thirdExample}
            </SyntaxHighlighter>
          </pre>
        </section>
      </div>
      </div>
      <br />
<div className="fourth"
style={{ marginTop:"-620px" , marginLeft:"600px"}}
>
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{  marginBottom: "20px" }}>
          4. Loops in C++
        </h2>
        <section
          style={{
            backgroundColor: "#f4f4f4",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginBottom: "20px",
          }}
        >
          <button
            onClick={() => copyToClipboard(fourthExample)}
            style={{
              padding: "8px 20px",
              cursor: "pointer",
              borderRadius: "5px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              marginBottom: "15px",
            }}
          >
            Copy
          </button>
          <pre
            style={{
              padding: "15px",
              backgroundColor: "#272822",
              borderRadius: "5px",
              color: "#f8f8f2",
            }}
          >
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
              {fourthExample}
            </SyntaxHighlighter>
          </pre>
        </section>
      </div>
      </div>
      <br />
      <div className="fifth"
          style={{marginLeft:"300px"
            , marginTop:"100px"
          }}
      >
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{  marginBottom: "20px" }}>
          5. Getting User Input
        </h2>
        <section
          style={{
            backgroundColor: "#f4f4f4",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginBottom: "20px",
          }}
        >
          <button
            onClick={() => copyToClipboard(fifthExample)}
            style={{
              padding: "8px 20px",
              cursor: "pointer",
              borderRadius: "5px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              marginBottom: "15px",
            }}
          >
            Copy
          </button>
          <pre
            style={{
              padding: "15px",
              backgroundColor: "#272822",
              borderRadius: "5px",
              color: "#f8f8f2",
            }}
          >
            <SyntaxHighlighter language="cpp" style={solarizedlight}>
              {fifthExample}
            </SyntaxHighlighter>
          </pre>
        </section>
      </div>
      </div>
    </div>
     </div>
  );
};

export default CppTutorial;
