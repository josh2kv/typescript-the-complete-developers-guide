type CallBack = () => void;

export class Eventing {
  events: { [key: string]: CallBack[] } = {};

  // eventName array에 callback function들을 저장함
  on(eventName: string, callback: CallBack): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  // eventName array에 저장된 callback function들을 호출함
  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) return;

    handlers.forEach(callback => {
      callback();
    });
  }
}
