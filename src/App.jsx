import './App.css';
import CardView from './components/CardView';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
  <Routes>
    <Route path='/' element={<CardView />}></Route>
  </Routes>  
  );
}

export default App;
