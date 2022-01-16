import styled from 'styled-components';
import { FormStyledProps } from './interfaces/Form.interfaces';

const FormStyled = styled.form.attrs((props: FormStyledProps) => ({
  ['data-testid']: props['data-testid']
}))`
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

export default FormStyled;
