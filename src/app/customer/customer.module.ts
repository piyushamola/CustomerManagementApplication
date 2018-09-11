import { NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {CustomerComponent} from "./customer.component";
import {ModelModule} from "../model/model.module"
import { OrdersPipe } from "./orders.pipe";
import { CustomerOrderComponent } from "./customer.order.component";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header.component";
import { HeaderModule } from "./header.module";




@NgModule({
	imports:[BrowserModule, FormsModule, ModelModule, RouterModule,HeaderModule],
	declarations:[CustomerComponent,OrdersPipe,CustomerOrderComponent],
	exports:[CustomerComponent]
})

export class CustomerModule{}


// helper modules refer to the preprocessor commands and they need to be load first