import {counter} from "./counter.js";

class management{

    //Elde edilen toplam günlük bakiyeyi hesaplayan fonksiyon
    dailyTotalEarning(date){
        let total=0;
        let counterr = new counter();
        if(counterr.getCounter()==null){
            alert("Kayıtlı Araç yok");
            console.log("Kayıtlı Araç Yok");
        }else{
            counterr.getCounter().forEach(vehicle => {
                if(vehicle.date==date)
                {
                    total += vehicle.amount;
                }
            });
            return `Tarih : ${date} Toplam Kazanç : ${total}`;
        }        
    }
}

let manage = new management();

// Elde edilen toplam günlük bakiye
//console.log(manage.dailyTotalEarning("03.09.2022"));
