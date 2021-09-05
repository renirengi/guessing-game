class GuessingGame {
    constructor() {
     this.candidate = 0;  
     this.max=0;
     this.min=0;
    }

    

    setRange(min, max) { 
        this.max=max;
        this.min=min;
    }

    guess() {
        this.candidate = this.min + Math.round((this.max-this.min)/2);
     return this.candidate;
    }

    lower() {
      this.max = this.candidate; 
    }

    greater() {
      this.min = this.candidate; 
    }
}

module.exports = GuessingGame;
