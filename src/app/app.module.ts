import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { FoodTypeComponent } from "./inventory/food-type.component";

@NgModule({
  declarations: [AppComponent, FoodTypeComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
