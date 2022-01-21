import styled from 'styled-components';
import { SectionStyledProps } from './interfaces/Section.interfaces';

const SectionStyled = styled.section<SectionStyledProps>`
  height: ${(props) => props.styled?.height};
  overflow-y: ${(props) => props.styled?.['overflow-y']};
`;

export default SectionStyled;
