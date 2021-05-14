


module.exports = { getAll, getOne, deleteOne, putOne, patchOne, postOne }


function getAll(req, res) {
    return res.json(
        [{
              name: "Luis",
              email: "luis@squaads.com",
              contacted: true,
              photoURL: "https://uifaces.co/our-content/donated/gPZwCbdS.jpg"
            },
            {
              name: "Manolo",
              email: "manolo@squaads.com",
              contacted: true,
              photoURL: "https://randomuser.me/api/portraits/men/36.jpg"
            },
            {
              name: "Luisa",
              email: "luisa@squaads.com",
              contacted: true,
              photoURL: "https://uifaces.co/our-content/donated/3799Ffxy.jpeg"
            }]
    )
}

function getOne(req, res) {
    return res.send('ok')
}

function deleteOne(req, res) {
    return res.send('ok')
}

function putOne(req, res) {
    return res.send('ok')
}

function patchOne(req, res) {
    return res.send('ok')
}

function postOne(req, res) {
    return res.send('ok')
}