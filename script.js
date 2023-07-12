document.addEventListener("DOMContentLoaded", () => {
  const videoCards = document.querySelectorAll(".videoCard");
  const arrowLeft = document.querySelector(".arrowLeft");
  const arrowRight = document.querySelector(".arrowRight");
  const videoPlayer = document.getElementById("videoPlayer");
  const videoTitle = document.getElementById("videoTitle");
  const videoDescription = document.getElementById("videoDescription");

  let activeIndex = 0;

  const videos = [
    {
      title: "Movie 1",
      description: "Description of Movie 1",
      videoFile: "images/video1.mp4",
    },
    {
      title: "Movie 2",
      description: "Description of Movie 2",
      videoFile:
        "images/Marvel Studios' Avengers - Official Trailer (1080p).mp4",
    },
    {
      title: "Movie 3",
      description: "Description of Movie 3",
      videoFile:
        "images/Pirates of the Caribbean Dead Men Tell No Tales - Official Trailer (1080p).mp4",
    },
    {
      title: "Movie 4",
      description: "Description of Movie 4",
      videoFile:
        "images/KUNG FU PANDA 2 Clip - Final Fight With Shen (2011) (1080p).mp4",
    },
    {
      title: "Movie 5",
      description: "Description of Movie 5",
      videoFile:
        "images/Beauty and the Beast – US Official Final Trailer (1080p).mp4",
    },
  ];

  function updateVideoPlayer() {
    const video = videos[activeIndex];

    videoPlayer.src = video.videoFile;
    videoPlayer.play();
    videoTitle.textContent = video.title;
    videoDescription.textContent = video.description;
  }

  function handleArrowClick(event) {
    if (event.target === arrowLeft) {
      activeIndex = (activeIndex - 1 + videos.length) % videos.length;
    } else if (event.target === arrowRight) {
      activeIndex = (activeIndex + 1) % videos.length;
    }

    updateVideoPlayer();
    updateActiveCard();
  }

  function updateActiveCard() {
    videoCards.forEach((card, index) => {
      if (index === activeIndex) {
        card.classList.add("active");
      } else {
        card.classList.remove("active");
      }
    });

    if (activeIndex === 3 || activeIndex === 4) {
      document.querySelector(".videoCards").classList.add("two-columns");
    } else {
      document.querySelector(".videoCards").classList.remove("two-columns");
    }
  }

  arrowLeft.addEventListener("click", handleArrowClick);
  arrowRight.addEventListener("click", handleArrowClick);

  videoCards.forEach((card, index) => {
    card.setAttribute("data-index", index);

    card.addEventListener("click", () => {
      activeIndex = index;
      updateVideoPlayer();
      updateActiveCard();
    });
  });

  updateVideoPlayer();
  updateActiveCard();
});

let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  let slide = document.createElement("div");
  let imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });

  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
