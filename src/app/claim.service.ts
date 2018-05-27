import { Injectable} from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ClaimService {
    constructor(private http: Http) {}
    saveClaim(claim: any) {
        return this.http.post('https://heinels-ng-http.firebaseio.com/claim.json', claim);
    }
}