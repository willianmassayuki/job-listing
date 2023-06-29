import Header from './components/Header';
import Busca from './components/Busca';
import './styles/app.scss';

function App() {
   return (
    <>
    <div className="body">
      <Header />
      <div>
        <Busca />
      </div>      
    </div>
    </>
  )
}

export default App
