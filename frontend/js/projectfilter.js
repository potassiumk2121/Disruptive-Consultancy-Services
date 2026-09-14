function addlocationfilter() {
    const filterInputs = document.querySelectorAll(".location-filter-input");
    const clearButton = document.querySelector(".filter-clear");
    const projectsContainer = document.getElementById("projects-container");

    if (!projectsContainer || !filterInputs.length) return;
    if (projectsContainer.dataset.filterBound === "true") return;
    projectsContainer.dataset.filterBound = "true";

    const projectItems = [...projectsContainer.querySelectorAll(".project-item")];
    const resultCount = document.querySelector(".project-result-count");

    const updateProjects = () => {
        const selectedLocations = [...filterInputs]
            .filter((input) => input.checked)
            .map((input) => input.value);
        let visibleCount = 0;

        projectItems.forEach((item) => {
            const projectLocation = item.getAttribute("data-location");
            if (!selectedLocations.length || selectedLocations.includes(projectLocation)) {
                item.style.removeProperty("display");
                visibleCount += 1;
            } else {
                item.style.setProperty("display", "none", "important");
            }
        });

        if (resultCount) {
            resultCount.textContent = `${visibleCount} ${visibleCount === 1 ? "project" : "projects"}`;
        }
    };

    filterInputs.forEach((input) => input.addEventListener("change", updateProjects));
    clearButton?.addEventListener("click", () => {
        filterInputs.forEach((input) => {
            input.checked = false;
        });
        updateProjects();
    });

    updateProjects();
}

document.addEventListener('DOMContentLoaded', addlocationfilter);
document.addEventListener('astro:after-swap', addlocationfilter);
document.addEventListener('astro:page-load', addlocationfilter);