Vue.config.devtools = true;

var root = new Vue(
    {
        el: '#root',
        data: {
            dailyTasks: [
                'Take a shower',
                'Have breakfast',
                'Brush your theet',
                'Get dressed',

            ],

        }
    });