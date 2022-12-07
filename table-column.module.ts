import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { TableColumnComponent } from "./table-column.component";

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
	],
	providers: [
		
	],
	exports: [TableColumnComponent],
	declarations: [
		TableColumnComponent
	]
})
export class TableColumnModule {}
