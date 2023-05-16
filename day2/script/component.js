"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MyComponent = (config) => {
    return (TargetClass) => {
        let prevDetails = new TargetClass();
        return class {
            constructor() {
                this.title = prevDetails.title;
                this.power = prevDetails.power;
                this.selector = config.selector;
                this.template = config.template;
            }
        };
    };
};
let MyComp = class MyComp {
    constructor() {
        this.title = "Welcome to Angular";
        this.power = 200;
    }
};
MyComp = __decorate([
    MyComponent({
        selector: 'app-root',
        template: `
        <div>
            <h2>{{title}}</h2>
            <h3>{{power}}</h3>
    `
    })
], MyComp);
