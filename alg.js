// Leap Year Checker
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// Ticket Pricing
function calculateTicketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}

// Weather Clothing Adviser
function adviseClothing(temperature, isRaining) {
    if (temperature < 10) {
        return "Wear a heavy jacket and a scarf.";
    } else if (temperature >= 10 && temperature <= 20) {
        if (isRaining) {
            return "Wear a light jacket and take an umbrella.";
        } else {
            return "Wear a light jacket.";
        }
    } else {
        if (isRaining) {
            return "Carry an umbrella.";
        } else {
            return "You're good to go with regular clothing.";
        }
    }
}

// Fibonacci Sequence
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Palindrome Checker
function isPalindrome(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (s.length <= 1) {
        return true;
    } else {
        if (s[0] !== s[s.length - 1]) {
            return false;
        } else {
            return isPalindrome(s.slice(1, -1));
        }
    }
}

// Power Function
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else if (exponent < 0) {
        return 1 / power(base, -exponent);
    } else {
        return base * power(base, exponent - 1);
    }
}

// Testing the functions
let year = 2024;
let age = 15;
let temperature = 18;
let isRaining = false;
let n = 10;
let string = "A man, a plan, a canal, Panama!";

console.log(`Is ${year} a leap year? ${isLeapYear(year)}`);
console.log(`The ticket price for someone aged ${age} is $${calculateTicketPrice(age)}`);
console.log(`For a temperature of ${temperature}°C and rain status ${isRaining}, ${adviseClothing(temperature, isRaining)}`);
console.log(`The ${n}th Fibonacci number is ${fibonacci(n)}`);
console.log(`Is '${string}' a palindrome? ${isPalindrome(string)}`);
console.log(`2^3 is ${power(2, 3)}`);
