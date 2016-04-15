import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	thumbnail: DS.attr('string'),
	creator: DS.attr(),
	createdAt: DS.attr('date'),

	prettyDate: Ember.computed('createdAt', function() {
		return this.get('createdAt').toDateString();
	})
});
