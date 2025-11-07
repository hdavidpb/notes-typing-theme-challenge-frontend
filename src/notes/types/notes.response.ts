export interface Note {
    status:       string;
    _id?:          string;
    title:        string;
    tags:         string[];
    createdAt?:    string;
    updatedAt?:    string;
    description?: string;
}

export interface NoteToEdit {
    status:       string;
    _id?:          string;
    title:        string;
    tags:         string;
  createdAt?:    string;
    updatedAt?:    string;
    description?: string;
}

