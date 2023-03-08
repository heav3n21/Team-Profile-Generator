
const container = document.querySelector('#section')

fetch('http://localhost:3001/managers')
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {
      const div = document.createElement('div');
      div.innerHTML = `
        <div class="card topmargin " style="width: 18rem;">
      <H1 class = 'centerWord'>${element.name}</H1>
      <p class = 'centerWord'>manager</p>
      <img src="./svgs/manager.svg" class="card-img-top" alt="...">
      <div class="card-body">
          <p class="card-text">
          </p>
          <div class="card" >
              <ul class="list-group list-group-flush">
                  <li class="list-group-item" id="ID">ID: ${element.id} </li>
                  <li class="list-group-item" id="Email">Email:<a href="https://mail.google.com/mail/u/0/#inbox"> ${element.email}</a></li>
                  <li class="list-group-item" id="Depender">office: ${element.officeNum}</li>
              </ul>
          </div>
      </div>
  </div>`

      container.appendChild(div)
    });
  })
  .catch(error => console.error(error))



fetch('http://localhost:3001/engineers')
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {
      const div = document.createElement('div');
      div.innerHTML = `
        <div class="card topmargin " style="width: 18rem;">
      <H1 class = 'centerWord'>${element.name}</H1>
      <p class = 'centerWord'>engineer</p>
      <img src="./svgs/engineer.svg" class="card-img-top" alt="...">
      <div class="card-body">
          <p class="card-text">
          </p>
          <div class="card" >
              <ul class="list-group list-group-flush">
                  <li class="list-group-item" id="ID">ID: ${element.id} </li>
                  <li class="list-group-item" id="Email">Email:<a href="https://mail.google.com/mail/u/0/#inbox"> ${element.email}</a></li>
                  <li class="list-group-item" id="Depender">github:<a href="https://github.com/${element.github}"> ${element.github}</a></li>
              </ul>
          </div>
      </div>
  </div>`

      container.appendChild(div)
    });
  })
  .catch(error => console.error(error))



const hi = fetch('http://localhost:3001/interns')
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {
      const div = document.createElement('div');
      div.innerHTML = `
      <div class="card topmargin " style="width: 18rem;">
    <H1 class = 'centerWord'>${element.name}</H1>
    <p class = 'centerWord'>intern</p>
    <img src="./svgs/intern.svg" class="card-img-top" alt="...">
    <div class="card-body">
        <p class="card-text">
        </p>
        <div class="card" >
            <ul class="list-group list-group-flush">
                <li class="list-group-item" id="ID">ID: ${element.id} </li>
                <li class="list-group-item" id="Email">Email:<a href="https://mail.google.com/mail/u/0/#inbox"> ${element.email}</a></li>
                <li class="list-group-item" id="Depender">school: ${element.school}</li>
            </ul>
        </div>
    </div>
</div>`
      container.appendChild(div)
    });
  })
  .catch(error => console.error(error))


