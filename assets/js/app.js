var contenedor = document.getElementsByClassName("container")[0];
var cancha = document.createElement("div");
cancha.setAttribute("id","cancha");
var areaLinea = document.createElement("div");
areaLinea.setAttribute("id","lineaArea");
var arco1 = document.createElement("div");
arco1.setAttribute("id","arcoDerecho");
var arco2 = document.createElement("div");
arco2.setAttribute("id","arcoIzquierdo");
var circulo = document.createElement("div");
circulo.setAttribute("id","circulo");


contenedor.appendChild(cancha);
cancha.appendChild(areaLinea);
areaLinea.appendChild(arco1);
areaLinea.appendChild(arco2);
areaLinea.appendChild(circulo);
