import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { map } from 'rxjs/operators';

@Component({
    selector: 'vit-venta',
    templateUrl: 'venta.component.html'
})

export class VentaComponent implements OnInit {
    public data: any;

    constructor(
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {


        this.route.paramMap
            .pipe(map((res: Params) => res.params))
            .subscribe(res => {
                console.log(res);
                this.data = res;
            });
    }
}
