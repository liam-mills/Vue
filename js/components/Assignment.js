export default {
    template: `
        <li class="p-3">
            <label>
                <input type="checkbox" v-model="assignment.complete" />
                {{ assignment.name }}
            </label>
        </li>
    `,

    props: {
        assignment: Object
    }
}