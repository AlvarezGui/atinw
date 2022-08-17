export default function Navbar(){
    return(
        <>
           
      <nav className='navbar navbar-expand-lg '>
        <div className='collapse navbar-collapse'>
          <img width="30" height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/gamemaker/gamemaker.png" alt="Logo" />
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