import { Component, ReactNode } from 'react';
import ButtonExpand from '../../Utils/Button/ButtonExpand/ButtonExpand';
import MobileExpandProps from './interfaces/MobileExpand.interfaces';
import MobileExpandStyled from './MobileExpand.styled';

class MobileExpand extends Component<MobileExpandProps> {
  render(): ReactNode {
    const updateMobileDisplayEvent = this.props.fns?.updateMobileDisplay;

    return (
      <MobileExpandStyled rtlTestID={{ ...this.props.rtlTestID }}>
        <ButtonExpand event={{ updateMobileDisplayEvent }}>
          {this.props.mobile?.display?.preview ? 'edit' : 'preview'}
        </ButtonExpand>
      </MobileExpandStyled>
    );
  }
}

export default MobileExpand;
