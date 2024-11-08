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
        heading: 'Company Overview',
        title: 'Borderless Chain LLC is a pioneering platform dedicated to fostering global connections and bridging cultural divides. Our mission is to create a space where individuals from all walks of life can come together, share experiences, and build meaningful relationships.'
    }
]


// about end
