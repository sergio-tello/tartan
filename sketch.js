let num_puntos_par = 180; // ancho del tejido
let diam_punto = 2; // diámetro de los puntos
let x0_p; // centro del primer punto cuando se teja fila par para que quede centrada
let x0_i; // centro del primer punto cuando se teja fila impar
let hilos = []; // arreglo relleno con los colores de los hilos
let y0; // altura $y$ donde inicia la primera carrera
let num_carreras; // número max de carreras a tejer


function setup() {
  canvas = createCanvas(400, 400);
  x0_p = (width - (num_puntos_par * diam_punto)) / 2 + diam_punto / 2;
  x0_i = (width - (num_puntos_par * diam_punto)) / 2 + diam_punto;
  y0 = 80;
  num_carreras = 100;
  strokeWeight(diam_punto);
  canvas.mouseClicked(draw)
  //button = createButton('generar');
  //button.position(width/ 2 - 26, height - 50);
  //button.mousePressed(draw);
}

function draw() {
  background(255);
  inicializar_hilos();
  for(var i = 0; i < num_carreras; i++) {
    teje_fila_par(y0 + diam_punto * i);
    teje_fila_impar(y0 + diam_punto * (i + 0.5));
  }
  textAlign(CENTER);
  noStroke();
  text('Tartan generator - @sergiotellolee 2020', 0, 330, width);
  noLoop();
}

function teje_fila_par(y) {
  for(var i = 0; i < num_puntos_par; i++) {
    stroke(hilos[2*i]);
    point(x0_p + diam_punto * i, y);
  }
  swap_hilos_par();
}

function teje_fila_impar(y) {
  for(var i = 0; i < num_puntos_par - 1; i++) {
    stroke(hilos[2*i + 2]);
    point(x0_i + diam_punto * i, y);
  }
  swap_hilos_impar();
}

function inicializar_hilos() {
  // Inicializa los colores de los hilos aleatoriamente en escala de grises
  for(var i = 0; i < num_puntos_par * 2; i++) {
  //  if(i < num_puntos_par) {
  //    if(i % 2 === 0) {
  //      append(hilos, color(0, 0, 255));
  //    } else {
  //        append(hilos, color(255, 0, 0));
  //    } 
  //  } else {
  //    if(i % 2 === 0) {
  //      append(hilos, color(0, 0, 0));
  //    } else {
  //        append(hilos, color(125));
  //    } 
  //    
  //  }
    //c = color(int(random(255)), int(random(255)), int(random(255)));
    //append(hilos, c);
    append(hilos, int(random(255)));
  }
  
}

function swap_hilos_par() {
  // Después de tejer el orden de los hilos se intercambia
  var temporal;
  for(var i = 0; i < num_puntos_par; i++) {
    temp = hilos[2 * i];
    hilos[2 * i] = hilos[2 * i + 1];
    hilos[2 * i + 1] = temp;
  }
}

function swap_hilos_impar() {
  // Después de tejer el orden de los hilos se intercambia
  var temporal;
  for(var i = 0; i < num_puntos_par - 1; i++) {
    temp = hilos[2 * i + 2];
    hilos[2 * i + 2] = hilos[2 * i + 1];
    hilos[2 * i + 1] = temp;
  }
}
