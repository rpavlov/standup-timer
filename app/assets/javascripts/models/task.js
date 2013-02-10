StandupTimer.Task = DS.Model.extend({
	name : DS.attr('string'),
	breakStartTime : DS.attr('number'),
	breakLength : DS.attr('number')
});

StandupTimer.Task.FIXTURES =[
	{id:1},
	{id:2},
	{id:3},
	{id:4}
];