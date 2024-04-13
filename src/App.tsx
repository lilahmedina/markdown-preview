import { useState } from 'react'
import './App.css'
import ReactMarkdown from "react-markdown";


//markdown content
const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:


You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)


> “If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.”
― Marcus Aurelius, Meditations 


![react logo](https://i.postimg.cc/Bv9y8sBZ/react-logo.png)


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