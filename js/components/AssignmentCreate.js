export default {
    template: `
        <form @submit.prevent="add">
            <div class="border border-gray-600 rounded-lg p-3 space-x-3">
                <input v-model="newAssignment" placeholder="New assignment..." class="p-2 rounded bg-gray-600 focus:outline-none" />
                <input type="submit" value="Add" class="transition-all bg-blue-600 hover:bg-blue-800 rounded py-2 px-4" />
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