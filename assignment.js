

//(1) KilometerTOMeters

function KilometerTOMeters(meter) {
    let kilometer = meter / 1000;
    return kilometer
}
var result = KilometerTOMeters(150300);
console.log(result)

//(2) budgetCalculator

function budgetCalculator(watch, mobile, laptop) {
    var calculatForWatch = watch * 3;
    var calculatForMobile = mobile * 4;
    var calculatForLaptop = laptop * 2;
    var totalCalculat = calculatForWatch + calculatForMobile + calculatForLaptop;

    return totalCalculat;
}
var result = budgetCalculator(50, 100, 500);
console.log("Electronics Calculat:", result);


//(3) hotelCost

function hotelCost(first, secend, third) {
    var hotelRentFirst = first * 10;
    var hotelRentsecend = secend * 9;
    var hotelRentthird = third * 7;

    var totalRentCost = hotelRentFirst + hotelRentsecend + hotelRentthird;

    return totalRentCost;
}
var total = hotelCost(100, 80, 50);
console.log("Total hotel rent:", total)



//(4) megaFriend

var friend = ["aminul islam", "messi", "shakib", "saimun", "rana"];
function megaFriend(friend) {
    var megaName = friend[0];
    for (let i = 0; i < friend.length; i++) {
        var carrectName = friend[i];
        if (carrectName.length > megaName.length) {
            megaName = carrectName;
        }

    }
    return megaName
}
var result = megaFriend(friend)
console.log(result)



