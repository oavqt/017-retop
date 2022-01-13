import styled from 'styled-components';
import { legend } from './Legend';

const LegendStyled = styled.legend.attrs((props: legend) => ({
  title: props.attrs?.title
}))`
  font-size: 1.2rem;
`;

export default LegendStyled;
