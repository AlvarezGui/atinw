import { useEffect, useState } from 'react';
import { collection, addDoc, getDocs, orderBy, query, doc, deleteDoc, getDoc, updateDoc } from 'firebase/firestore';
import {app, database} from '../services/firebase';

//definir collection
const produtos  = collection(database, 'produtos');

let ordem = '2';


export default function Read(){
    //read
    const [lista, setLista] = useState([]);
    const read = () => {

       

        if(ordem === '1'){
            getDocs(query(produtos, orderBy("nome")))
                .then((data)=>{
                    setLista(data.docs.map((item)=>{
                    return{...item.data(), id:item.id};
                }));
                    
            });

            console.log("AAA" + ordem);
        }

        else if(ordem === '2'){
            getDocs(query(produtos, orderBy("validade")))
                .then((data)=>{
                    setLista(data.docs.map((item)=>{
                    return{...item.data(), id:item.id};
                }));
                        
            });
        }

        else{
            getDocs(query(produtos, orderBy("validade")))
                .then((data)=>{
                    setLista(data.docs.map((item)=>{
                    return{...item.data(), id:item.id};
                }));
                    
            });
        }

    
    }

    const MudarExibir = () => {
        if(ordem === '2') {ordem = '1';}
        else if(ordem === '1'){ordem = '2';}
        console.log(ordem);
        //window.location.reload();
       // return(read.ordem);
        
    }


    //mostrar documentos
    useEffect(()=>{
        read();
    }, []);

    //excluir
    const deleteBtn = (id) => {
        const documento = doc(database, "produtos", id);
        deleteDoc(documento)
        .then(() => {read();});
    }

    //update
    const [ID, setID] = useState(null);
    const [produtosUnico, setProdutosUnico] = useState({});
    const [mostrar, setMostrar] = useState(false);
    const [nome, setNome] = useState("");
    const [validade, setValidade] = useState("");

    const show = async(id) =>{
        setID(id);
        if(ID !=null){
            const produtoSimples = doc(database, "produtos", ID);
            const resultado = await getDoc(produtoSimples);
            setProdutosUnico({...resultado.data(), id:resultado.id});
            setNome(produtosUnico.nome);
            setValidade(produtosUnico.validade);
        }

        if(validade != "") setMostrar(true);

    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{ show(); }, [ID]);

    const bt_cancelar = () => {
        setMostrar(false);
        setNome("");
        setValidade("");
        setID(null);
    }

    const bt_alterar = (id) =>{
        const produtoShow = doc(database, 'produtos', id);
        updateDoc(produtoShow, {
            nome:nome,
            validade:validade
        })
        .then(() =>{
            setNome("");
            setValidade("");
            setID(null);
            read();
            setMostrar(false);
        });
    }

    return(
        <>
            {mostrar ?(
                <div>
                    <h3 className="text-center">ALTERAR</h3>

                    {/* Nome */}
                    <input type="text" placeholder="Nome" className="form-control" required onChange={event=>setNome(event.target.value)} value={nome} /> <br/>
                    {/* Validade */}
                    <input type="date" placeholder="Validade" className="form-control" requir
                    ed onChange={event=>setValidade(event.target.value)} value={validade} /> <br/>

                    {/* Botão */}
                    <input type="submit" value="Salvar" className="btn btn-outline-dark form-control" onClick={()=> bt_alterar(produtosUnico.id)} />
                    <input type="submit" value="Cancelar" className="btn btn-outline-danger form-control" onClick={bt_cancelar} />
                </div>
            ):(<></>)}

            <h3>Produtos Cadastrados:</h3>
            <input type="button" value="Mudar Exibição" onClick={() => MudarExibir()} />
            {lista.map((lista)=>{
                return(
                    <>                        
                        <table>
                            <tr>
                                <th>Nome:</th>
                                <th>Validade:</th>
                                <th>Ações:</th>
                            </tr>

                            <tr>
                                <td>{lista.nome}</td>
                                <td>{lista.validade}</td>
                                <td>
                                    <div className="input-group">
                                        <input type="button" value="Alterar" onClick={()=>show(lista.id)} className="btn btn-outline-warning form-control" />
                                        <input type="button" value="Consumido" onClick={()=>deleteBtn(lista.id)} className="btn btn-outline-danger form-control" />
                                        <input type="button" value="Estragado" onClick={()=>deleteBtn(lista.id)} className="btn btn-outline-danger form-control" />
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </>
                );
            })}
        </>
    );

}