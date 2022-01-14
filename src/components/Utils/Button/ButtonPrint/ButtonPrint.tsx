import { ReactNode } from 'react';
import Button from '../Button';
import ButtonPrintStyled from './ButtonPrint.styled';

class ButtonPrint extends Button {
  render(): ReactNode {
    return <ButtonPrintStyled {...this.props} />;
  }
}

export default ButtonPrint;
