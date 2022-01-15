import { Component, ReactNode } from 'react';
import ButtonStyled from './Button.styled';

interface button {
  attrs?: {
    type?: string;
    value?: string;
  };
  events?: {
    addExperienceGroup?: () => void;
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

export { type button };
export default Button;
