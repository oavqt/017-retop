import styled from 'styled-components';
import type { button } from './Button';

const ButtonStyled = styled.button.attrs((props: button) => ({
  type: props.attrs?.type,
  value: props.attrs?.value
}))`
  border: none;
  border-radius: 0.2em;
  background: #f5cac3;
  height: 2em;
  margin: 0.2em 0;

  :hover {
    cursor: pointer;
  }
`;

const ButtonAddStyled = styled(ButtonStyled)`
  background: #84a59d;
  color: #fff;
  width: 100%;
`;

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

export { ButtonAddStyled, ButtonRemoveStyled };
export default ButtonStyled;
