import Assignment from './Assignment.js'

export default {

    components: { Assignment },

    template: `
        <section v-if="assignments.length">
            <h2 class="font-bold mb-3">{{ title }}</h2>

            <ul class="border border-gray-600 rounded-lg divide-y divide-gray-600">

                <assignment 
                    v-for="assignment in assignments" 
                    :key="assignment.id"
                    :assignment="assignment"
                >
                    {{ assignment.name }}
                </assignment>

            </ul>
        </section>
    `,

    props: {
        assignments: Array,
        title: String
    }
}