import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isDisplayed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private calls: boolean[] = [];
  constructor() { }
  
  public showLoader(): void {
    this.calls.push(true);
    this.isDisplayed.next(this.calls.length > 0);
  }
  hideLoader():void {
    this.calls.pop();
    this.isDisplayed.next(this.calls.length > 0);
  }
}
