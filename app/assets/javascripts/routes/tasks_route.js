StandupTimer.TasksRoute = Ember.Route.extend({
	model: function() {
		return StandupTimer.Task.find();
	}
});