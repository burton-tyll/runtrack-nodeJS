$(document).ready(function(){

    //AJOUT DU HEADER
    $(`
    <header>
            <nav>
                <div class="container-fluid">
                    <ul class="navbar-nav flex-row justify-content-around">
                        <li class="nav-item"><a class="navlink" href="/">Accueil</a></li>
                        <li class="nav-item"><a class="navlink" href="/about">A propos</a></li>
                    </ul>
                </div>
            </nav>
        </header>`).insertBefore('main')
    
    //AJOUT DU CSS
    $('head').append('<link rel="stylesheet" type="text/css" href="/style/style.css"></link>')
})