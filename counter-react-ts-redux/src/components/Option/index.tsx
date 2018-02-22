import * as React from 'react';

interface OptionProps {
  onChange: (option: number) => void;
}

interface OptionState {

}

class Option extends React.Component<OptionProps, OptionState> {
  constructor(props: OptionProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <label htmlFor="option">Option: 
          <input id="option" type="text" onChange={(event) => {this.props.onChange(+event.currentTarget.value); }} />
        </label>
      </div>
    );
  }
}

export default Option;