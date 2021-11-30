const sentence = "hello there from lighthouse labs";
let time =  0;
let counter = 0;
 for (const char of sentence) {
      if(counter !== sentence.length - 1) {
        setTimeout(() => {
        process.stdout.write(char) 
        }, time += 80);
        counter ++;
        
      } 
       else {
      setTimeout(() => {
       console.log(char) 
    }, time += 80); 
      } 
}