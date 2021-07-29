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
            newTask: '',

        },
        methods: {
            addNewTask() {
                if (this.newTask.trim() !== "") {
                    this.dailyTasks.push(this.newTask);
                }
                this.newTask = "";
            },
            deleteTask(i) {
                this.dailyTasks.splice(i, 1)
            },
        },
    });