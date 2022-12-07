import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { TableColumnModule } from "../table-column/table-column.module";
import { ResizeColumnDirective } from "./resize-column.directive";
import { TableFilterComponent } from "./table-filter/table-filter.component";
import { TableGridComponent } from "./table-grid.component";
import { TablePaginatorComponent } from "./table-paginator/table-paginator.component";

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		TableColumnModule
	],
	providers: [
		
	],
	exports: [TableGridComponent],
	declarations: [
		TableGridComponent,
		TablePaginatorComponent,
		TableFilterComponent,
		ResizeColumnDirective,
	]
})
export class TableGridModule {}
