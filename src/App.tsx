import { useState } from 'react'
import './App.css'
import ReactMarkdown from "react-markdown";


//markdown content
const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... **_both!_**

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.

> “If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.”
― Marcus Aurelius, Meditations 

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)


Coded by **Delilah Medina**, 2024 for [freeCodeCamp](https://www.freecodecamp.org) Front End Libraries Challenges
`;


function App() {
  const [markdownText, setMarkdownText] = useState<string>(defaultMarkdown);

  return <>
  <div>
    <h1 style={{textAlign: "center"}}
    >Markdown Preview</h1>
    <div className="boxes-container">
      <textarea name="editor" id="editor" value={markdownText} onChange={(e) => setMarkdownText(e.target.value)}></textarea>
      <div id="preview">
        <ReactMarkdown>{markdownText}</ReactMarkdown>
      </div>
    </div>
  </div>
  </>;
  
}

export default App