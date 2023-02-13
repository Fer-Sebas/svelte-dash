<script lang="ts">
	import InputNumber from "../../components/InputNumber.svelte";
	import InputText from "../../components/InputText.svelte";

    export let item = {
        category: '',
        type: '',
        brand: '',
        model: '',
        originalCost: 0,
        adquisitionDate: '',
        lifeExpectancy: 0,
        width: 0,
        height: 0,
        depth: 0,
        weight: 0,
        color: '',
        material: ''
    }

    function handleFormSubmit() {
		console.log(item)
	}

</script>

<div>
    <form name="InventoryNewForm" id="InventoryNewForm" on:submit={handleFormSubmit}>

        <InputText name='Category' bind:inputValue={item.category}/>
        <InputText name='Type' bind:inputValue={item.type}/>
        <InputText name='Brand' bind:inputValue={item.brand}/>
        <InputText name='Model' bind:inputValue={item.model}/>

        <InputNumber name='Original Cost' bind:inputValue={item.originalCost}/>
        <InputText name='Adquisiton Date' bind:inputValue={item.adquisitionDate}/>
        <InputNumber name='Life Expectancy' bind:inputValue={item.lifeExpectancy}/>

        <InputNumber name='Width' bind:inputValue={item.width}/>
        <InputNumber name='Height' bind:inputValue={item.height}/>
        <InputNumber name='Depth' bind:inputValue={item.depth}/>
        <InputNumber name='Weight' bind:inputValue={item.weight}/>

        <InputText name='Color' bind:inputValue={item.color}/>
        <InputText name='Material' bind:inputValue={item.material}/>

        <button class="main">Submit</button> 
    </form>
</div>