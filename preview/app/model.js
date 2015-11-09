define(['knockout', 'jquery'], function (ko, $) {
	return function model() {
		var self = this;
		// Fields
		this.conferences = ko.observableArray([]);
		this.pageNumber = ko.observable(0);
		this.entriesbPerPage = 2;
 		
		// Properties
		this.totalPages = ko.computed(function () {
			var div = Math.floor(self.conferences().length / self.entriesbPerPage);
			div += self.conferences().length % self.entriesbPerPage > 0 ? 1 : 0;
			return div - 1;
		});

		this.paginated = ko.computed(function () {
			var first = self.pageNumber() * self.entriesbPerPage;
			return self.conferences(); //.slice(first, first + self.entriesbPerPage);
		});
		self.hasPrevious = ko.computed(function () {
			return self.pageNumber() !== 0;
		});
		self.hasNext = ko.computed(function () {
			return self.pageNumber() !== self.totalPages();
		});
		self.next = function () {
			if (self.pageNumber() < self.totalPages()) {
				self.pageNumber(self.pageNumber() + 1);
			}
		}
		self.previous = function () {
			if (self.pageNumber() != 0) {
				self.pageNumber(self.pageNumber() - 1);
			}
		}
		this.load = function () {
			var date = new Date();
			var month = date.getMonth() + 1;
			var year = date.getFullYear();
			var url = "./data/" + year + "-" + month + ".json";
			$.getJSON(url)
				.done(function (data) {
					for(var i=0; i < data.events.length; i++) {
						var e = data.events[i];
						e.conferenceDate = self.getDate(e.conferenceStart, e.conferenceEnd);
					}
					self.conferences(data);
				})
				.fail(function (jqxhr, textStatus, error) {
					var err = textStatus + ", " + error;
					console.log("Request Failed: " + err);
				});
		}

		// @mihcall: One big giant TODO here!
		this.getDate = function(start, end) {
			if (start === end) {
				//same day
				return start;
			}
			else if (start.substring(0,7) === end.substring(0,7)) {
				//same month
				return start.substring(8) + "-" + end.substring(8) + "." + start.substring(5,7) + "." + start.substring(0,5);
			}
			else if (start.substring(0,4) === end.substring(0,4)) {
				//same year
				return start;
			}
			return start;
		};

		this.load();
	}
})