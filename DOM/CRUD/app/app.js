
const rowData = [
  {
    email: 'ast@sa.com',
    name: 'Vasia',
    password: '123',
  },
  {
    email: 'ast@sa.comsad',
    name: 'Vasiadsadsa',
    password: '123',
  },
  {
    email: 'one@more.test',
    name: 'OneMoreTest',
    password: '123',
  }
];

class App {

  constructor (mainDomId) {
    this._renderTo = mainDomId;
  }

  run() {
    const rootContainer = document.getElementById(this._renderTo);

    rootContainer.appendChild(this._buildTable());

    let button = document.getElementsByClassName("btn");

    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", function() {
            if (rowData[0]) {
                const countNodes = Object.keys(rowData[0]).length;
                let parent = this.parentNode;

                for (let i = 0; i < countNodes - 2; i++) {
                    parent = parent.parentNode;
                }

                parent.parentNode.removeChild(parent);
            }
        });
    }
  }

  _buildTable() {

    const table = new Component({classList: ['table']}, 'table');
    const thead = new Component({}, 'thead');
    const tRowHead = new Component({}, 'tr');
    tRowHead
      .addChild(new Component({innerText: "E-mail"}, 'th'))
      .addChild(new Component({innerText: "User name"}, 'th'))
      .addChild(new Component({innerText: "Password"}, 'th'))
      .addChild(new Component({innerText: "Remove"}, 'th'))
    ;
    thead.addChild(tRowHead);
    table.addChild(thead);

    rowData.forEach(elData => {
      table.addChild(new RowComponent({data: elData}, 'tr'))
    });

    return table.render();
  }
}
