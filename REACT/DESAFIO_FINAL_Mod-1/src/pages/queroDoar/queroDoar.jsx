import livroAberto from "../../assets/img/livroAberto.png"
import s from "./queroDoar.module.scss"

export default function QueroDoar(){
    return(
        <section className={s.mainQueroDoar}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
                <form action="">
                    <div>
                        <img src={livroAberto} alt="Ícone de um livro aberto."/>
                        <h3>Informações do Livro</h3>
                    </div>
                    <input type="text" name="" id="" placeholder="Titulo"/>
                    <input type="text" name="" id="" placeholder="Categoria"/>
                    <input type="text" name="" id="" placeholder="Autor"/>
                    <input type="text" name="" id="" placeholder="Link da Imagem"/>
                    <input className={s.buttonDoacao} type="submit" value="Doar"/>
                </form>
        </section>
    )
}