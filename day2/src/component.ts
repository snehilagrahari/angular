var MyComponent = (config : any) => {
    return (TargetClass : any)=>{
        let prevDetails = new TargetClass();
        return class {
            title:string = prevDetails.title;
            power:number = prevDetails.power;
            selector:string = config.selector;
            template:string = config.template;
        }
    }
}

@MyComponent({
    selector : 'app-root',
    template : `
        <div>
            <h2>{{title}}</h2>
            <h3>{{power}}</h3>
    `
})
class MyComp{
    title = "Welcome to Angular";
    power = 200;
}