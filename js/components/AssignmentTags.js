export default {
    template: `
        <div class="flex gap-3">
            <button 
                @click="$emit('update:currentTag', tag)"
                v-for="tag in allTags" 
                class="transition-all hover:bg-purple-700 rounded px-2 py-1 text-xs"
                :class="{
                    'bg-blue-600': tag === currentTag,
                    'bg-purple-600': tag != currentTag
                }"
                :id="tag"
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