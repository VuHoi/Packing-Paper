import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class SharedService {
    private subject = new Subject<any>();
    sendProduct(change: any) {
        this.subject.next(change);
    }

    getproduct(): Observable<any> {
        return this.subject.asObservable();
    }

}
