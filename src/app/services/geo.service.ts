import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  constructor(private http: HttpClient) { }

  addressToCoordinates(address: string) {
    const URL = `http://localhost:3001/api/geo/address-coord?address=${address}`;
    return this.http.get(URL);
  }

  coordinatesToAddress(lat: string, lon: string) {
    const URL = `http://localhost:3001/api/geo/coord-address?latlng=${lat},${lon}`;
    return this.http.get(URL);
  }

  getAddresPredictions(term: string) {
    const URL = `http://localhost:3001/api/geo/address-pred?term=${term}`;
    return this.http.get(URL).pipe(
      map((item: any) => {
        return item.data.map(i => i.description);
      })
    );
  }
}
