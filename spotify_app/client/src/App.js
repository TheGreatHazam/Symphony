import './App.css';
import Login from "./Login";
import Dashboard from "./Dashboard";

const code = new URLSearchParams(window.location.search).get('code') //fetch code from URL after login.js

function App() {
  return (
      //pass code to Dashboard. code is retrieved after the question mark
    <div className = "app">
        {code ? <Dashboard code = {code} />:<Login />}
    </div>
  );
}

export default App;
