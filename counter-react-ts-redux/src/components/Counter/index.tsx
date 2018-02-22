import * as React from 'react';

interface CounterProps {
  value: number;
}

interface CounterState {

}

class Counter extends React.Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Value: {this.props.value}</h1>
      </div>
    );
  }
}

export default Counter;