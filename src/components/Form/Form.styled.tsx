import styled from 'styled-components';

interface formStyled {
  ['data-testid']: string;
}

const FormStyled = styled.form.attrs((props: formStyled) => ({
  ['data-testid']: props['data-testid']
}))`
  display: flex;
  flex-direction: column;
`;

export default FormStyled;
