'use strict';

circuitApp.controller('EventController',
	function EventController($scope){
	
		$scope.snippet = '<span style="color:red;">Hi thereaaaaa</span>';
	    $scope.showStatus = false;
		
		$scope.event = {
			 name: 'Asphoria Concert',
			 date: '1/1/2013',
			 time: '10:30  pm',
			 location: {
				 address: 'Stadion Kanjuruhan',
				 city: 'Malang',
				 province: 'Jawa Timur'				 
			 },
			 imageUrl: 'img/angularjs-logo.png',
			 sessions: [
			         {
			        	 name: 'Opening ceremony',
			        	 creatorName: 'Bob Smith',
			        	 duration: 1,
			        	 level: 'Advanced',
			        	 description: 'in this session you will learn the ins and out  of directives',
			        	 upVoteCount:2
			         },
			         {
			        	 name: 'Main event',		
			        	 creatorName: 'John Doe',
				         duration: 4,
				         level: 'Medium',
				         description: 'in this session will take a closer look at scope',
				         upVoteCount:4
			         },
			         {
			        	 name: 'Closing ceremony',	
			        	 creatorName: 'John Doe',
				         duration: 2,
				         level: 'intermediate',
				         description: 'in this session will take a closer look at scope',
				         upVoteCount:1
			         }
			  ]
		}	
		
		$scope.upVoteSession= function (session){
			session.upVoteCount++;			
		}
		$scope.downVoteSession= function (session){
			session.upVoteCount--;			
		}
	}	
);