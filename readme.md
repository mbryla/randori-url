# randori-url (https://github.com/mbryla/randori-url) 
This project is a template for a Coding Randori exercise. It already comes with a set of test and mocking libraries along with a short usage example, but feel free to choose any toolkit you prefer.

The project template is based on https://github.com/krasimir/webpack-library-starter

## rules
1. Find a group of few (3-6) people and set-up your coding Dōjō (one keyboard which can be easy moved, one computer, one big screen). 
2. Clone this repository and read the exercise rules out loud.
3. Choose the first person and start coding the exercise. You should write the code in a tests-first approach and switch keyboard to the next person exactly every 5 minutes (even when the work is in progress).
4. Follow tests-first rules - add new logic only when all tests are green and the code is refactored. Start with a failing test.
5. Share your experience! The whole point of this exercise is to share your knowledge, good habits and experience among others.

## exercise
Write a small library to parse an URL address.

### requirements - what should the library do (in a suggested coding order)
- the library should accept an URL in a string form as input
- the library should accept an URL in an object form as input (for example in a form compatible with https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/location.md)
- the library should provide an output URL in a string form
- the library should provide an output URL in an object form
- the library should assume that input string should be URL decoded and output string should be URL encoded
- the library should build output URLs in a predictable way (query parameters should have a stable sorting algorithm)
- the library should provide an easy access (ex. as properties in a resulting object - not requiring to parse antyhing more) to protocol, path, query parameters and their values (decoded)
- the library should provide a separate mechanism to filter query parameters to a selected list of keys