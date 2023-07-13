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
      title: "Avengers: Infinity War",
      description:
        "The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan.",
      videoFile: "images/video1.mp4",
    },
    {
      title: "The Amazing Spiderman 2",
      description:
        "Spider-Man embarks on a mission to protect his loved ones when OsCorp, owned by his childhood friend Harry Osborn, unleashes a slew of genetically-modified villains against him.",
      videoFile: "images/video2.mp4",
    },
    {
      title: "Pirates of the Caribbean: Dead Men Tell No Tales",
      description:
        "To break the curse of Flying Dutchman, Captain Jack Sparrow and Henry Turner embark on a mission to find the Trident of Poseidon. They also try to stop Captain Salazar who intends to rule the seas.",
      videoFile: "images/video3.mp4",
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

  // Add event listener for the 'ended' event of the video player
  videoPlayer.addEventListener("ended", () => {
    // Increment the active index to play the next video
    activeIndex = (activeIndex + 1) % videos.length;
    updateVideoPlayer();
    updateActiveCard();
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
