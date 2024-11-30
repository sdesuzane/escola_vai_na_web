import livroProtagonista from "../../assets/img/livroProtagonista.png"
import s from "./licrrosDoados.module.scss"
export default function LivrosDoados(){
    return(
        <main className={s.mainLivrosDoados}>
            <h2>Livros Doados</h2>
            <section className={s.listaLivros}>
                <section>
                    <img src={livroProtagonista} alt="Imagem meramente ilustrativa do livro Protagonista."/>
                    <div>
                        <h3>Protagonista</h3>
                        <p>Susanne Andrade</p>
                        <p>Ficção</p>
                    </div>
                </section>
                {/*TODO: adicionar outros livros*/}
            </section>
        </main>
    )
}