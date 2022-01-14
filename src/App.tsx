import { Component, ReactNode } from 'react';
import FormEducation from './components/Form/FormEducation/FormEducation';
import FormExperience from './components/Form/FormExperience/FormExperience';
import FormPersonal from './components/Form/FormPersonal/FormPersonal';

class App extends Component {
  render(): ReactNode {
    return (
      <div>
        <FormPersonal />
        <FormExperience />
        <FormEducation />
      </div>
    );
  }
}

export default App;
