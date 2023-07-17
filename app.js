// let root = document.getElementsByClassName('root') [0];
let data = {
    fullName: 'Nick Magliano',
    position: 'Touring/Session Drummer',
    socials: [
        {
            id: 'fb',
            service: 'Facebook',
            url: 'https://www.facebook.com/nick.magliano.9/',
            icon: 'fab fa-facebook-f'
        },
        {
            id: 'ig',
            service: 'Instagram',
            url: 'https://instagram.com/_nickdrums',
            icon: 'fab fa-instagram'
        },
        {
            id: 'yt',
            service: 'YouTube',
            url: 'https://youtube.com/TheGreenSum48',
            icon: 'fab fa-youtube'
        },
        
    ],
};
let style = document.createElement('style');
let root = document.createElement('div');
let body = document.getElementsByTagName('body') [0];
let card = document.createElement('section');
let html = `
<div class="card__wrapper">
<img src="https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/189654317_10219189370664493_9077397604284675760_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EnQRZowPrTYAX9sD0uN&_nc_ht=scontent-lga3-2.xx&oh=00_AfC6lmPe1lklUXWbLzawMC6ZJ89Q84k2UMSOCMKd_ywYig&oe=64DA7481" 
class="card__user-img">
<div class="card__info">
    <span class="card__name">${data.fullName}</span>
    <span class="card__title">${data.position}</span>
</div>
<div class="card__socials">
  
    
</div>
</div>
`;
let cssStyles = `
 .card {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(50px);
}

.card__wrapper {
    height: 400px;
    padding: 20px;
    max-width: 300px;
    width: 100%;
    background: white;
    box-shadow: 0px 0px 62px 0px rgba(0,0,0,.22);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card__user-img {
    border: 2px solid #2c5eff;
    height: 70px;
    width: 70px;
    margin: 2rem 0 1.5rem;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
}



.card-info {
    margin-bottom: 2rem;
}

.card__name {
    text-align: center;
    display: block;
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: .5rem;
}

.card__title {
    display: block;
    font-size: .7rem;
    margin-bottom: 2rem;
    text-align: center;
}

.card__icon {
    width: 200px;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid #000;
    margin-bottom: .4rem;
    overflow: hidden;
    display: flex;
    justify-content: center; 
    align-items: center;
    transition: background .3s ease-in-out, color .3s ease-in-out;
    cursor: pointer; 
} 

.card__icon-box {
    width: 25px;
    display: inline-block;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card__icon-title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.card__icon--fb {
    color: #2c5cff;
    border: 1px solid #2c5cff;
}

.card__icon--fb:hover {
    background: #2c5cff;
    color: white;
}

.card__icon--ig {
    color: #773fe7;
    border: 1px solid #773fe7;
}

.card__icon--ig:hover {
    background: #773fe7;
    color: white;
}

.card__icon--yt {
    color: red;
    border: 1px solid red;
}

.card__icon--yt:hover {
    background: red;
    color: white;
} 
`;
body.prepend(root);
card.classList.add("root");
card.classList.add('card');
root.prepend(card);
root.style.cssText = ` 
background: url('https://e1.pxfuel.com/desktop-wallpaper/249/873/desktop-wallpaper-city-lights.jpg');
background-size: cover; 
background-position: center;
`;
root.prepend(style);
style.innerHTML = cssStyles;
card.innerHTML = html;
let cardSocials = card.getElementsByClassName("card__socials")[0];


data.socials.forEach((item, index) =>  {
    let tempNode = document.createElement("div");
    tempNode.classList.add('card__icon', `card__icon--${item.id}`);
    tempNode.innerHTML = `
    <span class="card__icon-box">
        <i class="${item.icon}"></i>
    </span>
    <span class="card__icon-title">
      ${item.service}
    </span>
    `;
   cardSocials.append(tempNode);
});
console.log(card);
