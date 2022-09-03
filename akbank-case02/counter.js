import {vehicles} from "./vehicles.js";
import {car} from "./vehicles.js";
import {minibus} from "./vehicles.js";
import {bus} from "./vehicles.js";

const daily_passed = JSON.parse(localStorage.getItem('passed_vehicles'));

export class counter {

    getCounter(){
        return JSON.parse(localStorage.getItem('passed_vehicles'));
    }
    setCounter(counter){
        localStorage.setItem('passed_vehicles', JSON.stringify(counter));
    }

    //Bütün araç sınıflarını kabul eden ve ilgili araç sınıfına göre bakiyeyi azaltan tek bir fonksiyon
    payment(vehicle){
    
        if(vehicle.vehicle_type=="Otomobil"){
            const indirim = 50 / 100;
            vehicle.amount= vehicle.amount - (vehicle.amount * indirim);
            daily_passed.push(vehicle);
        }
        else if(vehicle.vehicle_type=="Minibüs"){
            const indirim = 25 / 100;
            vehicle.amount= vehicle.amount - (vehicle.amount * indirim);
            daily_passed.push(vehicle);
        }
        else if(vehicle.vehicle_type=="Otobüs"){
            const indirim = 5 / 100;
            vehicle.amount= vehicle.amount - (vehicle.amount * indirim);
            daily_passed.push(vehicle);
        }

        this.setCounter(daily_passed);
    }
}

//HGS sisteminden geçiş yapan araçları oluşturuyoruz
let araba = new car(4984,"Batuhan","Toy");
let otobüs = new bus(789,"Berat","Yılmaz");



//HGS sisteminden geçiş yapan aracı fiyatlandırma yapan fonksiyona gönderiyoruz ve araç o gün HGS sisteminden geçen araçların tutuldupu array listesine ekleniyor
let counterr = new counter();
//counterr.payment(otobüs);

//HGS sisteminden geçiş yapmış araçları görmek için
//console.log(counterr.getCounter());


