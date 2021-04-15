
export function TodoItem(id, contents, status="view") {
    this.id = id;
    this.text = contents;
    this.status = status;

    this.isCompleted = () => {
      return this.status === "completed";
    }

    this.complete = () => {
      this.status = this.status === "view" ? "completed" : "view";
    }

    this.changeStatus = () => {
      this.status = this.status === "view" ? "editing" : "view";
    }

    this.match = matchId => this.id === matchId;

    this.edit = value => {
      this.text = value;
      this.changeStatus();
    }
  }

export function todoItemTemplate(item) {
    return `<li class=${item.status}>
    <div class="view">
      <input class="toggle" type="checkbox" ${item.status === "completed" ? "checked": ""}/>
      <label class="label">${item.text}</label>
      <button class="destroy"></button>
    </div>
    <input type="hidden" id="item-id" value="${item.id}"/>
    <input class="edit" value="${item.text}" />
  </li>`;
}

export function createItems(items) {
  if (items === null) {
    return [];
  }
  return items.map(item => new TodoItem(item.id, item.text, item.status));
}

export const itemStatus = {

}


