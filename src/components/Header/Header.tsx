import { Component, ReactNode } from 'react';
import Div from '../Utils/Div/Div';
import H1 from '../Utils/Headings/H1/H1';
import HeaderStyled from './Header.styled';

class Header extends Component {
  render(): ReactNode {
    return (
      <HeaderStyled>
        <Div
          styled={{
            display: 'flex',
            'font-size': '2rem',
            ['text-align']: 'center'
          }}
        >
          <Div>
            <H1 styled={{ color: '#F5CAC3' }}>c</H1>
            <H1>v</H1>
          </Div>
          <Div>
            <H1 styled={{ color: '#F5CAC3' }}>v</H1>
            <H1>c</H1>
            <H1>l</H1>
            <H1>e</H1>
            <H1 styled={{ color: '#AA8200' }}>c</H1>
            <H1 styled={{ color: '#AA8200' }}>v</H1>
          </Div>
        </Div>
      </HeaderStyled>
    );
  }
}

export default Header;
