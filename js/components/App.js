import Assignments from './Assignments.js';
import Panel from './Panel.js';

export default {

    components: { Assignments, Panel },

    template: `
        <div class="grid gap-12">
            <assignments></assignments>

            <panel>
                <template v-slot:heading>
                    Hello World
                </template>
                <p>Hello</p>
            </panel>
        </div>
        
    `
}