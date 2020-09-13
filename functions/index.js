const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
const { FUNCTION_NAME } = process.env;
const FNRegion = 'asia-northeast1';

if (!FUNCTION_NAME || FUNCTION_NAME === 'helloWorld') {
    const { helloWorld } = require('./email/sendEmail');
    exports.helloWorld = helloWorld;
}
