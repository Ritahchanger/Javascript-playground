class RateLimiter{

    constructor(limit,window){
     
        this.limit = limit;

        this.window = window;

        this.timestamps = [];
        
    }

    request(){

        const now = Date.now();

        this.timestamps.push(now);

        this.timestamps = this.timestamps.filter(timestamp => now - timestamp <= this.window );

        if(this.timestamps.length > this.limit){

            console.log("Rate limit exceeded!");

            return false;
        
        }

        console.log("Request allowed");

        return true;

    }

}