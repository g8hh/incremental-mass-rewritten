var popups = []
var popupIndex = 0

function updatePopupIndex() {
    let i
    for (i = 0; i < popups.length; i++) {
        if (!popups[i]) {
            popupIndex = i
            return
        }
    }
    popupIndex = i
}

function addNotify(text, duration=3) {
    tmp.notify.push({text: text, duration: duration});
    if (tmp.notify.length == 1) updateNotify()
}

function removeNotify() {
    if (tmp.saving > 0 && tmp.notify[0]?tmp.notify[0].text="Game Saving":false) tmp.saving--
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
        setTimeout(()=>{
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
        兆宇宙：1e15多宇宙<br>
        `,
    },
    fonts: {
        // <button class="btn" style="font-family: Comic Sans MS;" onclick="player.options.font = 'Comic Sans MS'">Comic Sans MS</button>
        html: `
            <button class="btn" style="font-family: 'Andy Bold';" onclick="player.options.font = 'Andy Bold'">Andy Bold</button>
            <button class="btn" style="font-family: Arial, Helvetica, sans-ser;" onclick="player.options.font = 'Arial, Helvetica, sans-ser'">Arial</button>
            <button class="btn" style="font-family: Bahnschrift;" onclick="player.options.font = 'Bahnschrift'">Bahnschrift</button>
            <button class="btn" style="font-family: Courier;" onclick="player.options.font = 'Courier'">Courier</button>
            <button class="btn" style="font-family: Cousine;" onclick="player.options.font = 'Cousine'">Cousine</button>
            <button class="btn" style="font-family: 'Flexi IBM VGA False';" onclick="player.options.font = 'Flexi IBM VGA False'">Flexi IBM VGA False</button>
            <button class="btn" style="font-family: Inconsolata;" onclick="player.options.font = 'Inconsolata'">Inconsolata</button>
            <button class="btn" style="font-family: 'Lucida Handwriting';" onclick="player.options.font = 'Lucida Handwriting'">Lucida Handwriting</button>
            <button class="btn" style="font-family: Monospace-Typewritter;" onclick="player.options.font = 'Monospace-Typewritter'">Monospace Typewritter</button>
            <button class="btn" style="font-family: 'MS Sans Serif';" onclick="player.options.font = 'MS Sans Serif'">MS Sans Serif</button>
            <button class="btn" style="font-family: 'Nova Mono';" onclick="player.options.font = 'Nova Mono'">Nova Mono</button>
            <button class="btn" style="font-family: 'Nunito';" onclick="player.options.font = 'Nunito'">Nunito</button>
            <button class="btn" style="font-family: 'Retron2000';" onclick="player.options.font = 'Retron2000'">Retron 2000</button>
            <button class="btn" style="font-family: 'Roboto';" onclick="player.options.font = 'Roboto'">Roboto</button>
            <button class="btn" style="font-family: 'Roboto Mono';" onclick="player.options.font = 'Roboto Mono'">Roboto Mono</button>
            <button class="btn" style="font-family: 'Source Serif Pro';" onclick="player.options.font = 'Source Serif Pro'">Source Serif Pro</button>
            <button class="btn" style="font-family: Verdana, Geneva, Tahoma, sans-serif;" onclick="player.options.font = 'Verdana, Geneva, Tahoma, sans-serif'">Verdana</button>
        `,
    },
    notations: {
        html: `
            <button class="btn" onclick="player.options.notation = 'elemental'">Elemental</button>
            <button class="btn" onclick="player.options.notation = 'eng'">Engineering</button>
            <button class="btn" onclick="player.options.notation = 'inf'">Infinity</button>
            <button class="btn" onclick="player.options.notation = 'mixed_sc'">Mixed Scientific</button>
            <button class="btn" onclick="player.options.notation = 'layer'">Prestige Layer</button>
            <button class="btn" onclick="player.options.notation = 'sc'">Scientific</button>
            <button class="btn" onclick="player.options.notation = 'st'">Standard</button>
            <button class="btn" onclick="player.options.notation = 'old_sc'">Old Scientific</button>
            <button class="btn" onclick="player.options.notation = 'omega'">Omega</button>
            <button class="btn" onclick="player.options.notation = 'omega_short'">Omega Short</button>
        `,
    },
    supernova10: {
        html: `
            Congratulations!<br><br>You have becomed 10 Supernovas!<br>
            And you can manualy supernova!<br><br>
            <b>Bosons are unlocked in Supernova tab!</b>
        `,
        width: 400,
        height: 150,
        otherStyle: {
            'font-size': "14px",
        },
    },
    fermions: {
        html: `
            Congratulations!<br><br>You have beated Challenge 10!<br><br>
            <b>Fermions are unlocked in Supernova tab!</b>
        `,
        width: 400,
        height: 150,
        otherStyle: {
            'font-size': "14px",
        },
    },
    qu: {
        html() { return `
            Congratulations!<br><br>您在通过挑战12以后质量已经到达了${formatMass(mlt(1e4))}！<br><br>
            <b>You need to go Quantum!</b>
        `},
        width: 400,
        height: 150,
        otherStyle: {
            'font-size': "14px",
        },
    },
    qus1: {
        html() { return `
            <img src="images/qu_story1.png"><br><br>
            Mass has collapsed while going Quantum! It looks like evaporation! But at what cost?
        `},
        button: "Uhh Oh",
        otherStyle: {
            'font-size': "14px",
        },
    },
    qus2: {
        html() { return `
            <img src="images/qu_story2.png"><br><br>
            Don’t worry, new mechanics will arrive for you!
        `},
        button: "Cool",
        otherStyle: {
            'font-size': "14px",
        },
    },
    en: {
        html() { return `
            Congratulations!<br><br>您的质量已经到达了${formatMass(mlt(7.5e6))}！<br><br>
            <b>Entropy is unlocked in Quantum tab!</b>
        `},
        width: 400,
        height: 150,
        otherStyle: {
            'font-size': "14px",
        },
    },
}

function createPopup(text, id, txtButton) {
    if (popups.includes(id)) return

    popups[popupIndex] = id
    updatePopupIndex()

    const popup = document.createElement('div')
    popup.className = 'popup'
    popup.innerHTML = `
    <div>
        ${text}
    </div><br>
    `

    const textButton = document.createElement('button')
    textButton.className = 'btn'
    textButton.innerText = txtButton||"Ok"
    textButton.onclick = () => {
        popups[popups.indexOf(id)] = undefined
        updatePopupIndex()
        popup.remove()
    }

    popup.appendChild(textButton)

    document.getElementById('popups').appendChild(popup)
}

function createConfirm(text, id, yesFunction, noFunction) {
    if (popups.includes(id)) return

    popups[popupIndex] = id
    updatePopupIndex()

    const popup = document.createElement('div')
    popup.className = 'popup'
    popup.innerHTML = `
    <div>
        ${text}
    </div><br>
    `

    const yesButton = document.createElement('button')
    yesButton.className = 'btn'
    yesButton.innerText = "是"
    yesButton.onclick = () => {
        popups[popups.indexOf(id)] = undefined
        updatePopupIndex()
        if (yesFunction) yesFunction()
        popup.remove()
    }

    const noButton = document.createElement('button')
    noButton.className = 'btn'
    noButton.innerText = "否"
    noButton.onclick = () => {
        popups[popups.indexOf(id)] = undefined
        updatePopupIndex()
        if (noFunction) noFunction()
        popup.remove()
    }

    popup.appendChild(yesButton)
    popup.appendChild(noButton)

    document.getElementById('popups').appendChild(popup)
}

function createPrompt(text, id, func) {
    if (popups.includes(id)) return

    popups[popupIndex] = id
    updatePopupIndex()

    const popup = document.createElement('div')
    popup.className = 'popup'
    popup.innerHTML = `
    <div>
        ${text}
    </div><br>
    `

    const br = document.createElement("br")

    const input = document.createElement('input')

    const textButton = document.createElement('button')
    textButton.className = 'btn'
    textButton.innerText = "Ok"
    textButton.onclick = () => {
        popups[popups.indexOf(id)] = undefined
        updatePopupIndex()
        if (func) func(input.value)
        popup.remove()
    }

    popup.appendChild(input)

    popup.appendChild(br)

    popup.appendChild(textButton)

    document.getElementById('popups').appendChild(popup)
}