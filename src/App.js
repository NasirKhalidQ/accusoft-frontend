import './App.css';
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import NavBar from './NavBar';
import Landing from './Landing';

function App() {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
    <NavBar />
    <Landing />
    </>
  );
}

export default App;
