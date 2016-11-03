function AppRun( $rootScope) {
    'ngInject';
    $rootScope.$on('$stateChangeSuccess', (event, toState) => {
        console.log('event', event, toState);
    $rootScope.routeName = toState.title;
    });


}

export default AppRun;
