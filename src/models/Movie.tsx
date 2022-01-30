export type Movie = {
    poster: string,
    name: string,
    classification: string,
    lang: string,
    time: string,
    showTimes: ShowTimes
}

type ShowTimes = {
    place: string
    times: Times
}

type Times = {
    time: string,
    link: string
}

