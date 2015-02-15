'use strict';

angular.module('landscape', ['underscore'])

    .factory('LandscapeRepository', function(_) {
        var levels = [
            {
                name: 'cave'
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
                name: 'mountains'
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
            /**
             * Get all levels
             * @returns array
             */
            getAll: function(){
                return levels
            },
            /**
             * Get n random levels
             * @param number
             * @returns array
             */
            getSomeRandom: function(number){
                number = number || 2;
                var pickedLevels = _.sample(this.getPossibleNextLandscapes(), number);
                var pickedLevelsNames = _.pluck(pickedLevels, 'name');
                levels.forEach(function(level){
                    level.justPicked = _.contains(pickedLevelsNames, level.name) ? true : false;
                });
                return pickedLevels;
            },
            /**
             * Get landscapes not just played
             * @returns array
             */
            getPossibleNextLandscapes: function(){
                return _.partition(levels, function(level){
                    return level.justPicked !== true;
                })[0];
            }
        };
    });