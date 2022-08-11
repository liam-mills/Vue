export default {
    template: `
        <li>
            <label class="block p-3">
                <input type="checkbox" v-model="assignment.complete" />
                {{ assignment.name }}
            </label>
        </li>
    `,

    props: {
        assignment: Object
    }
}