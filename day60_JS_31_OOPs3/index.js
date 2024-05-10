class price{
    constructor(){
        let iphonePrice = 50000;


        this.increasePrice = () =>{
            this.increasePrice++
            console.log(this.increasePrice)
        }

        this.disCount = (code) =>{
            if(code == 'wdm'){
                const disCount = (iphonePrice*20)/100;
                iphonePrice = iphonePrice - disCount;
            } else if(code == "web"){
                const disCount = (iphonePrice*10)/100;
                iphonePrice = iphonePrice - disCount;
            }
            console.log("You only have to pay = ",iphonePrice)

        }
    }
}

const p = new price();

p.disCount("web");