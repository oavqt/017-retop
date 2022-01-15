import { Component, ReactNode } from 'react';
import Label from '../Label/Label';
import TextareaStyled from './Textarea.styled';
import TextareaProps from './interfaces/Textarea.interfaces';

class Textarea extends Component<TextareaProps> {
  constructor(props: TextareaProps) {
    super(props);
  }

  render(): ReactNode {
    return (
      <Label
        attrs={{ htmlFor: this.props.label?.htmlFor || this.props.attrs?.id }}
        text={this.props.label?.text}
      >
        <TextareaStyled attrs={{ ...this.props.attrs }} />
      </Label>
    );
  }
}

export default Textarea;
