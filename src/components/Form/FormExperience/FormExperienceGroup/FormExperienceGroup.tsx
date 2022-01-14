import { Component, Fragment, ReactNode } from 'react';
import { ButtonRemove } from '../../../Utils/Button/Button';
import Input from '../../../Utils/Input/Input';
import Textarea from '../../../Utils/Textarea/Textarea';

class FormExperienceGroup extends Component {
  render(): ReactNode {
    return (
      <Fragment>
        <Input attrs={{ placeholder: 'title', type: 'text' }} />
        <Input attrs={{ placeholder: 'company', type: 'text' }} />
        <Input attrs={{ placeholder: 'date', type: 'text' }} />
        <Textarea attrs={{ placeholder: 'description' }} />
        <ButtonRemove attrs={{ type: 'button', value: 'remove' }}>
          delete
        </ButtonRemove>
      </Fragment>
    );
  }
}

export default FormExperienceGroup;
