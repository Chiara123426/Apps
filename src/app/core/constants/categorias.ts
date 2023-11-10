import { Categoria } from "../interfaces/categoria";

export const CATEGORIAS: Categoria[] = [
    {
        nombre: 'Hambuguesas',
        id: 1,
        fotoUrl: "https://img.freepik.com/fotos-premium/publicidad-comida-hamburguesa-queso-americana-flotante-sobre-fondo-blanco_145671-39.jpg?w=2000",
        productos: [{
            nombre: 'Cheese Burger',
            precio: 2500,
            descripcion: 'Nuestra sencilla hamburguesa con queso clásica comienza con un patty de hamburguesa de 100% carne de res condimentado con una pizca de sal y pimienta, ademas contiene 2 fetas de queso chedar, acompañada con papas fritas.',
            imagen: 'https://codigoqr.com.ar/temple-palermo/img/2023/burgers/CHEESE.jpg'
        },
        {
            nombre: 'Bacon Burger',
            precio: 3000,
            descripcion: 'Una sabor especial, nuestra hamburguesa con queso, bacon y una salsa espesial de hierbas, que le otorga el toque ahumado ideal , acompañada con papas fritas.',
            imagen: 'https://codigoqr.com.ar/temple-palermo/img/2023/burgers/BACON.jpg'
        }]
    },
    {
        nombre: 'Pizzas',
        id: 2,
        fotoUrl: "https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/07/19/11/yard-sale-pizza-1907.jpg?width=1200&height=1200&fit=crop",
        productos: [{
            nombre: 'Margarita',
            precio: 3000,
            descripcion: 'Una de las pizzas mas populares del mundo,La pizza margarita (en italiano pizza Margherita) es una pizza napolitana elaborada con tomate, mozzarella, albahaca fresca, sal y aceite.',
            imagen: 'https://img2.rtve.es/i/?w=1600&i=1645806144885.jpg'
        },
        {
            nombre: 'La Americana',
            precio: 3400,
            descripcion: 'La tipica pizza estadounidense, elaborada con tomate, mozzarella y pepperoni.',
            imagen: 'https://badun.nestle.es/imgserver/v1/80/1290x742/4e1d95a24dd4-pizza-pepperoni.jpg'
        }

        ]
    },
    {
        nombre: 'Postres',
        id: 3,
        fotoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3PsWMQgkerbzNNwfMRaXoUnDXb7_P5pkdow&usqp=CAU",
        productos: [
            {
            nombre: 'Volcan de chocolate',
            precio: 2000,
            descripcion: 'Extra sabor, una deliciosa porción de bizcocho de chocolate con chocolate fundido caliente en el interior, acompañado por fruta de la estacion. ',
            imagen: 'https://www.recetasnestle.com.ar/sites/default/files/srh_recipes/c880c5651a6e82065962cf3bc20efaef.jpg'
        },
        {
            nombre: 'Franui',
            precio: 3400,
            descripcion: 'Son deliciosas frambuesas provenientes de El Bolsón, Patagonia Argentina, bañadas en dos chocolates: chocolate con leche y chocolate blanco o chocolate amargo y chocolate blanco.',
            imagen: 'https://valenciaplaza.com/public/Image/2021/4/franui-partido_NoticiaAmpliada.jpg'
        }
        ]
    },
    {
        nombre: 'Bebidas',
        id: 4,
        fotoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbICAndB99Dv47JRdH83KaDTR9ASUW9HBKQ&usqp=CAU",
        productos: [
            {
            nombre: 'Agua sin Gas',
            precio: 500,
            descripcion: '.',
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS43aOJshGganhqtO0UPcyAsrl125JgbWp_b7AaDGxvAmPDwQWW9Bn9sTq3r5qIPQWuyq8&usqp=CAU'
        },
        {
            nombre: 'Coca Cola ',
            precio: 600,
            descripcion: 'Coca Cola comun, Coca Cola Zero ',
            imagen: 'https://static.vecteezy.com/system/resources/previews/016/800/585/non_2x/kazakhstan-kostanay-may-15-2022-glass-bottle-coca-cola-classic-on-white-background-free-photo.jpg'
        },
        {
            nombre: 'Sprite',
            precio: 600,
            descripcion: 'Sprite comun,Sprite Zero ',
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv4QP9414Nc1prZWc0gZYra8N5jIRQ1pR7Pg&usqp=CAU'
        }
        ]
    }
]