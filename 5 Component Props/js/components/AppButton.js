export default {
    template: `
                    <button 
                        // //binding class you could use a string, an array, and an object
                        :class="{
                            // the applying key as css for the button element depends on the value to apply all css              
                            'bg-gray-400 hover:bg-gray-200 px-2 py-4 disabled:cursor-not-allowed':true,
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