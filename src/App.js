import logo from './logo.svg';
import './App.css';
import Profile from './component/profile/ProfilPhoto'
import Name from './component/profile/FullName'
import Adresse from './component/profile/Address'
function App() {
  return (
    <div className="App">
     <Profile/>
     <Name/>
     <br/>
     <Adresse/>
    </div>
  );
}

export default App;
