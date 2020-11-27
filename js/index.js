
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

            parametros.nombre = getName();
            if (parametros.nombre === '') throw 'ERR_NAME';

            parametros.direccion = getAdress();
            if (parametros.direccion === '') throw 'ERR_ADRESS';

            parametros.cantidad = getAmount();
            if (parametros.cantidad < 1) throw 'ERR_AMOUNT';

            parametros.talla = getSize();
            if (parametros.talla === '') throw 'ERR_SIZE';

            parametros.color = getColor();
            if (parametros.color === '') throw 'ERR_COLOR';

            console.log(parametros);

        } catch (e) {
            catching(e);
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
            break;
        case 'ERR_ADRESS':
            alert('La direccion es un parametro obligatorio');
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

main();

