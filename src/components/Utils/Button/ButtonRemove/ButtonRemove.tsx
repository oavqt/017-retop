import { ReactNode } from 'react';
import Button from '../Button';
import ButtonRemoveStyled from './ButtonRemove.styled';

class ButtonRemove extends Button {
  render(): ReactNode {
    return <ButtonRemoveStyled {...this.props} />;
  }
}

export default ButtonRemove;
