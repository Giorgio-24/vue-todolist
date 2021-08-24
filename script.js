window.addEventListener('scroll', () => {
    const scrollButton = document.getElementById('scroll-button');

    if (window.scrollY > 0) {
        scrollButton.classList.remove('d-sm-none');
    } else {
        scrollButton.classList.add('d-sm-none');
    }
}, true);//^SHOW THE BOTTOM RIGHT BUTTON ONLY WHEN YOU SCROLL THE PAGE.

Vue.config.devtools = true;

var root = new Vue(
    {
        el: '#root',
        data: {
            dailyTasks: [
                { text: 'Take a shower', done: false, },
                { text: 'Have breakfast', done: false, },
                { text: 'Brush your theet', done: false, },
                { text: 'Get dressed', done: false },
            ],
            newTask: '',
            accomplishedTasksNumber: 0,
            filteredTasks: '',
            searchTerm: '',
            isFilterVisible: false,
            isTaskDone: false,
            areOptionsVisible: false,
            wantToReset: false,
        },
        methods: {
            addNewTask() {
                this.newTask.trim() !== "" ? this.dailyTasks.push({ text: this.newTask, done: false, }) : alert(`YOU CANNOT ADD AN EMPTY TASK TO THE LIST.
Please try again.`);
                this.newTask = "";
            },
            deleteTask(i) {
                if (this.dailyTasks[i].done === true) {
                    this.accomplishedTasksNumber = this.accomplishedTasksNumber + 1;
                }
                const ele = this.dailyTasks.splice(i, 1);
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
            toggleOptions() {
                this.areOptionsVisible = !this.areOptionsVisible;
            },
            toggleReset() {
                if (this.dailyTasks.length) {
                    this.wantToReset = !this.wantToReset;
                } else {
                    this.wantToReset = false;
                }

            },
            taskStatus(index) {
                const taskStatus = this.dailyTasks.map((task, taskIndex) => {
                    if (taskIndex === index && window.innerWidth > 1199) {
                        task.done = !task.done;
                    }
                    return task;
                });
            },
            mobileTaskStatus(index) {
                const taskStatus = this.dailyTasks.map((task, taskIndex) => {
                    if (taskIndex === index && window.innerWidth < 1200) {
                        task.done = !task.done;
                    }
                    return task;
                });
            },
            isDone(index) {
                return this.dailyTasks[index].done;
            },
            allTasksDone() {
                if (!this.dailyTasks.length) {
                    this.areOptionsVisible = !this.areOptionsVisible;
                }
                const taskStatus = this.dailyTasks.map((task) => {
                    task.done = true;

                    return task;
                })
            },
            allTasksToDo() {
                if (!this.dailyTasks.length) {
                    this.areOptionsVisible = !this.areOptionsVisible;
                }
                const taskStatus = this.dailyTasks.map((task) => {
                    task.done = false;

                    return task;
                })
            },
            eliminateAllTasks() {
                this.dailyTasks = [];
                this.areOptionsVisible = !this.areOptionsVisible;
                this.wantToReset = !this.wantToReset;
            },
            resetListAndAccomplish() {
                this.accomplishedTasksNumber = this.accomplishedTasksNumber + this.dailyTasks.length; //^IT HAS TO BE BEFORE WE RESET THE ARRAY
                this.dailyTasks = [];
                this.areOptionsVisible = !this.areOptionsVisible;
                this.wantToReset = !this.wantToReset;
            },
        },
    });