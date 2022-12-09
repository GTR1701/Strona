class SlidesAPI {
    constructor() {
        this.slides = [
            {
                id: 1,
                href: "https://hivescotland.co.uk/wp-content/uploads/2021/03/ultrawide-office-meeting.jpg",
                text: "Wpółpraca z klientem",
                text2: "Wierzymy, że klient najlepiej zna swoje potrzeby, dlatego dopasujemy sprzęt do twojego trybu życia!",
            },
            {
                id: 2,
                href: "https://www.truspace.ca/wp-content/uploads/2018/04/employees-from-workplace-1920x1251.jpg",
                text: "Gwarancja satysfakcji",
                text2: "Nasi klienci zyskują 12 miesieczną gwarancję na serwisowany sprzęt!",
            },
            {
                id: 3,
                href: "https://www.odrl.org/wp-content/uploads/2020/02/happy-people-looking-at-each-other--scaled.jpg",
                text: "Kontakt 24/7",
                text2: "Dzięki naszej samouczącej się technologii obsługi klienta kontakt z nami jest dostępny kiedykolwiek!",
            },
        ]
    }

    getSlides = () => {
        return this.slides;
    }
}

module.exports = SlidesAPI