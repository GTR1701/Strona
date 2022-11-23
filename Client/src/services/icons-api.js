class IconsAPI {
    constructor() {
        this.icons = [
            {
                id: 1,
                href: "https://hivescotland.co.uk/wp-content/uploads/2021/03/ultrawide-office-meeting.jpg",
                text: "Wpółpraca z klientem", 
                
            },
            {
                id: 2,
                href: "https://img3.goodfon.com/original/1920x1080/2/53/office-workgroup-performance.jpg",
                text: "Gwarancja satysfakcji",
            },
            {
                id: 3,
                href: "https://www.odrl.org/wp-content/uploads/2020/02/happy-people-looking-at-each-other--scaled.jpg",
                text: "Kontakt 24/7",
            },
        ]
    }

    getIcons = () => {
        return this.icons;
    }
}

module.exports = IconsAPI