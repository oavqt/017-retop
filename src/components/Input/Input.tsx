import React from 'react';
import InputStyled from './Input.styled';

interface inputAttrs {
  placeholder?: string;
  type?: string;
  value?: string;
}

class Input extends React.Component<inputAttrs> {
  constructor(props: inputAttrs) {
    super(props);
  }

  render(): React.ReactNode {
    return <InputStyled {...this.props} />;
  }
}

export default Input;
