export const fixName = (name:string) => {
    name = name.charAt(0).toUpperCase() + name.slice(1);
    const basename = name.split('-')[0];

    if(name.includes('-mega')){
        return `Mega-${basename} `
    }else if(name.includes('-gmax')){
        return `${basename} Gigantamax`
    }else if(name.includes('-galar'))
        return `Alola ${basename}`
    return name
}