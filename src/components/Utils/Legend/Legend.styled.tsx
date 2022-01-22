import styled from 'styled-components';
import { LegendStyledProps } from './interfaces/Legend.interfaces';

const LegendStyled = styled.legend.attrs((props: LegendStyledProps) => ({
  title: props.attrs?.title
}))<LegendStyledProps>`
  display: block;
  font-size: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 10em;
`;

export default LegendStyled;
