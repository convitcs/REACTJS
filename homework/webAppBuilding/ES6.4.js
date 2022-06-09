class person{ 
    constructor(name){
        this.name = name
    }
    get getName(){
        console.log(this.name)
    }
    set setName(name){
        this.name = name
    }
    walk (){
        console.log(this.name +" is walking")
    }
}

class programmer extends person{
    constructor(name){
        super(name)
    }
    writeCode (){
        console.log("and maybe coding")
    }
    
}

let Minh = new programmer("minh")
Minh.walk()
Minh.writeCode()