const app = Vue.createApp({
  data() {
    return {
      tasks: [
        {
          no: 0,
          title: "Phuket ,Thailand",
          url: "images/natural1.jpg",
          done: false,
        },
        {
          no: 1,
          title: "Venice ,Italy",
          url: "images/natural2.jpg",
          done: false,
        },
        {
          no: 2,
          title: "Santorini ,Greece",
          url: "images/natural3.jpg",
          done: false,
        },
        {
          no: 3,
          title: "Bangkok ,Thailand",
          url: "images/natural4.jpg",
          done: false,
        },
      ],
      form: {
        text: "",
        search: false,
      },
      View: false,
      viewImg: "",
    };
  },
  methods: {
    like(task) {
      this.tasks[task.no].done = !this.tasks[task.no].done;
    },
    toggleView(task) {
      this.viewImg = this.tasks[task.no].url;
      this.View = true;
    },
    search() {
      this.form.search = !this.form.search;
    },
    cancel() {
      this.form.search = !this.form.search;
      this.form.text = "";
    },
    close() {
      this.View = false;
    },
  },
  computed: {
    countUndone() {
      return this.tasks.filter((t) => t.done).length;
    },
    searching() {
      return this.tasks.filter((member) =>
        member.title.toLowerCase().includes(this.form.text.toLowerCase())
      );
    },
  },
});
