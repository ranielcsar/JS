const 
tela = document.getElementById('tela'),
lapis = tela.getContext('2d');

var 
tamanho = 25,
y = 10;

function criaArt(art) {  
  for (let i = 0; i < art.length; i++)
  {
     let pixel = art[i].split("");

     pixel.forEach(desenhar);

     if (pixel.length)
     {
        y += (pixel.length * 1.4);
     }   
  }
}

function desenhar(parte, index) { 
   if (parte === '#')
   {
      lapis.fillStyle = "#252525";
   } else if (parte === " ") {
      lapis.fillStyle = "transparent";
   } else {
      lapis.fillStyle = "#8bc34a";
   }

   lapis.fillRect((index + 2) * tamanho, y, tamanho, tamanho);
};

var marioLife = [
  "     ######     ",
  "   ### @@ ###   ",
  "   #   @@   #   ",
  "  ##  @@@@  ##  ",
  " ##@  @@@@  @## ",
  " # @@@@@@@@@@ # ",
  "##  @@    @@  ##",
  "#   @      @   #",
  "#   @      @   #",
  "#  @@      @@  #",
  "#@@@@@    @@@@@#",
  "#@@##########@@#",
  "####  #  #  ####",
  " ##   #  #   ## ",
  "  #          #  ",
  "  #          #  ",
  "  ##        ##  ",
  "   #        #   ",
  "   ##########   "
];

criaArt(marioLife);