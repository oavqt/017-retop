import { ReactNode } from 'react';
import Button from '../Button';
import ButtonPrintStyled from './ButtonPrint.styled';

class ButtonPrint extends Button {
  render(): ReactNode {
    return (
      <ButtonPrintStyled attrs={{ ...this.props.attrs }}>
        {this.props.children}
      </ButtonPrintStyled>
    );
  }
}

export default ButtonPrint;
