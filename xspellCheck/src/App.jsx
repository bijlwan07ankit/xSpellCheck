import { useState } from 'react'


function App() {
  const [inputText, setInputText] = useState("");
  const [suggestedText, setSuggestedText] = useState("");
const customDictionary ={
  teh:"the",
  wrok:"work",
  fot:"for",
  exampl:"example"
}

function handlechange(e){
  const text=e.target.value;
  setInputText(text);
  //impliment a basic spelling check 

}

  return (
    <>
    <h1>Spell Check And Auto-Correction </h1>
    <textArea
    value=" "
    onChnage={handlechange}
    placeholder="Enter Text..."
    row={5}
    cols={40}
   
    />
    {suggestedText &&(
      <p>
        Did you mean :<strong>(suggestedText)</strong>?
      </p>
    )}
    </>
  )
}


export default App
