export default {
    template: `
        <div 
            class="border rounded"
            :class="{
                'bg-gray-700 p-3 border-gray-600': theme === 'dark',
                'bg-gray-100 p-3 border-gray-200 text-black': theme === 'light'
            }"
        >
            <h2 
                v-if="$slots.heading" 
                class="font-bold mb-2"
                :class="{
                    'text-black': theme === 'light'
                }"
            >
                <slot name="heading" />
            </h2>

            <slot v-if="$slots.default" name="default" />            

            <footer 
                v-if="$slots.footer" 
                class="mt-3 pt-3 border-t text-sm"
                :class="{
                    'border-gray-600 text-gray-400': theme === 'dark',
                    'border-gray-200 text-gray-500': theme === 'light'
                }"
            >
            <slot name="footer" /> 
            </footer>
        </div>
    `,

    props: {
        theme: { type: String, default: 'dark' }
    }
}