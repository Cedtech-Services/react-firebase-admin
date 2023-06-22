/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const admin = require('firebase-admin');
const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'path',
    message: 'Enter the path to the service account key file: ',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter user email: ',
  },
  {
    type: 'password',
    name: 'password',
    message: 'Enter user password: ',
    mask: '*',
  },
];

inquirer
  .prompt(questions)
  .then(async ({ path, email, password }) => {
    const serviceAccount = require(path);

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });

    console.log('Setting admin account in authentication 🔨');

    const { uid } = await admin.auth().createUser({
      email,
      password,
      emailVerified: true,
    });

    await admin.auth().setCustomUserClaims(uid, {
      isAdmin: true,
    });

    console.log('Created admin account in authentication');

    console.log('Creating admin account in database');

    const user = {
      isAdmin: true,
      name: 'Test Name',
      location: 'Test Location',
      createdAt: new Date().toDateString(),
      email,
    };

    await admin.firestore().collection('users').doc(uid).set(user);

    console.log(`Created admin account in Firestore`);
    process.exit(0);
  })
  .catch((error) => {
    console.log(error);
    process.exit(0);
  });
