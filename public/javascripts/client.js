Basic setup:

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
					classes : 'front-seat' //your custom CSS class
				}

			},
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
