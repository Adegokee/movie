import MovieReview from './MovieContext';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import Banner from './components/Banner';
import React, {useState} from 'react';

function App() {
  const [theme, setTheme] = useState('dark')
const myTheme = () => {
  setTheme(theme === 'dark' ? 'light' : 'dark');
}

  return (
 <div className={theme}>
    
  <div>
  <button onClick={myTheme}>{theme === 'dark' ? 'light': 'dark'}</button>
  <MovieReview>
      
      <Form />
      <Banner/>
   <List />
    </MovieReview>
  </div>
 </div>
  );
}

export default App;
