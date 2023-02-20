import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  
  return (
    <>
    <div className="position-absolute top-50 start-50 translate-middle mx-auto" style={{width:"40%"}}>
    <section className="todoapp">
      <Header></Header>
      <Content></Content>
    </section>
    <Footer></Footer>
    </div>
    </>
    
  );
}

export default App;
