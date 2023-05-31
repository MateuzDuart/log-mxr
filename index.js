const container = document.querySelector('.container')

fetch('./log.json').then(response => response.json())
.then(data => {

    Object.entries(data).map((dado) => {
        console.log(dado)
        const div = document.createElement('div')
        div.classList.add('containerDia')
        const h2 = document.createElement('h2')
        h2.innerHTML = `${dado[0]}`
        div.appendChild(h2)
        
        Object.entries(dado[1]).map(([chave, valor]) => {
            const p = document.createElement('p')
            p.innerHTML = `<div class="textcontainer"><span class="bold">${chave}:</span> ${valor}</div>`
            if (chave === 'veja minha tela' && valor !== 'não ativo no momento') {
            p.innerHTML = `<div class="textcontainer"><span class="bold">${chave}:</span> <a href="${valor}">Me acompanhe ao vivo</a></div>`

            }
            div.appendChild(p)
        })

        container.appendChild(div)
        
    })
    
})
.catch(error => {
  console.error('Erro:', error);
});