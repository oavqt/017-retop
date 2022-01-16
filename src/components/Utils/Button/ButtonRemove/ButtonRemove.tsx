import { ReactNode } from 'react';
import Button from '../Button';
import ButtonRemoveStyled from './ButtonRemove.styled';

class ButtonRemove extends Button {
  onClickEvent = (): void => {
    if (this.props.event?.btnRemoveEvent)
      this.props.event?.btnRemoveEvent(this.props.position ?? 0);
  };

  render(): ReactNode {
    return (
      <ButtonRemoveStyled
        attrs={{ ...this.props.attrs }}
        onClick={this.onClickEvent}
      >
        {this.props.children}
      </ButtonRemoveStyled>
    );
  }
}

export default ButtonRemove;
