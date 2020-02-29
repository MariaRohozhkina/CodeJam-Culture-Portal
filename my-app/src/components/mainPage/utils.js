const chooseDate = () => {
    const date = new Date();
    const numOfTheAuthor = date.getDay();
    return numOfTheAuthor;
}

export default chooseDate;