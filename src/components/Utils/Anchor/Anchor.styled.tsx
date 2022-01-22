import styled from 'styled-components';
import { AnchorStyledProps } from './interfaces/Anchor.interfaces';

const AnchorStyled = styled.a.attrs((props: AnchorStyledProps) => ({
  href: props.attrs?.href,
  target: props.attrs?.target
}))<AnchorStyledProps>`
  color: ${(props) => props.styled?.color};
  display: ${(props) => props.styled?.display};
  flex-direction: ${(props) => props.styled?.['flex-direction']};
  left: ${(props) => props.styled?.left};
  position: ${(props) => props.styled?.position};
  text-decoration: none;
  top: ${(props) => props.styled?.top};
`;

export default AnchorStyled;
