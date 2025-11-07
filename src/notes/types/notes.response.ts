export interface NotesResponse {
    status:       string;
    _id:          string;
    title:        string;
    tags:         string[];
    createdAt:    Date;
    updatedAt:    Date;
    description?: string;
}

