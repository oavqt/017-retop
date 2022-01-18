import { ReactNode } from 'react';
import Button from '../Button';
import ButtonRemoveStyled from './ButtonRemove.styled';

class ButtonRemove extends Button {
  render(): ReactNode {
    return (
      <ButtonRemoveStyled
        attrs={{ ...this.props.attrs }}
        onClick={() =>
          this.props.event?.btnRemoveEvent &&
          this.props.event?.btnRemoveEvent(
            this.props.group ?? '',
            this.props.position ?? 0
          )
        }
      >
        {this.props.children}
      </ButtonRemoveStyled>
    );
  }
}

export default ButtonRemove;
