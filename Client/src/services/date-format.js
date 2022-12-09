class Daty {
    formatDate = (date) => {
        const _date = new Date(date);
        const day = _date.getDate();
        const month = _date.getMonth() + 1;
        const year = _date.getFullYear();
        return `${year}-${month}-${day}`;
    }

    formatTime = (date) => {
        const _date = new Date(date);
        const hours = _date.getHours()
        const minutes = _date.getMinutes();
        const seconds = _date.getSeconds();
        return `${hours}:${minutes}:${seconds}`;
    }

    toDateTimestamp = (date) => {
        const dateStamp = this.formatDate(date);
        const timeStamp = this.formatTime(date);
        return `${dateStamp} ${timeStamp}`
    }
}

export default Daty