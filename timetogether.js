const timer = () => {
    let firstDay = new Date(2020, 1, 15, 20, 30, 0);

    const updateTime = () => {
        let now = new Date();
        let diff = now - firstDay;

        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((diff / (1000 * 60)) % 60);
        let seconds = Math.floor((diff / 1000) % 60);

        document.getElementById("time-days").textContent = `${days} Days...`;
        document.getElementById("time-hours").textContent = `${hours} Hours...`;
        document.getElementById("time-minutes").textContent = `${minutes} Minutes...`;
        document.getElementById("time-seconds").textContent = `${seconds} Seconds`;
    };

    updateTime(); // Initial update
    setInterval(updateTime, 1000); // Update every second
};

window.onload = timer; // Run when the page loads
