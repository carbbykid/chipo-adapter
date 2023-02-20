import { EventType } from "../types";

export abstract class Adapter{
    abstract connect<T>(): Promise<T> | void   
    abstract request<T>(): Promise<T>
    abstract disconnect<T = void>(): T
    abstract signTransaction<T = string>(): Promise<T>
    abstract signAllTransaction<T = string[]>(): Promise<T>
    abstract signMessage<T = string>(): Promise<T>
    
    // Subscription support | Event Support
    abstract on(name: EventType, handler: Function): void
    abstract off(name: EventType): void
}
