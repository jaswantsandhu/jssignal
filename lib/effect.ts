import Events from "./events";

export default function effect(handler: Function, deps: any[]) {
  Events.add(handler, deps);
  return function () {
    Events.remove(handler);
  };
}
