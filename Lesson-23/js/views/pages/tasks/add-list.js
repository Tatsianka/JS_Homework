import Utils from '../../../helpers/utils.js';

import Component from '../../../views/component.js';

import Tasks from '../../../models/tasks.js';

class AddAndList extends Component {
    render() {

        return new Promise(resolve => {
            resolve(`     
                <h1 class="page-title">Tasks List</h1>
                
                <div class="task-add">
                    <input class="task-add__title" type="text" placeholder="Task title">
                    
                    <label class="task-description">
                        <span class="task-description__title">Description:</span>
                        <textarea rows="5"  maxlength="150" placeholder="Add task description" class="task-description__area"></textarea>
                    </label>
                    
                    <button class="task-add__btn-add button" disabled>Add Task</button>
                </div>       
                  
                <div class="tasks">
                    <div class="tasks-box"> 
                        <p class="tasks-counter__message">
                            ${this.countTasks()}
                        </p>
                 
                        <div class="tasks__btn-box"> 
                            ${this.insertDeleteBtn()}
                        </div>
                    </div>     
                                    
                    <div class="tasks__list">
                        ${this.tasks.map(task => this.getTaskHTML(task)).join('\n ')}
                    </div>
                </div>`);
        });
    }

    afterRender() {
        this.setActions();
    }

    setActions() {
        const addTaskTitle = document.getElementsByClassName('task-add__title')[0],
            addTaskDescription = document.getElementsByClassName('task-description__area')[0],
            addTaskBtn = document.getElementsByClassName('task-add__btn-add')[0],
            tasksContainer = document.getElementsByClassName('tasks')[0],
            tasksList = document.getElementsByClassName('tasks__list')[0],
            deleteBtnBox = document.getElementsByClassName('tasks__btn-box')[0],
            countTasksBox = document.getElementsByClassName('tasks-counter__message')[0];

        addTaskTitle.addEventListener('keyup', () => addTaskBtn.disabled = !addTaskTitle.value.trim());
        addTaskBtn.addEventListener('click', () => {

            this.addTask(addTaskTitle, addTaskDescription, addTaskBtn, tasksList);
            this.countTasks(countTasksBox);
            this.insertDeleteBtn(deleteBtnBox);

        });

        tasksContainer.addEventListener('click', event => {
            const target = event.target,
                targetClassList = target.classList;

            if (targetClassList.contains('task__btn-done')) {
                let doneTaskBox = target.parentNode.parentNode,
                    doneTask = this.tasks.find(task => task.id === doneTaskBox.dataset.id);

                doneTaskBox.classList.add('done');

                target.parentNode.innerHTML = '<a class="task__btn-remove button">Remove</a>';

                doneTask.status = 'Done';

                Tasks.setTasksToLS(this.tasks);

                this.countTasks(countTasksBox);
            }

            if (targetClassList.contains('task') || targetClassList.contains('task__title')) {
                this.redirectToTaskInfo(target.dataset.id);
            }

            if (targetClassList.contains('task__btn-remove')) {
                this.removeTask(target.parentNode.parentNode);
                this.countTasks(countTasksBox);
                this.insertDeleteBtn(deleteBtnBox);

            }

            if (targetClassList.contains('tasks__btn-delete')) {
                if (confirm('Are you sure?')) {
                    this.tasks = [];

                    Tasks.setTasksToLS(this.tasks);

                    tasksList.innerHTML = '';

                    this.countTasks(countTasksBox);
                    this.insertDeleteBtn(deleteBtnBox);
                }
            }
        });
    }

    addTask(addTaskTitle, addTaskDescription, addTaskBtn, tasksList) {
        const newTask = {
            id: Utils.generateID(),
            title: addTaskTitle.value.trim(),
            status: 'In Progress',
            description: addTaskDescription.value.trim() ? addTaskDescription.value.trim() : 'None'
        };

        this.tasks.push(newTask);
        Tasks.setTasksToLS(this.tasks);

        this.clearAddTask(addTaskTitle, addTaskDescription, addTaskBtn);

        tasksList.insertAdjacentHTML('beforeEnd', this.getTaskHTML(newTask));

    }

    getTaskHTML(task) {
        let btnStatusProgress = `<a class="task__btn-edit button" href="#/task/${task.id}/edit">Edit</a> \n <a
        class="task__btn-done button">Done</a>`;

        return `
            <div class="task ${task.status === 'Done' ? 'done' : ''}"  data-id="${task.id}">
                <a class="task__title" data-id="${task.id}">${task.title}</a>
                
                <div class="task__buttons">
                    ${task.status === 'Done' ? '' : btnStatusProgress}
                    <a class="task__btn-remove button">Remove</a>   
                </div>                            
            </div>`;
    }

    clearAddTask(addTaskTitle, addTaskDescription, addTaskBtn) {
        addTaskTitle.value = '';
        addTaskDescription.value = '';
        addTaskBtn.disabled = true;
    }

    redirectToTaskInfo(id) {
        location.hash = `#/task/${id}`;
    }

    removeTask(taskContainer) {
        if (confirm('Are you sure?')) {
            this.tasks = this.tasks.filter(task => task.id !== taskContainer.dataset.id);
            Tasks.setTasksToLS(this.tasks);

            taskContainer.remove();
        }
    }

    insertDeleteBtn(box) {
        let deleteBtnHTML = '<button class="tasks__btn-delete button">Delete all tasks</button>';

        if (JSON.parse(localStorage.getItem('tasks')).length) {
            return arguments.length ? box.innerHTML = deleteBtnHTML : deleteBtnHTML;
        } else {
            return arguments.length ? box.innerHTML = '' : '';
        }
    }

    countTasks(box) {
        let tasksNumberPhrase = `The list contains
        <span class="tasks-counter__total">
            ${JSON.parse(localStorage.getItem('tasks')).length}
        </span>
        task(s),
        <span class="tasks-counter__done">
            ${this.tasks.filter(task => task.status === 'Done').length}   
        </span> of them is/are done`;

        if (!JSON.parse(localStorage.getItem('tasks')).length) {
            tasksNumberPhrase = 'Tasks list is empty';
        }

        return arguments.length ? box.innerHTML = tasksNumberPhrase : tasksNumberPhrase;
    }
}

export default AddAndList;