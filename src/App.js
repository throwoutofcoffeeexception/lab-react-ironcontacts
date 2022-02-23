import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import contactData from "./contacts.json";
import contacts from "./components/contacts";
import header from "./components/header";

function App() {
  const [contact, setContact] = useState(contactData);

  return (
    <div className="App">
      {
          contacts.map( (element, index) => {
          return (
            <contact 
              picture={element.id} 
              name={element.title} 
              popularity={element.year} 
            />
          )
          }
        )}
        </div>
  )
};

export default App;