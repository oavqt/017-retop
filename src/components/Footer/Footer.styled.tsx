import styled from 'styled-components';
import { FooterStyledProps } from './interfaces/Footer.interfaces';

const FooterStyled = styled.footer<FooterStyledProps>`
  align-self: flex-start;
  display: ${(props) =>
    props.mobile?.width?.['1200px']
      ? props.mobile?.display?.preview
        ? 'none'
        : 'block'
      : 'block'};
  margin-left: 1em;
`;

export default FooterStyled;
