/* Basic setup:   */

	$(document).ready(function() {

		var sc = $('#seat-map').seatCharts({
			map: [
				'aaaaaaaaaa',
				'aaaaaaaaaa',
				'bbbbbbbbbb',
				'bbbbbbbbbb',
				'bbbbbbbbbb',
				'cccccccccc'
			],
			seats: {
				a: {
					price   : 12.00,
					classes : 'available' //your custom CSS class
				},
	/*			v: {
					classes : 'available' //your custom CSS class
				},
				e: {
						classes : 'unavailable' //your custom CSS class
				}*/	},
/*
			legend : {
				 node : $(),
				 items: [
					[v, 'available','available'],
					[e,'unavailable','unavailable'] ]
			}, */


			click: function () {
				if (this.status() == 'available') {
					//do some stuff, i.e. add to the cart
					return 'selected';
				} else if (this.status() == 'selected') {
					//seat has been vacated
					return 'available';
				} else if (this.status() == 'unavailable') {
					//seat has been already booked
					return 'unavailable';
				} else {
					return this.style();
				}

}

		});

		//Make all available 'c' seats unavailable
		sc.find('a.available').status('unavailable');

		/*
		Get seats with ids 2_6, 1_7 (more on ids later on),
		put them in a jQuery set and change some css
		*/
		sc.get(['2_6', '1_7']).node().css({
			color: '#ffcfcf'
		});


		//console.dir(sc.get('1_2').data())
		//console.log('what is my tree structure?', sc.get('1_2').data(), 'hi dad', 'more')
		console.log('Seat 1_2 costs ' + sc.get('1_2').data().price + ' and is currently ' + sc.status('1_2'));

		});
