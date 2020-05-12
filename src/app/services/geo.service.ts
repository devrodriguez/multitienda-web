import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  constructor(private http: HttpClient) { }

  addressToCoordinates(address: string) {
    const URL = `${environment.apiHost}/api/geo/address-coord?address=${address}`;
    return this.http.get(URL);
  }

  coordinatesToAddress(lat: string, lon: string) {
    const URL = `${environment.apiHost}/api/geo/coord-address?latlng=${lat},${lon}`;
    return this.http.get(URL);
  }

  getAddresPredictions(term: string) {
    const URL = `${environment.apiHost}/api/geo/address-pred?term=${term}`;
    return this.http.get(URL).pipe(
      map((item: any) => {
        return item.data.map(i => i.description);
      })
    );
  }
}
