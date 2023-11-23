class Uber{
    constructor(city, kilometre, baserate){
        this.city =city;
        this.kilometre = kilometre;
        this.baserate =10;
        
    }
    getFee(){
        if(this.kilometre<=10){
            return this.baserate;
        }
            else {
            
                    return (this.baserate*this.kilometre);
                }


            }
        }
    
const price =new Uber("Madurai", 10);
console.log(price.getFee());