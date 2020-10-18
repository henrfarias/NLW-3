const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')






Database.then(async db => {

    
    // //inserir dados na tabela
    // await saveOrphanage(db, {
    //     lat: "-27.223051",
    //     lng: "-49.660680",
    //     name: "Lar dos meninos",
    //     about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    //     whatsapp: "8787878787",
    //     images: [
    //         "https://images.unsplash.com/photo-1600712242868-18d4e92fb599?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    //         "https://images.unsplash.com/photo-1601564267677-a36d03ec2be5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    //         "https://images.unsplash.com/photo-1586458132313-b6191b25f567?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    //         "https://images.unsplash.com/photo-1580516091765-3978351061b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    //         "https://images.unsplash.com/flagged/photo-1576042854593-1f6eebfcfb0c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    //         "https://images.unsplash.com/photo-1599988288485-534984f5cd21?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    //     ].toString(),
    //     instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    //     opening_hours: "Horário de visitas Das 18h até 8h",
    //     open_on_weekends: "0"
    // })
    //consultar dados da tabela
    const selectedOrphanages = await db.all(`SELECT * FROM orphanages`)
  console.log(selectedOrphanages)

// Consultar um único orfanato
   //const orphanage = await db.all('SELECT * FROM orphanages)
    //console.log(orphanage);

    // console.log(await db.run("DELETE FROM orphanages WHERE id '4'"));
    // console.log(await db.run("DELETE FROM orphanages WHERE id '5'"));
        // function deleteOrphanage(db){
        // await db.run(`DELETE FROM orphanages WHERE id = "${id}"`)
})