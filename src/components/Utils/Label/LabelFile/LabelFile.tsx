import { ReactNode } from 'react';
import Label from '../Label';
import LabelFileStyled from './LabelFile.styled';

class LabelFile extends Label {
  render(): ReactNode {
    return (
      <LabelFileStyled {...this.props}>
        {this.props.text}
        {this.props.children}
      </LabelFileStyled>
    );
  }
}

export default LabelFile;
