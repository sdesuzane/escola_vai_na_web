import livroAberto from "../../assets/img/livroAberto.png"
import s from "./queroDoar.module.scss"
import { useState } from 'react'
import axios from 'axios'

export default function QueroDoar(){

    const [titulo,setTitulo] = useState("")
    const [categoria,setCategoria] = useState("")
    const [autor,setAutor] = useState("")
    const [image_url,setImage_Url] = useState("")
    
    const capturaTitulo = (e) =>{
        setTitulo(e.target.value)
    }

    const capturaCategoria = (e) =>{
        setCategoria(e.target.value)
    }

    const capturaAutor = (e) =>{
        setAutor(e.target.value)
    }

    const capturaImage = (e) =>{
        setImage_Url(e.target.value)
    }

    const enviarDados = async() =>{
        const dadosPEnviar = {
            titulo,
            categoria,
            autor,
            image_url
        }
        await axios.post("https://api-vainaweb.onrender.com/doar",dadosPEnviar)
    }

    return(
        <section className={s.mainQueroDoar}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
                <form onSubmit={(e)=> e.preventDefault()}>
                    <div>
                        <img src={livroAberto} alt="Ícone de um livro aberto."/>
                        <h3>Informações do Livro</h3>
                    </div>
                    <input type="text"  placeholder='Título' onChange={capturaTitulo} required/>
                    <input type="text"  placeholder='Categoria' onChange={capturaCategoria} required/>
                    <input type="text"  placeholder='Autor' onChange={capturaAutor} required/>
                    <input type="text"  placeholder='Link da Imagem' onChange={capturaImage} required/>
                    <input type="submit" value="Doar" className={s.buttonDoacao} onClick={enviarDados}/>
                </form>
        </section>
    )
}