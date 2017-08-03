import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>
  	Welcome {{name}} </h1>
  	<p><strong>Email: {{email}}</strong></p>
  	<p><strong>Address: {{address.street}}, {{address.city}}, {{address.state}}</strong></p>
  	<h3>Hobbies</h3>
  	<ul>
  		<li *ngFor="let hobby of hobbies">
  			{{hobby}}
  		</li>
  	</ul>
  `,
})
export class UserComponent  { 

	name: string; 
	email: string;
	address: address;
	hobbies: string[];

	constructor() {
		this.name = 'Dee'; 
		this.email = 'dee@gmail.com';
		this.address = {
			street: '12 main st',
			city: 'Boston',
			state: 'MA'
		}
		this.hobbies = ['coding','designing','gaming'];
	}
}

interface address {
	
	street: string;
	city: string;
	state: string;

}