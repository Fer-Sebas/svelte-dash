<script>
 
    import Dialog from "../../components/containers/Dialog.svelte";
	import InputPassword from "../../components/controllers/InputPassword.svelte";
	import InputText from "../../components/controlers/InputText.svelte";

    export let credentials = { username: '', password: '' }

</script>

<Dialog>
    <form>
        <InputText name='username' valueName={credentials.username}/>
        <InputPassword name='password' valueName={credentials.password}/>
        <button> Log In </button>
    </form>
</Dialog>