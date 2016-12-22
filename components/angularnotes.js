angular.module('AngularNotes', [])
.controller('ApplicationController', function($scope) {

  ///// data objects
  $scope.categories = [
    {'id': 0, 'name': 'inbox'},
    {'id': 1, 'name': 'home'},
    {'id': 2, 'name': 'work'}
  ];

  $scope.notes = [
    {
      "index": 0,
      "title": "Ullamco ipsum Lorem cillum magna aliquip nulla reprehenderit adipisicing officia dolore ad esse amet adipisicing.",
      "body": "Velit cupidatat exercitation velit consectetur. Adipisicing aute laboris veniam commodo culpa quis ut consectetur quis enim eiusmod eu. Sint eiusmod ut culpa elit non. Fugiat dolore reprehenderit ullamco consequat Lorem exercitation Lorem laboris nulla magna mollit do.\r\nProident irure excepteur do fugiat quis aliqua consequat consectetur Lorem proident exercitation et voluptate. Mollit ut aliquip incididunt ullamco veniam non esse do do pariatur ut sit. Aute labore exercitation cupidatat irure pariatur eiusmod adipisicing eu in deserunt. Officia occaecat sint dolor id laboris proident labore officia enim cupidatat eu excepteur non. Eiusmod laborum sit dolor sunt.\r\n",
      "category": "inbox"
    },
    {
      "index": 1,
      "title": "Cupidatat aliquip aliquip laborum labore sit irure ut pariatur dolore mollit consequat in deserunt do. Incididunt consequat",
      "body": "Sint cillum cupidatat qui eu ad velit eiusmod pariatur in. Exercitation occaecat est qui consectetur cillum tempor qui dolore cillum sint amet sunt. Culpa ea dolor mollit incididunt ullamco nulla duis. Laborum esse ipsum incididunt minim. Ea reprehenderit sit qui incididunt et occaecat cupidatat.\r\nEst aute dolor proident amet aute commodo sint occaecat in labore ad. Culpa sit laboris aliquip fugiat nostrud cillum cillum irure aliqua ea proident ex velit. Adipisicing deserunt incididunt minim consequat est. Et reprehenderit consectetur tempor sunt labore dolor officia officia sunt dolore magna fugiat. Occaecat ea esse pariatur ipsum quis duis. Qui ex ex magna proident aute fugiat adipisicing mollit deserunt Lorem ullamco qui fugiat irure. In ea occaecat officia nisi nulla consequat labore dolore cupidatat id.\r\n",
      "category": "home"
    },
    {
      "index": 2,
      "title": "Sunt ea velit proident incididunt laborum laborum consequat ea est fugiat. Esse nulla aute eu occaecat dolor incididunt pariatur",
      "body": "Ipsum eu laborum anim reprehenderit. Irure cillum aliquip minim deserunt pariatur dolore nostrud ut veniam sit magna Lorem. Adipisicing laboris ad culpa fugiat nisi ex voluptate laboris qui nostrud sit ullamco do. Quis occaecat non minim elit officia do ut tempor. Culpa esse consequat incididunt eiusmod in ullamco labore sint quis enim irure. Elit amet nulla ipsum laboris ea. Minim aliquip velit elit ipsum commodo sint.\r\nDo id officia pariatur qui. Consequat magna enim nisi laboris do reprehenderit consequat. Eiusmod elit cupidatat irure adipisicing irure aute tempor duis deserunt sunt amet. Irure ex velit qui in do laborum magna sunt magna ex. Sint consequat minim amet tempor mollit. Ut aliquip tempor ullamco consectetur laborum incididunt pariatur pariatur mollit mollit esse ea laboris occaecat. Exercitation tempor consequat est veniam incididunt dolor.\r\n",
      "category": "work"
    },
    {
      "index": 3,
      "title": "Cillum reprehenderit adipisicing adipisicing minim ex eu nulla cupidatat incididunt pariatur. Labore labore fugiat nulla do minim tempor",
      "body": "Occaecat elit aliqua exercitation sit mollit incididunt dolor exercitation esse non sit est consequat elit. Nostrud proident minim eu quis laborum ea anim consequat voluptate cupidatat. Voluptate velit dolor eiusmod officia minim voluptate velit reprehenderit nostrud. Fugiat sit amet nostrud labore non nulla excepteur quis dolor elit deserunt. Elit qui nulla amet sunt qui tempor elit ut irure occaecat. Labore velit amet est occaecat ullamco consequat in tempor cillum reprehenderit. Do enim amet officia labore.\r\nSunt est duis mollit ex irure tempor commodo sunt nostrud laborum culpa. Anim consequat ullamco do esse cillum laborum voluptate id aliquip. Sint reprehenderit commodo officia cillum enim consequat cupidatat. Cillum fugiat in est laborum cupidatat aute id cillum magna cillum et minim. Commodo voluptate aliqua sit duis nisi sit cupidatat dolor voluptate. Voluptate sint anim ipsum ex irure non. Laborum sint cupidatat sit sit reprehenderit et reprehenderit qui.\r\n",
      "category": "work"
    },
    {
      "index": 4,
      "title": "Laborum consequat dolore cupidatat amet fugiat dolore consectetur in quis aute cillum. Excepteur irure velit velit deserunt consectetur.",
      "body": "Quis laborum ea non aliquip voluptate veniam laboris. Cillum esse veniam non nostrud non. Ex consectetur ipsum pariatur ex cupidatat minim proident incididunt velit ex amet Lorem commodo. Mollit consequat consequat esse nostrud amet ullamco do anim laboris in cupidatat minim incididunt velit. Do et adipisicing aliqua ut aliquip excepteur est eiusmod cupidatat ad magna labore minim. Fugiat ipsum voluptate do incididunt aliqua. Consectetur proident duis officia pariatur irure elit irure ipsum fugiat.\r\nUllamco pariatur esse reprehenderit est occaecat sint exercitation eiusmod esse cupidatat cillum aute aliqua. Excepteur duis sit do laboris consectetur culpa veniam deserunt consectetur enim ullamco veniam veniam. Sunt esse deserunt incididunt occaecat exercitation non occaecat fugiat ea velit ullamco et minim sit. Enim nostrud nulla irure ex enim sit ad magna velit aliquip. Labore aute fugiat qui occaecat dolore esse dolore aliquip.\r\n",
      "category": "home"
    },
    {
      "index": 5,
      "title": "Dolore incididunt nostrud ad laboris. Ad nostrud ad eiusmod aliqua veniam. Commodo ut aliqua in aute ut dolor tempor tempor officia officia in culpa aliqua.",
      "body": "Ullamco et ullamco et veniam exercitation cupidatat qui tempor. Ullamco aliqua pariatur dolore duis do irure adipisicing quis enim dolore enim. Consectetur aliqua incididunt ut deserunt adipisicing minim occaecat duis irure ex eiusmod Lorem. Ullamco eiusmod ullamco culpa mollit incididunt elit velit officia quis irure. Cillum tempor voluptate excepteur cillum enim culpa id officia dolore dolore nulla quis enim consectetur. Cupidatat ipsum culpa incididunt consectetur elit laboris esse ipsum cillum occaecat non eiusmod. Aute elit velit sint ea Lorem officia enim occaecat qui fugiat ex.\r\nLorem quis in labore et. In labore elit quis ut magna aute aliquip labore. Veniam nisi minim sit voluptate ad cupidatat pariatur irure non magna velit.\r\n",
      "category": "home"
    }
  ]

  ////// properties

  // current category logic and public setter
  $scope.currentCategory = null;

  function setCurrentCategory(category) {
    $scope.currentCategory = category;
    $scope.cancelEditing();
    $scope.cancelCreating();
    $scope.resetCreateForm();
  }

  function isCurrentCategory(category) {
    return $scope.currentCategory !== null && $scope.currentCategory.name == category.name;
  }

  $scope.setCurrentCategory = setCurrentCategory;
  $scope.isCurrentCategory = isCurrentCategory;

  // create and editing states
  $scope.isCreating = false;
  $scope.isEditing = false;

  function startCreating() {
    $scope.isCreating = true;
    $scope.isEditing = false;
  }

  function cancelCreating() {
    $scope.isCreating = false;
  }

  function startEditing() {
    $scope.isCreating = false;
    $scope.isEditing = true;
  }

  function cancelEditing() {
    $scope.isEditing = false;
  }

  function shouldShowCreating() {
    return $scope.currentCategory && !$scope.isEditing;
  }

  function shouldShowEditing() {
    return $scope.isEditing && !$scope.isCreating;
  }

  $scope.startCreating = startCreating;
  $scope.cancelCreating = cancelCreating;
  $scope.startEditing = startEditing;
  $scope.cancelEditing= cancelEditing;
  $scope.shouldShowCreating = shouldShowCreating;
  $scope.shouldShowEditing = shouldShowEditing;

  // create note form handlers
  function resetCreateForm() {
    $scope.newNote = {
      'title': '',
      'body': '',
      'category': ($scope.currentCategory ? $scope.currentCategory.name : '')
    };
  }

  function createNote(note) {
    note.id = $scope.notes.length;
    $scope.notes.push(note);
    resetCreateForm();
    cancelCreating();
  }

  $scope.resetCreateForm = resetCreateForm;
  $scope.createNote = createNote;

  // editing notes
  $scope.editedNote = null;

  function setEditedNote(note) {
    $scope.editedNote = angular.copy(note);
  }
  $scope.setEditedNote = setEditedNote;

  function updateNote(note) {
    var index = _.findIndex($scope.notes, {'index': note.index});

    $scope.notes[index] = note;

    $scope.editedNote = null;
    $scope.isEditing = false;
  }
  $scope.updateNote = updateNote;

  function deleteNote(note) {
    newNotes = _.reject($scope.notes, function(n) {
      return n.index == note.index;
    });

    $scope.notes = newNotes;
  }
  $scope.deleteNote = deleteNote;
});
