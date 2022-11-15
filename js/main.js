"use strict";

const { createApp } = Vue

createApp({

  data() {
    return {

        newTask: "",

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
    }
  }

}).mount('#app')

//Descrizione:
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// Bonus:
// cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
// Buon lavoro e buon divertimento!