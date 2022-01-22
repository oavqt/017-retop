import styled from 'styled-components';
import { HeadingsStyledProps } from '../interfaces/Headings.interfaces';

const H1Styled = styled.h1<HeadingsStyledProps>`
  color: ${(props) => props.styled?.color};
  margin: 0;
`;

export default H1Styled;
