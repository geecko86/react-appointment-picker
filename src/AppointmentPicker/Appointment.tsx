import React, { Component } from 'react';

interface AppointmentProps {
  isSelected: boolean;
  isReserved?: boolean;
  isOptioned?: boolean,
  isEnabled: boolean;
  periods?: number;
  time: string;
  selectAppointment: () => void;
}

export class Appointment extends Component<AppointmentProps> {
  static defaultProps = {
    isSelected: false
  };

  handleClick = () => {
    !this.props.isReserved && !this.props.isOptioned && this.props.selectAppointment();
  };

  render() {
    const { isSelected, isEnabled, isReserved, isOptioned, periods } = this.props;
    const className =
      'appointment' +
      (isSelected ? ' appointment--selected' : '') +
      (!isSelected && isEnabled && !isReserved ? ' appointment--enabled' : '') +
      (isOptioned ? ' appointment--optioned' : '') +
      (isReserved ? ' appointment--reserved' : '');
    const style = {
      height: `calc(2rem*${periods || 1} + 0.2rem*(${periods || 1} - 1))`
    };
    return (
      <div style={style} className={className} onClick={this.handleClick}>
        <span className='appointment__time'>{this.props.time}</span>
      </div>
    );
  }
}
