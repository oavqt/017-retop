import styled from 'styled-components';
import { PreviewStyledProps } from './interfaces/Preview.interfaces';

const PreviewStyled = styled.section.attrs((props: PreviewStyledProps) => ({
  ['data-testid']: props.attrs?.rtlTestID?.preview
}))<PreviewStyledProps>`
  height: 100%;
  width: 50em;
  overflow-y: scroll;
`;

export default PreviewStyled;
