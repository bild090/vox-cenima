import './App.css'

import Header from "./components/Header";
import Search from "./components/Search";
import MoveList from "./components/MoveList";

function App() {
  return (
    <div className="App">
      <div className="container text-center">
        <Header />
        <Search />
        <MoveList />
      </div>
    </div>
  );
}

export default App;
