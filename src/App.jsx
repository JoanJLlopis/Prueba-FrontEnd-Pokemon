import './App.css';
import {Routes, Route} from 'react-router-dom';
import MainView from './components/MainView';
import CardView from './components/CardView';

function App() {
  return (
  <Routes>
    <Route path='/' element={<MainView />}>
      <Route index element={<CardView/>} />
    </Route>
  </Routes>  
  );
}

export default App;
