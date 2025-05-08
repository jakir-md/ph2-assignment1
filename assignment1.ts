{
    function formatString(input: string, toUpper?: boolean): string {
      if (toUpper || toUpper === undefined) {
        return input.toUpperCase();
      } else return input.toLowerCase();
    }
  
  
    function filterByRating(
      items: { title: string; rating: number }[]
    ): { title: string; rating: number }[] {
      const result: { title: string; rating: number }[] = items.filter(
        (item) => item.rating >= 4
      );
      return result;
    }
  
  
    function concatenateArrays<T>(...arrays: T[][]): T[] {
      const result: T[] = [];
      arrays.forEach((item: T[]) => {
        result.push(...item);
      });
      return result;
    }
  
  
    class Vehicle {
      private make: string;
      year: number;
      constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
      }
  
      getInfo() {
        console.log(`Make: ${this.make}, Year: ${this.year}`);
      }
    }
  

    class Car extends Vehicle {
      private Model: string;
      constructor(make: string, year: number, Model: string) {
        super(make, year);
        this.Model = Model;
      }
      getModel() {
        console.log(`Model: ${this.Model}`);
      }
    }
  

    function processValue(input: string | number): number {
      if (typeof input === "string") {
        return input.length;
      } else {
        return input * 2;
      }
    }
  

    interface Product {
      name: string;
      price: number;
    }
  

    function getMostExpensiveProduct(input: Product[]): Product | null {
      if (input.length == 0) return null;
      else {
        let expensive: Product = input[0];
        for (let i = 1; i < input.length; i++) {
          if (expensive.price < input[i].price) {
            expensive = input[i];
          }
        }
        return expensive;
      }
    }
  
  
    enum Day {
      Monday,
      Tuesday,
      Wednesday,
      Thursday,
      Friday,
      Saturday,
      Sunday,
    }
  
  
    function getDayType(day: Day): string {
      if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
      } else return "Weekday";
    }
  
  
    async function squareAsync(num: number): Promise<number> {
      return new Promise((resolve, reject) => {
        if (num > 0) {
          setTimeout(() => resolve(num * num), 1000);
        } else {
          reject("Negative number not allowed");
        }
      });
    }
    
  }
  