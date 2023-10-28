function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'skills-member.html',
    controller: 'SkillsMemberCtrl',
    controllerAs: 'skillsMemberCtrl',
    bindToController: true,
    scope: {
      member: '='
    }
  };
}