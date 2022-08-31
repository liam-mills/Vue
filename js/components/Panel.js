export default {
    template: `
        <div class="bg-gray-700 p-3 border border-gray-600 rounded">
            <h2 class="font-bold">
                <slot name="heading" />
            </h2>

            <slot name="default" />
        </div>
    `
}