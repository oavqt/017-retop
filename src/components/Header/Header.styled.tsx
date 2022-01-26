import styled from 'styled-components';
import { HeaderStyledProps } from './interfaces/Header.interfaces';

const HeaderStyled = styled.header<HeaderStyledProps>`
  display: ${(props) =>
    props.mobile?.width?.['1200px']
      ? props.mobile?.display?.preview
        ? 'none'
        : 'block'
      : 'block'};
  margin-right: 1em;
`;

export default HeaderStyled;
