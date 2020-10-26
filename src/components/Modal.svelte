<style>
    .Modal {
        position: relative;
    }

    .Modal-overlay {
        /* background-color: rgba(0, 0, 0, 0.7); */
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: (15px);
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 8;
        cursor: pointer;
    }
</style>

<div class="Modal">
    <div class="Modal-overlay" on:click />
    <slot />
</div>