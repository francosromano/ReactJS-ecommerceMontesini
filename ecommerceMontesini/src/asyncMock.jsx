const productos = [
    {
        id:'1',
        nombre:'Ibupirac 400mg x 12 caps.Bl.',
        precio: '2280',
        categoria: 'farmacia',
        img: './public/img/Ibupirac/ibupirac400x12caps.png',
        stock:'24',
        descripcion: 'Ibuprofeno'
    },
    {
        id:'2',
        nombre:'Ibupirac Antigripal x10cmpr',
        precio: '3900',
        categoria: 'farmacia',
        img: './public/img/Ibupirac/ibupiracAntigripal.png',
        stock:'12',
        descripcion: 'Ibuprofeno'
    },
    {
        id:'3',
        nombre:'Ibupirac Fem x10cmpr',
        precio: '2060',  
        categoria: 'farmacia',
        img: './public/img/Ibupirac/ibupiracFem.png',
        stock:'9',
        descripcion: 'Ibuprofeno'
    },    {
        id:'4',
        nombre:'Ibupirac Jbe 2% x110ml',
        precio: '3530',
        categoria: 'farmacia',
        img: './public/img/Ibupirac/ibupiracJbe.png',
        stock:'10',
        descripcion: 'Ibuprofeno'
    },    {
        id:'5',
        nombre:'Ibupirac Plus Max x10cmpr',
        precio: '2500',
        categoria: 'farmacia',
        img: './public/img/Ibupirac/ibupiracPlusMax.png',
        stock:'8',
        descripcion: 'Ibuprofeno'
    }
]

export const getProductos = () =>{
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    })
}

