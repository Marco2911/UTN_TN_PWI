const contacts = [
    {
        nombre: 'Adrian Mogus',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07EVD3GPV2-4c4cd3e0784e-192',
        status: 'activo',
    },
    {
        nombre: 'Candia',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07ESQU0R7D-ea383db445e8-512',
        status: 'activo',
    },
    {
        nombre: 'Claudia Varela',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07ESU3M13L-e4c619eb0508-512', 
        status: 'inactivo',
    },
    {
        nombre: 'Emanuel Carreira',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07F5J8NGCR-ec3380dac16d-512',
        status: 'inactivo',
    },
    {
        nombre: 'Fede Rabbia',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07ESU2R35Y-e7a6bc16ffb4-512',
        status: 'inactivo',
    },
    {
        nombre: 'Gabriel Casabona',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07EVCYRKEY-d004bc161213-512',
        status: 'inactivo',
    },
    {
        nombre: 'Gaston Ferrari',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07EVCX98H2-7b2952b1bb15-512',
        status: 'activo',
    },
    {
        nombre: 'Lio Silman',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07ESQTRNJF-20622c72af58-512',
        status: 'activo',
    },
    {
        nombre: 'Lucas Legor',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07F5J8DSQH-773273a440d1-512',
        status: 'activo',
    },
    {
        nombre: 'Luciano Leone',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07FFMZ9CM6-98d9c3a92a85-512',
        status: 'activo',
    },
    {
        nombre: 'Tomás Martinez',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07F5J8SBJM-45507abb443f-512',
        status: 'inactivo',
    },
    {
        nombre: 'Matías Gimenez',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07F9NRCBC0-5cfe19a6f509-512',
        status: 'activo',
    },
]

    const contactListHTML = document.getElementById('contact_list');
    let users = ''; 
    for (const contact of contacts) {
                let statusActivo = contact.status === 'activo'

                users = users + `
                <div class="users-container">
                    <img src = '${contact.avatar}' class="img-users">
                    ${statusActivo ?'<span><i class="bi bi-circle-fill"></i></span>' :'<span><i class="bi bi-circle"></i></span>'}
                    <h2 class="users-names">${contact.nombre}</h2>
                </div>
                `
    }

    contactListHTML.innerHTML = users