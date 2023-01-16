const QCs = {
    active() { return player.qu.qc.active || player.qu.rip.active || CHALS.inChal(14) || CHALS.inChal(15) || player.dark.run.active },
    getMod(x) { return CHALS.inChal(15) ? [10,5,10,10,10,10,10,10][x] : player.dark.run.active ? 8 : CHALS.inChal(14) ? 5 : player.qu.rip.active ? BIG_RIP_QC[x] : player.qu.qc.mods[x] },
    incMod(x,i) { if (!this.active()) player.qu.qc.mods[x] = Math.min(Math.max(player.qu.qc.mods[x]+i,0),10) },
    enter() {
        if (!player.qu.qc.active) {
            let is_zero = true
            for (let x = 0; x < QCs_len; x++) if (this.getMod(x)>0) {
                is_zero = false
                break
            }
            if (is_zero) return
        }
        if (player.qu.qc.active) CONFIRMS_FUNCTION.enterQC()
        else createConfirm("您确定要进入量子挑战吗？这将强制前往量子！",'qc',CONFIRMS_FUNCTION.enterQC)
    },
    names: ["黑矮星","时间异常","阶层超量","熔化作用","强力催化","超级挑战","空间膨胀","极端折算"],
    ctn: [
        {
            eff(i) {
                return [1-0.03*i,2/(i+2)]
            },
            effDesc(x) { return `^${format(x[0])} to exponent from All-Stars resources.<br>^${format(x[1])} to strength of star generators.` },
        },{
            eff(i) {
                let x = E(2).pow(i**2)
                return x
            },
            effDesc(x) { return `/${format(x,0)} to pre-Quantum global speed.` },
        },{
            eff(i) {
                let x = i**1.5*0.15+1
                return x
            },
            effDesc(x) { return `x${format(x)} to requirements of any Fermions.` },
        },{
            eff(i) {
                let x = 0.9**(i**1.25)
                return x
            },
            effDesc(x) { return `^${format(x)} to multiplier from Bosonic & Radiation resources.` },
        },{
            eff(i) {
                let x = 0.8**(i**1.25)
                return x
            },
            effDesc(x) { return `^${format(x)} to multiplier from pre-Supernova resources, except All-Stars resources.` },
        },{
            eff(i) {
                let x = 1.2**i
                return x
            },
            effDesc(x) { return `x${format(x)} to requirements of any pre-Quantum Challenges.` },
        },{
            eff(i) {
                if (hasElement(163)) i /= 2
                let x = i**1.5/2+1
                return x
            },
            effDesc(x) { return `^${format(x)} to Mass Dilation’s penalty.` },
        },{
            eff(i) {
                if (hasElement(98) && player.qu.rip.active) i *= 0.8
                let x = [1-0.05*i,i/10+1]
                return x
            },
            effDesc(x) { return `^${format(x[0])} to starting of pre-Quantum scaling.<br>${format(x[1]*100)}% to strength of pre-Quantum scaling.` },
        },
    ],
}

const QCs_len = 8

function addQCPresetAs() {
    if (player.qu.qc.presets.length >= 5) {
        addNotify("You cannot add QC Preset because of maxmium length of presets")
        return
    }

    let copied_mods = []
    for (let x = 0; x < QCs_len; x++) copied_mods.push(player.qu.qc.mods[x])
    player.qu.qc.presets.push({
        p_name: "New Preset",
        mods: copied_mods,
    })
    updateQCModPresets()
}

function saveQCPreset(x) {
    let copied_mods = []
    for (let x = 0; x < QCs_len; x++) copied_mods.push(player.qu.qc.mods[x])
    player.qu.qc.presets[x].mods = copied_mods
    addNotify("Preset Saved")
    updateQCModPresets()
}

function loadQCPreset(x) {
    if (QCs.active()) return
    player.qu.qc.mods = player.qu.qc.presets[x].mods
    addNotify("Preset Loaded to Modifiers")
    updateQCModPresets()
}

function renameQCPreset(x) {
    createPrompt("输入预设名称",'renamePreset',renamed=>{
        player.qu.qc.presets[x].p_name = renamed
        addNotify("Preset Renamed")
        updateQCModPresets()
    })
}

function deleteQCPreset(x) {
    createConfirm("您确定要删除预设吗？",'removePreset',()=>{
        let represets = []
        for (let y = 0; y < player.qu.qc.presets.length; y++) if (x != y) represets.push(player.qu.qc.presets[y])
        player.qu.qc.presets = represets
        addNotify("Preset Deleted")

        updateQCModPresets()
    })
}

function setupQCHTML() {
    let new_table = new Element("QC_table")
	let table = ""
	for (let x = 0; x < QCs_len; x++) {
        table += `
        <div style="margin: 5px;">
        <div style="margin: 5px" tooltip="${QCs.names[x]}"><img onclick="tmp.qc_ch = ${x}" style="cursor: pointer" src="images/qcm${x}.png"></div>
        <div><span id="qcm_mod${x}">0</span>/10</div>
        <div id="qcm_btns${x}"><button onclick="QCs.incMod(${x},-1); tmp.qc_ch = ${x}">-</button><button onclick="QCs.incMod(${x},1); tmp.qc_ch = ${x}">+</button></div>
        </div>
        `
    }
	new_table.setHTML(table)
}

function updateQCModPresets() {
    let table = ""
    for (let x = 0; x < player.qu.qc.presets.length; x++) {
        let p = player.qu.qc.presets[x]
        table += `
        <div class="table_center" style="align-items: center;">
        <div style="margin: 5px; width: 150px; text-align: left">${p.p_name}</div>
        <div style="margin: 5px; width: 500px" class="table_center">
        `
        for (let y = 0; y < QCs_len; y++) {
            table += `
            <div style="margin: 5px; align-items: center;" class="table_center">
            <div style="margin-right: 3px; width: 20px; text-align: right;">${p.mods[y]}</div><div tooltip="${QCs.names[y]}"><img style="width: 25px; height: 25px" src="images/qcm${y}.png"></div>
            </div>
            `
        }
        table += `</div>
        <div style="margin: 5px">
        <button class="btn" onclick="saveQCPreset(${x})">Save</button>
        <button class="btn" onclick="loadQCPreset(${x})">Load</button>
        <button class="btn" onclick="renameQCPreset(${x})">Rename</button>
        <button class="btn" onclick="deleteQCPreset(${x})">Delete</button>
        </div>
        </div>`
    }
    tmp.el.QC_Presets_table.setHTML(table)
}

function updateQCTemp() {
    tmp.qu.qc_s_b = E(2)
    if (hasTree("qf4")) tmp.qu.qc_s_b = tmp.qu.qc_s_b.add(.5)
    if (hasPrestige(0,2)) tmp.qu.qc_s_b = tmp.qu.qc_s_b.add(.5)
    if (hasTree("qc3")) tmp.qu.qc_s_b = tmp.qu.qc_s_b.add(treeEff('qc3',0))
    if (hasElement(146)) tmp.qu.qc_s_b = tmp.qu.qc_s_b.add(elemEffect(146,0))

    tmp.qu.qc_s_eff = tmp.qu.qc_s_b.pow(player.qu.qc.shard)

    let s = 0
    let bs = 0
    for (let x = 0; x < QCs_len; x++) {
        let m = QCs.getMod(x)
        s += m
        tmp.qu.qc_eff[x] = QCs.ctn[x].eff(m)
        if (hasTree('qc2') && m >= 10) bs++
    }
    tmp.qu.qc_s = s
    tmp.qu.qc_s_bouns = bs
}

function updateQCHTML() {
    tmp.el.qc_shard.setTxt(player.qu.qc.shard+(tmp.qu.qc_s+tmp.qu.qc_s_bouns!=player.qu.qc.shard?(`(${tmp.qu.qc_s+tmp.qu.qc_s_bouns>=player.qu.qc.shard?"+":""}${tmp.qu.qc_s+tmp.qu.qc_s_bouns-player.qu.qc.shard})`):""))
    tmp.el.qc_shard_b.setTxt(tmp.qu.qc_s_b.format(1))
    tmp.el.qc_shard_eff.setTxt(tmp.qu.qc_s_eff.format(1))

    for (let x = 0; x < 2; x++) {
        tmp.el["qc_tab"+x].setDisplay(tmp.qc_tab == x)
    }
    if (tmp.qc_tab == 0) {
        tmp.el.qc_btn.setDisplay(!(player.qu.rip.active || player.dark.run.active))
        tmp.el.qc_btn.setTxt((QCs.active()?"Exit":"Enter") + " the Quantum Challenge")
        for (let x = 0; x < QCs_len; x++) {
            tmp.el["qcm_mod"+x].setTxt(QCs.getMod(x))
            tmp.el["qcm_btns"+x].setDisplay(!QCs.active())
        }
        tmp.el.qc_desc_div.setDisplay(tmp.qc_ch >= 0)
        if (tmp.qc_ch >= 0) {
            let x = tmp.qc_ch
            tmp.el.qc_ch_title.setTxt(`[${x+1}]${QCs.names[x]}[目前为${QCs.getMod(x)}，上限为10]`)
            tmp.el.qc_ch_desc.setHTML(QCs.ctn[x].effDesc(tmp.qu.qc_eff[x]))
        }
    }
}