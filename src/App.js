import './App.css';
import Header from './components/Header';
import AtAGlance from './components/AtAGlance';
import ActionBar from './components/ActionBar';
import GuestsTable from './components/GuestsTable';
import PaginationFooter from './components/PaginationFooter';


function App() {
  return (
    <div className="app">
      <Header />
      <AtAGlance />
      <ActionBar />
      <div className="guests-container">
        <h2>Guests List</h2>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search" 
            className="search-input" 
          />
        </div>
        <GuestsTable />
        <PaginationFooter />
      </div>
    </div>
  );
}

export default App;
