import React, { ReactElement } from 'react';
import TextareaStyled from './Textarea.styled';

interface textareaAttrs {
  placeholder?: string;
  value?: string;
}

class Textarea extends React.Component<textareaAttrs> {
  constructor(props: textareaAttrs) {
    super(props);
  }

  render(): ReactElement {
    return <TextareaStyled {...this.props} />;
  }
}

export default Textarea;
