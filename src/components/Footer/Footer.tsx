import { Component, ReactNode } from 'react';
import Anchor from '../Utils/Anchor/Anchor';
import Div from '../Utils/Div/Div';
import Img from '../Utils/Img/Img';
import FooterStyled from './Footer.styled';
import vlogo from '../../assets/images/vlogo.png';
import vlogo1 from '../../assets/images/vlogo1.png';
import Span from '../Utils/Span/Span';

class Footer extends Component {
  render(): ReactNode {
    return (
      <FooterStyled>
        <Div styled={{ position: 'relative' }}>
          <Img
            attrs={{ src: vlogo1, alt: 'a custom logo' }}
            styled={{ width: '8em' }}
          ></Img>
          <Anchor
            attrs={{ href: 'https://github.com/oavqt', target: '_blank' }}
            styled={{
              color: 'white',
              display: 'flex',
              'flex-direction': 'column',
              position: 'absolute',
              left: '-.5em',
              top: '1.5em'
            }}
          >
            <Img
              attrs={{ src: vlogo, alt: 'a custom alt logo' }}
              styled={{ width: '4em' }}
            ></Img>
            <Span>Oav</Span>
          </Anchor>
        </Div>
      </FooterStyled>
    );
  }
}

export default Footer;
