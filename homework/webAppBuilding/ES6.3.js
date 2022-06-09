class main {
    constructor (name,describe){
        this.name = name,
        this.describe = describe
    }
    static cal (a){
        return a*3 
    }
    set setName (name){
        this.name = name
    }
}

class figure extends main{
    constructor (length, name, describe)
    {
        super(name,describe)
        this.length = length
    }
    get getInfo(){
        console.log("length: "+this.length+"; describe: "+this.describe)
    }
}


let student2 = new figure(4,"Vuong","4 canh bang nhau va 1 goc vuong")
student2.getInfo
