import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncidentsService {
  private _incidents = new BehaviorSubject<any>([]);

  setIncidents(incidents: any[]) {
    this._incidents.next(incidents);
  }

  hasIncidents(): boolean {
    return this._incidents.value.length > 0;
  }

  getIncidents(): Observable<any[]> {
    return this._incidents.asObservable();
  }

  clearIncidents(): void {
    return this._incidents.next([]);
  }
}
