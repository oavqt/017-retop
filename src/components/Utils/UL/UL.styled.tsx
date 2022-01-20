import styled from 'styled-components';
import { ULStyledProps } from './interfaces/UL.interfaces';

const ULStyled = styled.ul<ULStyledProps>`
  list-style: ${(props) => props.styled?.listStyle};
`;

export default ULStyled;
