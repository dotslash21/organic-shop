import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DataTableModule } from "angular-4-data-table";
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { CustomFormsModule } from "ng2-validation";
import { SharedModule } from "shared/shared.module";

import { environment } from "../environments/environment";
import { AdminModule } from "./admin/admin.module";
import { AdminAuthGuard } from "./admin/services/admin-auth-guard.service";
import { AppComponent } from "./app.component";
import { BsNavbarComponent } from "./core/components/bs-navbar/bs-navbar.component";
import { HomeComponent } from "./core/components/home/home.component";
import { LoginComponent } from "./core/components/login/login.component";
import { ProductsComponent } from "./shopping/components/products/products.component";
import { ShoppingModule } from "./shopping/shopping.module";

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AdminModule,
    ShoppingModule,
    SharedModule,
    CustomFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    DataTableModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: "", component: ProductsComponent },
      { path: "login", component: LoginComponent }
    ])
  ],
  providers: [AdminAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
