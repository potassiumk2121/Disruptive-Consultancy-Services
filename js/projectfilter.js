function addlocationfilter() {
    const filterButtons = document.querySelectorAll(".filter-button");
    const projectsContainer = document.getElementById("projects-container");

    if (projectsContainer) {
    const projectItems =
        projectsContainer.querySelectorAll(".project-item");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
        const selectedLocation = button.getAttribute("data-location");

        projectItems.forEach((item) => {
            const projectLocation = item.getAttribute("data-location");
            if (
            selectedLocation === "all" ||
            projectLocation === selectedLocation
            ) {
            (item).style.display = "block";
            } else {
            (item).style.display = "none";
            }
        });
        });
    });
    }
}

document.addEventListener('DOMContentLoaded', addlocationfilter);
document.addEventListener('astro:after-swap', addlocationfilter);
document.addEventListener('astro:page-load', addlocationfilter);