class NavbarApi {
    constructor(){
        this.btnContents = [{
            id: 1,
            content: 'O firmie'
        }, {
            id: 2,
            content: 'Download'
        }];
    }
    getBtnContents = () => {
        return this.btnContents;
    }
}

export default NavbarApi