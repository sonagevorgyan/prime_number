module.exports = {
	isPrime: function(num) {
		if(num <=1) {
			return false;
		}

		let div = 2;

		while(div <= Math.sqrt(num)) {
			if(num % div === 0) {
				return false;
			}

			div++;
		}

		return true;
	},

	includeRange: function (num1, num2) {
		let rangeArray = [];
		let rangePrime= [];
		let maxnum;
		let minnum;
		if (num1>num2) {
			maxnum=num1;
			minnum=num2;
		}
		else {
			maxnum=num2;
			minnum=num1;
			
		}

			while (maxnum>= minnum) {
				rangeArray.push(maxnum);
				maxnum--;
				}
	
		for(let i=0; i < rangeArray.length; i++) {
		if(this.isPrime(rangeArray[i]) ) {  
			rangePrime.push(rangeArray[i]);
		      }
		 }
		  console.log(rangePrime);
		}
	}
		


    
	
	
   