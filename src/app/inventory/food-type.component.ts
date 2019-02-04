import { Component, OnInit } from "@angular/core";

import { InventoryService } from "../services/inventory.service";

import { IFoodType } from "../models/food-type";

@Component({
  selector: "app-food-type",
  templateUrl: "./food-type.component.html",
  styleUrls: ["./food-type.component.scss"]
})
export class FoodTypeComponent implements OnInit {
  foodTypeModel: IFoodType = { typeName: "" };
  foodTypeList: IFoodType[];

  constructor(private _inventoryService: InventoryService) {}

  ngOnInit() {
    this.getFoodTypeList();
  }

  getFoodTypeList(): void {
    this._inventoryService
      .getFoodTypes()
      .subscribe((foodTypes: IFoodType[]) => {
        this.foodTypeList = foodTypes;
      });
  }

  saveFoodType(): void {
    this._inventoryService.addFoodType(this.foodTypeModel).subscribe(
      res => {
        if (!res) {
          return console.log("Unable to add food type");
        }

        console.log("Food Type added successfully");
        this.getFoodTypeList();
      },
      err => console.log(err)
    );
  }
}
