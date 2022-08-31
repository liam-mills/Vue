import Assignments from './Assignments.js';
import Panel from './Panel.js';

export default {

    components: { Assignments, Panel },

    template: `
        <div class="grid gap-12">
            <assignments></assignments>

            <panel>
                <p>Hello</p>
            </panel>

            <panel theme="dark">
                <template v-slot:heading>
                    Hello World
                </template>

                <p>Hello</p>

                <template v-slot:footer>
                    <p>Footer content.</p>
                </template>
            </panel>

            <panel theme="light">
                <template v-slot:heading>
                    Hello World
                </template>

                <p>Hello</p>

                <template v-slot:footer>
                    <p>Footer content.</p>
                </template>
            </panel>
        </div>
        
    `
}