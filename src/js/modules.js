//This is gonna be the class we'll use to create the projects
export class Project{
    constructor(title, description, img, url, technologies){
        this.title = title;
        this.description = description;
        this.img = img;
        this.url = url;
        this.technologies = technologies;
    }
    create(fatherElement){
        let project = document.createElement('article')
        project.classList.add('project-card', 'group', 'to-animate')
        //This variable is gonna storage the HTML, to avoid some DOM problems
        let projectHTML = `
                    <a href="${this.url}" title="Link to ${this.title}">
                        <div class="project-card__header">
                            <div class="project-card__header--hover__container"><h2 class="project-card__header--hover__container__title">go to site</h2></div>
                            <img src="./assets/icons/link.svg" alt="link icon" class="project-card__header__icon">
                            <img src="./assets/imgs/projects/${this.img}" alt="A preview of the ${this.title} project." title="A preview of the ${this.title} project." class="project-card__header__img">
                        </div>
                    </a>
                    <div class="project-card__body">
                        <h3 class="project-card__body__title">${this.title}</h3>
                        <p class="project-card__body__description">${this.description}</p>
                        <div class="project-card__body__brands">
                        `
                        this.technologies.forEach(e => {
                            projectHTML += `<img src="./assets/brands/${e.toLowerCase()}.svg" class="size-6" alt="${e}" title="${e}">`
                        });
                        projectHTML +=`
                        </div>
                    </div>
                    `
        project.innerHTML = projectHTML
        fatherElement.appendChild(project)
    }
}