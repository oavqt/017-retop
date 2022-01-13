import styled from 'styled-components';
import type { label } from './Label';

const LabelStyled = styled.label.attrs((props: label) => ({
  htmlFor: props.attrs?.htmlFor
}))`
  display: flex;
  flex-direction: column;
`;

const LabelFileStyled = styled(LabelStyled)`
  border-bottom: 0.15em solid #f5cac3;
  color: #0101015c;
  font-size: 1rem;
  height: 1.5em;
`;

export { LabelFileStyled };
export default LabelStyled;
