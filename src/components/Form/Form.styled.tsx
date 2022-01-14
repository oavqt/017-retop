import styled from 'styled-components';
import { form } from './Form';

const FormStyled = styled.form.attrs((props: form) => ({
  target: props.attrs?.target
}))``;

export default FormStyled;
