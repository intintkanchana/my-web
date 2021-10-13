import Navbar from './component/navbar/navbar'
import Home from './component/home/home';
import Profile from './component/profile/profile';
import Skills from './component/skills/skills';
import Education from './component/education/education';
import Footer from './component/footer/footer';

function App() {
  return (
    <div className="App">
      <div id="navbar"><Navbar/></div>
      <div id="home"><Home/></div>
      <div id="profile"><Profile/></div>
      <div id="skills"><Skills/></div>
      <div id="education"><Education/></div>
      <div id="footer">
        aergneb
      <Footer/> 
      </div>
    </div>
  );
}

export default App;
