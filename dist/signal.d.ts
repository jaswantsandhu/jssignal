export default class Signal<T> {
    private value;
    constructor(defaultValue: T);
    get: () => T;
    set: (value: T) => void;
}
