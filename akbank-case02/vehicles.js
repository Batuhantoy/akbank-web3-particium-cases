export class vehicles{

    constructor(hgsnumber, owner_firsname,owner_lastname, vehicle_type,date,time, amount) {
        this.hgsnumber = hgsnumber;
        this.owner_firsname = owner_firsname;
        this.owner_lastname = owner_lastname;
        this.vehicle_type=vehicle_type;
        this.date = date;
        this.time=time;
        this.amount = amount;
      }
}

export class car extends vehicles{
    
    constructor(hgsnumber, owner_firsname,owner_lastname) {
        let vehicle_type = "Otomobil";
        let amount=8;
        let date= new Date().toLocaleDateString();
        let time= new Date().toLocaleTimeString();
        super(hgsnumber, owner_firsname,owner_lastname, vehicle_type,date,time,amount); 
    }
}
export class minibus extends vehicles{
    
    constructor(hgsnumber, owner_firsname,owner_lastname) {
        let vehicle_type = "Minibüs";
        let amount=15;
        let date= new Date().toLocaleDateString();
        let time= new Date().toLocaleTimeString();
        super(hgsnumber, owner_firsname,owner_lastname, vehicle_type,date,time,amount);
    }
}
export class bus extends vehicles{
    
    constructor(hgsnumber, owner_firsname,owner_lastname ) {
        let vehicle_type = "Otobüs";
        let amount=25;
        let date= new Date().toLocaleDateString();
        let time= new Date().toLocaleTimeString();
        super(hgsnumber, owner_firsname,owner_lastname, vehicle_type,date,time,amount);      
    }
}