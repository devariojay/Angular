"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var UserComponent = (function () {
    function UserComponent() {
        this.name = 'Dee';
        this.email = 'dee@gmail.com';
        this.address = {
            street: '12 main st',
            city: 'Boston',
            state: 'MA'
        };
        this.hobbies = ['coding', 'designing', 'gaming'];
    }
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'user',
        template: "<h1>\n  \tWelcome {{name}} </h1>\n  \t<p><strong>Email: {{email}}</strong></p>\n  \t<p><strong>Address: {{address.street}}, {{address.city}}, {{address.state}}</strong></p>\n  \t<h3>Hobbies</h3>\n  \t<ul>\n  \t\t<li *ngFor=\"let hobby of hobbies\">\n  \t\t\t{{hobby}}\n  \t\t</li>\n  \t</ul>\n  ",
    }),
    __metadata("design:paramtypes", [])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map