import styled from 'styled-components';
import type { label } from './Label';

const LabelStyled = styled.label.attrs((props: label) => ({
  htmlFor: props.attrs?.htmlFor
}))`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const LabelFileStyled = styled(LabelStyled)`
  border: transparent;
  border-radius: 0.2em;
  color: #0101015c;
  font-size: 1rem;
  height: 1.5em;
  margin: 0.2em 0;
`;

export { LabelFileStyled };
export default LabelStyled;
