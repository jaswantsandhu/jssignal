declare class Events {
    add(handler: Function, deps?: any[]): void;
    signaled(signal: any[]): void;
    remove(handler: Function): void;
}
declare const event: Events;
export default event;
