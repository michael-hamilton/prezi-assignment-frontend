import Ember from 'ember';

export function formatSortDirection(params) {
	console.log(params);
	if(params[0] == 'asc') {
		return `${'Newest First'}`;
	}
	else {
		return `${'Oldest First'}`;
	}

}

export default Ember.Helper.helper(formatSortDirection);
