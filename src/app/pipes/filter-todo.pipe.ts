import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../ngrx/models/todo.model';
import { filterType } from '../ngrx/actions/filter.action';

@Pipe({
  name: 'filterTodo'
})
export class FilterTodoPipe implements PipeTransform {

  transform(todo: Todo[], filter: filterType): Todo[] {

    switch (filter) {
      case 'complete':
        return todo.filter(item => item.done);

      case 'pending':
        return todo.filter(item => !item.done);

      default:
        return todo;
    }

  }

}
