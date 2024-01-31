import { useEffect, useState } from 'react'
import './App.css';

const dictionaryData = [

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

]


function App() {
  const [searchText, setSearchText] = useState("");
  const [meaning, setMeaning] = useState("");
  const [isFound, setIsFound] = useState(false)

  const findMeaning = (searchText) => {
    const wordMeaning = dictionaryData.find(
      (data) => data.word.toLowerCase() == searchText);

      if(wordMeaning != undefined){
        setMeaning(wordMeaning.meaning)
      }
  }

  const handleChange = (e) => {
    setSearchText(e.target.value);
    findMeaning(e.target.value)
  }

const handleSubmit = () => {
  findMeaning(searchText);
  if(meaning == ""){
    setIsFound(true);
  }
}
 



  return (
    <div>
      <h1>Dictionary App</h1>
      <input type="text" onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>Search</button>
      <h5>Definition:</h5>
      {meaning != "" ? (
        <p>{meaning}</p>
      ) : isFound ? (
        <p>Word not found in the dictionary.</p> 
        ) : ""}
    </div>
  )
}

export default App
