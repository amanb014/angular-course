import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-error',
	template: `<h2>{{errorMessage}}</h2>`,
	styles: [`
		h2 {
			font-size: 16px;
		}`]
})
export class ErrorMessageComponent implements OnInit {
	errorMessage: string;

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.data.subscribe(
			(data) => {
				this.errorMessage = data['message']
			}
		)
	}
}