
export class Todo {

  id: number;
  text: string;
  done: boolean;

  constructor(text: string) {
    this.id = Math.random();
    this.done = false;

    this.text = text.charAt(0).toUpperCase() + text.slice(1);
  }

}
