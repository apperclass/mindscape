'use strict';

angular
    .module('states.home', ['task', 'landscape', 'states.history'])
    .config(function ($stateProvider) {
        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'states/home/home.html',
            parent: 'public',
            controller: 'HomeCtrl as homeCtrl'
        });
    })
    .controller('HomeCtrl', function(CurrentTask, LandscapeRepository, Player, $state){
        var ctrl = this;
        var pickedLevels = LandscapeRepository.getSomeRandom(2);
        this.landscapeA = pickedLevels[0].name;
        this.landscapeB = pickedLevels[1].name;
        this.task = CurrentTask;
        this.task.landscape = this.landscapeA;
        this.player = Player;

        Player.init(CurrentTask);
        Player.play();

        /**
         * Update Balance
         */
        this.updateBalance = function(){
            Player.setBalance.apply(this.player, [this.task]);
        };

        /**
         * Choose a landscape
         * @param landscape
         */
        this.selectLandscape = function(landscape){
            this.task.landscape = landscape;
            Player.setBalance.apply(this.player, [this.task]);
            Player.changeTask(ctrl.task);
            Player.play();
        };

        /**
         * Start the current task
         */
        this.start = function(){
            Player.stop();
            CurrentTask.counter++;
            if (CurrentTask.name === '') {
                CurrentTask.name = 'Task ' + CurrentTask.counter;
            }
            $state.go('landscape', {}, { reload: true });
        }
    });