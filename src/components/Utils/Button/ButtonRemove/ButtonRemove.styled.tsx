import styled from 'styled-components';
import ButtonStyled from '../Button.styled';

const ButtonRemoveStyled = styled(ButtonStyled)`
  background: #f28482;
  color: #fff;
  position: relative;
  width: 100%;

  ::before {
    box-shadow: 0 -6.4em 5em 0.2em #f5cac3, 0 -6.4em 0 6.2em #fff;
    content: '';
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: opacity ease-in-out 0.5s;
    width: 100%;
  }

  :hover::before {
    opacity: 1;
  }
`;

export default ButtonRemoveStyled;
