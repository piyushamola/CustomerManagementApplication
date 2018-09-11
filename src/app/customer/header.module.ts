import { NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

import {ModelModule} from "../model/model.module";
import {HeaderComponent} from "./header.component";

import { RouterModule } from "@angular/router";




@NgModule({
	imports:[BrowserModule, FormsModule,ModelModule,RouterModule],
	declarations:[HeaderComponent],
	exports:[HeaderComponent]
})

export class HeaderModule{}
