console.log("Starting");

// Bloq Importar Funciones Externas


// Bloq variables y constantes

const formulario = document.querySelector('.formulario');
const contactos = [];


const contadores = (dato) => {
    var i, x;
    var curso = [0,0,0,0,0,0], edad = 0, sexo = [0,0], poblacion = [0,0], ubicacion=[0,0,0,0];
    var contador_matriz = [];

    for ( i = 0; i < dato.length; i++) {
        
        var valores = Object.values(dato[i]);
        
        for ( x= 0; x < 8; x++) {
            
            if (x == 2) {
                if (valores[2] == "6") {
                    curso[0] += 1;
                }
                else if (valores[2] == "7") {
                    curso[1] += 1;
                }
                else if (valores[2] == "8") {
                    curso[2] += 1;
                }
                else if (valores[2] == "9") {
                    curso[3] += 1;
                }
                else if (valores[2] == "10") {
                    curso[4] += 1;
                }else{
                    curso[5] += 1;
                }
            }

            if (x == 3) {
                if (valores[3] >= 18) {
                    edad+=1;
                }
            }
            
            if (x == 4) {
                if (valores[4] == "Masculino") {
                    sexo[0] += 1;
                }else{
                    sexo[1] += 1;
                }
            }
            
            if (x == 6) {
                if (valores[6] == "si") {
                    poblacion[0] += 1;
                }else{
                    poblacion[1] += 1;
                }
            }

            if (x == 7) {
                if (valores[7] == "La Playa") {
                    ubicacion[0] += 1;
            }
            else if(valores[7] == "Malambo"){
                    ubicacion[1] += 1;
            }     
            else if(valores[7] == "Barranquilla"){
                ubicacion[2] += 1;
            }else{
                ubicacion[3] += 1;
            }  
            }

        }

    }

    contador_matriz = [curso, edad, sexo, poblacion, ubicacion];

    return contador_matriz;
}

// Bloq funciones

const mostrarAlerta = (mensaje, error=null) => {

    const parrafo = document.createElement("p");
    parrafo.innerHTML = mensaje;
    const alerta = document.querySelector('#alerta');

    if(error){
        parrafo.classList.add("error");
    }else{
        parrafo.classList.add("correcto");
    }

    alerta.appendChild(parrafo);

    setTimeout(() => {
        parrafo.remove();
    }, 1000);


};

const validarFormulario = (e) =>{
    e.preventDefault();
    var contador = [];
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const curso = document.querySelector('#curso').value;
    const edad = document.querySelector('#edad').value;
    var sexo = document.querySelector('input[name="sexo"]:checked');
    if (sexo == null) {
        sexo = "";
    } else {
        sexo = sexo.value;
    }
    const estado = document.querySelector('#estado').value;
    const poblacion = document.querySelector('#poblacion').value;
    const ubicacion = document.querySelector('#ubicacion').value;

    if([nombre, apellido, curso, edad, sexo, estado, poblacion, ubicacion].includes("")){
        mostrarAlerta("Todos los campos son obligatorio", true);
        return;
    };

    // Paso la validacion de la
    mostrarAlerta("Datos guardados de manera exitosa");

    // Objeto Literal
    const datos = {
        nombre,
        apellido,
        curso,
        edad,
        sexo,
        estado,
        poblacion,
        ubicacion
    };

    formulario.reset();
    contactos.push(datos);

    console.table(contactos);
    
    contador = contadores(contactos);

    const respuesta6 = document.getElementById("dato_sexto");
    respuesta6.textContent = `${contador[0][0]}`;

    const respuesta7 = document.getElementById("dato_septimo");
    respuesta7.textContent = `${contador[0][1]}`;

    const respuesta8 = document.getElementById("dato_octavo");
    respuesta8.textContent = `${contador[0][2]}`;

    const respuesta9 = document.getElementById("dato_noveno");
    respuesta9.textContent = `${contador[0][3]}`;

    const respuesta10 = document.getElementById("dato_diez");
    respuesta10.textContent = `${contador[0][4]}`;

    const respuesta11 = document.getElementById("dato_once");
    respuesta11.textContent = `${contador[0][5]}`;

    const datomayor = document.getElementById("dato_mayor");
    datomayor.textContent = `${contador[1]}`;

    const datom = document.getElementById("dato_m");
    datom.textContent = `${contador[2][0]}`;
    const datof = document.getElementById("dato_f");
    datof.textContent = `${contador[2][1]}`;

    const datopoblacion = document.getElementById("dato_poblacion");
    datopoblacion.textContent = `${contador[3][0]}`;

    const datoplaya = document.getElementById("dato_playa");
    datoplaya.textContent = `${contador[4][0]}`;
    const datomalambo = document.getElementById("dato_malambo");
    datomalambo.textContent = `${contador[4][1]}`;
    const datobarranquilla = document.getElementById("dato_barran");
    datobarranquilla.textContent = `${contador[4][2]}`;
    const datosoledad = document.getElementById("dato_soledad");
    datosoledad.textContent = `${contador[4][3]}`;


};


// Bloq Prgrama Principal

// Escuchador de eventos
formulario.addEventListener("submit", validarFormulario);
