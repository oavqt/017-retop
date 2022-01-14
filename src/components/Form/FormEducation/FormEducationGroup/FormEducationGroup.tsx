import { Component, Fragment, ReactNode } from 'react';
import { ButtonRemove } from '../../../Utils/Button/Button';
import Input from '../../../Utils/Input/Input';
import Textarea from '../../../Utils/Textarea/Textarea';

class FormEducationGroup extends Component {
  render(): ReactNode {
    return (
      <Fragment>
        <Input attrs={{ placeholder: 'degree', type: 'text' }} />
        <Input attrs={{ placeholder: 'university', type: 'text' }} />
        <Input attrs={{ placeholder: 'date', type: 'text' }} />
        <Textarea attrs={{ placeholder: 'description' }} />
        <ButtonRemove attrs={{ type: 'button', value: 'remove' }}>
          delete
        </ButtonRemove>
      </Fragment>
    );
  }
}

export default FormEducationGroup;
