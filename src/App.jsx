
import './App.css';
import MainLayOut from './layout/MainLayOut';
import {ErrorBoundary} from 'react-error-boundary';

function App() {
  return (
    <div>
   
      <ErrorBoundary fallback={<p>something is wrong</p>}>
        <MainLayOut />
      </ErrorBoundary>
    </div>
  );
}

export default App;
