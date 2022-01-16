import styled from 'styled-components';
import ButtonRemoveStyled from '../../../Utils/Button/ButtonRemove/ButtonRemove.styled';

const FormExperienceGroupStyled = styled.fieldset`
  animation: fade-in 1s ease-in-out;
  border: transparent;
  margin: 0.2em 0;

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default FormExperienceGroupStyled;
