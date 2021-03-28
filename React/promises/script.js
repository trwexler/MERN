const tossCoin = ()=>{
    return Math.random() > 0.5 ? "heads" : "tails";
}


const fiveHeads = new Promise( (resolve, reject, pending) => {     
        let headsCount = 0;
        let attempts = 0;
        
        while(headsCount < 5) { 
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);

            result === "heads"?
            headsCount++ && attempts++
            :headsCount = 0 && attempts++

            if(headsCount == 5){
                resolve(`It took ${attempts} tries to flip five "heads"`);
            }
            else if(headsCount>5){
                reject("This is an error");
            }
    }
});

fiveHeads.then( res => console.log(res)).catch( err => console.log(err));