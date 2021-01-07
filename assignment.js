//<<<<<< Task One = inch to feet converter >>>>>>>
function inchtofeet(inch){
    let Feet = inch/12;
    return Feet;    
}
console.log(inchtofeet(1)+' feet');



//<<<<< Task Two = feet to mile converter>>>>>
function feettomile(feet){
    let mile = feet/5280;
    return mile;
}
console.log(feettomile(1)+' mile');



//<<<<< Task Three = Wood Calculator >>>>>
function woodCalculator(chair,table,bed){
    let wdFrChair= chair*1;  // 1Chair = 1 cubic feet wood
    let wdFrTable = table*3; // 1Table = 3 cubic feet wood
    let wdFrBed = bed*5;     //   1Bed = 5 cubic feet wood
   
    let quantityOfWood = wdFrChair + wdFrTable + wdFrBed;
    return quantityOfWood;
}
console.log(woodCalculator(5,2,1)+' Cubic Feet Wood Require.');



//<<<<< Task four = Brick Calculator >>>>>
function brickCalculator(ten,twenty,more){
    let partOne = ten * (15* 1000);   //10 floor * 15 feet * 1000 brick 
    let partTwo = twenty * (12* 1000);   //10 floor * 12 feet * 1000 brick 
    let partThree = more * (10* 1000);  //02 floor * 10 feet * 1000 brick 
     
    let quantityOfBrick = partOne + partTwo + partThree;
    return quantityOfBrick;
}
console.log(brickCalculator(10,10,2)+ ' pieces Brick require.'); 



//<<<<< Task Five = >>>>>
function shortNameFinder(arreay){
    // let shortname = Math.min(arreay[0].length,arreay[1].length,arreay[2].length,arreay[3].length,arreay[4].length,);
    // return shortname;
    if(arreay[1].length && arreay[2].length && arreay[3].length && arreay[4].length > arreay[0].length){
        return arreay[0]+' name is short of them.';}

    else if(arreay[0].length && arreay[2].length && arreay[3].length && arreay[4].length > arreay[1].length ){
        return arreay[1]+' name is short of them.';}

    else if(arreay[0].length && arreay[1].length && arreay[3].length && arreay[4].length > arreay[2].length ){
        return arreay[2]+' name is short of them.';}

    else if(arreay[0].length && arreay[1].length && arreay[2].length && arreay[4].length > arreay[3].length ){
        return arreay[3]+' name is short of them.';}

    else if(arreay[0].length && arreay[1].length && arreay[2].length && arreay[3].length > arreay[4].length ){
        return arreay[4]+' name is short of them.';}

    else{return 'programme fault';}
}
console.log(shortNameFinder(['Saifullah','Usman','Shorif','Ebad','Akbar']));

