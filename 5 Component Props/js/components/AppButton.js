export default {
    template: `
                    <button 
                        // //binding class you could use a string, an array, and an object
                        :class="{
                            // the applying key as css for the button element depends on the value to apply all css              
                            ' border rounded px-5 py-2 disabled:cursor-not-allowed':true,
                            'bg-blue-400 hover:bg-gray-200': type === 'primary',
                            'bg-purple-400 hover:bg-gray-200': type === 'secondary',
                            'bg-gray-400 hover:bg-gray-200': type === 'muted',
                        }" 
                        :disabled="processing">
                        <slot>
                    </button>
                    `,
    props: {
        type : {
            type: String,
            default: "primary"
        }
    },
    data() {
        return {
            processing: true
        }
    }
}