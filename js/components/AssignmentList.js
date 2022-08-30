import Assignment from './Assignment.js'
import AssignmentTags from './AssignmentTags.js'

export default {

    components: { Assignment, AssignmentTags },

    template: `
        <section v-if="assignments.length" class="space-y-3 w-60">
            <div class="flex items-center justify-between mb-3">
                <h2 class="font-bold">
                    {{ title }}
                    <span>({{ assignments.length }})</span>
                </h2>

                <button v-if="canToggle" @click="$emit('toggle')" class="rounded-lg transition-all text-white hover:text-red-500 text-white text-xl w-6 h-6" style="line-height: 0.1">&times;</button>
            </div>

            <assignment-tags 
                :tags="assignments.map(a => a.tag)"
                v-model:currentTag="currentTag"
            ></assignment-tags>

            <ul class="border border-gray-600 rounded-lg divide-y divide-gray-600">

                <assignment 
                    v-for="assignment in filteredAssignments" 
                    :key="assignment.id"
                    :assignment="assignment"
                >
                    {{ assignment.name }}
                </assignment>

            </ul>

            <slot />

        </section>
    `,

    props: {
        assignments: Array,
        title: String,
        canToggle: { type: Boolean, default: false }
    },

    data() {
        return {
            currentTag: 'all'
        }
    },

    computed: {
        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments
            } else {
                return this.assignments.filter(a => a.tag === this.currentTag)
            }
        }
    }
}