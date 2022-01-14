import { Component, Fragment, ReactNode } from 'react';
import { ButtonRemove } from '../../../elements/Button/Button';
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
        <ButtonRemove attrs={{ type: 'button', value: 'remove' }}>
          delete
        </ButtonRemove>
      </Fragment>
    );
  }
}

export default FieldExperienceGroup;
