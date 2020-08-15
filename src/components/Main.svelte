<style>
    .Main {
        display: grid;
        grid-template-columns: minmax(auto, 936px);
        justify-content: center;
        background-color: #FAFAFA;
    }

    .Main-container {
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-gap: 2em;
        padding: 2em 0;
    }
</style>

<div class="Main">
    <div class="Main-container">
        <slot /> 
        <!-- slot permite insertar elementos hijos a los componentes -->
    </div>
</div>