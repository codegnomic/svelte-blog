<script>
    import '../../../node_modules/prismjs/themes/prism-tomorrow.css'
    export let title
    export let date
</script>

<div>
    <h1>{title}</h1>
    <p>{date}</p>
    <slot></slot>
</div>

<style>
    h1 {
        font-size: 1.5rem;
    }
</style>