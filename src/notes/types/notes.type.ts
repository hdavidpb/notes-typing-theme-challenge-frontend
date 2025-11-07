
export type Notes = {
    [key:number]:Note
}

export interface Note {
    id:number;
    title:string;
    tags:string;
    content:string;
    status?:'active' | 'archived';
    updatedAt?:number;
}



