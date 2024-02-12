export default class Signal<T> {
  private value: T;

  constructor(defaultValue: T) {
    this.value = defaultValue;
  }

  get = () => {
    return this.value;
  };

  set = (value: T) => {
    this.value = value;
  };
}
