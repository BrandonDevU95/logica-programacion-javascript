const tablaMultiplicar =(tabla)=> {
    console.log(`Tabla de Multiplicar del ${tabla}`)

    for (let i = 1; i <= 10; i++) {
        console.log(`${i} x ${tabla} = ${i*tabla}`)
    }

}

tablaMultiplicar(5)