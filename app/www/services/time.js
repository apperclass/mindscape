'use strict';

angular.module('time', [])

    .factory('timer', function($interval) {
        var timer = {
            counter: 0,
            init: function(duration){
                this.counter = duration
            },
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


        return timer;
    });