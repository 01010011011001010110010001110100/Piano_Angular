import { EventEmitter } from "@angular/core";

export interface IButton<T> {
    wasPressed: EventEmitter<T>;
    pressed(): void;
}