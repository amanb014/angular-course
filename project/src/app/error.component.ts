import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

@Component({
	selector: 'app-error',
	template: '<h1>{{errorMsg}}</h1>',
	styles: []
})
export class ErrorComponent implements OnInit {
	errorMsg: string;

	constructor(private route: ActivatedRouteSnapshot) { }
	ngOnInit() {
		this.errorMsg = this.route.data['message'];
	}
}