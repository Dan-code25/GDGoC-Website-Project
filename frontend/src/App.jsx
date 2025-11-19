import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import ScrollToTop from './components/ScrollToTop.js';
import "./index.css"; 
import Discover from './pages/Discover/discover.jsx';
import Home from './pages/home/Home.jsx';
import Team from './pages/team-page/Team.jsx';
import Project from './pages/project-page/Project.jsx';
import MembershipClosed from './pages/MembershipClosed.jsx';
import Error404 from './pages/Error404.jsx';
import UnderConstruction from './pages/UnderConstruction.jsx';
import ChangePassword from './components/ChangePassword/ChangePassword.jsx';
import ChatbotOverlay from './components/chatbot/ChatBotOverlay.jsx';


function App() {
  return(
    <UserProvider>
      <Router>
        <ScrollToTop />
        <ChatbotOverlay/>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/project' element={<Project />} />
          <Route path='/team' element={<Team />} />
          <Route path='/discover' element={<Discover />} />
          <Route path='/Membership-Closed' element={<MembershipClosed />} />
          <Route path='/Error404' element={<Error404 />} />
          <Route path='/Under-Construction' element={<UnderConstruction />} />
          <Route path='/Change-Password' element={<ChangePassword />} />
          <Route path='*'element={<Error404 />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}


export default App
