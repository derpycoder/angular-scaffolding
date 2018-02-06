import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  ContactRoutingModule,
  ContactComponents
} from "./contact-routing.module";

@NgModule({
  imports: [CommonModule, ContactRoutingModule],
  declarations: ContactComponents
})
export class ContactModule {}
