const BASE_URL = 'https://jsonplace-univclone.herokuapp.com';
const user = [
    {
      id: 1, 
      name: "Leanne Graham", 
      username: "Bret", 
      email: "Sincere@april.biz", 
      address: '....'
    },
    {
      id: 2, 
      name: "Ervin Howell", 
      username: "Antonette", 
      email: "Shanna@melissa.tv", 
      address: '....'
      }
  ]
function fetchUsers(data) {
    return fetch(`${ BASE_URL }/users`).then(function (response) {
      return  response.json()
    }).catch(function (error) {
      console.error(error)
    });
  }
  fetchUsers().then(function (data) {
    console.log(data)
    
  }).catch(function (response){
    return response.json();
  })
  function renderUser(user) {
    return $(`<div class="user-card">
    <header>
      <h2>Leanne Graham</h2>
    </header>
    <section class="company-info">
      <p><b>Contact:</b> Sincere@april.biz</p>
      <p><b>Works for:</b> Romaguera-Crona</p>
      <p><b>Company creed:</b> "Multi-layered client-server neural-net, which will harness real-time e-markets!"</p>
    </section>
    <footer>
      <button class="load-posts">POSTS BY Bret</button>
      <button class="load-albums">ALBUMS BY Bret</button>
    </footer>
  </div>`)
}

function renderUserList(userList) {
userList.filter(function(){
//i got stuck here and couldnt figure things out.
})


}
fetchUsers().then(function (data) {
    renderUserList(data);
  });