'use strict';

angular.module('task', [])

    .factory('CurrentTask', function() {
        return {
            counter: 0,
            name: '',
            duration: 20,
            completedIn: 0,
            balance: 50,
            landscape: '',

            /**
             * Get music volume
             * @returns {number}
             */
            getMusicVolume: function(){
               return (100 - this.balance) / 100;
            },

            /**
             * Get Ambience volume
             * @returns {number}
             */
            getAmbienceVolume: function(){
               return (this.balance) / 100;
            },

            /**
             * Get music src
             * @returns {string}
             */
            getMusicSrc: function(){
                return 'audio/' + this.landscape + '-music.mp3';
            },

            /**
             * Get ambience src
             * @returns {string}
             */
            getAmbienceSrc: function(){
               return 'audio/' + this.landscape + '-ambience.mp3';
            },

            /**
             * Reset to default values
             */
            reset: function(){
                this.name = '';
                this.duration = 20;
                this.balance = 50;
                this.completedIn = 0;
            },

            /**
             * Get formatted string for completed in
             * @returns {string}
             */
            getCompletedInFormatted: function(){
              var sec_num = parseInt(this.completedIn, 10);
              var minutes = Math.floor(sec_num / 60);
              var seconds = sec_num - (minutes * 60);
              if (minutes < 10) {
                  minutes = "0" + minutes;
              }
              if (seconds < 10) {
                  seconds = "0" + seconds;
              }

              return minutes+':'+seconds;
            }
        };
    });
