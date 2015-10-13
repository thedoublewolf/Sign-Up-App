(function () {



	var url = 'http://json-data.herokuapp.com/forms';

	// fetch data and do something with it
	var promise = $.getJSON(url);
	promise.then( function (response){
		doSomething(response);
	});

	// templates

	var genericInput = _.template($('#generic-form').text());

	var selectInput = _.template($('#select-form').text());

		var genericInput2 = _.template($('#generic-form2').text());

	// our 'do something' function
	var doSomething = function (arr){

		_.each(arr, function (item){

			var htmlBlock;
			if (item.type === 'text' || item.type === 'email'){
				htmlBlock = genericInput (item);
			}
			$('form').append(htmlBlock);
		});

		_.each(arr, function (item){

			var htmlBlock2;
			if (item.type === 'select'){
				htmlBlock2 = selectInput (item);
				_.each(item.options, function (opt){
				});
			}
			$('option').append(htmlBlock2);
			$('form').append(htmlBlock2);
		});

		_.each(arr, function (item){

			var htmlBlock3;
			if (item.type === 'tel' || item.type === 'textarea'){
				htmlBlock3 = genericInput2 (item);
			}
			$('form').append(htmlBlock3);
		});

	};

}());
