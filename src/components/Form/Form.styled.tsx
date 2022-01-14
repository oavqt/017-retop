import styled from 'styled-components';
import { form } from './Form';

const FormStyled = styled.form.attrs((props: form) => ({
  target: props.attrs?.target
}))`
  display: flex;
  flex-direction: column;
`;

export default FormStyled;
