// pre loader
// let preloader = document.querySelector('#loader');

// const preLoader = () =>{
//     console.log("hiii");
//     preloader.style.display="none";
// }

// typewriter effect
let text = " Welcome to Blogger  \n You can Create, Read, Update and Delete the blog here... "
let letter = "";
let index = 0;

(type = () => {
    letter = text.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;
    if (letter.length === text.length) {
        clearTimeout(setTimeout);
    }
    setTimeout(type, 100);
})()


//Blog  Section

const createBtn = document.querySelector("#createBtn");
const Display = document.querySelector(".Display");
const cross = document.querySelector(".fa-xmark");


createBtn.addEventListener('click', () => {
    Display.style.display = "block";
})

cross.addEventListener('click', () => {
    Display.style.display = "none";
});

function toggle() {
    const blur = document.querySelector("#blur");
    blur.classList.toggle('active');
}


// Save to Loacl Storage
const done = document.querySelector('.done');
done.addEventListener('click', (e) => {
    let blog_topic = document.querySelector('.topic');
    let blog_dis = document.querySelector('.discription');
    let topic = blog_topic.value;
    let discription = blog_dis.value;
    topic = topic.charAt(0).toUpperCase() + topic.slice(1);
    discription = discription.charAt(0).toUpperCase() + discription.slice(1);

    if (topic === "" || discription === "") {
        alert("Invalid Input!!!");
        return;
    }
    localStorage.setItem(topic.toString(), discription.toString());
    toggle();
    Display.style.display = "none";
    setData(topic, discription);
    blog_topic.value = "";
    blog_dis.value = "";
})

// show/add data on website
const setData = (topicText, discriptionText) => {
    // console.log("hlw hii");
    // console.log(topicText,discriptionText);
    $(".blogContainer").append("<div class='blogContent'><h1 class='trap'><i class='fa-solid fa-trash-can'></i>" + topicText + "</h1><p>" + discriptionText + "</p></div>");
}

// get all blogs on load
window.onload = () => {
    getAllBlogs();
}

const getAllBlogs = () => {
    Object.keys(localStorage).forEach((key, index) => {
        setData(key, localStorage.getItem(key))
    })
}
// 
// const blogContainer = document.querySelector(".blogContainer");
// for(i=0;i<localStorage.length;i++){
//     console.log(blogContainer.childNodes[i]);
// }

// Delete a blog 
// const deleteBlog = document.querySelector('.fa-trash-can');
// console.log(deleteBlog.childNodes);
// deleteBlog.addEventListener("click", () => {
//     console.log("hii");
//     const grabBlog = deleteBlog.parentNode;
//     console.log(grabBlog.textContent);
//     // console.log(localStorage.length);
//     localStorage.removeItem(grabBlog.textContent);
// })
// const deleteBlog = ()=>{
//     const deleteBlog = document.querySelectorAll('.trap .fa-trash-can');
//     const grabBlog = $(this).parentNode;
//     console.log();
//     localStorage.removeItem(grabBlog.textContent);
// }


