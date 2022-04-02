import logo from './logo.svg';
import './App.css';
import Interface from './Components/Interface';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
            <h3 className=''>League Of Stone</h3>
        </nav>
        <Interface />
      </div>
  );
}

export default App;
