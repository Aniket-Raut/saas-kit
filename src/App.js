import logo from './logo.svg';
import './App.css';
import { Home } from './layout/Home';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Notification } from './components/NotificationBar';

function App() {
  return (
    <div className="App">
      <Notification></Notification>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
