import Head from 'next/head'
import Cadastrar from '../components/cadastrar'
import Read from '../components/read';

export default function Home() {
  return (
    <>
      <Head>
        <title>Validade</title>
      </Head>

      
      <h1>teste</h1>
      <Cadastrar></Cadastrar>
      <Read></Read>
    </>
  );
}