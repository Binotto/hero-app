// Códigos únicos para as direções
var DIRECAO_ESQUERDA = 1;
var DIRECAO_DIREITA = 2;
var DIRECAO_ACIMA = 0;
var DIRECAO_ABAIXO = 0;

function Heroi(context, teclado, animacao, hero) {
   this.context = context;
   this.teclado = teclado;
   this.animacao = animacao;
   this.hero = hero;
   this.x = 0;
   this.y = 0;
   this.direcao = DIRECAO_DIREITA;
}
Heroi.prototype = {
   atualizar: function() {
      if (this.teclado.pressionada(SETA_ESQUERDA) && this.x > 0) {
         this.direcao = DIRECAO_ESQUERDA;
         this.x -= 10;
      }
      if (this.teclado.pressionada(SETA_DIREITA) && 
               this.x < this.context.canvas.width - 50) {
         this.direcao = DIRECAO_DIREITA;
         this.x += 10;
      }
      if (this.teclado.pressionada(SETA_ACIMA) && this.y > 0){
         this.direcao = DIRECAO_DIREITA;
         this.y -= 10;
      }   
      if (this.teclado.pressionada(SETA_ABAIXO) &&
         this.y < this.context.canvas.height - 50){
            this.direcao = DIRECAO_ESQUERDA;
            this.y += 10;
      }
         
   },
   desenhar: function() {
      //this.context.fillRect(this.x, this.y, 20, 50);
      this.context.drawImage(this.hero, this.x, this.y, 
         this.hero.width, this.hero.height);
   },
   atirar: function() {
      var tiro = new Bola(this.context);
      tiro.x = this.x + 10;
      tiro.y = this.y + 10;
      tiro.raio = 5;
      tiro.cor = 'red';

      // Lendo a direção atual
      if (this.direcao == DIRECAO_ESQUERDA){
         tiro.velocidadeX = -20;
      }
      if(this.direcao == DIRECAO_DIREITA){
         tiro.velocidadeX = 20;
      }

      this.animacao.novoSprite(tiro);
   }
}
