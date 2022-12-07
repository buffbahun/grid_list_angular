import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'kt-table-paginator',
  templateUrl: './table-paginator.component.html',
  styleUrls: ['./table-paginator.component.scss']
})
export class TablePaginatorComponent implements OnInit, OnChanges {

  @Input() customeRows = ""
  @Input() totalNumberOfDatas = 0;
  @Output() emitPageOptions = new EventEmitter()

  _allowedRows = [5, 10, 20, 50];
  _pageNo: number = 1;
  _rowsNo: number = 5;
  _totalPages = 0;

  constructor() { }

  ngOnInit() {
    if(this.customeRows) {
      this._allowedRows = this.customeRows.split(",").map(str => +str);
    }
    this._rowsNo = this._allowedRows[0];
    
    this.setPageOptions();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this._totalPages !== this.totalNumberOfDatas) {
      this._totalPages = Math.ceil(this.totalNumberOfDatas / this._rowsNo);
    }
  }

  setPageOptions() {
    const queryTemplete = {page_number: this._pageNo, no_of_rows: this._rowsNo}
    this.emitPageOptions.emit(JSON.stringify(queryTemplete));
  }

  changePage(pageInc: boolean) {
    if (pageInc && this._pageNo < this._totalPages) {
        this._pageNo++;
        this.setPageOptions();
    }

    if(!pageInc && this._pageNo > 1) {
        this._pageNo--;
        this.setPageOptions();
    }
  }

  changeRowNumber(rowNo: any) {
    this._rowsNo = rowNo.target.value;
    this._totalPages = Math.ceil(this.totalNumberOfDatas / this._rowsNo);
    this._pageNo = 1;
    this.setPageOptions();
	}

}
