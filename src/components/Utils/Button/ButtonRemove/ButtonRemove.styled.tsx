import styled from 'styled-components';
import FormEducationGroupStyled from '../../../Form/FormEducation/FormEducationGroup/FormEducationGroup.styled';
import FormExperienceGroupStyled from '../../../Form/FormExperience/FormExperienceGroup/FormExperienceGroup.styled';
import ButtonStyled from '../Button.styled';
import ButtonProps from '../interfaces/Button.interfaces';

const ButtonRemoveStyled = styled(ButtonStyled).attrs((props: ButtonProps) => ({
  'data-testid': props.rtlTestID?.btn?.remove
}))`
  align-self: center;
  background: #101010cc;
  color: #fff;
  width: 75%;

  ${FormExperienceGroupStyled}:hover & {
    animation: animation--color 0.2s ease-in-out forwards;
  }

  ${FormEducationGroupStyled}:hover & {
    animation: animation--color 0.2s ease-in-out forwards;
  }

  @keyframes animation--color {
    from {
      background: grey;
    }
    to {
      background: #f28482;
    }
  }
`;

export default ButtonRemoveStyled;
