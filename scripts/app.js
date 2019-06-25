document.addEventListener("DOMContentLoaded", function() {

  const submitForm = document.querySelector('#search-form')

  function getRepos(username) {
    fetch(`https://api.github.com/users/${username}/repos`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let repoContainer = document.querySelector('#repo-container')
      repoContainer.innerHTML = ''
      repoContainer.innerHTML = `
        <header>
          <h2>Showing repos from ${username}</h2>
        </header>
          <main class="repo-list">
            <div class="row repo">
              ${data.map(repo => {
                console.log(repo);
                return `
                <h3>
                  <a href=${repo.url}>
                  ${repo.name}
                  </a>
                </h3>
                <p><strong>Description:</strong>
                  <span>${repo.description}</span>
                </p>
                <p><strong>Owner:</strong>
                  <span>${repo.owner.login}</span>
                </p>
                <div class="stats">
                  <div class="col-sm-1 stars">
                    <svg class="icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 14 16" width="14">
                      <use xlink:href="./svg/sprites.svg#star"></use>
                    </svg>
                    <span>1</span>
                    </div>
                      <div class="col-sm-1 forks">
                        <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 10 16" width="10">
                          <use xlink:href="./svg/sprites.svg#fork"></use>
                        </svg>
                      <span>3</span>
                    </div>
                  </div>
                </div>
                </main>
                <hr>
                `
              }).join('')}
          <footer>
            <p>&copy; Ainur 2017</p>
          </footer>
        `
    })
  }

  submitForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let username = document.querySelector('#username').value
    getRepos(username)
  })

});
