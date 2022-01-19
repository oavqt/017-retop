import { ReactNode } from 'react';
import Button from '../Button';
import ButtonExampleStyled from './ButtonExample.styled';

class ButtonExample extends Button {
  render(): ReactNode {
    return (
      <ButtonExampleStyled
        attrs={{ ...this.props.attrs }}
        onClick={this.props.event?.updateStateExampleEvent}
      >
        {this.props.children}
      </ButtonExampleStyled>
    );
  }
}

export default ButtonExample;
