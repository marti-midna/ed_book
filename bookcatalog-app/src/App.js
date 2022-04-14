
import './App.css';
import { BookCard } from './components/BookCard';
import { Header } from './components/Header';
import { data } from './data/data.js';

function App() {
  return (
    <div className="App">
      <Header 
        voce1="Home"
        voce2="Novità"
        voce3="Shop"
        voce4="Contatti"
        ></Header>


      <div className='main'>

        {data.products.map((item) => (
          <BookCard 
          key = {item.id}
          name = {item.name} 
          img= {item.img} 
          description={item.description}
          >
          </BookCard>
        ))}
        
      </div>

    </div>
  );
}

export default App;
