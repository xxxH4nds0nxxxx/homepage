<script>
    import "../../app.pcss";
    import Camera from "$lib/component/Camera.svelte";
    import TextArea from "$lib/component/TextArea.svelte";
    import * as camera from "$lib/scripts/Camera.js"

    import {textareaValue} from "$lib/scripts/stores.js";
    import {onMount} from "svelte";

    textareaValue.set('');

    onMount(() => {
        camera.stopCamera()
    })
</script>

<style>
    .parent-container {
        height: 80vh;
        padding: 10px;
        display: flex;
        column-gap: 20px;
    }
</style>

<div class="parent-container">
    <Camera/>
    <TextArea/>
</div>

<slot/>