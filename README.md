# Task guide
> This is a guide which describes how to initialize, configure and start boilerplate code that you will use in order to complete the task that is given to you.

> Codebase is set up and managed using [Webpack4](https://webpack.js.org/)

When it comes to app functionalities, you have to enable a feature where when you click on the menu icon, __sidebar should appear aside__.

In order to see how the result of the task should look like, visit these two links:

https://youtu.be/tGN1Vh49iU0 (Desktop version)

https://youtu.be/nYHa31hRkhg (Mobile version)

Required design for website is located in a __design_prototype__ folder where desktop and mobile version are provided along with style guide (font sizes and color palette).

**The code structure is already set up with appropriate assets**

**index.html* is located in a *dist* folder where it's content should be added.**

Javascript code has to be written in an **src/js/scripts.js** file.

All your styles have to be written in an **src/css/style.scss** file and __writing them as SASS code will be considered as a plus__.

## Setup

### Requirements

Node `">=5.0.0"` you can install it from [here](http://nodejs.org/)

### Dependencies

To get a project working, you have to install all it's dependencies with the following command:

```bash
npm install
```

## Running

Following command starts a project on the given port, recompiles it on detected changes in the code and reloads browser

```bash
npm run start
```

