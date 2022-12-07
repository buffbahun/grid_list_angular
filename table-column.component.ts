import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kt-table-column',
  templateUrl: './table-column.component.html',
  styleUrls: ['./table-column.component.scss']
})
export class TableColumnComponent implements OnInit{

  @Input() header: string = '';
  @Input() key: string = '';
  @Input() sortable: boolean = true;
  @Input() filterable: boolean = true;

  _header: string;
  _key: string;
  _sortable: boolean;
  _filterable: boolean;

  constructor() {}

  ngOnInit() {}

  
}
