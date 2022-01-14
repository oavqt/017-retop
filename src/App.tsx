import { Component, ReactNode } from 'react';
import Resume from './components/Resume/Resume';

class App extends Component {
  render(): ReactNode {
    return (
      <div>
        <Resume />
      </div>
    );
  }
}

export default App;
