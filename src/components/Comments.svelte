<script>
    import { each } from "svelte/internal";

    export let comments = [];

    function addComment(event) {
        const msg = event.target.text.value;
        if (msg.length > 1) {
            const message = {
                id: Date.now(), //timeStamp devuelve la fecha en dias, minutos, segundos...
                text: msg,
                username: "edganime96",
            }
            comments = [...comments, message]; //hace push a los nuevos elementos manteniendo los elementos anteriores
            event.target.text.value = ""; //limpia el input dejandolo con un String vacio
        }
    }
</script>

<style>
    .Comments h3 {
        font-size: 14px;
        color: black;
        font-weight: bold;
        margin: o;
        padding: 0;
    }

    .Comments span {
        font-size: 14px;        
        font-weight: normal;
        margin: 0 0 0 0.5em;
        color: rgba(black, 0.9);
    }

    .Comments-add {
        padding: 1em;
        border-top: 1px solid rgba(219, 219, 219, 0.8);
    }

    .Comments-add form {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .Comments-content {
        padding: 0 1em 0.5em 1em;
    }

    .Comments-users {
        display: flex;
        margin: 0 0 0.5em 0;
    }

    input {
        border: solid 1px #E9E9E9;
        border-radius: 5px;
        color: #696969;
        border: 1px solid transparent;
        font-size: 12px;
        outline: none;
        width: 100%;
        display: flex;
    }

    button {
        border: none;
        background-color: transparent;
        color: #3897F0;
        outline: none;
        font-size: 12px;
        cursor: pointer;
    }

    /* label {
        display: none;
    } */
</style>

<div class="Comments">
    <div class="Comments-content">
        {#each comments as comment (comment.id)}
            <div class="Comments-users">
                <h3>{comment.username}</h3>
                <span>{comment.text}</span>
            </div>
        {/each}
        <div class="Comments-add">
            <form on:submit|preventDefault={addComment} action=""> 
            <!--preventeDefault evita el comportamiento natural de HTML de recargar la pagina entera-->
                <input 
                    type="text"
                    class="Comments-input"
                    placeholder="Agregar comentario..."
                    id="text"
                />
                <button type="submit">Post</button>
                <!-- submit envia la informacion -->
            </form>
        </div>
    </div>
</div>