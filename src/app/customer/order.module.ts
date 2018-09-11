import { NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {OrderComponent} from "./order.component";
import {ModelModule} from "../model/model.module";
import {HeaderComponent} from "./header.component";
import {CustomerOrdersPipe} from "./customer.order.pipe"
import { RouterModule } from "@angular/router";

import { HeaderModule } from "./header.module";



@NgModule({
	imports:[BrowserModule, FormsModule,ModelModule,RouterModule, HeaderModule],
	declarations:[OrderComponent,CustomerOrdersPipe],
	exports:[OrderComponent]
})

export class OrderModule{}
