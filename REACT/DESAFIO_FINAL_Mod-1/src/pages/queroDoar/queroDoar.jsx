import livroAberto from "../../assets/img/livroAberto.png"
import s from "./queroDoar.module.scss"
import { useState } from "react"
import axios from "axios"

export default function QueroDoar(){

    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [image_url, setImage_url] = useState("")

    const capturarTitulo = (e) => {
        setTitulo(e.target.value)
    }
    const capturarCategoria = (e) => {
        setCategoria(e.target.value)
    }
    const capturarAutor = (e) => {
        setAutor(e.target.value)
    }
    const capturarImage_Url = (e) => {
        setImage_url(e.target.value)
    }

    const enviarDados = async() => {

        const endPointApi = "https://api-vainaweb.onrender.com/doar"

        const dadosEnviar = {
            titulo,
            categoria,
            autor,
            image_url
        }

        await axios.post(endPointApi, dadosEnviar)             

    }

    return(
        <section className={s.mainQueroDoar}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <img src={livroAberto} alt="Ícone de um livro aberto."/>
                        <h3>Informações do Livro</h3>
                    </div>
                    <input type="text" placeholder="Titulo" onChange={capturarTitulo}/>
                    <input type="text" placeholder="Categoria" onChange={capturarCategoria}/>
                    <input type="text" placeholder="Autor" onChange={capturarAutor}/>
                    <input type="text" placeholder="Link da Imagem" onChange={capturarImage_Url}/>
                    <input className={s.buttonDoacao} type="submit" value="Doar" onClick={enviarDados}/>
                </form>
        </section>
    )
}