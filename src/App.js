import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>VERDULERIA</header>
      <div className="list">
        <h1>Carrito:</h1>
        <div className="list-item">
          <span>Bananas 🍌</span>
          <div className="list-item-info">
            <input value={4} />
            <span>$15 c/u</span>
          </div>
        </div>
        <div className="list-item">
          <span>Manzanas 🍎</span>
          <div className="list-item-info">
            <input value={6} />
            <span>$10 c/u</span>
          </div>
        </div>
        <div className="list-item">
          <span>Sandia 🍉</span>
          <div className="list-item-info">
            <input value={1} />
            <span>$60 c/u</span>
          </div>
        </div>
        <div className="list-item">
          <span>Kiwi 🥝</span>
          <div className="list-item-info">
            <input value={5} />
            <span>$20 c/u</span>
          </div>
        </div>
        <div className="total-info">
            <span>16</span>
            <span>$280</span>
        </div>
      </div>
    </div>
  );
}

export default App;
