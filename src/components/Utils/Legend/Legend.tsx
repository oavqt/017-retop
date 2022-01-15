import { Component, ReactNode } from 'react';
import LegendStyled from './Legend.styled';
import LegendProps from './interfaces/Legend.interfaces';

class Legend extends Component<LegendProps> {
  constructor(props: LegendProps) {
    super(props);
  }

  render(): ReactNode {
    return (
      <LegendStyled attrs={{ ...this.props.attrs }}>
        {this.props.children}
      </LegendStyled>
    );
  }
}

export default Legend;
