import livroProtagonista from "../../assets/img/livroProtagonista.png"
import s from "./livrosDoados.module.scss"
import axios from 'axios'
import {useState,useEffect} from 'react'

export default function LivrosDoados(){

    const [livros,setLivros] = useState([])

    const getLivros = async() => {
       const resposta = await axios.get('https://api-vainaweb.onrender.com/livros') 
       setLivros(resposta.data)
    }

    useEffect(()=>{
        getLivros()
    },[])

    return(
        <section className={s.mainLivrosDoados}>
            <h2>Livros Doados</h2>
            <section className={s.listaLivros}>
                {
                    livros.map((item)=>(
                        <section>
                            <img src={item.image_url} alt={`Titulo do livro ${item.titulo}`} />
                            <h3>{item.titulo}</h3>
                            <p>{item.autor}</p>
                            <p>{item.categoria}</p>
                        </section>
                    )) 
                    }
            </section>
        </section>
    )
}