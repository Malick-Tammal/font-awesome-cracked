import SyntaxHighlighter from "react-syntax-highlighter";
import { agate } from "react-syntax-highlighter/dist/esm/styles/hljs";

function app() {
  const codeBlock = `<link rel="stylesheet" href="https://curious-sawine-c94b34.netlify.app/css/fontawesome.css"/>`;
  return (
    <>
      <div className="container">
        <div className="main">
          <h1>
            <i className="fa-solid fa-font-awesome"></i> font awesome (cracked)
            <i className="fa-solid fa-user-hoodie"></i>
          </h1>
          <div className="code_container">
            <div className="code">
              <SyntaxHighlighter language="html" style={agate}>
                {codeBlock}
              </SyntaxHighlighter>
            </div>
            <div
              className="copy"
              onClick={() => {
                const textArea = document.createElement("textarea");
                textArea.value = codeBlock;
                document.body.appendChild(textArea);
                textArea.select();
                textArea.setSelectionRange(0, 99999);
                try {
                  document.execCommand("copy");
                  console.log("Code copied!");
                } catch (err) {
                  console.log(`Failed to copy code err : ${err}`);
                }
                document.body.removeChild(textArea);
              }}
            >
              <i className="fa-solid fa-copy"></i>
            </div>
          </div>
        </div>
        <footer>
          <p>
            sorry <i className="fa-solid fa-heart-half-stroke"></i> font awesome{" "}
            <i className="fa-solid fa-font-awesome"></i>
          </p>
        </footer>
      </div>
    </>
  );
}

export default app;
