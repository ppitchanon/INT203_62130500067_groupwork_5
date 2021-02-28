app.component('photo-search',{
    props:{
        form : Object
    },
    template:
    /*html*/
    `
    <span :class="{'hidden' : form.search }"><i class="fas fa-search mt-10" @click="search"></i></span>
    <span :class="{'hidden' : !form.search}">
            <input class=" mt-10  p-2 bg-white rounded border-2 border-gray-300 w-5/6" placeholder="Please enter text for searching photos" v-model="form.text">
            <button class="mx-2 rouned text-white px-4 py-2 bg-blue-500" @click="search">Cancel</button>
    </span>
    `,
    
    methods: {
        search() {
            this.form.search = !this.form.search;
          },
          cancel() {
            this.form.search = !this.form.search
            this.form.text = '';
          },
    }
})