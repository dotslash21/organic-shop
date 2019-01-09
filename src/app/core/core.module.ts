import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { BsNavbarComponent } from "./components/bs-navbar/bs-navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild([])],
  declarations: [BsNavbarComponent, HomeComponent, LoginComponent],
  exports: [BsNavbarComponent]
})
export class CoreModule {}
