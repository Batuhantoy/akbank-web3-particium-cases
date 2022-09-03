import {counter} from "./counter.js";

class management{

    //Elde edilen toplam günlük bakiyeyi hesaplayan fonksiyon
    dailyTotalEarning(){
        let total=0;
        let counterr = new counter();
        counterr.getCounter().forEach(vehicle => {
            total += vehicle.amount;
        });
        return total;
    }
}

let manage = new management();

// Elde edilen toplam günlük bakiye
console.log(manage.dailyTotalEarning());
