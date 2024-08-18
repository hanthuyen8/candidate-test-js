class Button {
    constructor(btnName, onClick) {
        this.btnName = btnName;
        this.onClick = onClick;
    }

    render() {
        const btn = document.createElement('button');
        btn.className = 'button';
        btn.innerHTML = this.btnName;
        btn.onclick = this.onClick;
        return btn;
    }
}