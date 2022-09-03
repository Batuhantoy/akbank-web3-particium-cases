function oddishOrEvenish(number){
    let result = 0;
    let stnums = number.toString();

    
    for(let i =0;i<stnums.length;i++){
        console.log(`${i+1}.sayı : ${stnums[i]}`);
        result += parseInt(stnums[i]);
    }
    console.log("Toplam : "+result);
    return (result % 2 == 0 ? "Even" : "Odd");
}

console.log(oddishOrEvenish(4433));