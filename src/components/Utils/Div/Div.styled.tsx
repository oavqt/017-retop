import styled from 'styled-components';
import { DivStyledProps } from './interfaces/Div.interfaces';

const DivStyled = styled.div<DivStyledProps>`
  display: ${(props) => props.styled?.display};
`;

export default DivStyled;
