require(['jquery', 'bootstrap-table', 'libs/domReady!'], function ($) {
	var jsonUrl = "./data/cfp_generated.json";
	
	$('#table').bootstrapTable({
		url: jsonUrl,
		responseHandler: handler,
		search: true,
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
		
		var dataToBind = [], 
			conference, 
			i, 
			cfpEnd,evts = res.events, 
			length = evts.length, 
			today = new Date();
			today.setHours(23,59,59,999);
			
		for(i = 0; i < length; i++) {
		   conference = evts[i];
		   cfpEnd = new Date(conference.callForPapersEnd);
		
		   if(cfpEnd >= today) {
		       dataToBind.push(conference);
		   }
		
		  cfpEnd = null;
		}
		
		return dataToBind;
	}
	
	function linkFormatter(value, row) {
        	return '<a href=' + value + ' target="_blank">CFP link</>';
    	}
	
	function rowFormatter(row, index) {
		var today = new Date();
		today.setHours(23,59,59,999);
		var cfpEnd = new Date(row.callForPapersEnd);		
		var timeDiff = Math.abs(today.getTime() - cfpEnd.getTime());
		var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
		if (diffDays < 3) return { classes: 'warning' }; 
		return {};
	}
});
