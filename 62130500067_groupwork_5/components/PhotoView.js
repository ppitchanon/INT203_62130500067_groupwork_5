app.component("photo-view", {
  props: {
    stateview: Boolean,
    stateviewimg: String,
  },
  template:
    /*html*/
    `
    <div v-show="stateview" class="fixed top-0 flex justify-center w-screen h-screen bg-black bg-opacity-90">
        <div class="h-screen m-6 ">
            <img :src="stateviewimg" class="m-6  shadow-lg rounded h-5/6">
        </div>
        <div class = "mt-12">
            <i class="flex-row-reverse text-white cursor-pointer far fa-2x fa-times-circle " @click="close"></i>
        </div>
    </div>
    `,
  methods: {
    close() {
      this.$emit("close");
    },
  },
});
