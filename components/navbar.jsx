export default function Navbar(){
    return(
        <>
           
      <nav className='navbar navbar-expand-lg '>
        <div className='collapse navbar-collapse'>
          <h1 className='navbar-brand'>Dispensa Virtual</h1>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'><a className='nav-link active' href="/pagCadastrar">Apenas Cadastrar</a></li>
            <li className='nav-item'><a className='nav-link active' href="/pagRead">Apenas Visualizar</a></li>
            <li className="nav-item"><a className='nav-link active' href="/"> Retornar ao Menu</a></li>
          </ul>
        </div>
      </nav> <br />

        </>
    );
}