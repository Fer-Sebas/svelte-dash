<script context="module" lang="ts">
export async function load ({fetch, page}) {
    const id = page.params.id
    const res = await fetch(`https://dash-api-kappa.vercel.app/inventory/${id}`)
    const itemDocument = await res.json

    if (res.ok) {
        return {
            console.log("success")
        }
    }

    return {
        status: 301,
        redirect: '/inventory'
    }

}
</script>