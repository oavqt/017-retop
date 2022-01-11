import React, { ReactElement } from 'react';
import LabelStyled from './Label.styled';

interface labelAttrs {
  htmlFor?: string;
}

class Label extends React.Component<labelAttrs> {
  constructor(props: labelAttrs) {
    super(props);
  }

  render(): ReactElement {
    return <LabelStyled {...this.props} />;
  }
}

export default Label;
