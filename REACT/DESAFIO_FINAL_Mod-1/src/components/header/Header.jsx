import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import mainLogo from "../../assets/img/mainLogo.png"
import lupinhaBarra from "../../assets/img/lupinhaBarra.png"
import Inicio from "../../pages/inicio/inicio"
import LivrosDoados from "../../pages/livrosDoados/livrosDoados"
import QueroDoar from "../../pages/queroDoar/queroDoar"
import s from "./header.module.scss"

export default function Header(){
    return(

        <BrowserRouter>
        <header className={s.header}>
            <section className={s.logoHeader}>
                <img src={mainLogo} alt="Imagem de ilustração de livro com capa azul aberto." />
                <h1>Livros Vai na Web</h1>
            </section>
            <nav className={s.navHeader}>
                <ul>
                    <li><Link className={s.link} to='/'>Início</Link></li>
                    <li><Link className={s.link} to='/livros_doados'>Livros Doados</Link></li>
                    <li><Link className={s.link} to='/quero_doar'>Quero Doar</Link></li>
                </ul>
            </nav>
            <section className={s.barraPesquisa}>
                <input type="search" name="" id="" placeholder='O que você procura?'/>
                <button><img src={lupinhaBarra} alt="Imagem de lupa branca" /></button>
            </section>
        </header>
        <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/livros_doados" element={<LivrosDoados/>}/>
                <Route path="/quero_doar" element={<QueroDoar/>}/>
            </Routes>

        </BrowserRouter>
    )
}