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
    }
    getBtnContents = () => {
        return this.btnContents;
    }
}

export default NavbarApi