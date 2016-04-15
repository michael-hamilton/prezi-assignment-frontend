import Ember from 'ember';

export function formatSortDirection(params) {
	if(params[0] == 'desc') {
		return 'Newest First';
	}
	else {
		return 'Oldest First';
	}
}

export default Ember.Helper.helper(formatSortDirection);
