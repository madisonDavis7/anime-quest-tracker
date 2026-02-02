import './App.css';
import Home from './pages/Home/Home';
import Taskbar from './components/Taskbar/Taskbar';

function App() {
  return (
    <div className="App">
      <Taskbar
        items={[
          { label: 'Login', href: '#' },
          { label: 'Sign Up', href: '#' }
        ]}
      />
      <header className="App-header">
        < Home/>
      </header>
    </div>
  );
}

export default App;
