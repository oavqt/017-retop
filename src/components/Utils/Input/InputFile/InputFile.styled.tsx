import styled from 'styled-components';
import InputStyled from '../Input.styled';
import { InputStyledProps } from '../interfaces/Input.interfaces';

const InputFileStyled = styled(InputStyled).attrs(
  (props: InputStyledProps) => ({
    accept: props.attrs?.accept,
    type: 'file'
  })
)<InputStyledProps>`
  display: none;
`;

export default InputFileStyled;
