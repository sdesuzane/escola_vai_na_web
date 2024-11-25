import s from './inicio.module.scss'
import img1 from '../../assets/img/101964 1balance.png'
import img2 from '../../assets/img/2191244 1transform.png'
import img3 from '../../assets/img/566985 1reading.png'
import img4 from '../../assets/img/8541846 1community.png'

export default function Inicio() {
    return(
        <main>
            <section className={s.primeiraSessaoInicio}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <section className={s.porqueDoarSection}>
                <h2>Por que devo doar?</h2>
                <div className={s.divCards}>
                    <section>
                        <img src={img4} alt="Imagem ilustrando circulo social de 4 pessoas" />
                        <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                        </section>
                    <section>
                        <img src={img3} alt="Imagem ilustrando pessoa lendo" />
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                        </section>
                    <section>
                        <img src={img2} alt="Imagem ilustrando maos" />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </section>
                    <section>
                        <img src={img1} alt="Imagem ilustrando uma balanca" />
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </section>
                </div>
            </section>
        </main>
    )
}