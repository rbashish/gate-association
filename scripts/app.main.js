'use strict';

angular
  .module('urbanApp')
  .controller('AppCtrl', ['$scope', '$http', '$localStorage',
        function AppCtrl($scope, $http, $localStorage) {

      $scope.mobileView = 767;

      $scope.app = {
        name: 'ChikSoft Technologies',
        author: 'rbashish',
        version: '1.0.3',
        year: (new Date()).getFullYear(),
        layout: {
          isSmallSidebar: false,
          isChatOpen: false,
          isFixedHeader: true,
          isFixedFooter: false,
          isBoxed: false,
          isStaticSidebar: false,
          isRightSidebar: false,
          isOffscreenOpen: false,
          isConversationOpen: false,
          isQuickLaunch: false,
          sidebarTheme: '',
          headerTheme: ''
        },
        isMessageOpen: false,
        isConfigOpen: false
      };

      $scope.user = {
        fname: 'Ashish',
        lname: 'Gupta',
        jobDesc: 'Human Resources Guy',
        avatar: 'images/avatar.jpg',
      };

      if (angular.isDefined($localStorage.layout)) {
        $scope.app.layout = $localStorage.layout;
      } else {
        $localStorage.layout = $scope.app.layout;
      }

      $scope.$watch('app.layout', function () {
        $localStorage.layout = $scope.app.layout;
      }, true);

      $scope.getRandomArbitrary = function () {
        return Math.round(Math.random() * 100);
      };
    }
]);
