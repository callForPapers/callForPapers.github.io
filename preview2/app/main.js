require(['jquery', 'bootstrap-table', 'libs/domReady!'], function ($) {
	var jsonUrl = "./data/cfp.json";
	
	$('#table').bootstrapTable({
		url: jsonUrl,
		responseHandler: handler,
		pagination: true,
		search: true,
		pageSize: 30,
		rowStyle: rowFormatter,
		sortName: 'callForPapersEnd',
		sortOrder: 'asc',
		columns: [{
			field: 'name',
			title: 'Name'
		}, {
			field: 'location',
			title: 'Location'
		}, {
			field: 'conferenceStart',
			title: 'Date'
		}, {
			field: 'callForPapersEnd',
			title: 'CFP end',
			sortable: true
		}, {
			field: 'url',
			title: 'CFP Link',
			formatter: linkFormatter
		}, {
			field: 'lang',
			title: 'Languages'
		}, {
			field: 'tags',
			title: 'Tags'
		}]
	});
	
	function handler(res) {
		return res.events;
	}
	
	function linkFormatter(value, row) {
        return '<a href=' + value + ' target="_blank">' + value + '</>';
    }
	
	function rowFormatter(row, index) {
		var now = new Date();
		var cfpEnd = new Date(row.callForPapersEnd);		
		var timeDiff = Math.abs(now.getTime() - cfpEnd.getTime());
		var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
		//console.log(diffDays);
		if (diffDays < 3) return { classes: 'warning' }; 
		return {};
	}
});
