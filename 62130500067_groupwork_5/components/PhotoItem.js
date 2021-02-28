app.component("photo-item", {
  props: {
    task: Object,
  },
  template:
    /*html*/
    `
    <div>
        <div class="flex flex-row mt-10 shadow-lg rounded">
                    <div class="w-1/2">
                        <img v-bind:src="task.url" class="shadow hover:shadow-xl hover:opacity-75 w-300"  @click="toggleView(task)" >
                    </div>
                    <p class ="font-semibold w-1/2 ml-10 mt-16 text-black text-opacity-75 text-2xl cursor-pointer" >{{task.title}} 
                        <i v-show="!task.done" class="fas fa-heart text-black transition duration-500  ml-10 " @click="like(task)"></i>  
                        <i v-show="task.done" class="fas fa-heart text-red-500  ml-10 " @click="like(task)"></i>  
                    </p>
        </div>
     </div>
    `,

  methods: {
    toggleView(task) {
      this.$emit("when-toggle", task);
    },
    like(task) {
      this.$emit("when-like", task);
    },
  },
});
