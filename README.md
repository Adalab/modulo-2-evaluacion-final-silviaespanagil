
# Javascript exercise: Circus game
## _Guess the number_
¡Hola!

This last weeks I've been learning some Javascript and this is my first attempt on something real using a couple of functions and events ✨. The original exercise was intended for my intermediate evaluation in Adalab's Bootcamp, however, the exercise was timed and intended only to evaluate the Javascript code. I enjoyed the concept so much that wanted to give it a twist adding some new features and a lot more style 💅.

## Initial Requirements 📋

- Small and simple HTML
- A random number between 1 to 100 must be generated only once
- The user number guess must be between 1 to 100
- In the clue box the user will find if his guess is too low or high
- If the user guess is correct a congratulations message will appear.
- There is a counter of how many times the user has tried to guess the number.

## Extra features 🔥
- After 5 attempts a "give up" button is generated. This button will show the correct number and will also disable future attempts.
- Winner animation. 

## Tech 💻
Starring:
[Adalab Web Starter Kit](https://github.com/Adalab/adalab-web-starter-kit)  - An amazing template that allowed me to use a local host, SASS, HTML Template Engines and gulp. For more information you may visit [the Kit repository](https://github.com/Adalab/adalab-web-starter-kit)

### Built with 🔨
- Visual Code Studio: as code editor
- HTML
- SASS
- Javascript

## Development ⌨️

At first, I started building a simply form HTML with some styles. After it I went all in with the functions and events.

First of all I wrote in a paper the user story so I could see the needed functions clearer. I started doing the random number event. I wanted it to be generated as the user loaded the page so it wouldn't generate again in the click event.

At last I went to the handler function that consist in a numberValidator function and the counter.

For the  extra features I refactored my HTML to partials and added all the styles using SASS. After the page was looking kind of cute I started doing the new functions. First of all I did a "Give up" function, which after 5 failed attempts of guessing will appear. If this button is clicked it will be impossible to keep guessing and the correct number will be given to the user. This function is called from the main handler.

If you win then a "You won" animated message appears because we gotta celebrate 🎆🎇


## Want to clone my repository? 🐑🐑

Go for it! And if you make something pretty, please show me

## Do you have any idea? ✏️

I'm an student and as I stated before am learning Javascript right now, so, if  you have any idea that I could develope please tell me so and I will try to.


## License

MIT
