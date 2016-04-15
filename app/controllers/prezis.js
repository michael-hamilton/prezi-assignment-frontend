import Ember from 'ember';

export default Ember.Controller.extend({
	sortDirection: 'asc',
	sortProperties: ['createdAt'],
  	sortedPrezis: Ember.computed.sort('model', 'sortProperties'),
	queryParams: ['title'],
  	title: "",

  	actions: {
  		search: function() {
  			this.send('reloadModel');
  		},
  		sortBy: function(sortProperty) {
  			this.set('sortDirection', this.sortDirection === "asc" ? "desc" : "asc");
  			this.set('sortProperties', [sortProperty + ":" + this.sortDirection]);
  		}
  	}
});
