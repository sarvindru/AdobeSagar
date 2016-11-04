function AppRun( $rootScope) {
    'ngInject';
    $rootScope.$on('$stateChangeSuccess', (event, toState) => {
       $rootScope.routeName = toState.title;
    });


}

export default AppRun;
