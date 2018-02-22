import * as React from 'react';

interface ButtonProps {
  inc: () => void;
  dec: () => void;
}

interface ButtonState {
  value: number;
}

class Button extends React.Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props);
  }

  inc() {
    this.props.inc();
  }

  dec() {
    this.props.dec();
  }

  render() {
    return (
      <div>
        <button onClick={(event) => {this.inc(); }}>+</button>
        <button onClick={(event) => {this.dec(); }}>-</button>
      </div>
    );
  }
}

export default Button;