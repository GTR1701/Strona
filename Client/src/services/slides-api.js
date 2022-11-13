class SlidesAPI {
    constructor() {
        this.slides = [
            {
                id: 1,
                href: "https://i.pinimg.com/originals/0c/91/b6/0c91b6a2f5b1277570285c55f4cff17a.png",
                text: "Caption text"
            },
            {
                id: 2,
                href: "https://img3.goodfon.com/original/1920x1080/2/53/office-workgroup-performance.jpg",
                text: "Caption text 2"
            },
            {
                id: 3,
                href: "https://wallpaperaccess.com/full/1393483.png",
                text: "Caption text 2"
            },
        ]
    }

    getSlides = () => {
        return this.slides;
    }
}

module.exports = SlidesAPI