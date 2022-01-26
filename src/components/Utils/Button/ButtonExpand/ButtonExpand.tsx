import { ReactNode } from 'react';
import Button from '../Button';

import ButtonExpandStyled from './ButtonExpand.styled';

class ButtonExpand extends Button {
  render(): ReactNode {
    return (
      <ButtonExpandStyled
        attrs={{ ...this.props.attrs }}
        onClick={this.props.event?.updateMobileDisplayEvent}
      >
        {this.props.children}
      </ButtonExpandStyled>
    );
  }
}

export default ButtonExpand;
