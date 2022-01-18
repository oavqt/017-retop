import styled from 'styled-components';
import { LegendStyledProps } from './interfaces/Legend.interfaces';

const LegendStyled = styled.legend.attrs((props: LegendStyledProps) => ({
  title: props.attrs?.title
}))<LegendStyledProps>`
  font-size: 1.2rem;
  overflow: none;
  text-overflow: ellipsis;
`;

export default LegendStyled;
