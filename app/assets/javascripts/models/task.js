StandupTimer.Task = DS.Model.extend({
	name : DS.attr('string'),
	length : DS.attr('number'),
	breakStartTime : DS.attr('number'),
	breakLength : DS.attr('number')
});