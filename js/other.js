function addNotify(text, duration=4) {
    tmp.notify.push({text: text, duration: duration});
    if (tmp.notify.length == 1) updateNotify()
}

function removeNotify() {
    if (tmp.notify.length <= 1) tmp.notify = []
    let x = []
    for (let i = 1; i < tmp.notify.length; i++) x.push(tmp.notify[i])
    tmp.notify = x
    tmp.el.notify.setVisible(false)
    updateNotify()
}

function updateNotify() {
    if (tmp.notify.length > 0) {
        tmp.el.notify.setHTML(tmp.notify[0].text)
        tmp.el.notify.setVisible(true)
        tmp.el.notify.setClasses({hide: false})
        setTimeout(_=>{
            tmp.el.notify.setClasses({hide: true})
            setTimeout(removeNotify, 750)
        }, tmp.notify[0].duration*1000)
    }
}

const POPUP_GROUPS = {
    help: {
        html: `
        <h1>质量</h1><br>
        克：1克<br>
        千克：1000克<br>
        吨：1000千克 = 1000000克<br>
        珠峰质量：1.619e14吨 = 1.619e20克<br>
        地球质量：36886967珠峰质量 = 5.972e27克<br>
        太阳质量：333054地球质量 = 1.989e33克<br>
        银河质量：1.5e12太阳质量 = 2.9835e45克<br>
        宇宙：50276520864银河质量 = 1.5e56克<br>
        多宇宙：1e1e9宇宙<br>
        `,
    },
    fonts: {
        html: `
            <button class="btn" style="font-family: 'Andy Bold';" onclick="player.options.font = 'Andy Bold'">Andy Bold</button>
            <button class="btn" style="font-family: Arial, Helvetica, sans-ser;" onclick="player.options.font = 'Arial, Helvetica, sans-ser'">Arial</button>
            <button class="btn" style="font-family: Bahnschrift;" onclick="player.options.font = 'Bahnschrift'">Bahnschrift</button>
            <button class="btn" style="font-family: Comic Sans MS;" onclick="player.options.font = 'Comic Sans MS'">Comic Sans MS</button>
            <button class="btn" style="font-family: Courier;" onclick="player.options.font = 'Courier'">Courier</button>
            <button class="btn" style="font-family: Cousine;" onclick="player.options.font = 'Cousine'">Cousine</button>
            <button class="btn" style="font-family: 'Flexi IBM VGA False';" onclick="player.options.font = 'Flexi IBM VGA False'">Flexi IBM VGA False</button>
            <button class="btn" style="font-family: Inconsolata;" onclick="player.options.font = 'Inconsolata'">Inconsolata</button>
            <button class="btn" style="font-family: 'Lucida Handwriting';" onclick="player.options.font = 'Lucida Handwriting'">Lucida Handwriting</button>
            <button class="btn" style="font-family: Monospace-Typewritter;" onclick="player.options.font = 'Monospace-Typewritter'">Monospace Typewritter</button>
            <button class="btn" style="font-family: 'Nova Mono';" onclick="player.options.font = 'Nova Mono'">Nova Mono</button>
            <button class="btn" style="font-family: 'Retron2000';" onclick="player.options.font = 'Retron2000'">Retron 2000</button>
            <button class="btn" style="font-family: 'Roboto Mono';" onclick="player.options.font = 'Roboto Mono'">Roboto Mono</button>
            <button class="btn" style="font-family: Verdana, Geneva, Tahoma, sans-serif;" onclick="player.options.font = 'Verdana, Geneva, Tahoma, sans-serif'">Verdana</button>
        `,
    },
    notations: {
        html: `
            <button class="btn" onclick="player.options.notation = 'elemental'">Elemental</button>
            <button class="btn" onclick="player.options.notation = 'eng'">Engineering</button>
            <button class="btn" onclick="player.options.notation = 'mixed_sc'">Mixed Scientific</button>
            <button class="btn" onclick="player.options.notation = 'sc'">Scientific</button>
            <button class="btn" onclick="player.options.notation = 'st'">Standard</button>
            <button class="btn" onclick="player.options.notation = 'old_sc'">Old Scientific</button>
            <button class="btn" onclick="player.options.notation = 'omega'">Omega</button>
            <button class="btn" onclick="player.options.notation = 'omega_short'">Omega Short</button>
        `,
    },
}

function addPopup(data) {
    tmp.popup.push({
        html: data.html||"",
        button: data.button||"Okay",
        callFunctions: data.callFunction?function() {removePopup();data.callFunctions()}:removePopup,
    })
    updatePopup()
}

function updatePopup() {
    tmp.el.popup.setDisplay(tmp.popup.length > 0)
    if (tmp.popup.length > 0) {
        tmp.el.popup_html.setHTML(tmp.popup[0].html)
        tmp.el.popup_button.setHTML(tmp.popup[0].button)
    }
}

function removePopup() {
    if (tmp.popup.length <= 1) tmp.popup = []
    let x = []
    for (let i = 1; i < tmp.popup.length; i++) x.push(tmp.popup[i])
    tmp.popup = x
    updatePopup()
}