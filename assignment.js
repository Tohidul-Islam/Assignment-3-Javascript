
// https://github.com/Tohidul-Islam/Assignment-3-Javascript/


/******************kilometer To Meter***********************************/
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
    }

var result = kilometerToMeter(9);
console.log(result)




/******************Budget Calculator***************************/
function budgetCalculator(watch, mobile, laptop){
    var fullBudget = watch * 50 + mobile * 100 + laptop * 500;
    return fullBudget;
}
 var result = budgetCalculator(5, 3, 2)
 console.log(result)



/******************Hotel Cost*****************/
function hotelCost(night){
    var hotelRoomCost = 0;
    if(night <= 10){
        hotelRoomCost = night * 100;
    
    } else if( night <= 20){
        var firstTenNights = 10 * 100;
        var nightRemaining = night - 10;
        var secondTenNights = nightRemaining * 80;
        hotelRoomCost = firstTenNights + secondTenNights;
    }
    else{
        var firstTenNights = 10 * 100;
        var secondTenNights = 10 * 80;
        var nightRemaining = night - 20;
        var afterTweentyNights = nightRemaining * 50;
        hotelRoomCost = firstTenNights + secondTenNights + afterTweentyNights;
    }
    return  hotelRoomCost;
}

var totalCost = hotelCost(11);
console.log(totalCost);


/*****************Mega Friend*****************/
function megaFriend(name){
    var longestName = name[0];
    for (var i = 0; i < name.length; i++){
        var friendName = name[i];
        if(longestName.length < friendName.length){
            longestName = friendName;
        }
    }
    return longestName;
}

var friend = ['Pappu', 'Tohidul Islam', 'Muhammad Tohidul']
var longestFriendName = megaFriend(friend);
console.log(longestFriendName)
