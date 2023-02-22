import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import './index.css'


function App() {
  
  return (
    <>
    <div className=" row mx-4 mt-5" >
      <div className="col-xs-4 offset-sm-2 col-sm-12 offset-md-4 col-md-12 offset-lg-6 col-lg-12 offset-xl-8 col-xl-12">
    <section className="todoapp">
      <Header></Header>
      <Content></Content>
    </section>
    <Footer></Footer>
    </div>
    </div>
    </>
    
  );
}

export default App;
