import styled from 'styled-components';
import { PreviewStyledProps } from './interfaces/Preview.interfaces';

const PreviewStyled = styled.section.attrs((props: PreviewStyledProps) => ({
  ['data-testid']: props.rtlTestID?.preview
}))<PreviewStyledProps>`
  background: #31313111;
  display: ${(props) =>
    props.mobile?.width?.['1200px']
      ? props.mobile?.display?.preview
        ? 'block'
        : 'none'
      : 'block'} !important;
  height: 100%;
  width: 50em;
  overflow-y: scroll;
`;

export default PreviewStyled;
