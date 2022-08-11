export default {
    template: `
        <section v-if="assignments.length">
            <h2 class="font-bold mb-3">{{ title }}</h2>

            <ul>
                <li 
                    v-for="assignment in assignments" 
                    :key="assignment.id"
                >
                    <label>
                        <input type="checkbox" v-model="assignment.complete" />
                        {{ assignment.name }}
                    </label>
                </li>
            </ul>
        </section>
    `,

    props: {
        assignments: Array,
        title: String
    }
}