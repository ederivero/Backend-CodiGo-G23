// Este script me servira para crear mis registros en la bd
use relaciones

// Para generar un ObjectId en mongosh usamos ObjectId() y esto nos ayudara
db.categorias.insertMany([
    {
        _id: ObjectId('6837c79c44a509c2f26c4bdb'),
        nombre:'Abarrotes'
    },
    {
        _id: ObjectId('6837c78644a509c2f26c4bd6'),
        nombre:'Verduras'
    }
])

db.productos.insertMany([
    {
        nombre:'Leche de Almendras',
        precio: 14.2,
        categoriaId: ObjectId('6837c79c44a509c2f26c4bdb')
    },
    {
        nombre:'Peregil',
        precio: 1,
        categoriaId: ObjectId('6837c78644a509c2f26c4bd6')
    },
    {
        nombre: 'Calabaza',
        fechaVencimiento: new Date('2025-06-02T00:00:00')
    }
])


// Asi podemos visualizar la informacion haciendo un 'join' entre las dos colecciones
db.productos.aggregate([
    {
        $lookup: {
            from: "categorias",
            localField: "categoriaId",
            foreignField: "_id",
            as: "categoria"
        }
    }
])