import logoLivro from '../../assets/img/2702154 1logo.png'
import seacrh from '../../assets/img/search.png'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

export default function Header() {
    return(
        <BrowserRouter>
            <header>
                <section>
                    <img src={logoLivro} alt="Imagem da Logo de um livro com a capa azul aberto" />
                    <h1>Livros Vai na Web</h1>
                </section>
                <nav>
                    <ul>
                        <li><Link to='/'>Início</Link></li>
                        <li><Link to='/livroDoados'>Livros Doados</Link></li>
                        <li><Link to='/queroDoar'>Quero Doar</Link></li>
                    </ul>
                </nav>
                <section>
                    <input type="search" name='' id='' placeholder='O que você procura?' />
                    <button><img src={seacrh} alt='Imagem de uma lupa de pesquisa branca'/></button>
                </section>
            </header>
            <Routes>
                <Route path='/'/>
                <Route path='/livroDoados'/>
                <Route path='/queroDoar'/>
            </Routes>

        </BrowserRouter>
    )
}