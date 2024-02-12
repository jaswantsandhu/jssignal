import SignalClass from "./signal";
import Event from "./events";

let timeout: any = null;
let deps: Set<any> = new Set();

interface Signal<T> {
  get(): T;
  set(value: T): void;
}
interface Signal<T> {
  get(): T;
  set(value: T): void;
}

export function signal<T>(value: T): Signal<T> {
  const instance = new SignalClass<T>(value);
  let localTimeout: any = null;
  const localDeps: Set<Signal<T>> = new Set();

  const response: Signal<T> = {
    set: (newValue: T) => {
      localDeps.add(response);
      if (localTimeout !== null) {
        clearTimeout(localTimeout);
      }
      const timeout = global ? global.setTimeout : requestAnimationFrame;
      localTimeout = timeout(() => {
        instance.set(newValue);
        Event.signaled(Array.from(localDeps));
        localDeps.clear();
        if (localTimeout !== null) {
          clearTimeout(localTimeout);
          localTimeout = null;
        }
      });
    },
    get: () => instance.get(),
  };

  return response;
}
