import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
  	return this.store.query('prezi', params);
  },
  
  actions: {
  	reloadModel: function() {
  		this.refresh();
  	}
  }
});
