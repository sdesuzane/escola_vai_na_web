import facebookIcon from "../../assets/img/facebookIcon.png"
import twitterIcon from "../../assets/img/twitterIcon.png"
import youtubeIcon from "../../assets/img/youtubeIcon.png"
import linkedInIcon from "../../assets/img/linkedInIcon.png"
import instagramIcon from "../../assets/img/instagramIcon.png"
import s from "./footer.module.scss"
export default function Footer(){
    return(
        <footer className={s.footer}>
            <section className={s.contactFooter}>
                <p>4002-8922</p>
                <nav>
                    <a href=""><img src={facebookIcon} alt="Imagem branca da logo do Facebook" /></a>
                    <a href=""><img src={twitterIcon} alt="Imagem branca da logo do Twitter" /></a>
                    <a href=""><img src={youtubeIcon} alt="Imagem branca da logo do Youtube" /></a>
                    <a href=""><img src={linkedInIcon} alt="Imagem branca da logo do Linkedin" /></a>
                    <a href=""><img src={instagramIcon} alt="Imagem branca da logo do Instagram" /></a>
                </nav>
            </section>
            <section className={s.copyright}>
                <p>Layout desenvolvido para fins educativos - 2024</p>
            </section>
        </footer>
    )
}