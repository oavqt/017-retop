import styled from 'styled-components';
import { DivStyledProps } from './interfaces/Div.interfaces';

const DivStyled = styled.div<DivStyledProps>`
  align-items: ${(props) => props.styled?.['align-items']};
  display: ${(props) => props.styled?.display};
  height: ${(props) => props.styled?.height};
  justify-content: ${(props) => props.styled?.['justify-content']};
  width: ${(props) => props.styled?.width};
`;

export default DivStyled;
