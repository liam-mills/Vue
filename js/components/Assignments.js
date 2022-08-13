import AssignmentList from './AssignmentList.js'
import AssignmentCreate from './AssignmentCreate.js'

export default {

    components: { AssignmentList, AssignmentCreate },

    template: `
        <section class="space-y-6">
            <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

            <assignment-create @add="add"></assignment-create>
        </section>
    `,

    data() {
        return {
            assignments: [
                {
                    id: 1,
                    name: 'Chemistry Chapter 1',
                    complete: false,
                    tag: 'science'
                },
                {
                    id: 2,
                    name: 'Bio Chapter 3',
                    complete: false,
                    tag: 'science'
                },
                {
                    id: 3,
                    name: 'Hamlet',
                    complete: false,
                    tag: 'english'
                },
                {
                    id: 4,
                    name: 'Trigonometry',
                    complete: false,
                    tag: 'maths'
                },
                {
                    id: 5,
                    name: 'Geometry',
                    complete: false,
                    tag: 'maths'
                },
            ],
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
        add(name) {
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.length + 1
            })
        }
    }

}