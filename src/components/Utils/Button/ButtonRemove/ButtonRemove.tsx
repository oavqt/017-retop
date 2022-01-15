import { ReactNode } from 'react';
import Button from '../Button';
import ButtonRemoveStyled from './ButtonRemove.styled';

class ButtonRemove extends Button {
  render(): ReactNode {
    return (
      <ButtonRemoveStyled attrs={{ ...this.props.attrs }}>
        {this.props.children}
      </ButtonRemoveStyled>
    );
  }
}

export default ButtonRemove;
