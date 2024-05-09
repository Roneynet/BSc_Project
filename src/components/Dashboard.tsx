import './Glass.css'; 

const Dashboard = () => {
  return (
    <section className="glass">
      <div className="dashboard">
        <div className="dash-title">
          <h5>www.dobrazil.co.uk</h5>
        </div>
        <div className="links1">
          <div className="links2">
            <a href="contact-pt-br.html">
              <img src="src/img/email-icon-50.png" alt="Email" style={{ width: '30px', height: '30px' }} />
              <h5>Email</h5>
            </a>
            <a href="https://api.whatsapp.com/send?phone=00447436353918">
              <img src="src/img/whatsapp-icon-50.png" alt="Whatsapp" style={{ width: '30px', height: '30px' }} />
              <h5>Whatsapp</h5>
            </a>
            <a href="https://www.instagram.com/dobrazil.co.uk/">
              <img src="src/img/instagram-icon-50.png" alt="Instagram" style={{ width: '30px', height: '30px' }} />
              <h5>Instagram</h5>
            </a>
          </div>
        </div>
      </div>
      <div className="main-cat">
        <a href="advertise-pt-br.html" className="advertise-button1">Anuncie Agora!</a>
        <div className="main-categories">
        <a href="accommodation-pt-br.html" className="category-grid-item">Acomodação</a>
                            <a href="beauty-pt-br.html" className="category-grid-item">Beleza</a>
                            <a href="classifieds-pt-br.html" className="category-grid-item">Classificados</a>
                            <a href="brazilian-food-pt-br.html" className="category-grid-item">Comida brasileira</a>
                            <a href="jobs-pt-br.html" className="category-grid-item">Empregos</a>
                            <a href="parties-pt-br.html" className="category-grid-item">Festas</a>
                            <a href="tech-pt-br.html" className="category-grid-item">Informática</a>
                            <a href="jewelry-pt-br.html" className="category-grid-item">Joias</a>
                            <a href="maintenance-pt-br.html" className="category-grid-item">Manutenção e reformas</a>
                            <a href="moving-serv-pt-br.html" className="category-grid-item">Mudanças</a>
                            <a href="mechanical-pt-br.html" className="category-grid-item">Oficinas mecânicas</a>
                            <a href="other-pt-br.html" className="category-grid-item">Outros</a>
                            <a href="freelancer-pt-br.html" className="category-grid-item">Profissionais Liberais</a>
                            <a href="cloths-acc-pt-br.html" className="category-grid-item">Roupas e acessórios</a>
                            <a href="health-pt-br.html" className="category-grid-item">Saúde</a>
                            <a href="translator-pt-br.html" className="category-grid-item">Tradutores</a>
                            <a href="tourism-pt-br.html" className="category-grid-item">Turismo</a>
                            <a href="vehicles-pt-br.html" className="category-grid-item">Veículos</a>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;