var salon={
    name:"The Fashion Pet",
    address:{
        street:"N. Petrose Ave Tampa, FL",
        number:"555-654-6987"
    },
    hours:{
        open:"8:00 a.m.",
        close:"8:00 p.m."
    }, 
    pets:[]
}

//document.write("Pets registered: " + salon.pets.length + "<br>" + "<br>");
//document.write("Pet names: " + "<br>" + "1." + salon.pets[0].name + "<br>","2." + salon.pets[1].name + "<br>","3." + salon.pets[2].name + "<br>","4.");





var id=0;
/*constructor */
class Pet{
    constructor(name,age,gender,type,breed,service,price,ownersName,contactPhone){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.type=type;
        this.breed=breed;
        this.service=service;
        this.price=price;
        this.payment=paymentMethod;
        this.ownersName=ownersName;
        this.contactPhone=contactPhone;
        this.id=id++;
}
}

var scooby=new Pet("Scooby",50,"Male","Dog","Dane","Full Service",19.99,"Shaggy","555-555-555")
var champ=new Pet("Champ",1,"Male","Dog","Pit","Nails",10.5,"Joel","897-898-0765");
var tweety=new Pet("Tweety",2,"Female","Bird","Canarian","Full Service",19.99,"Silvester","555-555-555")





const txtName=document.getElementById('petName');
const txtAge=document.getElementById('petAge');
const txtGender=document.getElementById('petGender');
const txtType=document.getElementById('petType');
const txtBreed=document.getElementById('petBreed');
const txtService=document.getElementById('service');
const txtPrice=document.getElementById(`servicePrice`)
const txtPayment=document.getElementById('paymentMethod');
const txtOwner=document.getElementById('petownersName');
const txtPhone=document.getElementById('petcontactPhone');


function register(){
    var thePet = new Pet(txtName.value,txtAge.value,txtGender.value,txtType.value,txtBreed.balue,txtService.value,txtPayment.value,txtPrice.value,txtOwner.value,txtPhone.value);
   salon.pets.push(thePet);
   console.log(thePet);
   displayTable(thePet);
   clear();
   registeredPets();
   profitCalculation();
}

function clear(){
    txtName.value="";
    txtAge.value="";
    txtGender.value="";
    txtType.value="";
    txtBreed.value="";
    txtService.value="";
    txtPrice.value="";
    txtPayment.value="",
    txtOwner.value="";
    txtPhone.value="";
}


function registeredPets(){
    document.getElementById('registeredPets').innerHTML=`Number of pets: ${salon.pets.length}`;
}


function profitCalculation(){
    var total=0;
    for(var i=0;i<salon.pets.length;i++){
        total=total + salon.pets[i].price;
    }
    
    document.getElementById('profits').innerHTML=`Profits: $ ${total}`;
}

function deletePet(petId){
    //delete from array
    //travel the array  to search the pet
    for(var i=0;i<salon.pets.length;i++){
        if(salon.pets[i].id===petId){
            indexDelete=i; //storing the position
        }
    }
    //splice()
    salon.pets.splice(indexDelete,1);
   
    //delete the pet from html
    //remove
    $('#'+petId).remove();
}

function search(){
    var text= $('#petSearch').val();
    var searchIndex;
    for(var i=0;i<salon.pets.length;i++){
       if(text.toLowerCase()===salon.pets[i].name.toLowerCase() || text.toLowerCase()===salon.pets[i].service.toLowerCase())
       {
           searchIndex=i;
       }
       else{
           console.log("No");
        }
    }
       console.log(searchIndex);

       $('#' + searchIndex).addClass('highlight');
        
}






    //add an input:text under the index.html (add id="petSearch")
// get the value from the input $('#petSearch').val() store it in a variable
    //Search by name
    //travel the array (f)
    //compare the variable with salon.pets[].name
    //store the position

    //highlight the found pet on the table



function init(){
    //display information on the footer

text=`
${salon.name}, ${salon.address.street} ${salon.address.number} <br>
It is open from ${salon.hours.open} to ${salon.hours.close}
`;

document.getElementById(`footer`).innerHTML=text;
   
    salon.pets.push(scooby);
    displayTable(scooby);
    salon.pets.push(champ);
    displayTable(champ);
    salon.pets.push(tweety);
    displayTable(tweety);
    registeredPets();
    profitCalculation();
}


window.onload=init;