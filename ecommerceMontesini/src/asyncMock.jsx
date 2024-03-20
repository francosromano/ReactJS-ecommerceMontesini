const productos = [
    //FARMACIA
    {
        id: '7795381001748',
        nombre: 'Ibupirac 400mg x 12 caps.Bl.',
        precio: '2.282,62',
        categoria: 'farmacia',
        img: '/public/img/Farmacia/Ibupirac/caps400x12.png',
        stock: '24',
        descripcion: 'Para el alivio sintomático de dolores musculares, dolores de espalda, fiebre, dolores de cabeza, dolor asociado a los estados gripales, dolores menstruales, dolores de dientes, dolores producidos por artritis',
        acciones: 'Analgésico (calma el dolor) - antiinflamatorio (reduce la inflamación) - antifebril (baja la fiebre)'
    },
    {
        id: '7795381411585',
        nombre: 'Ibupirac Antigripal x10cmpr',
        precio: '3.898,22',
        categoria: 'farmacia',
        img: '/public/img/Farmacia/Ibupirac/antigripal.png',
        stock: '12',
        descripcion: 'Para el alivio sintomático de estados gripales y/o resfríos que cursen con fiebre, dolor de cabeza, dolores musculares, dolor de garganta y congestión nasal',
        acciones: 'Analgésico, antiinflamatorio y antifebril (ibuprofeno), un antialérgico (clorfeniramina), y un descongestivo (fenilefrina)'
    },
    {
        id: '7795381001656',
        nombre: 'Ibupirac Fem x10cmpr',
        precio: '2.062,69',
        categoria: 'farmacia',
        img: '/public/img/Farmacia/Ibupirac/fem.png',
        stock: '9',
        descripcion: 'El ibuprofeno tiene acción analgésica y antiinflamatoria, mientras que la homatropina, presenta acción antiespasmódica,',
        acciones: 'Analgésico. Antiinflamatorio. Antiespasmódico'
    },
    {
        id: '7795381411387',
        nombre: 'Ibupirac Jbe 2% x110ml',
        precio: `3.536,93`,
        categoria: 'farmacia',
        img: '/public/img/Farmacia/Ibupirac/2x90.png',
        stock: '10',
        descripcion: 'Para el alivio temporario de la fiebre, dolores de garganta, de dientes y de cabeza, para resfríos y estados gripales que se acompañan de fiebre y/o mal estado general',
        acciones: 'Calma el dolor, reduce la inflamación y baja la fiebre'
    },
    {
        id: '7795381411578',
        nombre: 'Ibupirac Plus Max x10cmpr',
        precio: '2.502,59',
        categoria: 'farmacia',
        img: '/public/img/Farmacia/Ibupirac/plusMax.png',
        stock: '8',
        descripcion: 'Para el alivio sintomático de dolores (de espalda, de cabeza, musculares, de dientes, articulares y menstruales), dolores asociados a estados gripales y para bajar la fiebre',
        acciones: 'Analgésico (calma el dolor) - Antifebril (baja la fiebre) - Antiinflamatorio (reduce la inflamación).'
    },

    //PERFUMERIA
    {
        id: '7791600057022',
        nombre: 'Prune I x50ml',
        precio: '15.890,00',
        categoria: 'perfumeria',
        img: '/public/img/Perfumeria/Perfumes/Prune/I.png',
        stock: '2',
        descripcion: 'Fragancia: Acorde verde. Hojas de abedul, grapefruit y ozono integran un bouquet de gardenia, muguet, peonia y sampaguita que se despliega en ambar, maderas y musk.'
    },
    {
        id: '77791600057138',
        nombre: 'Prune II x50ml',
        precio: '15.890,00',
        categoria: 'perfumeria',
        img: '/public/img/Perfumeria/Perfumes/Prune/II.png',
        stock: '1',
        descripcion: 'Fragancia: Notas de limón, menta y pimienta, armonizan con jazmín, muguet, orquí­dea, lirio de Florencia y coronan en ámbar, maderas y musk.'
    },
    {
        id: '7791600057244',
        nombre: 'Prune III x50ml',
        precio: '15.890,00',
        categoria: 'perfumeria',
        img: '/public/img/Perfumeria/Perfumes/Prune/III.png',
        stock: '1',
        descripcion: 'Fragancia: Fresias, jacinto y mandarina combinan con muguet, orquídea, rosa, sampaguita vibrando a través del ámbar y lirio de Florencia.'
    },
    {
        id: '7791600049690',
        nombre: 'Prune IV x50ml',
        precio: '15.890,00',
        categoria: 'perfumeria',
        img: '/public/img/Perfumeria/Perfumes/Prune/IV.png',
        stock: '2',
        descripcion: 'Fragancia: Sensuales frutos. Fragantes flores. Aterciopeladas maderas. Atemporal misterio en ámbar y musk.'
    },
    {
        id: '7791600039011',
        nombre: 'Prune Icon x70ml',
        precio: '22.890,00',
        categoria: 'perfumeria',
        img: '/public/img/Perfumeria/Perfumes/Prune/icon.png',
        stock: '1',
        descripcion: 'Fragancia: Una ecléctica mezcla de ingredientes vibrantes, aromas frutales cítricos con esencia de almizcles blancos florales. El fondo de la fragancia se define por flores blancas, ámbar y sándalo. Se suman la bergamota y el lemongras como notas de salida. Coronan en florales de narciso, magnolia y flor de naranjo.'
    },
    {
        id: '7791600203030',
        nombre: 'Prune Moi x60ml',
        precio: '18.190,00',
        categoria: 'perfumeria',
        img: '/public/img/Perfumeria/Perfumes/Prune/moi.png',
        stock: '1   ',
        descripcion: 'Fragancia: Cassis y Patchouli. Vainilla, jazmín y rosas. Floral. Oriental.'
    },

    //DERMOCOSMÉTICA
    {
        id: '7793742007309',
        nombre: 'Dermaglos Emul. p/Rojeces x50ml',
        precio: '18.190,00',
        categoria: 'dermocosmetica',
        img: '/public/img/Dermocosmetica/Dermaglos/rojeces.png',
        stock: '8',
        descripcion: 'Especialmente formulada para mejorar la piel propensa al enrojecimiento. Hidrata por 24 h. Atenúa rojeces, calma y descongestiona. Su pigmento color verde equilibra el tono de la piel. Previene manchas. Indicada para piel enrojecida. ',
        acciones: 'Hipoalergénica – Apto piel sensible – Testeada dermatológica y oftalmológicamente – No comedogénica – Sin TACC'
    },
    {
        id: '7793742007934',
        nombre: 'Dermaglos Gel de Limpieza Purificante x150g',
        precio: '9.579,36',
        categoria: 'dermocosmetica',
        img: '/public/img/Dermocosmetica/Dermaglos/gelLimpiezaPuri.png',
        stock: '8',
        descripcion: 'Limpia en profundidad y elimina las impurezas diarias. Hidrata por 24h, calma y suaviza la piel. Ideal para aplicar bajo la ducha. Indicado para piel normal. ',
        acciones: 'Hipoalergénico – Apto piel sensible – Testeado dermatológica y oftalmológicamente – No comedogénico – Sin TACC'
    },
    {
        id: '7793742007576',
        nombre: 'Dermaglos Crema Nutritiva de Noche x70g',
        precio: '17.088,34',
        categoria: 'dermocosmetica',
        img: '/public/img/Dermocosmetica/Dermaglos/nutritivaNoche.png',
        stock: '8',
        descripcion: 'Nutre en profundidad, hidrata por 72 h. y repara los tejidos de colágeno y elastina. Previene el envejecimiento prematuro de la piel. Indicada para piel normal a seca. ',
        acciones: 'Hipoalergénica – Apto piel sensible – Testeada dermatológicamente – Sin TACC'
    },
    {
        id: '7793742007897',
        nombre: 'Dermaglos Crema Hidratante de Día FPS 12 x50g',
        precio: '8.639,81',
        categoria: 'dermocosmetica',
        img: '/public/img/Dermocosmetica/Dermaglos/hidratanteDiaFPS12.png',
        stock: '8',
        descripcion: 'Hidrata por 72 h. y protege la piel manteniéndola suave, luminosa y saludable. Previene manchas. Indicada para piel normal a seca. ',
        acciones: 'Hipoalergénica – Apto piel sensible – Testeada dermatológicamente – Sin TACC'
    },
    {
        id: '7793742007583',
        nombre: 'Dermaglos Gel de Limpieza Purificante x150g',
        precio: '9.579,36',
        categoria: 'dermocosmetica',
        img: '/public/img/Dermocosmetica/Dermaglos/gelLimpiezaPuriMAG.png',
        stock: '8',
        descripcion: 'Elimina impurezas diarias, disminuye el exceso de sebo y ayuda a controlar el acné. Efecto refrescante. Ideal para aplicar bajo la ducha. Indicado para piel mixta a grasa. ',
        acciones: 'Hipoalergénico - Apto piel sensible - Testeado dermatológica y oftalmológicamente - No comedogénico - Sin TACC'
    },
    {
        id: '7793742007439',
        nombre: 'Dermaglos Agua Micelar x400ml',
        precio: '11.426,81',
        categoria: 'dermocosmetica',
        img: '/public/img/Dermocosmetica/Dermaglos/aguaMicelar.png',
        stock: '8',
        descripcion: 'Resuelve la rutina de limpieza en un solo paso: desmaquilla, limpia, tonifica, ilumina, hidrata y calma. Con efecto purificante. Deja la piel suave y fresca sin sensación de oleosidad. Sin alcohol. Indicada para todo tipo de piel. Presentación con más contenido, por 400 ml. ',
        acciones: 'Hipoalergénica – Apta piel sensible – Testeada dermatológica y oftalmológicamente – Sin TACC – Sin parabenos'
    },
    {
        id: '7793742108518',
        nombre: 'Dermaglos Crema Gel Ultra Hidratación x50g',
        precio: '16.679,16',
        categoria: 'dermocosmetica',
        img: '/public/img/Dermocosmetica/Dermaglos/ultraHidr.png',
        stock: '8',
        descripcion: 'Hidrata en profundidad por 24 h y previene los primeros signos del envejecimiento con efecto antioxidante. De textura ultra liviana y de rápida absorción. Indicado para todo tipo de piel. ',
        acciones: 'Hipoalergénica – Apta piel sensible – Testeada dermatológica y oftalmológicamente – Sin TACC – Sin parabenos – No testeado en animales'
    },
    {
        id: '7793742008542',
        nombre: 'Dermaglos Crema de Noche Ultra Firmeza x50g',
        precio: '23.521,84',
        categoria: 'dermocosmetica',
        img: '/public/img/Dermocosmetica/Dermaglos/ultraFirm.png',
        stock: '8',
        descripcion: 'Formulada para regenerar la piel durante la noche. Hidrata, previene y suaviza primeras líneas de expresión. Efecto reafirmante. Disminuye la pérdida de ácido hialurónico. Indicada para piel normal a mixta. ',
        acciones: 'Hipoalergénica – Apta piel sensible – Testeada dermatológica y oftalmológicamente – Sin TACC – Sin parabenos - No testeado en animales'
    },
    {
        id: '7793742008573',
        nombre: 'Dermaglos Crema de Noche Ultra Volumen x50g',
        precio: '23.521,84',
        categoria: 'dermocosmetica',
        img: '/public/img/Dermocosmetica/Dermaglos/ultraVol.png',
        stock: '8',
        descripcion: 'Formulada para regenerar la piel durante la noche. Hidrata y atenúa arrugas. Mejora la elasticidad y aporta firmeza, perdidas por la disminución de la producción de colágeno y ácido hialurónico. Indicado para piel normal a seca.',
        acciones: 'Hipoalergénica – Apta piel sensible – Testeada dermatológica y oftalmológicamente – Sin TACC – Sin parabenos - No testeado en animales'
    }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    })
}

export const getProductosbyID = (productoID) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === productoID))
        }, 1000);
    })
}

export const getProductosbyCategoria = (categoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.categoria === categoria))
        }, 1000)
    })
}