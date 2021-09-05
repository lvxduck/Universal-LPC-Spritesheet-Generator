import './App.css';
import PreviewAnimations from './components/previewAnimations';
import Spritesheet from './components/spritesheet';

function App() {
  return (
    <div className="App">
      <div className="flex justify-center">
        <PreviewAnimations />
        <Spritesheet />
      </div>
    </div>
  );
}

export default App;
