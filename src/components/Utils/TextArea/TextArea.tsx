import { ChangeEvent, Component, ReactNode } from 'react';
import Label from '../Label/Label';
import TextareaStyled from './TextArea.styled';
import TextareaProps from './interfaces/TextArea.interfaces';

class TextArea extends Component<TextareaProps> {
  constructor(props: TextareaProps) {
    super(props);
  }

  render(): ReactNode {
    return (
      <Label
        attrs={{ htmlFor: this.props.label?.htmlFor || this.props.attrs?.id }}
        text={this.props.label?.text}
      >
        <TextareaStyled
          attrs={{ ...this.props.attrs }}
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
            this.props.event?.textUpdateValueEvent &&
            this.props.event?.textUpdateValueEvent(event)
          }
        />
      </Label>
    );
  }
}

export default TextArea;
