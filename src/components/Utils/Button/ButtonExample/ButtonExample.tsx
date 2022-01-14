import { ReactNode } from 'react';
import Button from '../Button';
import ButtonExampleStyled from './ButtonExample.styled';

class ButtonExample extends Button {
  render(): ReactNode {
    return <ButtonExampleStyled {...this.props} />;
  }
}

export default ButtonExample;
