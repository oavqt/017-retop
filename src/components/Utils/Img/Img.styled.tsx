import styled from 'styled-components';
import { ImgStyledProps } from './interfaces/Img.interfaces';

const ImgStyled = styled.img.attrs((props: ImgStyledProps) => ({
  alt: props.attrs?.alt,
  src: props.attrs?.src
}))<ImgStyledProps>`
  height: auto;
  object-fit: ${(props) => props.styled?.objectFit};
  width: ${(props) => props.styled?.width};
`;

export default ImgStyled;
