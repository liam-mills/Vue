import AssignmentList from './AssignmentList.js'

export default {

    components: { AssignmentList },

    template: `
        <section class="space-y-6">
            <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

            <form @submit.prevent="add">
                <div class="border border-gray-600 rounded-lg p-3 space-x-3">
                    <input v-model="newAssignment" placeholder="New assignment..." class="p-2 rounded bg-gray-600 focus:outline-none" />
                    <input type="submit" value="Add" class="transition-all bg-blue-600 hover:bg-blue-800 rounded py-2 px-4" />
                </div>
            </form>
        </section>
    `,

    data() {
        return {
            assignments: [
                {
                    id: 1,
                    name: 'Finish project',
                    complete: false
                },
                {
                    id: 2,
                    name: 'Read chapter',
                    complete: false
                },
                {
                    id: 3,
                    name: 'Turn in homework',
                    complete: false
                },
            ],

            newAssignment: ''
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(a => ! a.complete),
                completed: this.assignments.filter(a => a.complete)
            }
        }
    },

    methods: {
        add() {
            this.assignments.push({
                name: this.newAssignment,
                completed: false,
                id: this.assignments.length + 1
            })
            this.newAssignment = '';
        }
    }

}