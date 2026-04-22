// Objeto que armazena os links específicos de cada unidade
const baseDeDadosLinks = {
    'TABOÃO DA SERRA-SP': {
        doc: "https://link-documentacao-taboao.com",
        lacres: "https://link-lacres-taboao.com",
        pessoas: "https://link-pessoas-taboao.com",
        veiculos: "https://link-veiculos-taboao.com",
        intBoxes: "https://link-int-taboao.com",
        inspBoxes: "https://link-insp-taboao.com",
        seguranca: "https://link-seguranca-taboao.com"
    },
    'HORTOLANDIA-SP': {
        doc: "https://link-documentacao-hortolandia.com",
        lacres: "https://drive.google.com/drive/folders/1PbRgB7QbY9kyRDPgywkTRN4TeBtqyrWU?usp=sharing",
        pessoas: "https://drive.google.com/drive/folders/1HmVU3FQYqy82x5qGlU3tAKUHvwQtRtfZ?usp=sharing",
        veiculos: "https://drive.google.com/drive/folders/1n-OYIEnCZYtfrt3ugH9NoxW_AInVampe?usp=sharing",
        intBoxes: "https://drive.google.com/drive/folders/1v2nRyKpUWlAXNq-W7BygebLcGDSbUuXP?usp=sharing",
        inspBoxes: "https://drive.google.com/drive/folders/1pC5UEhzkZ66WGUSph5BfLw_CeWi2aY8W?usp=sharing",
        seguranca: "https://drive.google.com/drive/folders/1YUQDqLSI1PbqyZG1-Nyx9kTJa41QyNfQ?usp=sharing"
    },
    'RESENDE-RJ': {
        doc: "https://link-resende.com",
        lacres: "https://drive.google.com/drive/folders/1WIFVBUDrAQdpLEZjeJ-zLRpmU_VD2yjB?usp=sharing",
        pessoas: "https://drive.google.com/drive/folders/14FlLvBZzheQ6l5v-BYC4ubaKoe_m2AnR?usp=sharing",
        veiculos: "https://drive.google.com/drive/folders/1fG59ovL1lZsI8ZJeHRZIcY-S3T9jwNIK?usp=sharing",
        intBoxes: "https://drive.google.com/drive/folders/18UIpgy2wZaLwr8LSbpKEJ5X3kP5fNOcP?usp=sharing",
        inspBoxes: "https://drive.google.com/drive/folders/1N5xmm5nZOsledzzSsB43b5Y-eivvSHMQ?usp=sharing",
        seguranca: "https://drive.google.com/drive/folders/1zBvfQqqsfy5bkaWc07o1VN9NFryM4jdv?usp=sharing"
    },
    'HIDROLÂNDIA-GO': {
        doc: "https://link-hidrolandia.com",
        lacres: "#",
        pessoas: "#",
        veiculos: "#",
        intBoxes: "#",
        inspBoxes: "#",
        seguranca: "#"
    }
};

function openUnidade(nomeUnidade) {
    // 1. Alterna a visibilidade das telas
    document.getElementById('home-screen').classList.remove('active');
    document.getElementById('unit-screen').classList.add('active');
    
    // 2. Atualiza o título da página
    document.getElementById('current-unit-name').innerText = nomeUnidade;

    // 3. Pega os links da unidade selecionada
    const links = baseDeDadosLinks[nomeUnidade];

    // 4. Aplica os links nos botões (IDs que estão no seu HTML)
    if (links) {
        document.getElementById('link-doc').href = links.doc;
        document.getElementById('link-lacres').href = links.lacres;
        document.getElementById('link-pessoas').href = links.pessoas;
        document.getElementById('link-veiculos').href = links.veiculos;
        document.getElementById('link-int-boxes').href = links.intBoxes;
        document.getElementById('link-insp-boxes').href = links.inspBoxes;
        document.getElementById('link-seguranca').href = links.seguranca;
    }
}

function goHome() {
    document.getElementById('unit-screen').classList.remove('active');
    document.getElementById('home-screen').classList.add('active');
}
