import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sub from './pages/Sub';
import TopHeader from './pages/TopHeader';
import Detail from './pages/Detail';
import BottomFooter from './pages/BottomFooter';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopHeader />

        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/sub' element={<Sub />} />
          <Route path='/detail' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
