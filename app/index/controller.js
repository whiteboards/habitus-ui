export default Ember.Controller.extend({
    selectedPage: null,

    actions: {
      updateSelected: function(component, id, value) {
        this.set('selectedPage', id);
      }
    }
});