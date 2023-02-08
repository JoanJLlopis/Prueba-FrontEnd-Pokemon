import './App.css';
import {Routes, Route} from 'react-router-dom';
import MainView from './components/MainView';
import CardView from './components/CardView';
import ListView from './components/ListView';
import DetailView from './components/DetailView';

function App() {
  return (
  <Routes>
    <Route path='/' element={<MainView />}>
      <Route index element={<CardView/>} />
      <Route path='/list' element={<ListView/>}/>
    </Route>
    <Route path='/details/:id' element={<DetailView/>}/>
  </Routes>  
  );
}

export default App;
