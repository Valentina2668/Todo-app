<template>
  <div class="home">
    <v-text-field 
    v-model="newTask"
    
    class="ma-6" 
    label="Add Task" 
    append-inner-icon="mdi-plus" 
    @click:appendInner="addTask"
    @keyup.enter="addTask"
    variant="solo" 
    hide-details
      clearable>
    </v-text-field>
    <div class="mt-5">
      <div v-for="task in tasks" :key="task.id">
        <v-list-item @click="doneTask(task.id)">
          <template v-slot:prepend>
            <v-list-item-action>
              <v-checkbox-btn :model-value="task.done"></v-checkbox-btn>
            </v-list-item-action>
          </template>
          <v-list-item-title :class="{ 'text-decoration-line-through': task.done }">{{ task.title }}
          </v-list-item-title>
          <template v-slot:append>
            <v-btn @click.stop="deleteTask(task.id)" color="grey-lighten-1" icon="mdi-delete" variant="text"></v-btn>
          </template>
          <v-divider></v-divider>
        </v-list-item>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      newTask: '',
      tasks: [
        // {
        //   id: 1,
        //   title: 'To eat some food',
        //   done: false
        // },
        // {
        //   id: 2,
        //   title: 'Relax',
        //   done: false
        // },
        // {
        //   id: 3,
        //   title: 'Go to the store',
        //   done: false
        // },

      ]

    }
  },
  methods: {
    addTask() {
      let newTask ={
        id: Date.now(),
        title: this.newTask,
        done: false
      }
      this.tasks.push(newTask)
      this.newTask = ''
     
    },
    doneTask(id) {
      let task = this.tasks.filter(task => task.id === id)[0]
      task.done = !task.done
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id)
    }
  }



}
</script>