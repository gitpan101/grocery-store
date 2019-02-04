import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FoodTypeComponent } from "./inventory/food-type.component";

const routes: Routes = [{ path: "food_types", component: FoodTypeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
