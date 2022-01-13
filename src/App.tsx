import { Component, ReactNode } from 'react';
import FieldPersonal from './components/fieldsets/FieldPersonal/FieldPersonal';

class App extends Component {
  render(): ReactNode {
    return (
      <div>
        <FieldPersonal />
      </div>
    );
  }
}

export default App;
