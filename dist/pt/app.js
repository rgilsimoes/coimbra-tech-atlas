const companies = [
  {name:'Critical Software', mark:'CS', sector:'Software', tags:'sistemas críticos aeroespacial mobilidade energia engenharia', location:'Taveiro · Coimbra', founded:'1998', mission:'Cria software robusto para sistemas complexos em que a segurança e a fiabilidade são determinantes.', people:'João Carreira · CEO; Gonçalo Quadros · Presidente', source:'https://criticalsoftware.com/en/contacts'},
  {name:'Feedzai', mark:'FZ', sector:'IA e Dados', tags:'fintech inteligência artificial fraude crime financeiro aprendizagem automática', location:'IPN · Rua Pedro Nunes', founded:'2011', mission:'Aplica inteligência artificial à prevenção da fraude e do crime financeiro, protegendo pagamentos e transações em tempo real.', people:'Nuno Sebastião · Cofundador & CEO; Pedro Bizarro · Cofundador & CSO', source:'https://careers.feedzai.com/office/coimbra/'},
  {name:'WIT Software', mark:'WIT', sector:'Software', tags:'telecomunicações aplicações móveis comunicações', location:'Taveiro · Coimbra', founded:'2001', mission:'Desenvolve produtos de software para comunicações móveis, utilizados por operadores e empresas tecnológicas em vários mercados.', people:'Empresa de Coimbra especializada em software para comunicações móveis', source:'https://www.wit-software.com/contacts.html'},
  {name:'Present Technologies', mark:'PT', sector:'Software', tags:'web móvel empresas inteligência artificial consultoria', location:'IPN · Rua Pedro Nunes', founded:'2000', mission:'Concebe produtos digitais à medida, desde plataformas empresariais de grande escala a aplicações móveis.', people:'Nasceu em Coimbra com uma equipa de cinco pessoas', source:'https://www.present-technologies.com/'},
  {name:'The Loop co.', mark:'LOOP', sector:'Software', tags:'economia circular sustentabilidade saas retalho', location:'Praça do Comércio · Coimbra', founded:'2016', mission:'Cria e apoia negócios tecnológicos que procuram tornar o consumo e o retalho mais circulares e sustentáveis.', people:'João Bernardo Parreira · CEO; Manuel Tovar · COO; Ricardo Morgado · CSO; João Rodrigues · CTO', source:'https://www.theloop.pt/'},
  {name:'ETHIACK', mark:'ETH', sector:'IA e Dados', tags:'cibersegurança hacking ético segurança inteligência artificial', location:'IPN · Rua Pedro Nunes', founded:'2019', mission:'Combina automatização e hacking ético para encontrar continuamente as vulnerabilidades que representam maior risco.', people:'Jorge Monteiro · CEO; André Baptista · Cofundador & CTO', source:'https://blog.ethiack.com/blog/from-compliance-to-continuous-security-ethiacks-vision-for-financial-cybersecurity'},
  {name:'Active Space Technologies', mark:'AST', sector:'Tecnologia Avançada', tags:'espaço aeroespacial engenharia térmica sistemas embebidos', location:'Coimbra · Portugal', founded:'2004', mission:'Desenvolve sistemas termomecânicos e eletrónicos para missões espaciais e aplicações industriais exigentes.', people:'Empresa nascida no ecossistema da Universidade de Coimbra e do IPN', source:'https://www.activespacetech.com/'},
  {name:'CIBERBIT', mark:'CB', sector:'Tecnologia da Saúde', tags:'saúde retalho software hospitais transformação digital', location:'Eiras · Coimbra', founded:'1995', mission:'Desenvolve software de gestão para organizações de saúde e retalho, com informação operacional disponível em tempo real.', people:'Empresa de software com uma longa presença em Coimbra', source:'https://ciberbit.pt/'},
  {name:'RedLight', mark:'RL', sector:'Software', tags:'estúdio desenvolvimento de produto web móvel mvp', location:'Coimbra · Portugal', founded:'2013', mission:'Ajuda equipas a transformar ideias em produtos digitais, com um processo de desenvolvimento próximo e transparente.', people:'Estúdio de desenvolvimento de software de Coimbra', source:'https://redlight.dev/'},
  {name:'Apollotec', mark:'AP', sector:'Software', tags:'digital cloud nuvem desenvolvimento à medida estratégia', location:'Coimbra · Portugal', founded:'2016', mission:'Desenvolve soluções digitais à medida para tornar os processos das empresas mais seguros e eficientes.', people:'Empresa portuguesa de tecnologia digital com sede em Coimbra', source:'https://apollotec.pt/en/sobre/'},
  {name:'Softimbra', mark:'SOFT', sector:'Tecnologia Avançada', tags:'agritech agricultura pecuária software', location:'Coimbra · Portugal', founded:'1998', mission:'Desenvolve ferramentas digitais para apoiar a gestão diária de explorações agrícolas e pecuárias.', people:'Empresa portuguesa especializada em informática agrícola', source:'https://softimbra.com/Pages/Empresa/1'},
  {name:'Bluepharma', mark:'BLU', sector:'Tecnologia da Saúde', tags:'farmacêutica biotecnologia investigação medicamentos produção ciências da vida', location:'São Martinho do Bispo · Coimbra', founded:'2001', mission:'Investiga, desenvolve e produz medicamentos, combinando capacidade industrial com inovação farmacêutica.', people:'Paulo Barradas Rebelo · Presidente; Sérgio Simões & Miguel Silvestre · CEOs', source:'https://www.bluepharmagroup.com/en/about-us/company'},
  {name:'Stratio Automotive', mark:'STR', sector:'IA e Dados', tags:'automóvel frotas manutenção preditiva aprendizagem automática mobilidade', location:'IPN · Rua Pedro Nunes', founded:'2017', mission:'Usa inteligência artificial e manutenção preditiva para reduzir avarias e tempos de imobilização nas frotas de transporte.', people:'Equipa tecnológica em Coimbra que trabalha com operadores de transportes de vários países', source:'https://www.stratioautomotive.com/terms-conditions'},
  {name:'Intermédia Informática', mark:'INT', sector:'Software', tags:'informática equipamento software telecomunicações retalho serviços', location:'Santo António dos Olivais · Coimbra', founded:'1995', mission:'Comercializa equipamento informático e de telecomunicações e presta serviços tecnológicos a empresas e profissionais.', people:'Empresa independente de Coimbra dedicada a equipamento e serviços informáticos', source:'https://intermedia.pt/'},
  {name:'RCSOFT', mark:'RCS', sector:'Software', tags:'erp produção rfid armazém faturação gestão empresas', location:'Taveiro · Coimbra', founded:'—', mission:'Desenvolve software de gestão para a indústria, abrangendo produção, RFID, armazéns, logística e faturação.', people:'Empresa de Coimbra especializada em software de gestão empresarial e industrial', source:'https://www.rcsoft.pt/'},
  {name:'Enso Origins', mark:'ENSO', sector:'Software', tags:'reengenharia de processos transformação digital administração pública soluções', location:'IPN · Rua Pedro Nunes', founded:'—', mission:'Repensa processos e desenvolve soluções digitais para organizações, incluindo entidades da Administração Pública.', people:'Empresa tecnológica incubada no IPN', source:'https://enso-origins.com/contactos'},
  {name:'Cleanwatts', mark:'CW', sector:'Tecnologia Avançada', tags:'clima energia comunidades renováveis descarbonização software', location:'IPN · Rua Pedro Nunes', founded:'2020', mission:'Cria e gere comunidades de energia que permitem produzir e partilhar energia renovável a nível local.', people:'Empresa de tecnologia climática fundada em Coimbra, com atividade internacional', source:'https://cleanwatts.energy/sobre-nos/'},
  {name:'FiberSight', mark:'FS', sector:'Tecnologia Avançada', tags:'fibra ótica sensores infraestruturas fugas temperatura humidade cern', location:'IPN · Coimbra', founded:'2021', mission:'Transforma cabos de fibra ótica existentes em redes de sensores capazes de detetar temperatura, humidade e fugas ao longo de grandes distâncias.', people:'Tiago Neves · Cofundador & CEO; Manuel Soeiro · Cofundador & CTO', source:'https://fibersight.pt/about'},
  {name:'Filo Coimbra', mark:'FILO', sector:'Software', tags:'compressão sem perdas armazenamento infraestrutura desempenho dados', location:'IPN · Rua Pedro Nunes', founded:'2024', mission:'Desenvolve tecnologia de compressão sem perdas para reduzir custos de armazenamento e aproveitar melhor a infraestrutura disponível.', people:'Empresa de software atualmente incubada no IPN', source:'https://www.ipn.pt/incubadora-empresas/'},
  {name:'Neuraspace', mark:'NEU', sector:'IA e Dados', tags:'gestão tráfego espacial detritos satélites inteligência artificial aprendizagem automática', location:'IPN · Rua Pedro Nunes', founded:'2020', mission:'Aplica inteligência artificial à monitorização de satélites e detritos, ajudando operadores a evitar colisões e a gerir o tráfego espacial.', people:'Empresa de tecnologia espacial nascida em Coimbra, com presença europeia em expansão', source:'https://www.neuraspace.com/'},
  {name:'AirSafe.ai', mark:'AIR', sector:'IA e Dados', tags:'drones uav aviação prevenção colisões deteção bvlos inteligência artificial', location:'IPN · Coimbra', founded:'—', mission:'Desenvolve sistemas de deteção e prevenção de colisões para operações de drones para além da linha de visão do piloto.', people:'Empresa de aviação autónoma atualmente incubada no IPN', source:'https://www.ipn.pt/incubadora-empresas/'},
  {name:'DIG-IN', mark:'DIG', sector:'IA e Dados', tags:'restauração análise dados fmcg marcas plataformas digitais', location:'IPN · Coimbra', founded:'—', mission:'Organiza e analisa dados da restauração para apoiar decisões de marcas de grande consumo, plataformas digitais e cadeias de restaurantes.', people:'Empresa de dados atualmente incubada no IPN', source:'https://www.ipn.pt/incubadora-empresas/'}
];

const grid = document.querySelector('#companyGrid');
const search = document.querySelector('#search');
const count = document.querySelector('#resultCount');
const empty = document.querySelector('#emptyState');
const dialog = document.querySelector('#companyDialog');
const dialogContent = document.querySelector('#dialogContent');
let activeFilter = 'Todos';

function cardTemplate(company, index){
  return `<article class="company-card" tabindex="0" data-index="${index}" aria-label="Abrir perfil: ${company.name}">
    <div class="card-top"><span class="company-mark">${company.mark}</span><span class="card-index">${String(index+1).padStart(2,'0')} / ${companies.length}</span></div>
    <h3>${company.name}</h3><span class="sector">${company.sector}</span>
    <p class="mission">${company.mission}</p>
    <div class="card-meta"><span>${company.location}</span><button aria-label="Abrir detalhes: ${company.name}">↗</button></div>
  </article>`;
}

function render(){
  const query = search.value.trim().toLocaleLowerCase('pt-PT');
  const visible = companies.map((c,index)=>({...c,index})).filter(c => {
    const categoryMatch = activeFilter === 'Todos' || c.sector === activeFilter;
    const textMatch = `${c.name} ${c.sector} ${c.tags} ${c.location} ${c.mission}`.toLocaleLowerCase('pt-PT').includes(query);
    return categoryMatch && textMatch;
  });
  grid.innerHTML = visible.map(c=>cardTemplate(c,c.index)).join('');
  count.textContent = visible.length;
  empty.hidden = visible.length !== 0;
}

function openCompany(index){
  const c = companies[index];
  dialogContent.innerHTML = `<div class="dialog-inner">
    <span class="dialog-number">Perfil ${String(index+1).padStart(2,'0')} / Coimbra Tech Atlas</span>
    <h2 id="dialogTitle">${c.name}</h2><span class="dialog-sector">${c.sector}</span>
    <p class="dialog-mission">${c.mission}</p>
    <div class="detail-grid"><div><span>Presença em Coimbra</span><b>${c.location}</b></div><div><span>Ano de fundação</span><b>${c.founded}</b></div></div>
    <p class="dialog-person"><strong>Referências / contexto:</strong> ${c.people}</p>
    <a class="dialog-source" href="${c.source}" target="_blank" rel="noreferrer">Consultar fonte primária ↗</a>
  </div>`;
  dialog.showModal();
}

search.addEventListener('input',render);
document.querySelectorAll('.filters button').forEach(button=>button.addEventListener('click',()=>{
  document.querySelector('.filters .active').classList.remove('active');
  button.classList.add('active'); activeFilter=button.dataset.filter; render();
}));
grid.addEventListener('click',event=>{const card=event.target.closest('.company-card');if(card)openCompany(Number(card.dataset.index));});
grid.addEventListener('keydown',event=>{if((event.key==='Enter'||event.key===' ')&&event.target.classList.contains('company-card')){event.preventDefault();openCompany(Number(event.target.dataset.index));}});
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
render();
