import * as React from 'react';
import './App.css';
import Counter from './components/Counter';
import Option from './components/Option';
import Button from './components/Button';

interface AppProps {

}

interface AppState {
  option: number;
  value: number;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      option: 0,
      value: 0
    };

    this.onChange = this.onChange.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Counter value={this.state.value} />
        </header>
        <section>
          <Option onChange={this.onChange} />
          <Button inc={() => {this.inc(); }} dec={() => {this.dec(); }} />
        </section>
      </div>
    );
  }

  inc() {
    this.setState((prevState, props) => {
      return {
        value: prevState.value + prevState.option
      };
    });
  }

  dec() {
    this.setState((prevState, props) => {
      return {
        value: prevState.value - prevState.option
      };
    });
  }

  onChange(value: number) {
    console.log(`value: ${value}`);
    this.setState((prevState, props) => {
      return {
        option: value
      };
    });
  }
}

export default App;
