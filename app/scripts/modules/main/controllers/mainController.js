'use strict';

var mainCtrl = function($scope, $window) {
    var main = this;

    main.test = 'test';

	main.toggleSidebar = function(){
		main.toggle = !main.toggle;
		main.checkPhone();
		console.log(main.toggle)
	};

	main.setToggle = function(){
		$window.innerWidth <= 767 ? main.toggle = true : main.toggle = false;
	}

	main.checkPhone = function(){
		$window.innerWidth <= 480 && !main.toggle ? main.phone = true : main.phone = false;
	}

	main.updateScrollBar = function(){
		$('.scroller').perfectScrollbar('update');
	}

	function init() {
		//$('.scroller').perfectScrollbar()
		main.setToggle();
		var id;
		$(window).resize(function() {
			clearTimeout(id);
			id = setTimeout(function () {
				$scope.$apply(function () {
					main.updateScrollBar()
					main.setToggle();
					main.checkPhone();
				});
			}, 100);
		});

	};

    //INITIALIZING
    init()
};

angular
    .module('mainModule')
    .controller('mainCtrl', mainCtrl)
