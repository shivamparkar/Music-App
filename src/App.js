import './App.css';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import Mainlayout from './layouts/Mainlayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainlayout />} />
    </Routes>
  );
}

export default App;
