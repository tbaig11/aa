class students{
    name: string;
    age: number;
    gender: string;
    nationality: string;

    constructor() {
        this.gender='female';
}
getnationality():string{
 return this.nationality;
}

}

class undergraduates extends students implements iundergrad{
    batch: number;
    GPA:number;

    constructor(batch:number) {
        super();
        this.batch=batch;
    }

}
interface iundergrad{
    name: string;
    age: number;
    gender: string;
    nationality: string;
    GPA:number;
}
var student1= new undergraduates(10);
     student1.nationality="pak"
console.log ("the nationality is"+student1.getnationality());
