import styled from 'styled-components';
import { ULStyledProps } from './interfaces/UL.interfaces';

const ULStyled = styled.ul<ULStyledProps>`
  list-style: ${(props) => props.styled?.['list-style']};
  margin: 0;
  padding: 0.5em;
`;

export default ULStyled;
