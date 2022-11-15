"use strict";

const { createApp } = Vue

createApp({

  data() {
    return {

        newTask: {
            taskName: "",
            wasDone: false
        },

        toDoList: [

        {
            taskName: "Fare la spesa",
            wasDone: false
        },
        {
            taskName: "Fare l'esercizio",
            wasDone: false
        }

      ],

    }
  },
  methods: {
    taskDone(index){
        if(this.toDoList[index].wasDone === false){
            this.toDoList[index].wasDone = true;
        }else{
            this.toDoList[index].wasDone = false;
        }
    },
    removeTask(index){
        this.toDoList.splice(index, 1);
    },
    onAddingTask(){  
        this.toDoList.push(this.newTask);
        this.newTask = {
            taskName: "",
            wasDone: false
        }
    }
  }

}).mount('#app');