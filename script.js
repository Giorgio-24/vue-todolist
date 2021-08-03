Vue.config.devtools = true;

var root = new Vue(
    {
        el: '#root',
        data: {
            dailyTasks: [
                { text: 'Take a shower', done: false, },
                { text: 'Have breakfast', done: false, },
                { text: 'Brush your theet', done: false, },
                { text: 'Get dressed', done: false, },
            ],
            newTask: '',
            accomplishedTasksNumber: 0,
            filteredTasks: '',
            searchTerm: '',
            isFilterVisible: false,
            isTaskDone: false,
        },
        methods: {
            addNewTask() {
                this.newTask.trim() !== "" ? this.dailyTasks.push({ text: this.newTask, done: false, }) : alert(`YOU CANNOT ADD AN EMPTY TASK TO THE LIST.
Please try again.`);
                this.newTask = "";
            },
            deleteTask(i) {
                this.dailyTasks.splice(i, 1);
                this.accomplishedTasksNumber = this.accomplishedTasksNumber + 1;
            },
            emptyContent() {
                this.newTask = "";
            },
            showMe(text) {
                if (!this.searchTerm.trim()) return true;
                const filter = this.searchTerm.trim().toLowerCase();
                text = text.toLowerCase();
                return text.includes(filter);
            },
            toggleFilter() {
                this.isFilterVisible = !this.isFilterVisible;
                this.searchTerm = '';
            },
            taskStatus(index) {
                const taskStatus = this.dailyTasks.map((task, taskIndex) => {
                    if (taskIndex === index) {
                        task.done = !task.done;
                    }
                    return task;
                });
            },
            isDone(index) {
                return this.dailyTasks[index].done;
            },

        },
    });