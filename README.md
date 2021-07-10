# Trivia

## What is this?

This is a Trivia game made by Maor, Gil.\
Each question is chosen at random (read below for more info) and all of the parameters of the questions are unique, this ensure hard yet rewarding questions!

## Randomization

Each question is generated on-demand which allows it to have some unique features.\
There are three types of questions being displayed in a cycle, the first two are\
randomized whilst the last question is from a database of rated questions.

## Rating system

As mentioned above, the third question in a cycle will be received from a database containing rated questions, the higher the rating of the question - the higher the probability of it being shown. \
Each question can be rated multiple times which allow its overall average rating to be \
changed and modified the longer people play the game and rate questions.

![](./Client/trivia-app/public/ReadMeFiles/3.gif)

## Leaderboard

The user will be required to enter a name which earn points for each correct question,\
this name will then be used to display the user in a leaderboard which is being saved in\
the database as well.\
The scores will be arranged from the highest to the lowest.

## Playing

- Enter your name.
- Start answering questions, after three failed questions you will lose.
- If you can, rate the question, the more people rate questions the better!
- Each question answered correctly earn you 100 points.
- After the game ends, watch the leaderboard and where you are with respect to others

![](./Client/trivia-app/public/ReadMeFiles/2.gif)

## How to install the app on your device

- Clone the code and write in the terminal "npm install" in the root floder and in the client/trivia-app floder.
- Add .env file in the root dircetory and add this variables: DB_PASSWORD="here put you password to the mysql workbrench",also add: REFRESH_TOKEN_SECRET,ACCESS_TOKEN_SECRET, and give them each any string that you like to.
- Make sure that you have schema called "trivia" in your mysql workbrench
- In the terminal, in root directory, write:"npx sequelize db:migrate:all" and then:"npx sequelize db:seed:all".
- In the root directory, open the terminal and write "node index.js".
- Go to the client/trivia-app floder and in the terminal write "npm start", and you are ready to go! enjoy👌

### Credits

This app was made by:\
Maor-[Maorshl](https://pages.github.com/Maorshl)\
Gil-[gil6464](https://pages.github.com/gil6464)
