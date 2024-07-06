import Logo from "./spotify.svg"

function Header(){
    return (
        <header>
                <nav class="navegacao navbar navbar-expand-md navbar-dark">
                    <div class="container-fluid">

                        <a class="navbar-brand">
                            <img src={Logo} class='logo'/>
                        </a>

                        <button class="navbar-toggler" type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#menu" 
                            aria-controls="menu" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end" id="menu">
                            <ul class="navbar-nav">
                                <li class="nav-item"><a href="#" class="nav-link">Premium</a></li>
                                <li class="nav-item"><a href="#" class="nav-link">Ajuda</a></li>
                                <li class="nav-item"><a href="#" class="nav-link">Baixar</a></li>
                                <li class="nav-item d-none d-md-flex align-self-center separador"><span class="nav-link">|</span></li>
                                <li class="nav-item"><a href="#" class="nav-link">Increver-se</a></li>
                                <li class="nav-item"><a href="#" class="nav-link">Entrar</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
    )
}

export default Header