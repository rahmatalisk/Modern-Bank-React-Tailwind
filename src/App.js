
import './App.css';
import About from './Components/Header/About';
import BankFamily from './Components/Header/BankFamily';
import BillInvoice from './Components/Header/BillInvoice';
import Card from './Components/Header/Card';
import Footer from './Components/Header/Footer';
import Headebanner from './Components/Header/Headebanner';
import Navbar from './Components/Header/Navbar';
import Services from './Components/Header/Services';

function App() {
  return (
    <div className="App ">
      <Navbar></Navbar>
      <Headebanner></Headebanner>
      <BankFamily></BankFamily>
      <Services></Services>
      <BillInvoice></BillInvoice>
      <Card></Card>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
