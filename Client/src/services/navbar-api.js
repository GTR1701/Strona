class NavbarApi {
    constructor() {
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
        }];

        this.privBtn = [{
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
        }, {
            id: 5,
            content: 'Panel',
            href: '/Panel',
        }];
    }
    getBtnContents = () => {
        return this.btnContents;
    }
    getLogBtns = () => {
        return this.privBtn;
    }
}

export default NavbarApi