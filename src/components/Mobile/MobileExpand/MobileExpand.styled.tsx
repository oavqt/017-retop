import styled from 'styled-components';
import { MobileExpandStyledProps } from './interfaces/MobileExpand.interfaces';

const MobileExpandStyled = styled.section.attrs(
  (props: MobileExpandStyledProps) => ({
    'data-testid': props.rtlTestID?.mobile
  })
)<MobileExpandStyledProps>`
  bottom: 50%;
  display: none;
  position: fixed;
  left: -4em;
  top: 50%;
  transform: rotate(-90deg);
  z-index: 1;
`;

export default MobileExpandStyled;
