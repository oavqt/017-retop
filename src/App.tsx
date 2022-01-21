import { Component, Fragment, ReactNode } from 'react';
import Resume from './components/Resume/Resume';
import Styled from './components/Styled/Styled.styled';
import StyledReset from './components/Styled/StyledReset.styled';
import Div from './components/Utils/Div/Div';

class App extends Component {
  render(): ReactNode {
    const divStyled = {
      ['align-items']: 'center',
      display: 'flex',
      height: '100vh',
      ['justify-content']: 'center',
      width: '100vw'
    };

    return (
      <Fragment>
        <StyledReset />
        <Styled />
        <Div
          styled={{
            ...divStyled
          }}
        >
          <Resume />
        </Div>
      </Fragment>
    );
  }
}

export default App;
