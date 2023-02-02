import * as functions from "firebase-functions";
// import {seedrandom} from "seedrandom";


export const randomNumber = functions.https.onRequest((request, response) => {
  // const random = Math.seedrandom();
  // const random: Math = new Math.random();
  const number = Math.round(
      Math.random() * parseInt(request.query.max as string)
  );
  response.send(number.toString());
});
