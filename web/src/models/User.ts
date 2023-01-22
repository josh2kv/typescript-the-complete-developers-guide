import axios, { AxiosResponse } from 'axios';

interface UserProps {
  name: string;
  age: number;
}

type CallBack = () => void;

export class User {
  events: { [key: string]: CallBack[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

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

  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    const id = this.get('id');
    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post('http://localhost:3000/users', this.data);
    }
  }
}