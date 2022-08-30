export default {
    template: `
        <form @submit.prevent="add">
            <div class="border border-gray-600 rounded-lg p-3 space-x-3 flex">
                <input v-model="newAssignment" placeholder="New..." class="p-2 rounded bg-gray-600 focus:outline-none w-full" />
                <input type="submit" value="Add" class="transition-all cursor-pointer bg-blue-600 hover:bg-blue-700 rounded py-2 px-4" />
            </div>
        </form>
    `,

    data() {
        return {
            newAssignment: ''
        }
    },

    methods: {
        add() {
            this.$emit('add', this.newAssignment);
            this.newAssignment = '';
        }
    }
}