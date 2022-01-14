import styled from 'styled-components';
import type { label } from './Label';

const LabelStyled = styled.label.attrs((props: label) => ({
  htmlFor: props.attrs?.htmlFor
}))`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export default LabelStyled;
