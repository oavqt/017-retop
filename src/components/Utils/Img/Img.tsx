import { Component, ReactNode } from 'react';
import ImgStyled from './Img.styled';
import ImgProps from './interfaces/Img.interfaces';

class Img extends Component<ImgProps> {
  render(): ReactNode {
    return (
      <ImgStyled
        attrs={{ ...this.props.attrs }}
        styled={{ ...this.props.styled }}
      >
        {this.props.children}
      </ImgStyled>
    );
  }
}

export default Img;
