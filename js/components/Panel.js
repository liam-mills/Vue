export default {
    template: `
        <div class="bg-gray-700 p-3 border border-gray-600 rounded">
            <h2 v-if="$slots.heading" class="font-bold">
                <slot name="heading" />
            </h2>

            <slot v-if="$slots.default" name="default" />
        </div>
    `
}