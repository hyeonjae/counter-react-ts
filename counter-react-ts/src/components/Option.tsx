import * as React from 'react';

interface OptionProps {
  onChange: (value: number) => void;
}

interface OptionState {
}

class Option extends React.Component<OptionProps, OptionState> {
  constructor(props: OptionProps) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    this.setState({
      option: 1
    });
  }

  render() {
    return (
      <div>
        <label htmlFor="option">Option: 
          <input id="option" type="text" onChange={(event) => {this.onChange(event); }}/>
        </label>
      </div>
    );
  }
  
  onChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.props.onChange(+event.currentTarget.value);
  }
}

export default Option;