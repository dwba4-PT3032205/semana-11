import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-links">
          <a href="#">HOME</a>
          <a href="#">EVENTOS</a>
          <a href="#">CONTATO</a>
          <a href="#">CURSOS</a>
          <a href="#">ENTRAR</a>
        </div>
        <div className="navbar-sobre">SOBRE</div>
      </nav>

      <div className="banner">
        <img
          src="https://raw.githubusercontent.com/DWBA4/dwba4_semana_imagens/master/Logo.jpg"
          alt="Logo IFSP"
        />
      </div>

      <div className="content">
        <p><strong>O Instituto Federal de Educação, Ciência e Tecnologia de São Paulo</strong> – é uma autarquia federal de ensino.</p>
        <p>Fundada em 1909, como Escola de Aprendizes Artífices, é reconhecida pela sociedade paulista por sua excelência no ensino público gratuito de qualidade.</p>
        <p>Durante sua história, recebeu, também, os nomes de Escola Técnica Federal de São Paulo e Centro Federal de Educação Tecnológica de São Paulo. Com a transformação em Instituto, em dezembro de 2008, passou a ter relevância de universidade, destacando-se pela autonomia.</p>
        <p>Com a mudança, o Instituto Federal de São Paulo passou a destinar 50% das vagas para os cursos técnicos e, no mínimo, 20% das vagas para os cursos de licenciatura, sobretudo nas áreas de Ciências e da Matemática. Complementarmente, continuará oferecendo cursos de formação inicial e continuada, tecnologias, engenharias e pós-graduação.</p>
        <p>Além dos cursos presenciais, o Instituto Federal de São Paulo oferece os cursos Técnicos em Administração e em Informática para Internet e, a partir de 2012, o superior de Formação de Professores na modalidade de Ensino a Distância (EaD).</p>
        <p>O IFSP é organizado em diversos câmpus e possui mais de 40 mil alunos matriculados nas 36 unidades distribuídas pelo estado de São Paulo.;</p>
        <p><strong>Localizado em Rua Pedro Vicente, 625 - Canindé - São Paulo - SP - Brasil - Cep: 01109-010</strong></p>
      </div>

      <footer className="footer" style={{ marginTop: '15vh' }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
          alt="Facebook" width="80" height="auto"
        />
        <p>
          IFSP - Câmpus Pirituba - Av. Mutinga, 951 - Jardim Santo Elias - CEP.: 05110-000 - São Paulo/SP - Contato: (011) 2504-0100
        </p>
      </footer>
    </div>
  );
}

export default App;
