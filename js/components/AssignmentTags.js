export default {
    template: `
        <div class="flex gap-2">
            <button 
                @click="$emit('update:currentTag', tag)"
                v-for="tag in allTags" 
                class="transition-all bg-purple-600 hover:bg-purple-700 rounded px-2 py-1 text-xs"
                :class="{
                    'bg-blue-600': tag === currentTag
                }"
            >
                {{ tag }}
            </button>
        </div>
    `,

    props: {
        tags: Array,
        currentTag: String
    },

    computed: {
        allTags() {
            return [
                'all', 
                ...new Set(this.tags)
            ];
        }
    }
}