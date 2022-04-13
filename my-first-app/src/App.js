import './App.css';
import { Header } from './components/Header';
import { Description } from './components/Description';
import { Footer } from './components/Footer';
import { Esperienze } from './components/Esperienze';
import { Lingue } from './components/Lingue';
import { Hobby } from './components/Hobby';
import { Form } from './components/Form';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Description></Description>
      <div className='main'>
        <Esperienze></Esperienze>
        <Lingue></Lingue>
        <Hobby></Hobby>
      </div>
      <div className='form_contattami'>
        <Form></Form>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
