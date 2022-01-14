import { Component, ReactNode } from 'react';
import ButtonStyled, {
  ButtonAddStyled,
  ButtonRemoveStyled
} from './Button.styled';

interface button {
  attrs?: {
    type?: string;
    value?: string;
  };
}

class Button extends Component<button> {
  constructor(props: button) {
    super(props);
  }

  render(): ReactNode {
    return <ButtonStyled {...this.props} />;
  }
}

class ButtonAdd extends Button {
  render(): ReactNode {
    return <ButtonAddStyled {...this.props} />;
  }
}

class ButtonRemove extends Button {
  render(): ReactNode {
    return <ButtonRemoveStyled {...this.props} />;
  }
}

export { ButtonAdd, ButtonRemove, type button };
export default Button;
