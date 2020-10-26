<script>

import Profile from "./Profile.svelte";

</script>
<style>
    .Stories {
        border: 1px solid rgba(219, 219, 219, 1);
        border-radius: 4px;
        margin: 1em 0;
        padding: 0.5em 1em;
        background-color: white;
    }
    
    .Stories-item img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
    }

    .Stories-item {
        display: flex;
        align-items: center;
        margin: 0 0 0.5em 0;
    }

    .Stories-item h2 {
        font-size: 14px;
        color: black;
        margin: 0 0 0 0.5em;
    }

    .Stories-item h2 span {
        display: block;
        font-size: 9px;
        /* text-transform: uppercase; */
        color: gray;
    }

    .Stories-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5em 0 0 0;
    }   

    .Stories-head span {
        font-size: 12px;
        font-weight: normal;
        color: black;
    }

    .Stories-item {
        margin: 0.5em 0 0.5em 0;
    }

    .Stories-item-box {
        width: 32px;
        height: 32px;
        border: double 2px transparent;
        border-radius: 100%;
        background-image: linear-gradient(#FFF, #FFF), radial-gradient(circle at top left, #F09433, #BC1888);
        background-origin: border-box;
        background-clip: content-box, border-box;
    }
</style>

<div class="Stories">
    <div class="Stories-container">
        <div class="Stories-head">
            <h2>Historias</h2>
            <span>Ver todas</span>
        </div>
        <div class="Stories-items">
            <div class="Stories-item">
                <div class="Stories-item-box">
                    <img src="https://arepa.s3.amazonaws.com/oscar.png" alt="">
                </div>
                <h2>
                    gndx
                    <span>Hace 2 horas</span>
                </h2>
            </div>
            <div class="Stories-item">
                <div class="Stories-item-box">
                    <img src="https://scontent.flim2-2.fna.fbcdn.net/v/t1.0-9/82793928_1051985058502808_8714249976546328576_n.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=7rK7NW9LCpwAX-QYJEW&_nc_ht=scontent.flim2-2.fna&oh=6fdf9c41d6b4acb1a919ed3a9b4a02dd&oe=5FBD9D1B" alt="">
                </div>
                <h2>                    
                    eliexanders
                    <span>Hace 5 horas</span>
                </h2>
            </div>
            <div class="Stories-item">
                <div class="Stories-item-box">
                    <img src="https://scontent.flim2-2.fna.fbcdn.net/v/t1.0-9/121063940_975928979554776_5386043388407911916_n.jpg?_nc_cat=100&ccb=2&_nc_sid=8bfeb9&_nc_ohc=nPXruJ4UTokAX8k2Aac&_nc_ht=scontent.flim2-2.fna&oh=f6dfd87e7e114135f1c08d1c9ab3ed66&oe=5FBC3B1B" alt="">
                </div>
                <h2>                    
                    orianacarolinak
                    <span>Hace 6 horas</span>
                </h2>
            </div>
        </div>
    </div>
</div>