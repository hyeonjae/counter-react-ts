export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ONCHANGE = 'ONCHANGE';

export const incrementAction = () => {
  return {
    type: INCREMENT
  };
};

export const decrementAction = () => {
  return {
    type: DECREMENT
  };
};

export const onchangeAction = (value: number) => {
  return {
    type: ONCHANGE,
    option: value
  };
};