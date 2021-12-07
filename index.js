function convertTime(milliseconds){
    
    if (milliseconds >= 1000 && milliseconds < 60000){
       return Math.floor(milliseconds/1000)
    }
    if (milliseconds >= 60000 && milliseconds < 60000*60){
        min = Math.floor((milliseconds/1000/60) << 0),
        sec = Math.floor((milliseconds/1000) % 60);
        if(sec === 0){
           return min + ' minutes' 
        }
       return (min + ' minutes ' + sec + " seconds");
    }
    if (milliseconds >= 60000*60){
        hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24)
        return hours+" hour"
    }
}



module.exports =  convertTime