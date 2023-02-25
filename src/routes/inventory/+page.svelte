<script lang="ts">

    import axios from "axios"
	import type { each } from "svelte/internal";
	import Toolbar from "../../components/containers/Toolbar.svelte";
	import Tally from "../../components/information/Tally.svelte";
	import groupArrayByCriteria from "../../helpers/groupArrayByCriteria";

    export let categories = ["electronics", "tinkering", "clothing", "edc", "coffee"]

</script>

<article>
    <h1>Inventory</h1>
    <h3>OVERVIEW | 86</h3>
    <br>
    {#each categories as category}
        <a href="inventory/{category}">
            <div class="card plant-index">
                <p>{category}</p>
                <Tally count=131 />
            </div>
        </a>
    {/each}

</article>