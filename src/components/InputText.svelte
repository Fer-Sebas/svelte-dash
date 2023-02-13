<script lang='ts'>

    export let name : string
    export let inputValue : string = ''
    
</script>

<div>
    <label for="{name}">{name}</label>
    <input type="text" name="{name}" bind:value={inputValue}>
</div>