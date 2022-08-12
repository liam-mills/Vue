import Assignment from './Assignment.js'

export default {

    components: { Assignment },

    template: `
        <section v-if="assignments.length" class="space-y-3">
            <h2 class="font-bold mb-3">
                {{ title }}
                <span>({{ assignments.length }})</span>
            </h2>

            <div class="flex gap-2">
                <button 
                    @click="currentTag = tag"
                    v-for="tag in tags" 
                    class="transition-all bg-purple-600 hover:bg-purple-700 rounded px-2 py-1 text-xs"
                    :class="{
                        'bg-blue-600': tag === currentTag
                    }"
                >
                    {{ tag }}
                </button>
            </div>

            <ul class="border border-gray-600 rounded-lg divide-y divide-gray-600">

                <assignment 
                    v-for="assignment in filteredAssignments" 
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
        },
        tags() {
            return [
                'all', 
                ...new Set(this.assignments.map(a => a.tag))
            ];
        }
    }
}