class FramerAPI {
    constructor() {
        this.frame = [
            {
               href:"https://thumbs.dreamstime.com/b/business-meeting-people-work-computer-modern-office-team-working-project-high-resolution-business-meeting-people-work-120539108.jpg" ,
                text:"Home",
            },
            {
               href:"https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/Vd3bj2jPe/videoblocks-happy-business-man-talking-phone-at-coworking-space-young-guy-having-phone-conversation-in-open-space-office-joyful-african-man-call-mobile-phone-in-office_hkl-j8cjr_thumbnail-1080_01.png",
               text:"O firmie",
            },
            {
               href:"https://media.istockphoto.com/id/682143876/photo/small-business-working-at-the-office.jpg?s=612x612&w=0&k=20&c=eEoIjMXuWI80FPc7269Brbvh7uI3VY6esHygXp7prW0=",
               text:"Download",
            },
            {
                href:"https://www.imagebusinesssolutions.com/sites/default/files/styles/page_image/public/iStock-514583028.jpg?itok=vhWqsCup",
                text:"Pomoc",
            },
            {
                href:"https://www.westend61.de/images/0000847773pw/man-using-smart-phone-while-working-in-office-CAVF03613.jpg",
                text:"Kontakt",
            },
             
        ]
    }

    getFrames = () => {
        return this.frame;
    }
}

module.exports = FramerAPI