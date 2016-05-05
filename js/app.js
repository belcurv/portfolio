(function () {
    
    'use strict';
    
    var portfolioApp = angular.module('portfolioApp', []);

    portfolioApp.controller('portfolioController', ['$scope', function ($scope) {
        $scope.message = "hello world";
        
        $scope.works = [
            {
                imageUrl: "http://belcurv.com/public_photos/portfolio_basic_ejs.png",
                title: "Boilerplate static site with EJS templates",
                description: "This is a simple static site built witn NodeJS and Express on the server, serving EJS templates with Material Design Lite.",
                githubUrl: "https://github.com/belcurv/basic_ejs"
            },
            {
                imageUrl: "http://belcurv.com/public_photos/portfolio_album_app_auth.png",
                title: "MEAN App with Authentication",
                description: "Long-winded description of this example app.  Link to github probably.",
                githubUrl: ""
            },
            {
                imageUrl: "http://belcurv.com/public_photos/portfolio_dice_roll.png",
                title: "Interactive Dice Roll Sim",
                description: "Long-winded description of this example app.  Link to github probably.",
                githubUrl: ""
            },
            {
                imageUrl: "http://belcurv.com/public_photos/portfolio_album_app_md.png",
                title: "MEAN App with Angular Material",
                description: "Long-winded description of this example app.  Link to github probably.",
                githubUrl: ""
            },
            {
                imageUrl: "http://belcurv.com/public_photos/portfolio_fishtank.png",
                title: "Interactive Fish Tank",
                description: "Long-winded description of this example app.  Link to github probably.",
                githubUrl: ""
            },
            {
                imageUrl: "http://belcurv.com/public_photos/portfolio_portfolio.png",
                title: "This Portfolio",
                description: "Talk about recursion...  This very portfolio you're viewing right here.  It's a simple Angular front-end with styling courtesty of Material Design Lite.",
                githubUrl: ""
            }
        ];
    }]);
    
})();