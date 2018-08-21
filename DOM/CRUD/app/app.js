let rowData = [
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
    constructor(mainDomId) {
        this._renderTo = mainDomId;
    }

    run() {
        this._render();
    }

    _render() {
        const rootContainer = document.getElementById(this._renderTo);
        rootContainer.innerHTML = '';
        rootContainer.appendChild(this._buildAddButton());
        rootContainer.appendChild(this._buildTable());
        this._addListenerForAddRow();
        this._addListenerForDeleteRow();
    }

    _buildAddButton() {
        const button = new Component({
            innerText: 'Add',
            classList: ['btn', 'btn-success'],
            style: 'margin: 10px;'
        }, 'button');

        return button.render();
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

    _addListenerForAddRow() {
        const button = document.getElementsByClassName("btn-success");

        button[0].addEventListener('click',
            () => {
                const email = prompt('Type E-mail');
                const name = prompt('Type Username');
                const password = prompt('Type Password');

                rowData.push({
                    email,
                    name,
                    password
                });

                this._render();
            }
        );
    }

    _addListenerForDeleteRow() {
        const button = document.getElementsByClassName("btn-danger");

        for (let i = 0; i < button.length; i++) {
            button[i].addEventListener('click',
                () => {
                    if (rowData.length > 0) {
                        const email = button[i].parentNode.parentNode.firstChild.innerHTML;

                        rowData = rowData.filter(function(el){
                            return el.email != email;
                        });

                        this._render();
                    }
                }
            );
        }
    }
}
