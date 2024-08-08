import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
// import { ColorSwitcherComponent } from './color-switcher/color-switcher.component';
import { MatModule } from '../appModules/mat.module';
import { ModalComponent } from './modal-component/modal-component.component';




@NgModule({
    exports: [
        CommonModule,
        FooterComponent,
        HeaderComponent,
        SidebarComponent,
        ModalComponent
        // ColorSwitcherComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        MatModule
    ],
    declarations: [
        FooterComponent,
        HeaderComponent,
        SidebarComponent,
        ModalComponent
        // ColorSwitcherComponent
    ],
    providers: [ ],
})
export class SharedModule { }
