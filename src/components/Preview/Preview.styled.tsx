import styled from 'styled-components';
import { PreviewStyledProps } from './interfaces/Preview.interfaces';

const PreviewStyled = styled.section.attrs((props: PreviewStyledProps) => ({
  ['data-testid']: props.attrs?.rtlTestID?.preview
}))<PreviewStyledProps>``;

export default PreviewStyled;
