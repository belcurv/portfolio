(function () {
    
    'use strict';
    
    angular
        
        .module('portfolioApp', [])
    
        .controller('portfolioController', ['$scope', function ($scope) {
        
            $scope.works = [
                {
                    imageUrl: "http://belcurv.com/portfolio/assets/portfolio-csv_parse.png",
                    title: "CSV Parser",
                    description: "This Angular app reads in a remote CSV file via XHR, parses the file using Papaparse, formats the results, outputs the contents as a table and raw JSON. A HTML5 input/range slider is used to filter the results by specific dates.",
                    githubUrl: "https://github.com/belcurv/csv_parse",
                    demoUrl: "http://belcurv.com/csv_parse/"
                },
                {
                    imageUrl: "http://belcurv.com/portfolio/assets/portfolio_album_app_auth.png",
                    title: "MEAN App with Authentication",
                    description: "An Angular application served by Node and Express that uses JWT for user authentication.  It's a basic CRUD application for maintaining a music collection.",
                    githubUrl: "https://github.com/belcurv"
                },
                {
                    imageUrl: "http://belcurv.com/portfolio/assets/portfolio_fishtank.png",
                    title: "Interactive Fish Tank",
                    description: "This is a simple application that uses the processing.js library to create a dynamic interactive fish tank. The seaweed, bubbles and initial fish size/color/direction are random. Refresh the page to start over with different everything. You can add new randomly-generated fish by clicking anywhere inside the fish tank. bigger things move faster (bigger bubbles rise faster and bigger fish swim faster). When the bubbles reach the top, the start over at the bottom. When any fish reaches the left or right side of the tank, it reverses direction.",
                    githubUrl: "https://github.com/belcurv/fish-tank",
                    demoUrl: "http://belcurv.com/portfolio/assets/fish_tank/fishtank.html"
                },
                {
                    imageUrl: "http://belcurv.com/portfolio/assets/portfolio_album_app_md.png",
                    title: "MEAN App with Angular Material",
                    description: "This is a no-authentication version of the music collection application using Angular Material instead of Bootstrap.",
                    githubUrl: "https://github.com/belcurv/album_app_md"
                },
                {
                    imageUrl: "http://belcurv.com/portfolio/assets/portfolio_dice_roll.png",
                    title: "Interactive Dice Roll Sim",
                    description: "This is a simple application using the processing.js library to simulate rolling two 6-sided dice. It counts and sums the results, tabulates everything, and graphs the cumulative sums. No surprise, the distribution takes the shape of a bell curve if you feed it enough dice rolls.",
                    githubUrl: "https://github.com/belcurv/dice-roll",
                    demoUrl: "http://belcurv.com/portfolio/assets/dice_roll/dice-roll.html"
                },
                {
                    imageUrl: "http://belcurv.com/portfolio/assets/portfolio_basic_ejs.png",
                    title: "Boilerplate static site with EJS templates",
                    description: "This is a simple static site built witn NodeJS and Express on the server, serving EJS templates with Material Design Lite.",
                    githubUrl: "https://github.com/belcurv/basic_ejs"
                }
            ];
            
            $scope.contacts = [
                {
                    contactDesc : "Github",
                    contactIcon : "cake",
                    contactUrl  : "https://github.com/belcurv"
                },
                {
                    contactDesc : "Twitter",
                    contactIcon : "whatshot",
                    contactUrl  : "https://twitter.com/"
                },
                {
                    contactDesc : "Facebook",
                    contactIcon : "child_friendly",
                    contactUrl  : "https://www.facebook.com"
                },
                {
                    contactDesc : "Quantum Entanglement",
                    contactIcon : "gesture",
                    contactUrl  : "https://en.wikipedia.org/wiki/Quantum_entanglement"
                }
            ];
            
        }]);
    
})();