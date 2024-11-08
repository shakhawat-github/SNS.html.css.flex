// nav start
const getstart = document.querySelector(".getstart");
getstart.addEventListener("click", () => {
  document.querySelector(".navcollapse").style.right = "0%";
});

document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".navcollapse").style.right = "-25%";
});

// nav end

// banner start
const banner = document.querySelector("#banner");
banner.addEventListener("mousemove", (move) => {
  let imojibnr = document.querySelector(".imojibnr");
  let bnnrimg = document.querySelector(".bnr-img");

  imojibnr.style.transform = `translate(${move.clientX / 100}px , ${
    move.clientY / 100
  }px)`;
  bnnrimg.style.transform = `translate(${move.clientX / 100}px , ${
    move.clientY / 100
  }px)`;
});
// banner end

// about start

const aboutinfo = [
  {
    heading: "Company Overview",
    title:
      "<mark>Borderless Chain LLC</mark> is a pioneering platform dedicated to fostering global connections and bridging cultural divides. Our mission is to create a space where individuals from all walks of life can come together, share experiences, and build meaningful relationships.",
    img: "images/about1.jpg",
  },
  {
    heading: "Mission Statement",
    title:
      "Our mission at Borderless Chain is to <mark>empower individuals and communities</mark> by providing a safe, inclusive, and technologically advanced platform. We strive to <mark>bridge cultural gaps</mark>, foster social harmony, and <mark>promote economic development</mark> through our innovative services.",
    img: "images/about2.jpg",
  },
  {
    heading: "Future Goals",
    title:
      "As we look towards the future, our goal is to <mark>expand our reach</mark> and <mark>deepen our impact</mark> on a global scale. We aim to become the <mark>leading platform</mark> for cross-cultural connections, offering a wide range of services that cater to the diverse needs of our users. Additionally, we are committed to <mark>supporting underrepresented communities</mark> and <mark>promoting social justice</mark> through our initiatives.",
    img: "images/about3.jpg",
  },
];
const aboutBox = document.querySelector(".about-box");

aboutinfo.map((aboutitem, abouderecton) => {
  let number = abouderecton + 1;

  if (number % 2 == 0) {
    aboutBox.innerHTML += `
                    <div class="item">
                    <div class="img">
                      <img src="${aboutitem.img}" alt="about1"  class="aboutimage"/>
                    </div>
                    <div class="text abouttext">
                      <h3>${aboutitem.heading}</h3>
                      <p>${aboutitem.title}</p>
                    </div>
                  </div>`;
  } else {
    aboutBox.innerHTML += `
                    <div class="item">
                    <div class="text abouttext">
                      <h3>${aboutitem.heading}</h3>
                      <p>${aboutitem.title}</p>
                    </div>
                    <div class="img">
                      <img src="${aboutitem.img}" alt="about1"  class="aboutimage"/>
                    </div>
                  </div>`;
  }
});
const about = document.querySelector("#about");
about.addEventListener("mousemove", (aboutmove) => {
  document.querySelectorAll(".aboutimage").forEach((item) => {
    item.style.transform = `translate(${aboutmove.clientX / 200}px , ${
      aboutmove.clientY / 200
    }px)`;
  });
  document.querySelectorAll(".abouttext").forEach((itemtxt) => {
    itemtxt.style.transform = `translate(${aboutmove.clientX / 200}px , ${
      aboutmove.clientY / 200
    }px)`;
  });
});

// about end

// service start

const serviceinfo = [
  {
    image: "images/service.jpg",
    head: 'SNS & Community Site',
    send: 'svg/send.svg',
    checkbox: "svg/checkbox.svg",
    servline1:
      "<mark>Connect with People from Around the World:</mark> Our platform brings together individuals from diverse backgrounds,fostering meaningful connections and collaborations.",

    servline2: "<mark>Discover New Opportunities:</mark> Whether you're seeking business partnerships, job opportunities, or simply new friends, our matchmaking features can help you find what you're looking for.",

    servline3: "<mark>Build a Global Network:</mark> Expand your horizons and create lasting relationships with people from all corners of the globe."

  },
  {
    image: "images/service.jpg",
    head: 'SNS & Community Site',
    send: 'svg/send.svg',
    checkbox: "svg/checkbox.svg",
    servline:
      "<mark>Connect with People from Around the World:</mark> Our platform brings together individuals from diverse backgrounds,fostering meaningful connections and collaborations.",

    servline1:
      "<mark>Connect with People from Around the World:</mark> Our platform brings together individuals from diverse backgrounds,fostering meaningful connections and collaborations.",

    servline2: "<mark>Discover New Opportunities:</mark> Whether you're seeking business partnerships, job opportunities, or simply new friends, our matchmaking features can help you find what you're looking for.",

    servline3: "<mark>Build a Global Network:</mark> Expand your horizons and create lasting relationships with people from all corners of the globe."
  },
];
serviceinfo.map((servitem) => {
  document.querySelector(".service-box").innerHTML += `          
          <div class="item">
            <img src="${servitem.image}" alt="service" class="serviceimg"/>
            <a href="#"
              ><span>${servitem.head}</span
              ><img src="${servitem.send}" alt="send"
            /></a>
            <ul>
              <li>
                <img src="${servitem.checkbox}" alt="checkbox" />
                <p>${servitem.servline1} </p>
              </li>
              <li>
                <img src="svg/checkbox.svg" alt="checkbox" />
                <p>${servitem.servline2} </p>
              </li>
              <li>
                <img src="svg/checkbox.svg" alt="checkbox" />
                <p>${servitem.servline3} </p>
              </li>
            </ul>
          </div>`;
});


document.querySelector('#service').addEventListener('mousemove' , (servmove)=>{
    document.querySelectorAll(".serviceimg").forEach((serviceimg) => {
        serviceimg.style.transform = `translate(${servmove.clientX / 200}px , ${
            servmove.clientY / 200
        }px)`;
      });
})
// service end




// mission&vision starat


document.querySelector('#mivision').addEventListener('mousemove' , (mivisionmove)=>{
    document.querySelector(".mivimgbox").style.transform = `translate(${mivisionmove.clientX / 150}px , ${
        mivisionmove.clientY / 150
    }px)`;
})

// mission&vision end




// testimonial start
const testimdata =[
    {
        profilepic: 'images/test1.png',
        name: 'Alex',
        location: 'United States',
        star: 'svg/star.svg',
        text: "`I was able to find my dream job through Borderless Chain's matchmaking service. It was amazing to connect with professionals from all over the world and discover new opportunities.`"
    },
    {
        profilepic: 'images/test2.png',
        name: 'Maria',
        location: 'Brazil',
        star: 'svg/star.svg',
        text: "I met my soulmate on Borderless Chain. It's the best platform for connecting with people who share your values and interests."
        
    },
    {
        profilepic: 'images/test3.png',
        name: 'Chen',
        location: 'China',
        star: 'svg/star.svg',
        text: "`I've been using Borderless Chain to share my art with the world. It's been a great way to connect with other artists and build a community.`"
    },
    {
        profilepic: 'images/test4.png',
        name: 'David',
        location: 'Australia',
        star: 'svg/star.svg',
        text: `"Borderless Chain has helped me expand my business network and find new clients. It's a valuable tool for anyone looking to grow their career or business."`
    },
    {
        profilepic: 'images/test5.png',
        name: 'Sarah',
        location: 'United Kingdom',
        star: 'svg/star.svg',
        text: `"The Affluent Members Club has been a game-changer for my business. I've made valuable connections and learned a lot from other successful entrepreneurs."`
    },
    {
        profilepic: 'images/test6.png',
        name: 'Ahmed',
        location: 'Egypt',
        star: 'svg/star.svg',
        text: `"I've been able to support several charitable causes through the Affluent Members Club. It's a great way to give back and make a difference."`
    },
    {
        profilepic: 'images/test7.png',
        name: 'Yasmin',
        location: 'India',
        star: 'svg/star.svg',
        text: `"I've attended some amazing events through the club, including a private dinner with a world-renowned philanthropist. It's been an incredible experience."`
    },
    {
        profilepic: 'images/test3.png',
        name: 'Kenji',
        location: 'Japan',
        star: 'svg/star.svg',
        text: `"The Affluent Members Club has provided me with valuable investment opportunities and financial advice. It's a great resource for anyone looking to grow their wealth."`
    },
    {
        profilepic: 'images/test6.png',
        name: 'David',
        location: 'Australia',
        star: 'svg/star.svg',
        text: `"Borderless Chain has significantly expanded my business network. It's been invaluable for finding new clients and growing my business."`
    },
]


testimdata.forEach((testitem)=>{
    document.querySelector('.test-box').innerHTML +=`
              <div class="item">
            <div class="profile">
              <img src="${testitem.profilepic}" alt="test6" class="pic" />
              <div class="name-rate">
                <h4>
                  <span class="name"> ${testitem.name}</span>,
                  <span class="location">${testitem.location}</span>
                </h4>
                <ul class="rating">
                  <li><img src="${testitem.star}" alt="star" /></li>
                  <li><img src="${testitem.star}" alt="star" /></li>
                  <li><img src="${testitem.star}" alt="star" /></li>
                  <li><img src="${testitem.star}" alt="star" /></li>
                  <li><img src="${testitem.star}" alt="star" /></li>
                </ul>
              </div>
            </div>
            <div class="text">
              <p>${testitem.text}</p>
            </div>
          </div>
    `
})

// testimonial end




// join start

const joindata = [
    {
        joinboxtitle: 'Join Our Thriving Community',
        send: 'svg/sendblack.svg',
        correct: 'svg/right.svg',
        shorttitle1: 'Connect with Millions:',
        shortdescript1: 'Engage with a global network of like-minded individuals, expanding your professional and personal circles.',
        shorttitle2: 'Discover Opportunities:',
        shortdescript2: 'Unlock new business ventures, find friends, and access resources for personal growth.',
        shorttitle3: 'Experience Inclusivity:',
        shortdescript3: 'Be part of a supportive community that values every member and fosters a welcoming environment.'
    },
    {
        joinboxtitle: 'Join Our Exclusive Club',
        send: 'svg/sendblack.svg',
        correct: 'svg/right.svg',
        shorttitle1: 'Access Exclusive Benefits:',
        shortdescript1: 'Enjoy unique privileges and personalized support, with exclusive opportunities tailored to enhance your experience.',
        shorttitle2: 'Network with Influencers:',
        shortdescript2: 'Connect with industry leaders and build valuable relationships with pioneers.',
        shorttitle3: 'Make a Positive Impact:',
        shortdescript3: 'Contribute to meaningful causes and support initiatives that drive positive change.'
    }
]


joindata.forEach((joinlist)=>{
    document.querySelector('.join-box').innerHTML += `
              <div class="item">
            <a href="#" class="joincommunity"
              ><span>${joinlist.joinboxtitle}</span
              ><img src="${joinlist.send}" alt="sendblack"
            /></a>
            <div class="jointxt-wraper">
              <div class="txt-box">
                <div class="right"><img src="${joinlist.correct}" alt="right" /></div>
                <div class="text">
                  <h4>${joinlist.shorttitle1}</h4>
                  <p>${joinlist.shortdescript1} </p>
                </div>
              </div>
              <div class="txt-box">
                <div class="right"><img src="${joinlist.correct}" alt="right" /></div>
                <div class="text">
                  <h4>${joinlist.shorttitle2}</h4>
                  <p>${joinlist.shortdescript2}</p>
                </div>
              </div>
              <div class="txt-box">
                <div class="right"><img src="${joinlist.correct}" alt="right" /></div>
                <div class="text">
                  <h4>${joinlist.shorttitle3}</h4>
                  <p>${joinlist.shortdescript3}</p>
                </div>
              </div>
            </div>
          </div>
    `
})

document.querySelector('.join-box').children[0].style.order = '2'
document.querySelector('.join-box').children[1].style.order = '1'
document.querySelector('.join-box').children[2].style.order = '3'
document.querySelector('#join').addEventListener('mousemove' , (joinmove)=>{
    document.querySelector(".mobileitem").style.transform = `translate(${joinmove.clientX / 150}px , ${
        joinmove.clientY / 150
    }px)`;
})

// join end



// contact start
document.querySelector('#contact').addEventListener('mousemove' , (contactmove)=>{
    document.querySelector(".contactform").style.transform = `translate(${contactmove.clientX / 150}px , ${
        contactmove.clientY / 150
    }px)`;
})
// contact end



// footer start

document.querySelector('#footer').addEventListener('mousemove' , (footermove)=>{
    document.querySelector(".whitebord").style.transform = `translate(${footermove.clientX / 150}px , ${
        footermove.clientY / 150
    }px)`;
})


// footer end
