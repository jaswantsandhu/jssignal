const listeners = new Map<
  any,
  { handler: Function; deps: any[]; completed: boolean }
>();

class Events {
  add(handler: Function, deps: any[] = []) {
    listeners.set(handler, { handler, deps, completed: false });
  }

  signaled(signal: any[]) {
    listeners.forEach(({ handler, deps, completed }) => {
      if (deps.length > 0) {
        if (signal.some((s) => deps.includes(s))) {
          handler();
        }
        return;
      }

      if (deps.length === 0 && completed === false) {
        handler();
        listeners.delete(handler);
        completed = true;
        return;
      }

      handler();
    });
  }

  remove(handler: Function) {
    listeners.delete(handler);
  }
}

const event = new Events();
export default event;
