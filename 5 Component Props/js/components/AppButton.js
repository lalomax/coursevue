export default {
    template: `
                    <button class="bg-gray-400 hover:bg-gray-200 px-2 py-4 disabled:cursor-not-allowed" :disabled="processing">
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