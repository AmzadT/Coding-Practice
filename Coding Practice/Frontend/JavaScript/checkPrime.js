// check a single prime number
function CheckPrime(number) {
  var count = 0;

  for (var i = 0; i <= number; i++) {
    if (number % 2 == 0) {
      if (number % 2 == 0) {
        count++;
      }
    }

    if (count == 2) {
      console.log("Prime Number");
    } else {
      console.log("Not Prime Number");
    }
  }
}
CheckPrime(17);




// check multiple prime numbers at a time
function isPrime(number) {
  if (number <= 1) return false; // Numbers less than or equal to 1 are not prime

  for (let i = 2; i * i <= number; i++) {
    // Loop from 2 to the square root of the number
    if (number % i === 0) return false; // If divisible, it's not a prime number
  }

  return true; // Prime if no divisors found
}


function findPrimesInRange(start, end) {
  for (let number = start; number <= end; number++) {
    let prime = true;

    if (number <= 1) {
      prime = false; // Numbers <= 1 are not prime
    } else {
      for (let i = 2; i * i <= number; i++) {
        // Check divisors manually
        if (number % i === 0) {
          prime = false; // Found a divisor, not prime
          break;
        }
      }
    }

    if (prime) {
      console.log(number + " is a Prime Number");
    }
  }
}

// Example usage
findPrimesInRange(1, 50);
