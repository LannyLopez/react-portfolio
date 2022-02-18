import React, {useState} from 'react';
import './App.css';
import About from './components/About'
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState ([
    {name: 'Portfolio', description: 'All of my previous work to display my current knowledge'},
    {name: 'Resume', description: 'Current Resume'},
  ])
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Nav>
    
    <main>
      {!contactSelected ? (
  <>
    <Portfolio currentCategory={currentCategory}></Portfolio>
    <About></About>
  </>
) : (
    <ContactForm></ContactForm>
  )}
      </main>
    </div>
  );
}

export default App;
