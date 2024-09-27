// masala 1
String.prototype.toAlternatingCase = function() {
    let word = this.split('');
    let result = "";

    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toLowerCase()) {
            result += word[i].toUpperCase();
        } else if (word[i] === word[i].toUpperCase()) {
            result += word[i].toLowerCase();
        } else {
            result += word[i];
        }
    }
    return result;
};

console.log("Hello WorlD".toAlternatingCase());

// masala 2
function password(str) {
    let check = {
        uppercase: 0,
        lowercase: 0,
        number: 0,
        length: 0,
    };
    
    if (str.length < 8) {
        return false;
    } else {
        check.length = 1;
    }
    
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        
        if (char >= 'A' && char <= 'Z' && check.uppercase === 0) {
            check.uppercase = 1;
        }
        else if (char >= 'a' && char <= 'z' && check.lowercase === 0) {
            check.lowercase = 1;
        }
        else if (!isNaN(char) && char !== ' ' && check.number === 0) {
            check.number = 1;
        }
    }
    
    if (check.uppercase === 1 && check.lowercase === 1 && check.number === 1 && check.length === 1) {
        return true;
    }
    
    return false;
}

console.log(password("Hello W0rld"));

// masala 3
function getDivisorsCnt(n){
    let count = 0;
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            count++;
        }
    }
    return count;
}

console.log(getDivisorsCnt(4));

// masala 4
function sumCircles(...diameters) {
    let totalArea = 0;
  
    for (let diameter of diameters) {
        const radius = diameter / 2;
        const area = Math.PI * (radius ** 2);
        totalArea += area;
    }
  
    const roundedArea = Math.round(totalArea);
  
    return `We have this much circle: ${roundedArea}`;
}
  
console.log(sumCircles(2, 3, 4))

// masala 5
function inAscOrder(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
    
}

console.log(inAscOrder([1, 2, 3, 4, 5, 6, 7, 8, 10]))