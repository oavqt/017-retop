import { Component, ReactNode } from 'react';
import AnchorStyled from './Anchor.styled';
import AnchorProps from './interfaces/Anchor.interfaces';

class Anchor extends Component<AnchorProps> {
  render(): ReactNode {
    return (
      <AnchorStyled
        attrs={{ ...this.props.attrs }}
        styled={{ ...this.props.styled }}
      >
        {this.props.children}
      </AnchorStyled>
    );
  }
}

export default Anchor;
