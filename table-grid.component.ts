import { Component, Input, OnInit, Output, EventEmitter, ContentChildren, QueryList, AfterViewInit, ElementRef } from "@angular/core";
import { TableColumnComponent } from "../table-column/table-column.component";

@Component({
	selector: 'kt-table-grid',
	templateUrl: './table-grid.component.html',
	styleUrls: ['./table-grid.component.css']
})
export class TableGridComponent implements OnInit, AfterViewInit {
    
    @ContentChildren(TableColumnComponent, {descendants: true}) columns: QueryList<TableColumnComponent>;
    @ContentChildren('actionn') nest: QueryList<ElementRef<HTMLElement>>;
    

    @Input() datas = []
    @Input() totalNumberOfDatas = 0
    @Input() customeRows = ""
    @Input() paginator = false
    @Output() newQueries = new EventEmitter()

    _optionsList: any[] = [];
    _queries: any;

    _totalPages: number = 0;

    _allowedRows = [5, 10, 20, 50];

    constructor() {
        this._queries = {
            page_number: null,
            no_of_rows: null,
            filter: [],
            sort: {}
        }
    }
    ngAfterViewInit(): void {
        this.setOptions(this.columns);
    
    }
   

    ngOnInit(): void {
        if (!this.paginator) {
            this.getAllDatas();
        }
        
    }

    setOptions(columns: QueryList<TableColumnComponent>) {
        this._optionsList = columns.map(opt => {
            return {
                header: opt.header,
				key: opt.key,
				sortable: opt.sortable,
                filterable: opt.filterable,
            };
        })
    }

    getNewDatas(query: string) {
        let queryObj = JSON.parse(query);
        if(queryObj.sort) {
            let key = Object.keys(queryObj.sort)[0];
            if(!queryObj.sort[key] && this._queries.sort[key])
                delete  this._queries.sort[key]
            else
                this._queries.sort[key] = queryObj.sort[key]
            this.newQueries.emit(JSON.stringify(this._queries));
            return
        }

        if(queryObj.filter) {
            let key = queryObj.filter.key;
            let indx = this._queries.filter.findIndex(obj => obj.key === key);
            if(indx >= 0)
                this._queries.filter[indx] = queryObj.filter;
            else
                this._queries.filter.push(queryObj.filter);
            this.newQueries.emit(JSON.stringify(this._queries));
            return
        }

        this._queries = {
            ...this._queries,
            ...queryObj
        }
        this.newQueries.emit(JSON.stringify(this._queries));
        return
    }

    getAllDatas() {
        const queryTemplete = "/all";
        this.newQueries.emit(queryTemplete);
    }

}
