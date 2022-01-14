import { Component, ReactNode } from 'react';
import Label from '../Label/Label';
import TextareaStyled from './Textarea.styled';

interface textarea {
  attrs: {
    id?: string;
    placeholder?: string;
    value?: string;
  };
  label?: {
    htmlFor?: string;
    text?: string;
  };
}

class Textarea extends Component<textarea> {
  constructor(props: textarea) {
    super(props);
  }

  render(): ReactNode {
    return (
      <Label
        attrs={{ htmlFor: this.props.label?.htmlFor || this.props.attrs?.id }}
        text={this.props.label?.text}
      >
        <TextareaStyled {...this.props} />
      </Label>
    );
  }
}

export { type textarea };
export default Textarea;
