'use strict';

angular.module('landscape', ['underscore'])

    .factory('LandscapeRepository', function(_) {
        var levels = [
            {
                name: 'cavern'
            },
            {
                name: 'christmas'
            },
            {
                name: 'dock-city'
            },
            {
                name: 'ocean'
            },
            {
                name: 'desert'
            },
            {
                name: 'mountain'
            },
            {
                name: 'seaside'
            },
            {
                name: 'space'
            },
            {
                name: 'swamp'
            },
            {
                name: 'woods'
            }
        ];

        return {
            getAll: function(){
                return levels
            },
            getSomeRandom: function(number){
                number = number || 2;
                var pickedLevels = _.sample(this.getPossibleNextLandscapes(), number);
                var pickedLevelsNames = _.pluck(pickedLevels, 'name');
                levels.forEach(function(level){
                    level.justPicked = _.contains(pickedLevelsNames, level.name) ? true : false;
                });
                return pickedLevels;
            },
            getPossibleNextLandscapes: function(){
                return _.partition(levels, function(level){
                    return level.justPicked !== true;
                })[0];
            }
        };
    });