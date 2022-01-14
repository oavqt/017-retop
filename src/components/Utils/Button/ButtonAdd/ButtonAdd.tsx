import { ReactNode } from 'react';
import Button from '../Button';
import ButtonAddStyled from './ButtonAdd.styled';

class ButtonAdd extends Button {
  render(): ReactNode {
    return <ButtonAddStyled {...this.props} />;
  }
}

export default ButtonAdd;
