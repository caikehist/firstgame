// Objeto de configuração para o jogo Phaser
const config = {
    type: Phaser.AUTO, // Phaser decide qual renderizador (WebGL ou Canvas) usar
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            // gravity: { y: 200 } // Não precisamos de gravidade para Top-Down
            debug: false // Mude para true para ver os limites da colisão
        }
    },
    scene: {
        // As cenas do jogo serão adicionadas aqui
        MinhaPrimeiraCena
    }
};



// Cria uma nova instância do jogo Phaser
const game = new Phaser.Game(config);
