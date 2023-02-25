<script lang='ts'>

    export let name : string
    export let inputValue : number = 0
    
</script>

<div>
    <label for="{name}">{name}</label>
    <input type="number" name="{name}" bind:value={inputValue}>
</div>