import { Component, ReactNode } from 'react';
import FieldEducation from './components/fieldsets/FieldEducation/FieldEducation';
import FieldExperience from './components/fieldsets/FieldExperience/FieldExperience';
import FieldPersonal from './components/fieldsets/FieldPersonal/FieldPersonal';

class App extends Component {
  render(): ReactNode {
    return (
      <div>
        <FieldPersonal />
        <FieldExperience />
        <FieldEducation />
      </div>
    );
  }
}

export default App;
