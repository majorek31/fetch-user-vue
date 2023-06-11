export interface User {
    genders: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
}