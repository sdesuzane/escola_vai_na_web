import livroAberto from "../../assets/img/livroAberto.png"
import s from "./queroDoar.module.scss"

export default function QueroDoar(){
    return(
        <main className={s.mainQueroDoar}>
            <h2 className={s.tituloDoacao}>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
            <section className={s.formCompleto}>
                <section className={s.formTitulo}>
                    <img src={livroAberto} alt="Ícone de um livro aberto."/>
                    <h3>Informações do Livro</h3>
                </section>
                <form  className={s.formDoacao} action="">
                    <input className={s.inputFormDoacao} type="text" name="" id="" placeholder="Titulo"/>
                    <input className={s.inputFormDoacao} type="text" name="" id="" placeholder="Categoria"/>
                    <input className={s.inputFormDoacao} type="text" name="" id="" placeholder="Autor"/>
                    <input className={s.inputFormDoacao} type="text" name="" id="" placeholder="Link da Imagem"/>
                    <input className={s.buttonDoacao} type="submit" value="Doar"/>
                </form>
            </section>
        </main>
    )
}