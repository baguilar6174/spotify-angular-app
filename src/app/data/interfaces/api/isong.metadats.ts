export interface ISong {
    _id:      number | string;
    name:     string;
    album:    string;
    cover:    string;
    artist?:   Artist;
    duration?: Duration;
    url:      string;
}

export interface Artist {
    name:        string;
    nickname:    string;
    nationality: string;
}

export interface Duration {
    start: number;
    end:   number;
}