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
