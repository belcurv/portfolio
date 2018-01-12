/* jshint esversion:6 */
/* globals angular */

(function () {

    'use strict';

    angular

        .module('portfolioApp', [])

        .controller('portfolioController', ['$scope', function ($scope) {

            $scope.works = [
                {
                    imageUrl: "https://belcurv.com/portfolio/assets/portfolio_co-ment.png",
                    title: "co/ment",
                    description: "A full-stack mentor/mentee match-making application. Tech used: React, Redux, Node, Express, JWT, Mongo, Mongoose, ES6, promises, REST, SVG, local storage.",
                    githubUrl: "https://github.com/ursa-majors/co-ment",
                    demoUrl: "https://co-ment.glitch.me/"
                },
                {
                    imageUrl: "https://belcurv.com/portfolio/assets/portfolio_co-ment-admin-dash.png",
                    title: "co/ment admin dashboard",
                    description: "A full-stack administrative dashboard for co/ment. Tech used: Vue, Vuex, Node, Express, JWT, Mongo, Mongoose, ES6, promises, REST, local storage.",
                    githubUrl: "https://github.com/ursa-majors/co-ment-admin-dash",
                    demoUrl: "https://belcurv.com/portfolio/assets/portfolio_co-ment-admin-dash.png"
                },
                {
                    imageUrl: "https://belcurv.com/portfolio/assets/portfolio_whobot-animated.gif",
                    title: "whobot",
                    description: "A Slack integration that stores & retrieves team member skills, and displays some skills stats for your team. Tech used: Slack API, promises, Node, Express, MongoDB, Mongoose.",
                    githubUrl: "https://github.com/belcurv/whobot",
                    demoUrl: "https://belcurv.github.io/whobot-landing/"
                },
                {
                    imageUrl: "https://belcurv.com/portfolio/assets/portfolio_dev-dash.jpg",
                    title: "dev-dash",
                    description: "A Chrome browser new-tab override that presents a brief dashboard view of a selected GitHub repository whenever you open a new tab. Tech used: modular patterns, jQuery, ES6, promises, ajax, SVG, local storage, Gulp.",
                    githubUrl: "https://github.com/general-meerkats/dev-dash",
                    demoUrl: "https://chrome.google.com/webstore/detail/dev-dash/dgkmjidcaelocfmnhlmeimmbaljgjfhm"
                },
                {
                    imageUrl: "https://belcurv.com/portfolio/assets/portfolio_momentum.jpg",
                    title: "Meerkat Momentum",
                    description: "Meerkat Momentum is a reverse-engineered version of the popular productivity tool Momentum Dash. Tech used: modular patterns, jQuery, ES6, promises, lots of ajax, local storage.",
                    githubUrl: "https://github.com/general-meerkats/meerkat_momentum",
                    demoUrl: "https://general-meerkats.github.io/meerkat_momentum/"
                },
                {
                    imageUrl: "https://belcurv.com/portfolio/assets/portfolio_pfapp.jpg",
                    title: "PFapp",
                    description: "PFapp (Personal Finance App) is three personal finance utilities: a financial independence calculator, a comparative cost of commuting calculator and a portfolio tracker. Tech used: Angular 1.x, promises, Google Maps Distance Matrix API, SVG, local storage.",
                    githubUrl: "https://github.com/belcurv/pfapp",
                    demoUrl: "https://belcurv.com/pfapp/"
                },
                {
                    imageUrl: "https://belcurv.com/portfolio/assets/portfolio_csv-parse.png",
                    title: "CSV Parser",
                    description: "Angular app that reads a remote CSV file via XHR, parses it using Papaparse, formats and outputs the result as a table and raw JSON. A HTML5 input/range slider is used to filter the results by specific dates. Tech used: Angular 1.x, promises, Material Design Lite.",
                    githubUrl: "https://github.com/belcurv/csv_parse",
                    demoUrl: "https://belcurv.com/csv_parse/"
                },
                {
                    imageUrl: "https://belcurv.com/portfolio/assets/portfolio_fibonacci.png",
                    title: "Fibonacci Tribute",
                    description: "A dynamic Angular app that calculates the Fibonacci sequence and builds the famous spiral as the user manipulates the range slider. Tech used: Angular 1.x, SVG.",
                    githubUrl: "https://github.com/belcurv/fibonacci",
                    demoUrl: "https://belcurv.github.io/fibonacci/"
                },
                {
                    imageUrl: "https://belcurv.com/portfolio/assets/portfolio_album_app_md.png",
                    title: "Album Aggregator",
                    description: "A single page application served by Node / Express. The SPA consumes an API and includes basic CRUD functions for maintaining a music collection. Tech used: Angular 1.x, Node/Express, Mongo/Mongoose, Material Design.",
                    githubUrl: "https://github.com/belcurv/album_app_md",
                    demoUrl: "https://jrs-album-app-md.herokuapp.com/"
                },
                {
                    imageUrl: "https://belcurv.com/portfolio/assets/portfolio_twitch.png",
                    title: "Twitch Stream Status",
                    description: "A Twitch 'who's streaming' dashboard. Tech used: Angular 1.x, promises, ajax.",
                    githubUrl: "https://github.com/belcurv/fcc/tree/master/front-end_projects_intermediate/twitch_whos_streaming",
                    demoUrl: "https://belcurv.com/twitch/"
                },
                {
                    imageUrl: "https://belcurv.com/portfolio/assets/portfolio_calculator.png",
                    title: "JavaScript Calculator",
                    description: "A basic calculator that uses the Shunting Yard algorithm to parse infix expressions into postfix / RPN notation to evaluate them respectful of operator precedence. Tech used: modular patterns, jQuery, ES6, regex",
                    githubUrl: "https://github.com/belcurv/fcc-calculator",
                    demoUrl: "https://belcurv.github.io/fcc-calculator/"
                },
                {
                    imageUrl: "https://belcurv.com/portfolio/assets/portfolio_simon.png",
                    title: "Simon Game",
                    description: "A clone of the classic Simon memory game. Tech used: modular patterns, jQuery, ES6, regex",
                    githubUrl: "https://github.com/belcurv/fcc-simon",
                    demoUrl: "https://belcurv.github.io/fcc-simon/"
                },
                {
                    imageUrl: "https://belcurv.com/portfolio/assets/portfolio_fishtank.png",
                    title: "Interactive Fish Tank",
                    description: "An interactive fish tank. Users can add a random fish by clicking on the screen. Tech used: processing.js.",
                    githubUrl: "https://github.com/belcurv/fish-tank",
                    demoUrl: "https://belcurv.com/portfolio/assets/fish_tank/fishtank.html"
                }

            ];

            $scope.contacts = [
                {
                    contactDesc : "Github",
                    contactIcon : "fa-github",
                    contactUrl  : "https://github.com/belcurv"
                },
                {
                    contactDesc : "Twitter",
                    contactIcon : "fa-twitter",
                    contactUrl  : "https://twitter.com/belcurv"
                },
                {
                    contactDesc : "LinkedIn",
                    contactIcon : "fa-linkedin",
                    contactUrl  : "https://www.linkedin.com/in/jay-schwane"
                },
                {
                    contactDesc : "CodePen",
                    contactIcon : "fa-codepen",
                    contactUrl  : "http://codepen.io/belcurv/"
                }
            ];

        }])

        /* custom directive for each work's card */
        .directive("workCard", function () {

            return {
                restrict: "EA",
                scope: {
                    work: "="
                },
                templateUrl: "templates/work-card.tpl.html"
            };

        })

        .directive("workImg", function () {
            return function(scope, el, attrs){
                el.css({
                    "background-image" : "url(" + attrs.workImg + ")"
                });
            };
        })

        /* custom directive for each contact button */
        .directive("contactBtn", function () {

            return {
                restrict: "EA",
                scope: {
                    contact: "="
                },
                templateUrl: "templates/contact-btn.tpl.html"
            };

        });

})();
