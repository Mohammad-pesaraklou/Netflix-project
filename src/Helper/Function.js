const shorten = (title) => {
    const name = title.split(" ")
    const newName = `${name[0]} ${name[1]}`
    return newName
}

const shortenDes = (str,num) => {
    if(str.length > num){
       return str.slice(0, num) + '...';
    }else{
        return str;
    }
}

export {shorten,shortenDes}