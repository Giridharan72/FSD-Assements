class UberPrice{
    constructor(Name,Depatur_Place,Arrival_Place,Kilometer){
        this.Name=Name;
        this.Depatur_Place=Depatur_Place;
        this.Arrival_Place=Arrival_Place;
        this.Kilometer=Kilometer;

    }
    //price per kilometer is 12
    getdetails=function(){
        console.log(`Name:${this.Name}`);
        console.log(`Depature:${this.Depatur_Place} , Arrival:${this.Arrival_Place}`);
        console.log(`The total price of the travel is:${this.Kilometer*12}`);
    };
    
}

const price=new UberPrice("Giridharan","Ganghipuram","Saravanampatti",12);
price.getdetails();