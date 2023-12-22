(function() {
    const vectorContainer = document.getElementById("vector-container-en");
    
    let conditions = [];

    function updateConditions() {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 576) {
            conditions = [
                { start: 0.05, end: 0.15, hoverClass: "icon-hover-en" },
                { start: 0.20, end: 0.30, hoverClass: "icon-hover2-en" },
                { start: 0.40, end: 0.50, hoverClass: "icon-hover3-en" },
                { start: 0.60, end: 0.70, hoverClass: "icon-hover4-en" },
                { start: 0.80, end: 0.90, hoverClass: "icon-hover5-en" }
            ];
        } else if (windowWidth >= 576) {
            conditions = [
                { start: 0.04, end: 0.12, hoverClass: "icon-hover-en" },
                { start: 0.21, end: 0.28, hoverClass: "icon-hover2-en" },
                { start: 0.38, end: 0.44, hoverClass: "icon-hover3-en" },
                { start: 0.54, end: 0.62, hoverClass: "icon-hover4-en" },
                { start: 0.73, end: 0.80, hoverClass: "icon-hover5-en" }
            ];
        } else if (windowWidth >= 768) {
            conditions = [
                { start: 0, end: 0.12, hoverClass: "icon-hover-en" },
                { start: 0.13, end: 0.34, hoverClass: "icon-hover2-en" },
                { start: 0.35, end: 0.50, hoverClass: "icon-hover3-en" },
                { start: 0.51, end: 0.68, hoverClass: "icon-hover4-en" },
                { start: 0.69, end: 0.90, hoverClass: "icon-hover5-en" }
            ];
        }
    }

    window.addEventListener("load", updateConditions);
    window.addEventListener("resize", updateConditions);

    vectorContainer.addEventListener("mousemove", (event) => {
        const containerHeight = vectorContainer.clientHeight;
        const containerWidth = vectorContainer.clientWidth;
        const mouseY = event.clientY - vectorContainer.getBoundingClientRect().top;
        const mouseX = event.clientX - vectorContainer.getBoundingClientRect().left;
    
        conditions.forEach((condition) => {
            if (
                mouseY >= containerHeight * condition.start &&
                mouseY <= containerHeight * condition.end &&
                mouseX >= containerWidth * 0.44 &&
                mouseX <= containerWidth * 0.61
            ) {
                vectorContainer.classList.add(condition.hoverClass);
            } else {
                vectorContainer.classList.remove(condition.hoverClass);
            }
        });
    });
    
    vectorContainer.addEventListener("mouseleave", () => {
        conditions.forEach((condition) => {
            vectorContainer.classList.remove(condition.hoverClass);
        });
    });
})();
