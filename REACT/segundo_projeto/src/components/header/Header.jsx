import logoLivro from '../../assets/img/2702154 1logo.png'
import seacrh from '../../assets/img/search.png'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Inicio from '../../pages/inicio/inicio'
import LivroDoados from '../../pages/livrosDoados/livrosDoados'
import QueroDoar from '../../pages/queroDoar/queroDoar'
import s from './header.module.scss'

export default function Header() {
    return(
        <BrowserRouter>
            <header className={s.header}>
                <section className={s.logoHeader}>
                    <img src={logoLivro} alt="Imagem da Logo de um livro com a capa azul aberto" />
                    <h1>Livros Vai na Web</h1>
                </section>
                <nav className={s.navHeader}>
                    <ul>
                        <li><Link className={s.link} to='/'>Início</Link></li>
                        <li><Link className={s.link} to='/LivroDoados'>Livros Doados</Link></li>
                        <li><Link className={s.link} to='/QueroDoar'>Quero Doar</Link></li>
                    </ul>
                </nav>
                <section className={s.buscarHeader}>
                    <input type="search" name='' id='' placeholder='O que você procura?' />
                    <button><img src={seacrh} alt='Imagem de uma lupa de pesquisa branca'/></button>
                </section>
            </header>
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/LivroDoados' element={<LivroDoados/>}/>
                <Route path='/QueroDoar' element={<QueroDoar/>}/>
            </Routes>

        </BrowserRouter>
    )
}