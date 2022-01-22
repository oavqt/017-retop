import styled from 'styled-components';
import { LabelStyledProps } from './interfaces/Label.interfaces';

const LabelStyled = styled.label.attrs((props: LabelStyledProps) => ({
  htmlFor: props.attrs?.htmlFor
}))<LabelStyledProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export default LabelStyled;
