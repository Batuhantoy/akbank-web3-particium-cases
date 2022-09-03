export class vehicles{

    constructor(hgsnumber, owner_firsname,owner_lastname, vehicle_type,date, amount) {
        this.hgsnumber = hgsnumber;
        this.owner_firsname = owner_firsname;
        this.owner_lastname = owner_lastname;
        this.vehicle_type=vehicle_type;
        this.date = date;
        this.amount = amount;
      }
}

export class car extends vehicles{
    
    constructor(hgsnumber, owner_firsname,owner_lastname) {
        let vehicle_type = "Otomobil";
        let amount=8;
        let date= new Date().toLocaleString();
        super(hgsnumber, owner_firsname,owner_lastname, vehicle_type,date,amount); 
    }
}
export class minibus extends vehicles{
    
    constructor(hgsnumber, owner_firsname,owner_lastname) {
        let vehicle_type = "Minibüs";
        let amount=15;
        let date= new Date().toLocaleString();
        super(hgsnumber, owner_firsname,owner_lastname, vehicle_type,date,amount);
    }
}
export class bus extends vehicles{
    
    constructor(hgsnumber, owner_firsname,owner_lastname ) {
        let vehicle_type = "Otobüs";
        let amount=25;
        let date= new Date().toLocaleString();
        super(hgsnumber, owner_firsname,owner_lastname, vehicle_type,date,amount);      
    }
}