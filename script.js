let age = Math.floor(Math.random() * 20 + 1)
let guess = 0

do {
  guess = parseInt(prompt('Guess my age!'))
  if (guess > age) {
    alert('Your guess was too high!')
  } else if (guess < age) {
    alert('Your guess is too low!')
  } else {
    alert('You got it!')
    const ans = prompt('Do you want to play again? (yes/no)')
    if (ans === 'yes') {
      age = Math.floor(Math.random() * 20 + 1)
      guess = 0
    }
  }
} while (age !== guess)
