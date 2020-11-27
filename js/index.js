let errorList = [];
let parametros = {
    nombre: '',
    direccion: '',
    cantidad: 0,
    talla: '',
    color: ''
}



const main = () => {
    document.querySelector('#enviar').addEventListener('click', () => {
        try {
            //aqui se resetean los valores por defecto que hayan podido ser alterados en un ciclo anterior
            errorList = [];//ponemos el array de los errores a 0
            document.querySelector('#nombre').style.backgroundColor = 'white';
            document.querySelector('#direccion').style.backgroundColor = 'white';

            //aqui se recogen los distintos parametros, si un parametro no es recivido correctamente,
            //se añade el mensaje de error correspondiente a nuestro array de eroores
            parametros.nombre = getName();
            if (parametros.nombre === '') errorList.push('ERR_NAME');

            parametros.direccion = getAdress();
            if (parametros.direccion === '') errorList.push('ERR_ADRESS');

            parametros.cantidad = getAmount();
            if (parametros.cantidad < 1) errorList.push('ERR_AMOUNT');

            parametros.talla = getSize();
            if (parametros.talla === '') errorList.push('ERR_SIZE');

            parametros.color = getColor();
            if (parametros.color === '') errorList.push('ERR_COLOR');

            

            //si errorList != [], lanzamos el array con las excepciones recogidas
            if(errorList.length > 0) throw errorList;

            console.log(parametros);

        } catch (e) {
            e.forEach((element)=>{
                catching(element);
            });
            
        }


    });
}



const getName = () => {
    return document.querySelector('#nombre').value;
}

const getAdress = () => {
    return document.querySelector('#direccion').value;
}

const getAmount = () => {
    return document.querySelector('#cantidad').value;
}

const getColor = () => {
    return document.querySelector('#color').value;
}

const getSize = () => {
    let tallas = document.querySelectorAll('.size');
    let talla = [...tallas].filter((element) => {
        if (element.checked) {
            return element;
        }
    });

    return talla[0].value;
}

const catching = (e) => {
    switch (e) {
        case 'ERR_NAME':
            alert('El nombre es un parametro obligatorio');
            document.querySelector('#nombre').style.backgroundColor = 'yellow';
            break;
        case 'ERR_ADRESS':
            alert('La direccion es un parametro obligatorio');
            document.querySelector('#direccion').style.backgroundColor = 'yellow';
            break;
        case 'ERR_AMOUNT':
            alert('La cantidad es un parametro obligatorio');
            break;
        case 'ERR_SIZE':
            alert('La talla es un parametro obligatorio');
            break;
        case 'ERR_COLOR':
            alert('El color es un parametro obligatorio');
            break;


    }

}

const calculatePrice = ()=>{
    
}

main();

