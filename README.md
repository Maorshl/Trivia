# Trivia

## What is this? 🎮

This is a Trivia game made by Maor, Gil.\
Each question is chosen at random (read below for more info) and all of the answers of the questions are unique, this ensure hard, yet rewarding questions! ✨

## Randomization ❓

Each question is generated on-demand which allows it to have some unique features.\
There are three types of questions being displayed in a cycle, the first two are\
randomized whilst the last question is from a table of rated questions.

- A question is pulled from 1 of 3 questions types tables.
- 4 random countries are pulled from the countries table.
- The correct answer for the current question is checked and selected out of the 4 current countries.
- The question is presented to the client.

## Rating system 🔢

As mentioned above, the third question in a cycle will be received from a table containing rated questions, the higher the rating of the question - the higher the probability of it being shown. \
Each question can be rated multiple times which allow its overall average rating to be changed and modified the longer people play the game and rate questions.

![](./Client/trivia-app/public/ReadMeFiles/3.gif)

## Leaderboard 🏅

The user will be required to enter a with a username and password which earn points for each correct question,\
this name will then be used to display the user in a leaderboard which is being saved in\
the database as well.\
The scores will be arranged from the highest to the lowest.

## Playing 🕹️

- Enter your with your username and password.
- Start answering questions, after three failed questions you will lose.
- If you can, rate the question, the more people rate questions the better!
- Each question answered correctly earn you more points.
- After the game ends, watch the leaderboard and decide if you want to post your score or continue playing.

![](./Client/trivia-app/public/ReadMeFiles/2.gif)

## How to install the app on your device ❗

- Clone the code and run in the terminal `npm install` in the root folder and in the `client/trivia-app` folder.
- Add `.env` file in the root directory and add this variables: `DB_PASSWORD=<password>` put you password to the mysql database, also add: `REFRESH_TOKEN_SECRET`, `ACCESS_TOKEN_SECRET`, and assign any string that you would like to.
- Make sure that you have schema called "trivia" in your mysql server.
- In the terminal, in root directory, run:`npx sequelize db:migrate:all` and then:`npx sequelize db:seed:all`.
- In the root directory, open the terminal and run `node index.js`.
- Go to the `client/trivia-app` folder and in the terminal run `npm start`, and you are ready to go! enjoy👌

### Credits 🎩

This app was made by:\
Maor-[Maorshl](https://pages.github.com/Maorshl)\
Gil-[gil6464](https://pages.github.com/gil6464)
