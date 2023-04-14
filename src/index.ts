class DateTime extends Date {
  constructor(x:any) {
    super(x);
  }
  private lZ(num:number | string) {
    if (typeof num == "string") num = parseInt(num)
    if (num < 10 && num >= 0) {
      return `0${num}`;
    }
    return num
  }

  private allowedSymbols:Array<string> = ['Y', 'M', 'D', 'h', 'm', 's', 'i', '-', ':', '_', '.']

  format(format:string) {
    let output:string = '';
    let skip:number = 0;
    for (let i = 0; i < format.length; i++) {

      if (!this.allowedSymbols.includes(format[i])) throw new Error(`illegal symbol passed in format: ${format[i]}`);

      if (skip > 0) {
        skip--;
        continue;
      }

      if (format[i] == 'Y') {
        if (format[i + 1] == 'Y' && format[i + 3] != 'Y') {
          output += this.getFullYear().toString().slice(2, 4);
          skip = 1;
        } else if (format[i + 3] == 'Y') {
          output += this.getFullYear().toString();
          skip = 3;
        }
      } else if (format[i] == 'M') {
        if (format[i + 1] == 'M') {
          output += this.lZ(this.getMonth() + 1);
          skip = 1;
        } else {
          output += this.getMonth();
        }
      } else if (format[i] == 'D') {
        if (format[i + 1] == 'D') {
          output += this.lZ(this.getDate());
          skip = 1;
        } else {
          output += this.getDate();
        }
      } else if (format[i] == 'h') {
        if (format[i + 1] == 'h') {
          output += this.lZ(this.getHours());
          skip = 1;
        } else {
          output += this.getHours();
        }
      } else if (format[i] == 'm') {
        if (format[i + 1] == 'm') {
          output += this.lZ(this.getMinutes());
          skip = 1;
        } else {
          output += this.getMinutes();
        }
      } else if (format[i] == 's') {
        if (format[i + 1] == 's') {
          output += this.lZ(this.getSeconds());
          skip = 1;
        } else {
          output += this.getSeconds();
        }
      } else if (format[i] == 'i') {
        if (format[i + 1] == 'i' && format[i + 2] == 'i' && format[i + 3] == 'i') {
          output += this.getFullYear().toString().slice(2, 4);
          skip = 3;
        } else {
          throw new Error('milliseconds (i) must have 4 spaces')
        }
      } 
      else {
        output += format[i];
      }
    }
    return output;
  }
}


module.exports = DateTime;