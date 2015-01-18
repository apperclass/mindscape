'use strict';

angular.module('audio', [])

    .factory('player', function() {
        var player = {
            musicAudio: null,
            ambienceAudio: null,
            playing: false,
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
            play: function(){
                console.log(this);
                this.musicAudio.play();
                this.ambienceAudio.play();
                this.playing = true;
            },
            pause: function(){
                this.musicAudio.pause();
                this.ambienceAudio.pause();
                this.playing = false;
            },
            stop: function(){
                this.musicAudio.pause();
                this.ambienceAudio.pause();
                this.playing = false;
                this.musicAudio.currentTime = 0;
                this.ambienceAudio.currentTime = 0;
            },
            setBalance: function(task){
                this.musicAudio.volume = task.getMusicVolume();
                this.ambienceAudio.volume = task.getAmbienceVolume();
            }




        };
        return player;
    });