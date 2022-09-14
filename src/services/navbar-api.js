class NavbarApi {
    constructor(){
        this.btnContents = [{
            id: 1,
            content: 'O firmie',
            href: '/O_firmie'
        }, {
            id: 2,
            content: 'Download',
            href: '/Download'
        }, {
            id: 3,
            content: 'Pomoc',
            href: '/Pomoc'
        }, {
            id: 4,
            content: 'Kontakt',
            href: '/Kontakt',
            zdjecie: ''
        }];

        this.images = [{
            id: 101,
            src: "LOGO-IRTEL-JPG-V3.jpg"
        }];
    }
    getBtnContents = () => {
        return this.btnContents;
    }
    getImages = () => {
        return this.images;
    }
}

export default NavbarApi