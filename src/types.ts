export interface IApp {
    todos: TodoItem[];
}

export type TodoItem = {
    id: string | number;
    title: string;
    isDone: boolean;
};
