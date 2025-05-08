{
    function formatString(input:string, toUpper?:boolean): string {
        if(toUpper || toUpper===undefined){
            return input.toUpperCase();
        }else return input.toLowerCase();
    }

    function filterByRating(items:{title:string; rating:number}[]):{title:string; rating:number}[] {
        const result:{title:string; rating:number}[] = items.filter(item => item.rating >=4 );
        return result;
    }


    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 4.0 },
        { title: "Book C", rating: 5.0 }
      ];

    console.log(filterByRating(books));


    function concatenateArrays<T>(...arrays:T[][]):T[]{
        const result:T[] = [];
        arrays.forEach((item:T[]) => {
            result.push(...item);
        })
        return result;
    }


    console.log(concatenateArrays([1, 2], [3, 4], [5]));
    console.log(concatenateArrays(["a", "b"], ["c"]));



    class Vehicle {
        private make : string;
        year:number;
        constructor(make:string, year:number){
            this.make = make;
            this.year = year
        }

        getInfo(){
            console.log(`Make: ${this.make}, Year: ${this.year}`);
        }
    }

    class Car extends Vehicle {
        private model: string;
        constructor(make:string, year:number, model:string){
            super(make,year);
            this.model = model;
        }
        getModel(){
            console.log(`Model: ${this.model}`);
        }
    }

    const car1 = new Car("Toyota", 2020, "Corolla");
    car1.getInfo();
    car1.getModel();



    function processValue(input:string | number):number {
        if(typeof input === "string"){
            return input.length;
        }else{
            return input*2;
        }
    }
    console.log(processValue("hello")); 



    interface Product {
        name:string;
        price: number;
    }

    function getMostExpensiveProduct(input:Product[]):Product | null {
        if(input.length == 0) return null;
        else {
            let expensive:Product = input[0];
            for(let i=1; i<input.length; i++){
                if(expensive.price < input[i].price){
                    expensive = input[i];
                }
            }
            return expensive;
        }
    }

    const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
      ];

    console.log(getMostExpensiveProduct(products));


    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
      
    function getDayType(day: Day): string {
        if(day === Day.Saturday || day === Day.Sunday){
            return "Weekend";
        }else return "Weekday";
    }
    console.log(getDayType(Day.Monday));
    console.log(getDayType(Day.Sunday));





    async function squareAsync(num:number):Promise<number> {
        return new Promise((resolve, reject) => {
            if(num>0){
                setTimeout(()=>resolve(num*num), 1000);
            }else {
                reject("Negative number not allowed");
            }
        })
    }
    squareAsync(10).then(res => {
        console.log(res);
    })
    squareAsync(-10).catch(res => {
        console.log(res);
    })


   

}


