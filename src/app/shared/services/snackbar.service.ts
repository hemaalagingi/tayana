import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SnackbarComponent } from '../snackbar/snackbar.component';

const DURATION = 5000;
@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  showSuccess(message: string): void {
    this.snackBar.openFromComponent(SnackbarComponent,
       { data: message, duration: DURATION, panelClass:'success'  });
  }

  showError(message: string): void {
    this.snackBar.openFromComponent(SnackbarComponent,
       { data: message, duration: DURATION, panelClass:'error'  });
  }
}
