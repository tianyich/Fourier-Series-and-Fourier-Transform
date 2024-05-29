<script>
    import Title from "./Components/Title.svelte";
    import Plot from "./Components/Plot.svelte";
    import Scrolly from "./Components/Scrolly.svelte";
</script>

<main>
    <Title />
    <Plot />
    <Scrolly />
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    main {
        margin: 0em;
        font-family: 'Roboto', sans-serif;
        padding: 0.5em;
        top: 0px;
        left: 20em;
        right: 20em;
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
    main::-webkit-scrollbar {
        display: none;
    }
</style>