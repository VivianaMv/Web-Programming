import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1 > this is h1</h1>
      </header>
      <main>
        <p>this is my first para</p>
      </main>
      <button className="b1">   My first button     </button>
      <button className="b2">   My Second button    </button>
      <button className="b3">     My Third button     </button>

      <table className="tableclass">
        <tr>
          <th>Name   </th>
          <th>Phone  </th>
        </tr>
        <tr>
          <td>Viviana   </td>
          <td>22222  </td>
        </tr>
        <tr>
        <td>Simon   </td>
          <td>3333  </td>
        </tr>
        <tr>
        <td>Pargol   </td>
          <td>44444  </td>
        </tr>
        </table>

        <ul className="listul">
          <li>Teacher1: Pargol</li>
          <li>Teacher2: Simon</li>
          <li>Teacher3: Marcos</li>
          <li>Teacher4: Silvia</li>
          <li>Teacher5:  Maina</li>

        </ul>
    </div>
  );
}

export default App;
// any js that y want to use i have to bahe export app

// everithing has to be in the same div, because is a container 