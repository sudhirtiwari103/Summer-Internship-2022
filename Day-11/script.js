const submit = document.querySelector(".submit");
const userName = document.querySelector(".username");
const recentActivity = document.querySelector(".recentActivity");
const nullCheckerOfData = document.querySelector(".check-card");

function displayDate(dateVal){
   
    const date =  new Date(dateVal);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${days[date.getDay()]}`
}

submit.addEventListener("click", () => {
  fetch(`https://api.github.com/users/${userName.value}`)
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector("#userImg");
      img.style.display='flex';
      img.src=data.avatar_url;
      const id = document.querySelector("#userid");
      id.textContent = data.login;
      const repos = document.querySelector("#repos");
      repos.textContent = data.public_repos;
      const gists = document.querySelector("#gists");
      gists.textContent = data.public_gists;
      const following = document.querySelector("#following");
      following.textContent = data.following;
      const followers = document.querySelector("#followers");
      followers.textContent = data.followers;
        fetch(`https://api.github.com/users/${userName.value}/events`)
        .then((response) => response.json())
        .then((content) => {
            nullCheckerOfData.style.display = "none";
            for( i=0;i<10;i++){
                $(".recentActivity").append( 
                `<div class='card text-center w-50 m-auto d-flex'>
                <div class='card-header'>
                   ${ content[i].repo.name}
                </div>
                <div class='card-body'>
                    <h5 class='card-title'>${content[i].type}</h5>
                    <p class='card-text'>Related Commits</p>
                    <a href="" class='btn btn-primary'>${content[i].payload.commits[0].message}</a>
                </div>
                <div class='card-footer text-muted'>
                    ${displayDate(content[i].created_at)}
                </div>
            </div>`)
            // console.log(content[i].payload.commits[0].url);
            }
        })

    });
});
