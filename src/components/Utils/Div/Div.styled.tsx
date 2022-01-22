import styled from 'styled-components';
import { DivStyledProps } from './interfaces/Div.interfaces';

const DivStyled = styled.div<DivStyledProps>`
  align-items: ${(props) => props.styled?.['align-items']};
  color: ${(props) => props.styled?.color};
  display: ${(props) => props.styled?.display};
  font-size: ${(props) => props.styled?.['font-size']};
  grid-template: ${(props) => props.styled?.['grid-template']};
  height: ${(props) => props.styled?.height};
  justify-content: ${(props) => props.styled?.['justify-content']};
  padding: ${(props) => props.styled?.padding};
  position: ${(props) => props.styled?.position};
  text-align: ${(props) => props.styled?.['text-align']};
  width: ${(props) => props.styled?.width};
`;

export default DivStyled;
