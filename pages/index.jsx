import Head from 'next/head'
import Cadastrar from '../components/cadastrar'
import Navbar from '../components/navbar';
import Read from '../components/read';

export default function Home() {
  return (
    <>
      <Head>
        <title>Validade</title>
      </Head>

      <Navbar></Navbar>

      <Cadastrar></Cadastrar> <br /> <br />
      <Read></Read>
    </>
  );
}