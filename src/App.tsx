import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReadNotif from './components/ReadNotif';
import UpdateNotif from './components/UpdateNotif';
import ParentHeaderNavBar from './components/ParentHeadNavbar';


function App() {

  return (
    <Router>
      <Routes>

        <Route path='/notif' element={<ReadNotif />} />
        <Route path='/editNotif' element={<UpdateNotif />} />

      </Routes>
    </Router>

  );
}

export default App;
