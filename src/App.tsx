import { Component, ReactNode } from 'react';
import FieldExperience from './components/fieldsets/FieldExperience/FieldExperience';
import FieldPersonal from './components/fieldsets/FieldPersonal/FieldPersonal';

class App extends Component {
  render(): ReactNode {
    return (
      <div>
        <FieldPersonal />
        <FieldExperience />
      </div>
    );
  }
}

export default App;
