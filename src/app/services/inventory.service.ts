import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { IFoodType } from "../models/food-type";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class InventoryService {
  _uri: String = "http://localhost:3000/api";

  constructor(private _http: HttpClient) {}

  addFoodType(foodType: IFoodType): Observable<IFoodType> {
    return this._http.post<IFoodType>(`${this._uri}/food_types`, foodType);
  }

  getFoodTypes(): Observable<IFoodType[]> {
    return this._http.get<IFoodType[]>(`${this._uri}/food_types`);
  }
}
