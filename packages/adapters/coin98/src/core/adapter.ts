import { Adapter, EventType } from '@coin98/wallet-adapter-core';

export class Coin98Adapter implements Adapter {
  connect<T>(): void | Promise<T> {
    throw new Error('Method not implemented.');
  }
  request<T>(): Promise<T> {
    throw new Error('Method not implemented.');
  }
  disconnect<T = void>(): T {
    throw new Error('Method not implemented.');
  }
  signTransaction<T = string>(): Promise<T> {
    throw new Error('Method not implemented.');
  }
  signAllTransaction<T = string[]>(): Promise<T> {
    throw new Error('Method not implemented.');
  }
  signMessage<T = string>(): Promise<T> {
    throw new Error('Method not implemented.');
  }
  on(name: EventType, handler: Function): void {
    throw new Error('Method not implemented.');
  }
  off(name: EventType): void {
    throw new Error('Method not implemented.');
  }
}
