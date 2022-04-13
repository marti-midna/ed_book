import './App.css';

import { Header } from './components/Header';
import { Description } from './components/Description';
import { Footer } from './components/Footer';
import { VociMain } from './components/VociMain';


import { Form } from './components/Form';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Description></Description>
      <div className='main'>
        <VociMain title="Esperienze Lavorative"></VociMain>
        <VociMain title="Lingue"></VociMain>
        <VociMain title="Hobby"></VociMain>
      </div>
      <div className='contattami'>
        <Form></Form>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
