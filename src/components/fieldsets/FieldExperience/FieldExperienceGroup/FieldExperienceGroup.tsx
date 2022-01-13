import { Component, Fragment, ReactNode } from 'react';
import Input from '../../../elements/Input/Input';
import Textarea from '../../../elements/Textarea/Textarea';

class FieldExperienceGroup extends Component {
  render(): ReactNode {
    return (
      <Fragment>
        <Input attrs={{ placeholder: 'title', type: 'text' }} />
        <Input attrs={{ placeholder: 'company', type: 'text' }} />
        <Input attrs={{ placeholder: 'date', type: 'text' }} />
        <Textarea attrs={{ placeholder: 'description' }} />
      </Fragment>
    );
  }
}

export default FieldExperienceGroup;
