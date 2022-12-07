function fizzbuzz () {
    for(let i = 1; i <= 100; i++){
        let out;
        if(i % 3 === 0) out = "fizz";
        if(i % 5 === 0) out = "buzz";
        if(i % 3 === 0 && i % 5 === 0) out = "fizzbuzz";
        console.log(out ? out : i);
    }
}
fizzbuzz();