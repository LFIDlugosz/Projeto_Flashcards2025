// Curiosidades iniciais (mínimo 9)
const curiosidadesIniciais = [
  // Animais
  { pergunta: 'Qual o animal mais rápido do mundo?', resposta: 'O falcão-peregrino, que pode atingir 320 km/h em mergulho.', secao: 'Animais' },
  { pergunta: 'Qual o maior animal terrestre?', resposta: 'O elefante africano.', secao: 'Animais' },
  { pergunta: 'Qual o animal mais venenoso?', resposta: 'A água-viva vespa-do-mar.', secao: 'Animais' },
  { pergunta: 'Qual o mamífero que voa?', resposta: 'O morcego.', secao: 'Animais' },
  { pergunta: 'Qual o animal com mais dentes?', resposta: 'O caracol, com até 25 mil dentes.', secao: 'Animais' },
  { pergunta: 'Qual o maior peixe?', resposta: 'O tubarão-baleia.', secao: 'Animais' },
  { pergunta: 'Qual o animal mais antigo?', resposta: 'A água-viva Turritopsis dohrnii, considerada imortal.', secao: 'Animais' },
  { pergunta: 'Qual o animal mais barulhento?', resposta: 'A baleia-azul.', secao: 'Animais' },
  { pergunta: 'Qual o animal mais dorminhoco?', resposta: 'O coala, dorme até 22 horas por dia.', secao: 'Animais' },
  // Nosso Planeta
  { pergunta: 'Qual o maior oceano do planeta?', resposta: 'Oceano Pacífico.', secao: 'Nosso Planeta' },
  { pergunta: 'Qual o maior deserto do mundo?', resposta: 'A Antártida.', secao: 'Nosso Planeta' },
  { pergunta: 'Qual o rio mais extenso?', resposta: 'O rio Amazonas.', secao: 'Nosso Planeta' },
  { pergunta: 'Qual a montanha mais alta?', resposta: 'Monte Everest.', secao: 'Nosso Planeta' },
  { pergunta: 'Qual o país com mais ilhas?', resposta: 'Suécia, com mais de 267 mil ilhas.', secao: 'Nosso Planeta' },
  { pergunta: 'Qual o lago mais profundo?', resposta: 'Lago Baikal, na Rússia.', secao: 'Nosso Planeta' },
  { pergunta: 'Qual o menor país?', resposta: 'Vaticano.', secao: 'Nosso Planeta' },
  { pergunta: 'Qual o maior arquipélago?', resposta: 'Indonésia.', secao: 'Nosso Planeta' },
  { pergunta: 'Qual o ponto mais baixo da Terra?', resposta: 'Fossa das Marianas.', secao: 'Nosso Planeta' },
  // Espaço (9 flashcards)
  { pergunta: 'Qual o maior planeta do Sistema Solar?', resposta: 'Júpiter.', secao: 'Espaço' },
  { pergunta: 'Qual planeta é conhecido como planeta vermelho?', resposta: 'Marte.', secao: 'Espaço' },
  { pergunta: 'Qual a estrela mais próxima da Terra?', resposta: 'O Sol.', secao: 'Espaço' },
  { pergunta: 'Qual o planeta mais quente?', resposta: 'Vênus.', secao: 'Espaço' },
  { pergunta: 'Qual o menor planeta do Sistema Solar?', resposta: 'Mercúrio.', secao: 'Espaço' },
  { pergunta: 'O que é uma supernova?', resposta: 'Explosão de uma estrela no final de sua vida.', secao: 'Espaço' },
  { pergunta: 'O que é um buraco negro?', resposta: 'Região do espaço com gravidade tão forte que nada escapa.', secao: 'Espaço' },
  { pergunta: 'Qual o satélite natural da Terra?', resposta: 'A Lua.', secao: 'Espaço' },
  { pergunta: 'Qual o planeta com mais luas?', resposta: 'Saturno.', secao: 'Espaço' }
];

const STORAGE_KEY = 'curiosidades_flashcards';
const SECOES_KEY = 'curiosidades_secoes';
let secoesPadrao = ['Animais', 'Nosso Planeta', 'Espaço'];

function salvarFlashcards(flashcards) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(flashcards));
}

function carregarFlashcards() {
  const dados = localStorage.getItem(STORAGE_KEY);
  if (dados) {
    try {
      return JSON.parse(dados);
    } catch {
      return [...curiosidadesIniciais];
    }
  }
  return [...curiosidadesIniciais];
}

function salvarSecoes(secoes) {
  localStorage.setItem(SECOES_KEY, JSON.stringify(secoes));
}
function carregarSecoes() {
  const dados = localStorage.getItem(SECOES_KEY);
  if (dados) {
    try {
      return JSON.parse(dados);
    } catch {
      return [...secoesPadrao];
    }
  }
  return [...secoesPadrao];
}

let flashcards = carregarFlashcards();
let secoes = carregarSecoes();
if ((!flashcards || !flashcards.length) && (!secoes || !secoes.length)) {
  salvarFlashcards([...curiosidadesIniciais]);
  salvarSecoes([...secoesPadrao]);
  window.location.reload();
}
// Após reload, garantir que as variáveis estejam atualizadas
flashcards = carregarFlashcards();
secoes = carregarSecoes();
let secaoAtual = secoes[0];

function renderizarSecoesBar() {
  const bar = document.getElementById('secoes-bar');
  bar.innerHTML = '';
  secoes.forEach(secao => {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'inline-flex';
    wrapper.style.alignItems = 'center';
    wrapper.style.position = 'relative';

    const btn = document.createElement('button');
    btn.textContent = secao;
    btn.className = 'btn-secao' + (secao === secaoAtual ? ' ativo' : '');
    btn.onclick = () => {
      secaoAtual = secao;
      renderizarSecoesBar();
      renderizarFlashcards();
      renderizarSelecaoSecao();
    };
    btn.style.position = 'relative';
    btn.style.display = 'inline-flex';
    btn.style.alignItems = 'center';

    // Botão de três pontinhos dentro do botão da seção
    const btnMenu = document.createElement('button');
    btnMenu.className = 'btn-menu-secao';
    btnMenu.type = 'button';
    btnMenu.innerHTML = '&#x22EE;';
    btnMenu.setAttribute('aria-label', 'Opções da seção');
    btn.appendChild(btnMenu);

    // Popup de menu
    const menu = document.createElement('div');
    menu.className = 'menu-secao-popup';
    menu.style.display = 'none';
    menu.innerHTML = `
      <button class="btn-renomear-secao" type="button">Renomear</button><br>
      <button class="btn-excluir-secao" type="button">Excluir</button>
    `;
    wrapper.appendChild(btn);
    wrapper.appendChild(menu);

    btnMenu.onclick = (e) => {
      e.stopPropagation();
      // Fechar outros menus
      document.querySelectorAll('.menu-secao-popup').forEach(m => m.style.display = 'none');
      menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
      // Posicionar menu fixo na tela, alinhado ao botão
      const rect = btnMenu.getBoundingClientRect();
      menu.style.position = 'fixed';
      menu.style.top = `${rect.bottom + 4}px`;
      menu.style.left = `${rect.left - menu.offsetWidth + btnMenu.offsetWidth}px`;
      menu.style.zIndex = 9999;
    };

    // Renomear seção
    menu.querySelector('.btn-renomear-secao').onclick = () => {
      const novoNome = prompt('Novo nome da seção:', secao);
      if (novoNome && novoNome.trim() && !secoes.includes(novoNome.trim())) {
        // Atualizar nome na lista de seções
        secoes = secoes.map(s => s === secao ? novoNome.trim() : s);
        // Atualizar nome nos flashcards
        flashcards.forEach(card => { if (card.secao === secao) card.secao = novoNome.trim(); });
        if (secaoAtual === secao) secaoAtual = novoNome.trim();
        salvarSecoes(secoes);
        salvarFlashcards(flashcards);
        renderizarSecoesBar();
        renderizarSelecaoSecao();
        renderizarFlashcards();
      }
      menu.style.display = 'none';
    };
    // Excluir seção
    menu.querySelector('.btn-excluir-secao').onclick = () => {
      if (confirm('Excluir a seção e todos os flashcards dela?')) {
        // Remover flashcards da seção
        flashcards = flashcards.filter(card => card.secao !== secao);
        // Remover seção
        secoes = secoes.filter(s => s !== secao);
        if (secaoAtual === secao) secaoAtual = secoes[0] || '';
        salvarSecoes(secoes);
        salvarFlashcards(flashcards);
        renderizarSecoesBar();
        renderizarSelecaoSecao();
        renderizarFlashcards();
      }
      menu.style.display = 'none';
    };
    // Fechar menu ao clicar fora
    document.addEventListener('click', (ev) => {
      if (!wrapper.contains(ev.target)) menu.style.display = 'none';
    });
    bar.appendChild(wrapper);
  });
  // Botão + ao final da barra
  const btnAddSecao = document.createElement('button');
  btnAddSecao.id = 'btn-add-secao';
  btnAddSecao.setAttribute('aria-label', 'Adicionar nova seção');
  btnAddSecao.style.marginLeft = '0.5rem';
  btnAddSecao.style.background = 'var(--cor-destaque)';
  btnAddSecao.style.color = '#fff';
  btnAddSecao.style.border = 'none';
  btnAddSecao.style.borderRadius = '50%';
  btnAddSecao.style.width = '2.2rem';
  btnAddSecao.style.height = '2.2rem';
  btnAddSecao.style.fontSize = '1.5rem';
  btnAddSecao.style.cursor = 'pointer';
  btnAddSecao.style.display = 'inline-flex';
  btnAddSecao.style.alignItems = 'center';
  btnAddSecao.style.justifyContent = 'center';
  btnAddSecao.textContent = '+';
  btnAddSecao.onclick = () => {
    const novaSecao = prompt('Nome da nova seção:');
    if (novaSecao && novaSecao.trim() && !secoes.includes(novaSecao.trim())) {
      secoes.push(novaSecao.trim());
      salvarSecoes(secoes);
      secaoAtual = novaSecao.trim();
      renderizarSecoesBar();
      renderizarSelecaoSecao();
      renderizarFlashcards();
    }
  };
  bar.appendChild(btnAddSecao);
}

// Evento do botão central de adicionar flashcard
const btnCentralAdd = document.getElementById('btn-central-add-flashcard');
if (btnCentralAdd) {
  btnCentralAdd.onclick = () => {
    secaoAddFlashcard.style.display = 'block';
    btnMostrarForm.style.display = 'none';
    form.onsubmit = defaultFormSubmit;
    document.querySelector('#add-flashcard-section h2').textContent = 'Adicionar nova curiosidade';
    secaoAddFlashcard.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
}

function renderizarSelecaoSecao() {
  const select = document.getElementById('selecao-secao');
  select.innerHTML = '';
  secoes.forEach(secao => {
    const opt = document.createElement('option');
    opt.value = secao;
    opt.textContent = secao;
    if (secao === secaoAtual) opt.selected = true;
    select.appendChild(opt);
  });
}

function renderizarFlashcards() {
  const container = document.getElementById('flashcards-container');
  container.innerHTML = '';
  const cardsSecao = flashcards.filter(card => card.secao === secaoAtual);

  // Mensagem de orientação
  const msgMenu = document.getElementById('mensagem-adicao-menu');
  if (cardsSecao.length === 0) {
    msgMenu.style.display = 'none';
  } else {
    msgMenu.style.display = 'block';
    msgMenu.textContent = 'Agora, para adicionar novos flashcards, utilize o menu ⋮ de cada cartão.';
  }

  // Botão central: só aparece se não houver nenhum flashcard
  let btnCentral = document.createElement('button');
  btnCentral.id = 'btn-central-add-flashcard';
  btnCentral.setAttribute('aria-label', 'Adicionar flashcard. Nenhum flashcard nesta seção.');
  btnCentral.textContent = 'Adicionar Flashcard';
  btnCentral.style.display = cardsSecao.length === 0 ? 'flex' : 'none';
  btnCentral.disabled = !(cardsSecao.length === 0);
  btnCentral.onclick = () => {
    secaoAddFlashcard.style.display = 'block';
    btnMostrarForm.style.display = 'none';
    form.onsubmit = defaultFormSubmit;
    document.querySelector('#add-flashcard-section h2').textContent = 'Adicionar nova curiosidade';
    secaoAddFlashcard.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  if (cardsSecao.length === 0) {
    container.appendChild(btnCentral);
  }

  cardsSecao.forEach((card, idx) => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'flashcard';
    cardDiv.tabIndex = 0;
    cardDiv.setAttribute('aria-label', `Flashcard ${idx+1}: ${card.pergunta}`);
    cardDiv.innerHTML = `
      <div class="flashcard-inner">
        <div class="flashcard-front">
          ${card.imgPergunta ? `<img src="${card.imgPergunta}" alt="Imagem curiosidade" class="img-flashcard">` : ''}
          <span>${card.pergunta}</span>
        </div>
        <div class="flashcard-back">
          ${card.imgResposta ? `<img src="${card.imgResposta}" alt="Imagem resposta" class="img-flashcard">` : ''}
          <span>${card.resposta}</span>
        </div>
      </div>
      <button class="btn-menu-flashcard" aria-label="Opções do flashcard">&#x22EE;</button>
      <div class="menu-flashcard-popup" style="display:none;">
        <button class="btn-editar-flashcard" type="button">Editar</button><br>
        <button class="btn-excluir-flashcard" type="button">Excluir</button><br>
        <button class="btn-adicionar-flashcard" type="button">Adicionar novo</button>
      </div>
    `;
    // Menu de três pontinhos
    const btnMenu = cardDiv.querySelector('.btn-menu-flashcard');
    const menu = cardDiv.querySelector('.menu-flashcard-popup');
    btnMenu.onclick = (e) => {
      e.stopPropagation();
      const isOpen = menu.style.display !== 'flex';
      document.querySelectorAll('.menu-flashcard-popup').forEach(m => m.style.display = 'none');
      if (isOpen) {
        document.body.appendChild(menu);
        menu.style.display = 'flex';
        menu.style.visibility = 'hidden';
        menu.style.top = '-9999px';
        menu.style.left = '-9999px';
        void menu.offsetWidth; // Força reflow
        // Centraliza o popup na tela
        const winW = window.innerWidth;
        const winH = window.innerHeight;
        const menuW = menu.offsetWidth;
        const menuH = menu.offsetHeight;
        const left = Math.round((winW - menuW) / 2);
        const top = Math.round((winH - menuH) / 2);
        menu.style.position = 'fixed';
        menu.style.top = `${top}px`;
        menu.style.left = `${left}px`;
        menu.style.zIndex = 2147483647;
        menu.style.visibility = 'visible';
      } else {
        cardDiv.appendChild(menu);
      }
    };
    // Editar flashcard
    menu.querySelector('.btn-editar-flashcard').onclick = () => {
      abrirEdicaoFlashcard(card, idx);
      menu.style.display = 'none';
    };
    // Excluir flashcard
    menu.querySelector('.btn-excluir-flashcard').onclick = () => {
      removerFlashcard(idx);
      menu.style.display = 'none';
    };
    // Adicionar novo flashcard
    menu.querySelector('.btn-adicionar-flashcard').onclick = () => {
      mostrarFormAdicionar();
      menu.style.display = 'none';
    };
    document.addEventListener('click', (ev) => {
      if (!cardDiv.contains(ev.target) && !menu.contains(ev.target)) {
        menu.style.display = 'none';
        cardDiv.appendChild(menu);
      }
    });
    // Flip
    cardDiv.addEventListener('click', (e) => {
      if (e.target.classList.contains('btn-menu-flashcard') || e.target.closest('.menu-flashcard-popup')) return;
      cardDiv.classList.toggle('flipped');
    });
    cardDiv.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        cardDiv.classList.toggle('flipped');
      }
    });
    container.appendChild(cardDiv);
  });
}

function mostrarFormAdicionar() {
  secaoAddFlashcard.style.display = 'block';
  btnMostrarForm.style.display = 'none';
  secaoAddFlashcard.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function abrirEdicaoFlashcard(card, idx) {
  mostrarFormAdicionar();
  document.querySelector('#add-flashcard-section h2').textContent = 'Alterar Flashcard';
  document.getElementById('pergunta').value = card.pergunta;
  document.getElementById('resposta').value = card.resposta;
  document.getElementById('selecao-secao').value = card.secao;
  // Não preencher imagens por segurança
  form.onsubmit = async (e) => {
    e.preventDefault();
    const pergunta = document.getElementById('pergunta').value.trim();
    const resposta = document.getElementById('resposta').value.trim();
    const imgPerguntaFile = document.getElementById('img-pergunta').files[0];
    const imgRespostaFile = document.getElementById('img-resposta').files[0];
    let imgPergunta = card.imgPergunta || '';
    let imgResposta = card.imgResposta || '';
    if (imgPerguntaFile) {
      imgPergunta = await getBase64(imgPerguntaFile);
    }
    if (imgRespostaFile) {
      imgResposta = await getBase64(imgRespostaFile);
    }
    let secaoEscolhida = document.getElementById('selecao-secao').value;
    if (pergunta && resposta && secaoEscolhida) {
      flashcards[idx + flashcards.findIndex(c => c.secao === secaoAtual)] = { pergunta, resposta, imgPergunta, imgResposta, secao: secaoEscolhida };
      salvarFlashcards(flashcards);
      renderizarFlashcards();
      form.reset();
      document.querySelector('#add-flashcard-section h2').textContent = 'Adicionar nova curiosidade';
      form.onsubmit = defaultFormSubmit;
      renderizarSelecaoSecao();
    }
  };
}

const defaultFormSubmit = async (e) => {
  e.preventDefault();
  const pergunta = document.getElementById('pergunta').value.trim();
  const resposta = document.getElementById('resposta').value.trim();
  const imgPerguntaFile = document.getElementById('img-pergunta').files[0];
  const imgRespostaFile = document.getElementById('img-resposta').files[0];
  const selectSecao = document.getElementById('selecao-secao');
  let imgPergunta = '';
  let imgResposta = '';
  if (imgPerguntaFile) {
    imgPergunta = await getBase64(imgPerguntaFile);
  }
  if (imgRespostaFile) {
    imgResposta = await getBase64(imgRespostaFile);
  }
  let secaoEscolhida = selectSecao.value;
  if (pergunta && resposta && secaoEscolhida) {
    flashcards.push({ pergunta, resposta, imgPergunta, imgResposta, secao: secaoEscolhida });
    salvarFlashcards(flashcards);
    renderizarFlashcards();
    form.reset();
    renderizarSelecaoSecao();
  }
};
const form = document.getElementById('add-flashcard-form');
form.onsubmit = defaultFormSubmit;

// Mostrar formulário de novo flashcard ao clicar no botão
const btnMostrarForm = document.getElementById('btn-mostrar-form-flashcard');
const secaoAddFlashcard = document.getElementById('add-flashcard-section');
btnMostrarForm.onclick = () => {
  secaoAddFlashcard.style.display = 'block';
  btnMostrarForm.style.display = 'none';
  form.onsubmit = defaultFormSubmit;
  document.querySelector('#add-flashcard-section h2').textContent = 'Adicionar nova curiosidade';
  secaoAddFlashcard.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

document.getElementById('btn-reiniciar').onclick = () => {
  if (confirm('Tem certeza que deseja reiniciar? Todos os flashcards e seções criados serão apagados.')) {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(SECOES_KEY);
    location.reload();
  }
};

renderizarSecoesBar();
renderizarSelecaoSecao();
renderizarFlashcards();

function removerFlashcard(idx) {
  if (confirm('Tem certeza que deseja excluir este flashcard?')) {
    const cardsSecao = flashcards.filter(card => card.secao === secaoAtual);
    const cardParaRemover = cardsSecao[idx];
    flashcards = flashcards.filter((card, i) => card !== cardParaRemover);
    salvarFlashcards(flashcards);
    renderizarFlashcards();
  }
}

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}
