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
            (this.props.event?.updateValuesPersonalEvent &&
              this.props.event?.updateValuesPersonalEvent(event)) ||
            (this.props.event?.updateValuesGroupObjectEvent &&
              this.props.event?.updateValuesGroupObjectEvent(
                event,
                this.props.group ?? '',
                this.props.position ?? 0
              ))
          }
        />
      </Label>
    );
  }
}

export default TextArea;
