import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'kt-table-filter',
	templateUrl: './table-filter.component.html',
	styleUrls: ['./table-filter.component.scss']
})
export class TableFilterComponent implements OnInit {

	@Input() sortable = false
	@Input() filterable = false
	@Input() key = ''
	@Output() emitFilterOptions = new EventEmitter()

	_isAsc = false;
	_isDsc = false;
	_filter = false;
	constructor() { }

	ngOnInit() {
	}

	toggleAsc() {
		this._isAsc = !this._isAsc
		this._isDsc = false;
		if (this._isAsc)
			this.emitFilterOptions.emit(JSON.stringify({ sort: { [this.key]: "asc" } }));
		else
			this.emitFilterOptions.emit(JSON.stringify({ sort: { [this.key]: false } }));
	}

	toggleDsc() {
		this._isDsc = !this._isDsc
		this._isAsc = false;
		if (this._isDsc)
			this.emitFilterOptions.emit(JSON.stringify({ sort: { [this.key]: "dsc" } }));
		else
			this.emitFilterOptions.emit(JSON.stringify({ sort: { [this.key]: false } }));
	}

	filter(evt: any) {
		this.emitFilterOptions.emit(JSON.stringify({ filter: { key: this.key, value: evt.target.value } }));
	}

	showFilter() {
		this._filter = !this._filter;
	}
}
