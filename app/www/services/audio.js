'use strict';

angular.module('audio', [])

    .factory('Player', function() {
        return {
            musicAudio: null,
            ambienceAudio: null,
            playing: false,

            /**
             * Init the player with a task
             * @param task
             */
            init: function(task){
                this.musicAudio = new Audio(task.getMusicSrc());
                this.ambienceAudio = new Audio(task.getAmbienceSrc());
                this.musicAudio.loop = true;
                this.ambienceAudio.loop = true;
                this.musicAudio.currentTime = 0;
                this.ambienceAudio.currentTime = 0;
                this.musicAudio.volume = task.getMusicVolume();
                this.ambienceAudio.volume = task.getAmbienceVolume();
            },
            /**
             * Change the task
             * @param task
             */
            changeTask: function(task){
                this.musicAudio.pause();
                this.ambienceAudio.pause();
                this.musicAudio = new Audio(task.getMusicSrc());
                this.ambienceAudio = new Audio(task.getAmbienceSrc());
                this.musicAudio.volume = task.getMusicVolume();
                this.ambienceAudio.volume = task.getAmbienceVolume();
                this.playing = true;
            },
            /**
             * Play
             */
            play: function(){
                this.musicAudio.play();
                this.ambienceAudio.play();
                this.playing = true;
            },
            /**
             * Pause
             */
            pause: function(){
                this.musicAudio.pause();
                this.ambienceAudio.pause();
                this.playing = false;
            },
            /**
             * Stop
             */
            stop: function(){
                this.musicAudio.pause();
                this.ambienceAudio.pause();
                this.playing = false;
                this.musicAudio.currentTime = 0;
                this.ambienceAudio.currentTime = 0;
            },
            /**
             * Set Balance with a task
             * @param task
             */
            setBalance: function(task){
                this.musicAudio.volume = task.getMusicVolume();
                this.ambienceAudio.volume = task.getAmbienceVolume();
            }
        };
    });