'use strict';

angular.module('time', [])

    .factory('Timer', function($interval) {
        return {
            counter: 0,
            /**
             * Init the timer with a duration in seconds
             * @param duration
             */
            init: function(duration){
                this.counter = duration
            },
            /**
             * Return a formatted count-down string
             * @returns {string}
             */
            getFormattedCounter: function(){
                var sec_num = parseInt(this.counter, 10);
                var minutes = Math.floor(sec_num / 60);
                var seconds = sec_num - (minutes * 60);
                if (minutes < 10) { minutes = "0" + minutes;}
                if (seconds < 10) { seconds = "0" + seconds;}
                var time    = minutes+':'+seconds;
                return time;
            }
        };
    });