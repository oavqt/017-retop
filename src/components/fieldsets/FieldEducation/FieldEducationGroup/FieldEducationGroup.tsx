import { Component, Fragment, ReactNode } from 'react';
import Input from '../../../elements/Input/Input';
import Textarea from '../../../elements/Textarea/Textarea';

class FieldEducationGroup extends Component {
  render(): ReactNode {
    return (
      <Fragment>
        <Input attrs={{ placeholder: 'degree', type: 'text' }} />
        <Input attrs={{ placeholder: 'university', type: 'text' }} />
        <Input attrs={{ placeholder: 'date', type: 'text' }} />
        <Textarea attrs={{ placeholder: 'description' }} />
      </Fragment>
    );
  }
}

export default FieldEducationGroup;
