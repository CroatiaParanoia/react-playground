export interface TodoItem {
  isComplete: boolean;
  label: string;
  key: string;
}
export interface PageProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  dataSource: TodoItem[];
  setComplete: (key: string) => void;
  setUnComplete: (key: string) => void;
  deleteTodoItem: (key: string) => void;
  addTodoItem: (label: string) => void;
  updTodoItem: (key: string, label: string) => void;
  toggleComplete: (key: string) => void;
}
