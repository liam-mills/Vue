import AssignmentList from './AssignmentList.js'

export default {

    components: {
        AssignmentList
    },

    template: `
        <assignment-list :assignments="inProgressAssignments" title="In Progress"></assignment-list>
        <assignment-list :assignments="completedAssignments" title="Completed"></assignment-list>
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
            ]
        }
    },

    computed: {
        inProgressAssignments( ) {
            return this.assignments.filter(a => ! a.complete)
        },
        completedAssignments() {
            return this.assignments.filter(a => a.complete)
        }
    }

}