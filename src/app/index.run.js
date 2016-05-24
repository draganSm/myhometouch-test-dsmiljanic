(function() {
  'use strict';

  angular
    .module('myhometouchTestDsmiljanic')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
