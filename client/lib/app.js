angular.module('trickle-webapp',['angular-meteor', 'ui.router', 'angularUtils.directives.dirPagination']);

Meteor._reload.onMigrate(function() {
    return [false];
});