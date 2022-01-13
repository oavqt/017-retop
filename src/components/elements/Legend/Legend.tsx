import { Component, ReactNode } from 'react';
import LegendStyled from './Legend.styled';

interface legend {
  attrs?: {
    title?: string;
  };
}

class Legend extends Component<legend> {
  constructor(props: legend) {
    super(props);
  }

  render(): ReactNode {
    return <LegendStyled {...this.props} />;
  }
}

export { type legend };
export default Legend;
