import styled from 'styled-components';
import { MobileExpandStyledProps } from './interfaces/MobileExpand.interfaces';

const MobileExpandStyled = styled.section.attrs(
  (props: MobileExpandStyledProps) => ({
    'data-testid': props.rtlTestID?.mobile
  })
)<MobileExpandStyledProps>`
  display: none;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
`;

export default MobileExpandStyled;
