const createStar = () => {
    const star = document.createElement("div");
    star.classList.add("star");

    // Random position + duration
    let startPositionX = Math.random() * window.innerWidth;
    let duration = Math.random() * 3 + 2;
    let delay = Math.random() * 2;

    star.style.left = `${startPositionX}px`;
    star.style.animationDuration = `${duration}s`;
    star.style.animationDelay = `-${delay}s`;

    document.getElementById("stars-container").appendChild(star);

    // Remove after completes
    setTimeout(() => {
        star.remove();
    }, duration * 1000);
};

// Generate
setInterval(createStar, 100);