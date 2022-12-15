const DARK_RUN = {
    mass_glyph_name: ['西里尔雕文', '德意志雕文', '瑞典雕文', '中国雕文', '西班牙雕文', '斯洛伐克雕文'],

    mass_glyph_eff(i) {
        let x, g = player.dark.run.glyphs[i]

        if (i < 4) x = 1/(g**0.5/100+1)
        else if (i == 4) x = [1/(g**0.5/100+1),1.1**(g**0.75)]
        else x = 1.1**(g**0.75)

        return x
    },

    mass_glyph_effDesc: [
        x => `在黑暗狂奔时，使质量倍率和黑洞质量倍率的指数减少${format(x)}。\n根据质量的数值获得更多雕文。`,
        x => `在黑暗狂奔时，使暗物质倍率和狂怒能量倍率的指数减少${format(x)}。\n根据黑洞质量的数值获得更多雕文。`,
        x => `在黑暗狂奔时，使原子倍率、原子能量倍率和夸克倍率的指数减少${format(x)}。\n根据夸克的数值获得更多雕文。`,
        x => `在黑暗狂奔时，使相对论粒子倍率和膨胀质量公式的指数减少${format(x)}。\n根据膨胀质量的数值获得更多雕文。`,
        x => `在黑暗狂奔时，使星辰相关资源倍率的指数减少${format(x[0])}，使超新星的需求变为原来的${format(x[1])}倍。\n根据坍缩星辰的数值获得更多雕文。`,
        x => `在黑暗狂奔时，使转生基础值的指数除以${format(x)}，使所有级别的需求变为原来的${format(x)}倍。\n根据转生基础值获得更多雕文。`,
    ],

    mass_glyph_gain: [
        _=>player.mass.gte('ee39')?player.mass.log10().div(1e39).log(1.1).add(1).softcap(50,0.5,0).mul(glyphUpgEff(7)).mul(tmp.dark.glyph_mult).floor().toNumber():0,
        _=>player.bh.mass.gte('e1.5e34')?player.bh.mass.log10().div(1.5e34).log(1.1).add(1).softcap(50,0.5,0).mul(tmp.dark.glyph_mult).floor().toNumber():0,
        _=>player.atom.quarks.gte('e3e32')?player.atom.quarks.log10().div(3e32).log(1.1).add(1).softcap(50,0.5,0).mul(tmp.dark.glyph_mult).floor().toNumber():0,
        _=>player.md.mass.gte('e1e21')?player.md.mass.log10().div(1e21).log(1.1).add(1).softcap(50,0.5,0).mul(tmp.dark.glyph_mult).floor().toNumber():0,
        _=>player.stars.points.gte('e1.5e24')?player.stars.points.log10().div(1.5e24).log(1.1).add(1).softcap(50,0.5,0).mul(tmp.dark.glyph_mult).floor().toNumber():0,
        _=>tmp.prestiges.base.gte(1e13)?tmp.prestiges.base.div(1e13).log(1.1).add(1).softcap(10,0.5,0).mul(tmp.dark.glyph_mult).floor().toNumber():0,
    ],

    upg_unl_length() {
        let x = 10

        if (tmp.matterUnl) x += 3

        return x
    },

    upg: [
        null,
        {
            max: 10,
            desc: `Raise mass gain by 1.5 every level.`,
            cost(i) {
                i *= Math.max(1,i-4)**0.5
                return {0: Math.floor(6*i+5)}
            },
            eff(i) { return 1.5**i },
            effDesc: x=>"^"+format(x,2),
        },{
            max: 10,
            desc: `Raise mass of black hole gain by 1.5 every level.`,
            cost(i) {
                i *= Math.max(1,i-4)**0.5
                return {0: Math.floor(6*i+10), 1: Math.floor(6*i+5)}
            },
            eff(i) { return 1.5**i },
            effDesc: x=>"^"+format(x,2),
        },{
            max: 5,
            desc: `Exotic rank starts x1.25 later every level.`,
            cost(i) {
                return {1: 6*i+10, 2: 6*i+5}
            },
            eff(i) { return 1.25**i },
            effDesc: x=>"x"+format(x,2)+" later",
        },{
            max: 1,
            desc: `Rank tiers' nerf power from 8th QC modifier is weaker while dark running.`,
            cost() { return {2: 15, 5: 5} },
        },{
            max: 10,
            desc: `Raise atom gain by 1.5 every level.`,
            cost(i) {
                return {2: 75+5*i, 3: 5*i+5}
            },
            eff(i) { return 1.5**i },
            effDesc: x=>"^"+format(x,2),
        },{
            desc: `Increase dark ray gain by 200% every level.`,
            cost(i) {
                i *= Math.max(1,i-4)**0.5
                return {0: Math.floor(20+20*i), 1: Math.floor(20+20*i), 2: Math.floor(20+20*i)}
            },
            eff(i) { return 3**i },
            effDesc: x=>"x"+format(x,0),
        },{
            max: 1,
            desc: `Gain x1.5 more Cyrillic Glyphs.`,
            cost() { return {5: 25} },
            eff(i) { return 1.5**i },
        },{
            max: 10,
            desc: `Dilated mass's overflow starts ^10 later every level.`,
            cost(i) {
                i *= Math.max(1,i-4)**0.5
                return {3: Math.floor(35+5*i), 4: Math.floor(5*i+5)}
            },
            eff(i) { return 10**i },
            effDesc: x=>"^"+format(x,0),
        },{
            max: 5,
            desc: `Star generators are ^1.5 stronger every level.`,
            cost(i) { return {1: 200+10*i, 2: 200+10*i, 5: 40+5*i} },
            eff(i) { return 1.5**i },
            effDesc: x=>"^"+format(x,2),
        },{
            max: 10,
            desc: `Prestige base's exponent is increased by 0.02 per level.`,
            cost(i) {
                i *= Math.max(1,i-4)**0.5
                return {0: Math.floor(270+10*i), 3: Math.floor(150+10*i), 4: Math.floor(140+10*i)} 
            },
            eff(i) { return i/50 },
            effDesc: x=>"+"+format(x,2),
        },{
            max: 2,
            desc: `Add 0.1 to matter exponent.`,
            cost(i) { return {5: 80+46*i} },
            eff(i) { return i/10 },
            effDesc: x=>"+"+format(x,1),
        },{
            max: 1,
            desc: `Cosmic ray effect is now exponent at super reduced rate.`,
            cost(i) { return {0: 487, 4: 271, 5: 121} },
        },{
            max: 1,
            desc: `Green Chromas gain is squared.`,
            cost(i) { return {0: 542, 2: 404} },
        },
    ],
}

const MASS_GLYPHS_LEN = 6

const GLYPH_UPG_LEN = DARK_RUN.upg.length

function mgEff(i,def=1) { return tmp.dark.mass_glyph_eff[i]||def }

function glyphButton(i) {
    if (player.dark.run.gmode == 2) player.dark.run.glyphs[i] = 0
    else if (player.dark.run.active && tmp.dark.mass_glyph_gain[i] > 0) {
        player.dark.run.glyphs[i] += tmp.dark.mass_glyph_gain[i]
        darkRun()
    }
}

function darkRun() {
    DARK.doReset(true)

    player.dark.run.active = !player.dark.run.active
}

function isAffordGlyphCost(cost) {
    for (let c in cost) if (player.dark.run.glyphs[c] < cost[c]) return false

    return true
}

function hasGlyphUpg(i) { return player.dark.run.upg[i]>0 }

function glyphUpgEff(i,def=1) { return tmp.glyph_upg_eff[i]||def; }

function buyGlyphUpgrade(i) {
    let upgs = player.dark.run.upg
    let ua = upgs[i]||0
    let u = DARK_RUN.upg[i]
    let max = u.max||Infinity
    let cost = u.cost(ua)

    if (isAffordGlyphCost(cost) && ua < max) {
        upgs[i] = upgs[i] ? upgs[i] + 1 : 1

        for (let c in cost) player.dark.run.glyphs[c] -= cost[c]

        if (i==12) updateAtomTemp()
        updateDarkRunTemp()
    }
}

function updateDarkRunHTML() {
    let dra = player.dark.run.active

    tmp.el.dark_run_btn.setTxt(dra?"Exit Dark Run":"Start Dark Run")
    tmp.el.mg_btn_mode.setTxt(["Earning", "Max Earning", "Clear Glyph"][player.dark.run.gmode])
    tmp.el.mg_max_gain.setTxt(format(player.dark.run.gamount,0))
    for (let x = 0; x < MASS_GLYPHS_LEN; x++) {
        tmp.el["mass_glyph"+x].setHTML(player.dark.run.glyphs[x] + (dra ? "(+" + format(tmp.dark.mass_glyph_gain[x],0) + ")" : ""))
        tmp.el["mass_glyph_tooltip"+x].setTooltip(DARK_RUN.mass_glyph_name[x]+"\n"+DARK_RUN.mass_glyph_effDesc[x](tmp.dark.mass_glyph_eff[x]))
    }

    let gum = tmp.mass_glyph_msg

    let msg = ''
    if (gum > 0) {
        let u = DARK_RUN.upg[gum]
        let ua = player.dark.run.upg[gum]||0
        let max = u.max||Infinity

        msg = "[等级："+format(ua,0)+(isFinite(max)?"，上限为"+format(max,0):"")+"]<br><span class='sky'>"+(typeof u.desc == "function" ? u.desc() : u.desc)+"</span><br>"

        if (ua<max) {
            let cr = "", cost = u.cost(ua), n = 0, cl = Object.keys(cost).length
            for (let c in cost) {
                cr += format(cost[c],0)+""+DARK_RUN.mass_glyph_name[c]+(n+1<cl?"，":"")
                n++
            }
            msg +=  "<span>花费："+cr+"</span><br>"
        }
        
		if (u.effDesc !== undefined) msg += "<span class='green'>Currently: "+u.effDesc(tmp.glyph_upg_eff[gum])+"</span>"
    }
    tmp.el.glyph_upg_msg.setHTML(msg)

    for (let x = 1; x < GLYPH_UPG_LEN; x++) {
        let unl = x <= tmp.dark.glyph_upg_unls

        tmp.el['glyph_upg'+x].setDisplay(unl)

        if (!unl) continue

		let u = DARK_RUN.upg[x]
        let ua = player.dark.run.upg[x]||0
        let max = u.max||Infinity

		tmp.el['glyph_upg'+x].setClasses({img_btn: true, locked: !isAffordGlyphCost(u.cost(ua)) && ua < max, bought: ua >= max})
	}
}

function updateDarkRunTemp() {
    let dtmp = tmp.dark
    let dra = player.dark.run.active

    dtmp.glyph_upg_unls = DARK_RUN.upg_unl_length()

    dtmp.glyph_mult = dtmp.rayEff.glyph||1
    if (hasPrestige(2,5)) dtmp.glyph_mult *= prestigeEff(2,5,1)

    for (let x = 0; x < MASS_GLYPHS_LEN; x++) {
        dtmp.mass_glyph_eff[x] = DARK_RUN.mass_glyph_eff(x)
        let mg = Math.max(0,(dra ? DARK_RUN.mass_glyph_gain[x]() : 0)-player.dark.run.glyphs[x])
        if (player.dark.run.gmode == 1) mg = Math.min(player.dark.run.gamount,mg)
        dtmp.mass_glyph_gain[x] = mg
    }

    for (let x = 1; x < GLYPH_UPG_LEN; x++) {
        let u = DARK_RUN.upg[x]

        if (u.eff) tmp.glyph_upg_eff[x] = u.eff(player.dark.run.upg[x]||0)
    }
}

function setupDarkRunHTML() {
    let t = new Element('mass_glyph_table')
    let html = ""

    for (let x = 0; x < MASS_GLYPHS_LEN; x++) {
        html += `
        <div style="margin: 5px; width: 100px">
            <div id="mass_glyph_tooltip${x}" style="margin-bottom: 5px;" onclick="glyphButton(${x})" tooltip="${DARK_RUN.mass_glyph_name[x]}"><img style="cursor: pointer" src="images/glyphs/glyph${x}.png"></div>
            <div id="mass_glyph${x}">0</div>
        </div>
        `
    }

    t.setHTML(html)

    // Glyph Upgrades

    t = new Element('glyph_upg_table')
    html = ""

    for (let x = 1; x < GLYPH_UPG_LEN; x++) {
        html += `
        <img id="glyph_upg${x}" onclick="buyGlyphUpgrade(${x})" src="images/glyphs/glyph_upg${x}.png" style="margin: 3px;" class="img_btn" onmouseover="tmp.mass_glyph_msg = ${x}" onmouseleave="tmp.mass_glyph_msg = 0">
        `
    }

    t.setHTML(html)
}