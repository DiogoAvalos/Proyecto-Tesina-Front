import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
// import { ColorSwitcherComponent } from './color-switcher/color-switcher.component';
import { MatModule } from '../appModules/mat.module';
import { ModalComponent } from './components/modal-component/modal-component.component';
import { SortingTableComponent } from './components/sorting-table/sorting-table.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';




@NgModule({
    exports: [
        CommonModule,
        FooterComponent,
        HeaderComponent,
        SidebarComponent,
        ModalComponent,
        SortingTableComponent
        // ColorSwitcherComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        MatModule,
        MatSortModule,
        MatPaginatorModule
    ],
    declarations: [
        FooterComponent,
        HeaderComponent,
        SidebarComponent,
        ModalComponent,
        SortingTableComponent
        // ColorSwitcherComponent
    ],
    providers: [ ],
})
export class SharedModule { }
