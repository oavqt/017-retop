import styled from 'styled-components';
import { SectionStyledProps } from './interfaces/Section.interfaces';

const SectionStyled = styled.section.attrs((props: SectionStyledProps) => ({
  'data-testid': props.rtlTestID?.section?.form
}))<SectionStyledProps>`
  display: ${(props) =>
    props.mobile?.width?.['1200px']
      ? props.mobile?.display?.preview
        ? 'none'
        : 'block'
      : 'block'} !important;
  height: ${(props) => props.styled?.height};
  overflow-y: ${(props) => props.styled?.['overflow-y']};
  width: ${(props) => props.styled?.width};
`;

export default SectionStyled;
