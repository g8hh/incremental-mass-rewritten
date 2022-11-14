const DARK = {
    nextEffectAt: [
        [0],
        [1e6,1e11,1e25],
        [1e120],
    ],
    gain() {
        let x = E(1)

        x = x.mul(tmp.dark.shadowEff.ray)
        if (tmp.chal) x = x.mul(tmp.chal.eff[13])
        if (player.ranks.hex.gte(4)) x = x.mul(RANKS.effect.hex[4]())
        if (hasElement(141)) x = x.mul(10)
        if (hasElement(145)) x = x.mul(elemEffect(145))

        return x.floor()
    },
    rayEffect() {
        let a = player.dark.rays
        let x = {}

        x.shadow = a.max(1).pow(2).pow(tmp.fermions.effs[0][6]||1)

        return x
    },
    reset(force=false) {
        if (hasElement(118)||force) {
            if (force) this.doReset()
            else if (player.confirms.dark) createConfirm("您确定要融入黑暗吗？",'dark',CONFIRMS_FUNCTION.dark)
            else CONFIRMS_FUNCTION.dark()
        }
    },
    doReset(force=false) {
        let qu = player.qu
        let bmd = player.md.break
        let quSave = getQUSave()

        qu.points = E(0)
        qu.bp = E(0)
        qu.chroma = [E(0),E(0),E(0)]
        qu.cosmic_str = E(0)

        qu.prim.theorems = E(0)
        qu.prim.particles = [E(0),E(0),E(0),E(0),E(0),E(0),E(0),E(0)]

        qu.en.amt = E(0)
        qu.en.eth = quSave.en.eth
        qu.en.hr = quSave.en.hr
        qu.en.rewards = quSave.en.rewards

        qu.rip.active = false
        qu.rip.amt = E(0)

        let k = []

        if (hasElement(127)) k.push(8,9,11)
        else bmd.active = false
        bmd.energy = E(0)
        bmd.mass = E(0)
        for (let x = 0; x < 10; x++) bmd.upgs[x] = E(0)

        resetMainUpgs(4,k)
        
        if (!hasElement(124) || (force && !hasElement(136))) {
            let qk = ["qu_qol1", "qu_qol2", "qu_qol3", "qu_qol4", "qu_qol5", "qu_qol6", "qu_qol7", "qu_qol8", "qu_qol9", "qu_qol8a", "unl1", "unl2", "unl3", "unl4",
            "qol1", "qol2", "qol3", "qol4", "qol5", "qol6", "qol7", "qol8", "qol9", 'qu_qol10', 'qu_qol11']

            let qk2 = []
            for (let x = 0; x < player.supernova.tree.length; x++) if (qk.includes(player.supernova.tree[x])) qk2.push(player.supernova.tree[x])
            player.supernova.tree = qk2
        }

        for (let x = 0; x < player.prestiges.length; x++) player.prestiges[x] = E(0)

        let ke = []
        for (let x = 0; x < player.atom.elements.length; x++) {
            let e = player.atom.elements[x]
            if (hasElement(143) ? e != 118 : (e < 87 || e > 118)) ke.push(e)
        }
        player.atom.elements = ke

        QUANTUM.doReset(true,true)

        tmp.rank_tab = 0
        if (tmp.stab[4] == 3 && !hasElement(127)) tmp.stab[4] = 0

        tmp.pass = false
    },
    shadowGain() {
        let x = E(1)

        x = x.mul(tmp.dark.rayEff.shadow)
        x = x.mul(tmp.bd.upgs[11].eff||1)
        if (hasElement(119)) x = x.mul(elemEffect(119))
        if (hasElement(135)) x = x.mul(elemEffect(135))

        x = x.mul(tmp.dark.abEff.shadow||1)

        return x
    },
    shadowEff() {
        let x = {}
        let a = player.dark.shadow

        x.ray = hasElement(143) ? a.add(1).log2().add(1).pow(1.5) : a.add(1).log10().add(1)
        x.mass = a.add(1).log10().add(1).root(2)

        if (a.gte(1e6)) x.bp = a.div(1e6).pow(10)
        if (a.gte(1e11)) x.sn = a.div(1e11).add(1).log10().div(10).add(1)
        if (a.gte(1e25)) x.en = a.div(1e25).pow(3)
        if (tmp.chal14comp) x.ab = a.add(1).pow(2)

        return x
    },
    abGain() {
        let x = E(1)

        x = x.mul(tmp.dark.shadowEff.ab||1)

        return x
    },
    abEff() {
        let x = {}
        let a = player.dark.abyssalBlot

        x.shadow = a.add(1).log10().add(1).pow(2)
        x.msoftcap = a.add(1).log10().root(2).div(2).add(1)
        if (a.gte(1e120)) x.hr = a.div(1e120).log10().add(1).pow(2)

        return x
    },
}

function calcDark(dt, dt_offline) {
    if (player.dark.unl) {
        player.dark.shadow = player.dark.shadow.add(tmp.dark.shadowGain.mul(dt))

        if (tmp.chal14comp) player.dark.abyssalBlot = player.dark.abyssalBlot.add(tmp.dark.abGain.mul(dt))
    }
}

function updateDarkTemp() {
    let dtmp = tmp.dark

    dtmp.rayEff = DARK.rayEffect()
    dtmp.abGain = DARK.abGain()
    dtmp.abEff = DARK.abEff()
    dtmp.shadowGain = DARK.shadowGain()
    dtmp.shadowEff = DARK.shadowEff()

    dtmp.gain = DARK.gain()
}

function updateDarkHTML() {
    let og = hasElement(118)
    let unl = og || player.dark.unl
    let dtmp = tmp.dark
	tmp.el.dark_div.setDisplay(unl)
	if (unl) tmp.el.darkAmt.setHTML(player.dark.rays.format(0)+"<br>("+(og?"+"+dtmp.gain.format(0):"require Og-118")+")")

    if (tmp.tab == 7) {
        tmp.el.darkRay.setHTML(player.dark.rays.format(0))
        tmp.el.darkShadow.setHTML(player.dark.shadow.format(0)+""+player.dark.shadow.formatGain(tmp.dark.shadowGain))

        let eff = dtmp.shadowEff

        let e = getNextDarkEffectFromID(1) +`
            Boosts mass gain by <b>${eff.mass.format(3)}次方</b><br>
            Boosts dark ray gain by <b>${eff.ray.format(3)}倍</b>
        `

        if (eff.bp) e += `<br>Boosts blueprint particles gain by <b>${eff.bp.format(3)}倍</b>`
        if (eff.sn) e += `<br>Makes you becoming <b>${eff.sn.format(3)}倍</b> more supernovas`
        if (eff.en) e += `<br>Boosts entropy earned by <b>${eff.en.format(3)}倍</b>`
        if (eff.ab) e += `<br>Boosts abyssal blots earned by <b>${eff.ab.format(3)}倍</b>`

        tmp.el.dsEff.setHTML(e)

        tmp.el.ab_div.setDisplay(tmp.chal14comp)
        if (tmp.chal14comp) {
            tmp.el.abyssalBlot.setHTML(player.dark.abyssalBlot.format(0)+""+player.dark.abyssalBlot.formatGain(tmp.dark.abGain))

            eff = dtmp.abEff

            e = getNextDarkEffectFromID(2) + `
                Boosts dark shadows gain by <b>${eff.shadow.format(3)}倍</b>
                <br>Makes mass gain's softcap^4-6, starting <b>${eff.msoftcap.format(3)}次方</b> later
            `

            if (eff.hr) e += `<br>Boosts hawking radiation gain by <b>${eff.hr.format(3)}倍</b>`

            tmp.el.abEff.setHTML(e)
        }

        eff = dtmp.rayEff

        tmp.el.drEff.setHTML( getNextDarkEffectFromID(0) + `
            Boosts dark shadows gain by <b>${eff.shadow.format(2)}倍</b>
        `)
    }
}

function getNextDarkEffectFromID(i) {
    var p = player.dark[['rays','shadow','abyssalBlot'][i]], q = DARK.nextEffectAt[i], s = 0

    if (p.gte(q[q.length-1])) return ""
    else while (s <= q.length-1) {
        if (p.lt(q[s])) return "Next "+['Ray','Shadow','Abyssal Blot'][i]+"'s effect at <b>" + format(q[s]) + "</b><br><br>"
        s++
    }
}

function getDarkSave() {
    let s = {
        unl: false,
        rays: E(0),
        shadow: E(0),
        abyssalBlot: E(0),
    }
    return s
}