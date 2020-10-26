<style>
    .Share {
      border: 1px solid rgba(219, 219, 219, 1);
      border-radius: 4px;
      background-color: white;
      margin: 0 0 2em 0;
      width: 300px;
      height: 180px;
      /* position: fixed; */
      position: absolute;
      top: 400px;
      /* top: 150px; */
      left: 30%;
      z-index: 9;
      padding: 1em;
      transition: 5s ease;
    }
    
    .Share-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .Share-head h2 {
      font-size: 16px;
      font-weight: bold;
      color: black;
    }
    
    .Share-head i {
      cursor: pointer;
      color: black;
    }
    
    .Share-content a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: black;
      font-size: 14px;
      margin: 2em 0 0 0;
    }
    
    .Share-content i{
      margin: 0 0.5em 0 0;
      font-size: 20px;
    }

    .Share-content-facebook i {
      color: #3b5998;
    }

    .Share-content-whatsapp i {
      color: #25d366;
    }

    .Share-content-twitter i {
      color: #00acee;
    }

    @media only screen and (max-width: 480px) {
      .Share {
        left: auto;
        top: 190px;
      }
    }
  </style>

<div class="Share">
    <div class="Share-head">
        <h2>Compartir</h2>
        <i class="fas fa-times-circle" on:click />
    </div>
    <div class="Share-content">
      <div class="Share-content-facebook">
        <a href="https://www.facebook.com/sharer/sharer.php?&u=https://pugstagram.co" target="_blank">
          <i class="fab fa-facebook-square" /> 
          Compartir en Facebook
        </a>
      </div>
      <div class="Share-content-whatsapp">
        <a href="https://api.whatsapp.com/send?&text=mira%20este%20hermoso%20pug%20https://pugstagram.co/" target="_blank">
          <i class="fab fa-whatsapp-square" />
          Compartir en Whatsapp
        </a>
      </div>
      <div class="Share-content-twitter">
        <a href="https://twitter.com/intent/tweet?text=Aprendiendo%20a%20crear%20un%20enlace%20para%20compartir%20en%20Twitter&url=pugstagram.co" target="_blank">
          <i class="fab fa-twitter-square" />
          Compartir en Twitter
        </a>
      </div>
    </div>
</div>