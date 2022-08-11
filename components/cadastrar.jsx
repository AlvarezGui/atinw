import { useState } from "react";
import {app, database} from '../services/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

//definir coleção
const produtos = collection(database, 'produtos');

export default function Cadastrar(){

    //hooks
    const [nome, setNome] = useState('');
    const [validade, setValidade] = useState(Date);

    //create
    const create = () =>{
        addDoc(produtos, {nome:nome, validade:validade})
        .then(() => {
            setNome('');
            setValidade('')
            window.location.reload();
            read();
        });
    }

    return(
        <>
            <div className="container">
                <h3>Cadastrar Produto</h3>
                {/* Nome */}
                <input type="text" placeholder="Nome" className="form-control" required onChange={event=>setNome(event.target.value)} value={nome} /> <br/> <br />
                {/* Validade */}
                <input type="date" placeholder="Vailidade" className="form-control" required onChange={event=>setValidade(event.target.value)} value={validade} /> <br /> <br />

                {/* Botão */}
                <input type="submit" value="Salvar" className="btn btn-outline-dark form-control" onClick={create} />
            </div>
        </>

    );
}