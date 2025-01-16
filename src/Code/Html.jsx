import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import html from "../Images/html.jpg"
const Html = () => {
  const firstExample = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
  </html>`;

  const secondExample = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Form</title>
  </head>
  <body>
    <form action="#">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name"><br><br>
      <input type="submit" value="Submit">
    </form>
  </body>
  </html>`;

  const thirdExample = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML List</title>
  </head>
  <body>
    <ul>
      <li>Apple</li>
      <li>Banana</li>
      <li>Cherry</li>
    </ul>
  </body>
  </html>`;

  const fourthExample = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Table</title>
  </head>
  <body>
    <table border="1">
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>John</td>
        <td>25</td>
      </tr>
      <tr>
        <td>Alice</td>
        <td>30</td>
      </tr>
    </table>
  </body>
  </html>`;

  const fifthExample = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Link</title>
  </head>
  <body>
    <a href="https://www.example.com" target="_blank">Visit Example</a>
  </body>
  </html>`;

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
  };

  return (
    <div
    className="background"
    style={{
      backgroundImage: `url(${html})`, // Use the imported bg image here
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100%",
      width: "100%",
     
      color: "black", // Change text color to black
    }}
  >
    <div style={{ padding: "30px", maxWidth: "1200px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Learn HTML</h1>
      <p style={{ textAlign: "center", fontSize: "18px" }}>
        HTML is the standard markup language for documents designed to be
        displayed in a web browser.
      </p>
            
            <div className="first"
            style={{marginLeft:"-150px"}}
            >
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ marginBottom: "20px" }}>
          1. Basic HTML Structure
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
            <SyntaxHighlighter language="html" style={solarizedlight}>
              {firstExample}
            </SyntaxHighlighter>
          </pre>
        </section>
      </div>
</div>

<div className="second"
style={{ marginTop:"-560px" , marginLeft:"600px"}}
>
      <div style={{ marginBottom: "40px" }}>
        <h2 >
          2. HTML Form
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
            <SyntaxHighlighter language="html" style={solarizedlight}>
              {secondExample}
            </SyntaxHighlighter>
          </pre>
        </section>
      </div>
      </div>

      <div className="third"
        style={{marginLeft:"-150px"}}>
      <div style={{ marginBottom: "40px" }}>
        <h2 >
          3. HTML List
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
            <SyntaxHighlighter language="html" style={solarizedlight}>
              {thirdExample}
            </SyntaxHighlighter>
          </pre>
        </section>
      </div>
      </div>

      <div className="fourth"
      style={{ marginTop:"-650px" , marginLeft:"600px"}}
      >
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          4. HTML Table
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
            <SyntaxHighlighter language="html" style={solarizedlight}>
              {fourthExample}
            </SyntaxHighlighter>
          </pre>
        </section>
      </div>
      </div>
      <div className="fifth"
       style={{marginLeft:"300px"}}
      >
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          5. HTML Link
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
            <SyntaxHighlighter language="html" style={solarizedlight}>
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

export default Html;
