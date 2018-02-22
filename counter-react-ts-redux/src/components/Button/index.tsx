import * as React from 'react';
import { AnyAction } from 'redux';

interface ButtonProps {
  inc: () => AnyAction;
  dec: () => AnyAction;
}

interface ButtonState {

}

class Button extends React.Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.inc}>+</button>
        <button onClick={this.props.dec}>-</button>
      </div>
    );
  }
}

export default Button;