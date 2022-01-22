import styled from 'styled-components';
import { FormStyledProps } from './interfaces/Form.interfaces';

const FormStyled = styled.form.attrs((props: FormStyledProps) => ({
  ['data-testid']: props.attrs?.rtlTestID?.form
}))<FormStyledProps>`
  display: flex;
  flex-direction: column;
  padding: 1em;
  width: 100%;
`;

export default FormStyled;
