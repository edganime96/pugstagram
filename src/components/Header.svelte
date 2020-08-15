<script>
    import { likeCount } from "../store/store.js";
</script>

<style>
    .Header {
        background-color: white;
        /* backdrop-filter: blur(50px); */
        position: fixed;
        width: 100%;
    }

    .Header-container {
        display: grid;
        grid-template-columns: minmax(auto, 936px);
        justify-content: center;
        background-color: white;
        /* backdrop-filter: blur(1px); */
        border-bottom: 1px solid rgba(38, 38, 38, 0.4);
    }

    .Header-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem;
    }
    
    .Header ul {
        list-style: none;
    }

    .Header li {
        display: inline-block;
        margin: 0 0 0 1em;
    }

    .Header i {
        font-size: 16px;
        color: rgba(38, 38, 38, 0.7);
        cursor: pointer;
    }

    h1 {
        padding: 0;
        margin: 0;
        font-size: 28px;
        color: black;
        position: relative;
        background: #FFF;
        /* background-color: rgba(255, 255, 255, 0.1); */
        /* backdrop-filter: blur(15px); */
        mix-blend-mode: multiply;
    }

    h1::before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at top left, #F09433, #BC1888);
        mix-blend-mode: screen;
        position: absolute;
        top: 0;
        left: 0;
    }
</style>

<div class="Header">
    <div class="Header-container">
        <div class="Header-content">
            <div class="Header-Logo">
                <h1>Pugstagram</h1>
            </div>
            <div class="Header-nav">
                <ul>
                    <li>
                        <i class="fas fa-heart" />
                        {$likeCount === 0 ? '' : $likeCount}
                    </li>
                    <li>
                        <i class="fas fa-user-alt"/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>