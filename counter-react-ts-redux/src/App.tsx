import * as React from 'react';
import './App.css';
import Counter from './components/Counter';
import Option from './components/Option';
import Button from './components/Button';
import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { incrementAction, decrementAction, onchangeAction } from './actions';

interface AppProps {
  inc: () => AnyAction;
  dec: () => AnyAction;
  onChange: (option: number) => AnyAction;
  value: number;
  option: number;
}

const App: React.SFC<AppProps> = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <Counter value={props.value} />
      </header>
      <section>
        <Option onChange={props.onChange} />
        <Button inc={props.inc} dec={props.dec} />
      </section>
    </div>
  );
};

const mapStateToProps = (state: {counter: {option: number, value: number}}) => {
  return {
    value: state.counter.value,
    option: state.counter.option
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    inc: () => dispatch(incrementAction()),
    dec: () => dispatch(decrementAction()),
    onChange: (option: number) => dispatch(onchangeAction(option))
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
