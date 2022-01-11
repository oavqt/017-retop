import styled from 'styled-components';

const LabelStyled = styled.label.attrs((props) => {
  htmlFor: props.htmlFor;
})`
  display: flex;
  flex-direction: column;
`;

export default LabelStyled;
