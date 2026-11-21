const produtos = [
    // --- COLARES ---
    {
        id: 1,
        categoria: "colar",
        nome: "Colar de Pérolas",
        descricao: "Colar de pérolas com fecho em prata 925, perfeito para ocasiões especiais.",
        preco: 150.00,
        imagem: "assets/colarperolas.png"
    },
    {
        id: 2,
        categoria: "colar",
        nome: "Colar Ponto de Luz",
        descricao: "Corrente veneziana em prata 925 com zircônia cristalina de alto brilho.",
        preco: 135.00,
        imagem: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        categoria: "colar",
        nome: "Colar Choker Elos Dourados",
        descricao: "Choker moderna banhada a ouro 18k com elos achatados e fecho extensor.",
        preco: 189.90,
        imagem: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        categoria: "colar",
        nome: "Colar Pingente Coração",
        descricao: "Colar delicado com pingente minimalista em ouro rosé 18k.",
        preco: 220.00,
        imagem: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80"
    },

    // --- ANÉIS ---
    {
        id: 5,
        categoria: "anel",
        nome: "Anel Solitário Ouro 18k",
        descricao: "Anel clássico em ouro 18k com acabamento polido e design minimalista.",
        preco: 480.00,
        imagem: "https://cdn.awsli.com.br/2500x2500/2452/2452519/produto/166991521/whatsapp-image-2025-11-07-at-15-19-18-s890r5x23a.jpeg"
    },
    {
        id: 6,
        categoria: "anel",
        nome: "Anel Aparador Cravejado",
        descricao: "Meia aliança cravejada com microzircônias para compor com outros anéis.",
        preco: 175.00,
        imagem: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 7,
        categoria: "anel",
        nome: "Anel Orgânico Dourado",
        descricao: "Design contemporâneo com curvas fluidas e banho em ouro 18k.",
        preco: 145.00,
        imagem: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 8,
        categoria: "anel",
        nome: "Anel Esmeralda",
        descricao: "Anel sofisticado em prata 925 com pedra verde lapidada em gota.",
        preco: 260.00,
        imagem: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 15,
        categoria: "anel",
        nome: "Anel Pedra Lua",
        descricao: "Anel artesanal em prata envelhecida com pedra natural de reflexo azulado.",
        preco: 215.00,
        imagem: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 16,
        categoria: "anel",
        nome: "Aliança Lisa Clássica",
        descricao: "Aliança anatômica em ouro amarelo 18k com polimento espelhado.",
        preco: 390.00,
        imagem: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&w=800&q=80"
    },

    // --- PULSEIRAS ---
    {
        id: 9,
        categoria: "pulseira",
        nome: "Pulseira Prata 925",
        descricao: "Pulseira delicada em prata 925 com detalhes geométricos e pedra natural.",
        preco: 195.00,
        imagem: "https://ricchezzaprata.bwimg.com.br/ricchezzaprata/produtos/pulseira-prata-927-luxo-circulos-barras-pedra-natural-04060692-02-20251008150735-1759951565.5868.jpg"
    },
    {
        id: 10,
        categoria: "pulseira",
        nome: "Bracelete Liso Ouro 18k",
        descricao: "Bracelete rígido minimalista com trava oculta e brilho espelhado.",
        preco: 240.00,
        imagem: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 11,
        categoria: "pulseira",
        nome: "Pulseira Riviera Cristal",
        descricao: "Pulseira clássica cravejada com zircônias brancas em toda a extensão.",
        preco: 290.00,
        imagem: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 12,
        categoria: "pulseira",
        nome: "Pulseira Elo Português",
        descricao: "Pulseira tradicional em prata 925 ideal para adicionar berloques.",
        preco: 165.00,
        imagem: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=800&q=80"
    }
];

let carrinho = [];

try {
    carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    if (!Array.isArray(carrinho)) {
        carrinho = [];
    }
} catch (erro) {
    carrinho = [];
}

function moeda(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

// PRODUTOS CATEGORIAS
function mostrarProdutos() {
    produtos.forEach(function(produto) {
        let area = document.getElementById(`produtos-${produto.categoria}`);

        if (area) {
            area.innerHTML += `
                <div class="produto">
                    <div class="imagemProd">
                        <img src="${produto.imagem}" alt="${produto.nome}">
                    </div>
                    <div class="descricaoProd">
                        <h2 class="textoPrincipal"> ${produto.nome} </h2>
                        <p class="textoDescricao"> ${produto.descricao} </p>
                        <p class="textoPreco"> ${moeda(produto.preco)} </p>
                        <button class="botaoComprar" onclick="adicionar(${produto.id})"> Comprar </button>
                    </div>
                </div>
            `;
        }
    });
}

// ADICIONAR AO CARRINHO
function adicionar(id) {
    let produto = produtos.find(function(p) {
        return p.id === id;
    });

    if (!produto) return;

    let item = carrinho.find(function(p) {
        return p.id === id;
    });

    if (item) {
        item.quantidade++;
        item.imagem = produto.imagem;
    } else {
        carrinho.push({
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            imagem: produto.imagem,
            quantidade: 1
        });
    }

    alert("Produto adicionado com sucesso! Continue comprando.");
    salvarCarrinho();
    mostrarCarrinho();
}

// SALVAR NO LOCALSTORAGE
function salvarCarrinho() {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

// MOSTRAR O CARRINHO
function mostrarCarrinho() {
    let containerCarrinho = document.querySelector(".carrinho");
    let lista = document.getElementById("listaCarrinho");
    if (!lista) return; 

    lista.innerHTML = "";
    let subtotalGeral = 0;

    if (carrinho.length === 0) {
        if (containerCarrinho) containerCarrinho.classList.add("carrinhoVazio");

        lista.innerHTML = `
            <p class="mensagem">
                Seu carrinho está vazio!
            </p>
        `;
        } else {
            // Remove a classe quando houver produtos
        if (containerCarrinho) containerCarrinho.classList.remove("carrinhoVazio");
         }



    
    carrinho.forEach(function(item) {
        let subtotal = item.preco * item.quantidade;
        subtotalGeral += subtotal;

        let produtoOriginal = produtos.find(function(p) {
            return p.id === item.id;
        });
        let imagemSrc = item.imagem || (produtoOriginal ? produtoOriginal.imagem : "assets/colarperolas.png");

        lista.innerHTML += `
            <div class="item">
                <div class="itemImg"> 
                    <img src="${imagemSrc}" alt="${item.nome}" class="imagemCarrinho">
                </div>
                <div class="infoItem">
                    <strong>${item.nome}</strong>
                    <p>${moeda(item.preco)} cada</p>
                    <p>Subtotal: ${moeda(subtotal)}</p>
                     <div class="quantidade">
                    <button class="menos" onclick="alterarQuantidade(${item.id}, -1)">-</button>
                    <strong>${item.quantidade}</strong>
                    <button class="mais" onclick="alterarQuantidade(${item.id}, 1)">+</button>
                    <div class="embalar">
                        <input type="checkbox" name="embalar" id="embalar"> 
                        <label for="embalar">
                            <img src="assets/embalagem.png" alt="embalagem para presente"> 
                            <span class="textoEmbalar">Embalar para presente</span>
                        </label>
                    </div>
                    </div>
                    
                </div>

                <div class="btnRemover">
                        <button class="remover" onclick="remover(${item.id})">
                            <img src="assets/delete.png">
                        </button>
                    </div>
            </div>
            
            <hr>
        `;
    });

    

    // VERIFICA SE O CEP TEM 8 DÍGITOS ANTES DE MOSTRAR O FRETE
    let campoCep = document.getElementById("cep");
    let cep = campoCep ? campoCep.value : "";

    let valorFrete = 0;
    let valorDesconto = 0;

    if (subtotalGeral > 0 && cep.length === 8) {
        valorFrete = 10;
        valorDesconto = valorFrete;
    }

    let totalFinal = subtotalGeral + valorFrete - valorDesconto;

    // ATUALIZAR VALORES NA TELA
    let subtotal = document.getElementById("subtotal");
    let frete = document.getElementById("frete");
    let desconto = document.getElementById("desconto");
    let total = document.getElementById("total");

    if (subtotal) subtotal.textContent = moeda(subtotalGeral);
    if (frete) frete.textContent = moeda(valorFrete);
    if (desconto) desconto.textContent = "-" + moeda(valorDesconto);
    if (total) total.textContent = moeda(totalFinal);
}

let freteAtivo = false;

// FUNÇÃO EXCLUSIVA PARA O ENVIO/CÁLCULO DO CEP
function calcularCep() {
    let campoCep = document.getElementById("cep");
    if (!campoCep) return;

    let cep = campoCep.value.replace(/\D/g, "");

    // Remove aviso anterior, se existir
    let infoCepAntiga = document.getElementById("infoCep");
    if (infoCepAntiga) {
        infoCepAntiga.remove();
    }

    if (cep.length !== 8) {
        freteAtivo = false;
        alert("Digite um CEP válido com 8 números!");
        mostrarCarrinho();
        return;
    }

    freteAtivo = true;

    // Cria a div logo após o input #cep
    campoCep.insertAdjacentHTML("beforebegin", `
        <div id="infoCep" class="avisoCep">
            <p> Você ganhou <b> frete gratis </b>! </p>
            <p>Entrega para o CEP ${cep}: 3 a 5 dias úteis</p>
        </div>
    `);

    mostrarCarrinho();
}


// ALTERAR QUANTIDADE
function alterarQuantidade(id, valor) {
    let item = carrinho.find(function(p) {
        return p.id === id;
    });

    if (item) {
        item.quantidade += valor;

        if (item.quantidade <= 0) {
            remover(id);
            return;
        }
    }

    salvarCarrinho();
    mostrarCarrinho();
}

// REMOVER PRODUTO
function remover(id) {
    carrinho = carrinho.filter(function(item) {
        return item.id !== id;
    });

    salvarCarrinho();
    mostrarCarrinho();
}

// LIMPAR O CARRINHO
function limparCarrinho() {
    if (confirm("Deseja realmente limpar o carrinho?")) {
        carrinho = [];
        salvarCarrinho();
        mostrarCarrinho();
    }
}

// FINALIZAR COMPRA
function finalizarCompra() {
    if (carrinho.length === 0) {
        alert("Adicione produtos antes de finalizar!");
        return;
    }

    let cep = document.getElementById("cep").value;

    if (cep.length !== 8) {
        alert("Confira seu cep antes de finalizar a compra!");
        return;
    } 

    let valorFrete = 10;
    let valorDesconto = valorFrete;

    let subtotalGeral = 0;
    carrinho.forEach(function(item) {
        subtotalGeral += item.preco * item.quantidade;
    });

    let totalFinal = subtotalGeral + valorFrete - valorDesconto;

    alert(
        "COMPRA FINALIZADA!\n\n" +
        "Total da compra: " + moeda(totalFinal) + "\n" +
        "CEP de entrega: " + cep +
        "\n\nObrigado pela preferência!"
    );

    carrinho = [];
    document.getElementById("cep").value = "";
    salvarCarrinho();
    mostrarCarrinho();
}

// INICIALIZAR O SISTEMA
mostrarProdutos();
mostrarCarrinho();