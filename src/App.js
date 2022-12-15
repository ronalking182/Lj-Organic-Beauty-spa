
import './App.css'
import NavBar from './components/navigation/nav-bar';
import FooterBar from './components/footer/footer'
import AnimatedRoutes from './components/routes/animated-routes';

import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <div >
      <Router >
    <NavBar/>
     <AnimatedRoutes/>
    <FooterBar/>
    </Router>
    </div>
  );
}

export default App;



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
