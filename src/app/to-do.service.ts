import { Observable, of } from "rxjs";

export type ToDo = {
    id: number,
    name: string,
    type: "Professional" | "Personal",
    description: string,
    isDone: boolean
};

export const toDos$: Observable<ToDo[]> = of([
    {
        id:1,
        name: "To Do 1",
        type: "Professional",
        description:"",
        isDone: false
    },
    {
        id:2,
        name: "To Do 2",
        type: "Professional",
        description:"",
        isDone: false
    },
    {
        id:3,
        name: "To Do 3",
        type: "Professional",
        description:"",
        isDone: false
    },
    {
        id:4,
        name: "To Do 4",
        type: "Professional",
        description:"",
        isDone: false
    },
    {
        id:5,
        name: "To Do 5",
        type: "Professional",
        description:"",
        isDone: false
    },               
    {
        id:6,
        name: "To Do 6",
        type: "Personal",
        description:"",
        isDone: false
    },
    {
        id:7,
        name: "To Do 7",
        type: "Personal",
        description:"",
        isDone: false
    },
    {
        id:8,
        name: "To Do 8",
        type: "Personal",
        description:"",
        isDone: false
    },
    {
        id:9,
        name: "To Do 9",
        type: "Personal",
        description:"",
        isDone: false
    },
    {
        id:10,
        name: "To Do 10",
        type: "Personal",
        description:"",
        isDone: false
    }
])