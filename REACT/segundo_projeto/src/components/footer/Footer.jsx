import facebookIcon from "../../assets/img/facebookIcon.png"
import twitterIcon from "../../assets/img/twitterIcon.png"
import youtubeIcon from "../../assets/img/youtubeIcon.png"
import linkedInIcon from "../../assets/img/linkedInIcon.png"
import instagramIcon from "../../assets/img/instagramIcon.png"
import s from "./footer.module.scss"
export default function Footer(){
    return(
        <footer className={s.footer}>
            <section className={s.emCima}>
                <p>4002-8922</p>
                <nav>
                    <ul className={s.redes}>
                        <li><a href=""><img src={facebookIcon} alt="Ícone do facebook, clique aqui para acessar nossa pagina no facebook."/></a></li>
                        <li><a href=""><img src={twitterIcon} alt="Ícone do twitter, clique aqui para acessar nossa pagina no twitter."/></a></li>
                        <li><a href=""><img src={youtubeIcon} alt="Ícone do youtube, clique aqui para acessar nosso canal do youtube."/></a></li>
                        <li><a href=""><img src={linkedInIcon} alt="Ícone do linkedIn, clique aqui para acessar nossa pagina no linkedIn."/></a></li>
                        <li><a href=""><img src={instagramIcon} alt="Ícone do instagram, clique aqui para acessar nossa pagina no instagram."/></a></li>
                    </ul>
                </nav>
            </section>
            <section className={s.emBaixo}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
        </footer>
    )
}