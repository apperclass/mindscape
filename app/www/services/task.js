'use strict';

angular.module('task', [])

.factory('currentTask', function() {
    var currentTask = {
        name: '',
        duration: 20,
        completedIn: 0,
        balance: 50,
        getMusicVolume: function(){
           return (100 - this.balance) / 100;
        },
        getAmbienceVolume: function(){
           return (this.balance) / 100;
        },
        getMusicSrc: function(){
            return 'audio/' + this.landscape + '-music-1min.mp3';
        },
        getAmbienceSrc: function(){
           return 'audio/' + this.landscape + '-ambience-1min.mp3';
        },
        landscape: '',
        reset: function(){
            this.name = '';
            this.duration = 20;
            this.balance = 50;
            this.completedIn = 0;
        },
        getCompletedInFormatted: function(){
          var sec_num = parseInt(this.completedIn, 10);
          var minutes = Math.floor(sec_num / 60);
          var seconds = sec_num - (minutes * 60);
          if (minutes < 10) { minutes = "0" + minutes;}
          if (seconds < 10) { seconds = "0" + seconds;}
          var time    = minutes+':'+seconds;
          return time;
        }
    };
    return currentTask;
});
