class Product {
    constructor(brandname){
        this.brandname = brandname;

    }

    showFeatures = (productType)=>{
        if(productType == "mobile"){
            console.log(`The brqndname of phone is ${this.brandname}`)
        }
        else if(productType == "laptop"){
            console.log(`The brandname of laptop is ${this.brandname}`)
        }
        else if(productType == "watch"){
            console.log(`The brandname of watch is ${this.brandname}`)
        }
        
    }

    showPrice = (price) => console.log(`The price of the brand is ${price} MP`);  


    
}

class moblies extends Product {
  specification = (ram, rom, display) => {
    console.log(
      `The ram of the phone is ${ram} GB,\n The rom of the phone is ${rom} GB,\n The display of the phone is ${display} inches`
    );
  };
}
class laptops extends Product{}

const obj = new moblies();  
obj.showFeatures("watch"); // The brandname of watch is Samsung
obj.showPrice(50000); // the price of the brand is 50000 MP

const objLaptops = new laptops(""); 
objLaptops.showFeatures("laptop"); // The brandname of laptop is Dell
objLaptops.showPrice(50000); // the price of the brand is 50000 MP


const objspecification = new moblies(); 
objspecification.specification(4, 64, 6.5); // The ram of the phone is 4 GB, The rom of the phone is 64 GB, The display of the phone is 6.5 inches