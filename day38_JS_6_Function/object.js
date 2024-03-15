const laptop = {

    brandName: 'Hp',
    price:70689,
    ram:'8 GB',
    rom:'2 TB',
    processor:"Intel i9 10th gen",
    os:'windows',
    camera:'800 MP',
    battery: '8000 mAh',
    shell: function(){
        console.log("This is my shell")
    }

}
console.log(laptop.brandName, laptop.camera, laptop.shell())
