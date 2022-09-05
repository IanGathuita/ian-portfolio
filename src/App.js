import Header from './Components/Header/Header';
import './App.css';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';

function App() {
  return (    
    <div className="App">
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
    </div>
    
  );
}

export default App;
