const DARK = {
    nextEffectAt: [
        [0,1e12,1e22,1e130],
        [1e6,1e11,1e25,1e130],
        [1e120,1e180,'e345','e800','e2500','e56000','e125500'],
    ],
    gain() {
        let x = E(1)

        x = x.mul(tmp.dark.shadowEff.ray)
        if (tmp.chal) x = x.mul(tmp.chal.eff[13])
        if (player.ranks.hex.gte(4)) x = x.mul(RANKS.effect.hex[4]())
        if (hasElement(141)) x = x.mul(10)
        if (hasElement(145)) x = x.mul(elemEffect(145))
        if (hasElement(152)) x = x.mul(elemEffect(152))
        if (hasElement(176)) x = x.mul(elemEffect(176))
        if (hasElement(183)) x = x.mul(elemEffect(183))

        if (hasPrestige(0,233)) x = x.mul(prestigeEff(0,233))
        x = x.mul(glyphUpgEff(6))

        if (hasUpgrade('br',20)) x = x.mul(upgEffect(4,20))

        return x.floor()
    },
    rayEffect() {
        let a = player.dark.rays
        let x = {}

        x.shadow = a.max(1).pow(2).pow(tmp.c16active?1:(tmp.fermions.effs[0][6]||1))

        if (a.gte(1e12)) x.passive = a.div(1e12).max(1).log10().add(1).pow(2).div(1e3)
        if (a.gte(1e22)) x.glyph = a.div(1e22).max(1).log10().add(1).root(2).sub(1).div(10).add(1).toNumber()
        if (a.gte(1e130)) x.dChal = a.div(1e130).max(1).log10().mul(20).softcap(100,0.5,0).floor()

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

        if (!hasElement(204)) resetMainUpgs(4,k)
        
        if (!hasElement(124) || (force && !hasElement(136))) {
            let qk = ["qu_qol1", "qu_qol2", "qu_qol3", "qu_qol4", "qu_qol5", "qu_qol6", "qu_qol7", "qu_qol8", "qu_qol9", "qu_qol8a", "unl1", "unl2", "unl3", "unl4",
            "qol1", "qol2", "qol3", "qol4", "qol5", "qol6", "qol7", "qol8", "qol9", 'qu_qol10', 'qu_qol11']

            let qk2 = []
            for (let x = 0; x < player.supernova.tree.length; x++) if (qk.includes(player.supernova.tree[x])) qk2.push(player.supernova.tree[x])
            player.supernova.tree = qk2
        }

        if (!hasElement(194)) for (let x = 0; x < player.prestiges.length; x++) player.prestiges[x] = E(0)

        let ke = []
        for (let x = 0; x < player.atom.elements.length; x++) {
            let e = player.atom.elements[x]
            if (hasElement(161) || (hasElement(143) ? e != 118 : (e < 87 || e > 118))) ke.push(e)
        }
        player.atom.elements = ke

        QUANTUM.doReset(true,true)

        if (!hasElement(127)) tmp.rank_tab = 0
        if (tmp.stab[4] == 3 && !hasElement(127)) tmp.stab[4] = 0

        tmp.pass = 2
    },
    shadowGain() {
        let x = E(1)

        x = x.mul(tmp.dark.rayEff.shadow)
        x = x.mul(tmp.bd.upgs[11].eff||1)
        if (hasElement(119)) x = x.mul(elemEffect(119))
        if (hasElement(135)) x = x.mul(elemEffect(135))

        x = x.mul(tmp.dark.abEff.shadow||1)

        if (hasPrestige(1,22)) x = x.pow(1.1)

        return x
    },
    shadowEff() {
        let x = {}
        let a = player.dark.shadow

        x.ray = hasElement(143) ? a.add(1).log2().add(1).pow(1.5) : a.add(1).log10().add(1)
        x.mass = hasCharger(4) ? overflow(a.add(1),10,0.25) : a.add(1).log10().add(1).root(2)

        if (a.gte(1e6)) x.bp = a.div(1e6).pow(10)
        if (a.gte(1e11)) x.sn = a.div(1e11).add(1).log10().div(10).add(1).softcap(7.5,0.25,0)
        if (a.gte(1e25)) x.en = a.div(1e25).pow(3)
        if (tmp.chal14comp) x.ab = a.add(1).pow(2)
        if (!tmp.c16active && a.gte(1e130)) x.bhp = a.div(1e130).log10().div(5)

        return x
    },
    abGain() {
        let x = E(1)

        x = x.mul(tmp.dark.shadowEff.ab||1)
        if (hasElement(189)) x = x.mul(elemEffect(189))
        if (hasElement(153)) x = x.pow(elemEffect(153))

        return x
    },
    abEff() {
        let x = {}
        let a = player.dark.abyssalBlot

        x.shadow = a.add(1).log10().add(1).pow(2)
        x.msoftcap = a.add(1).log10().root(2).div(2).add(1)
        if (a.gte(1e120)) x.hr = a.div(1e120).log10().add(1).pow(2)
        if (a.gte(1e180)) x.pb = a.div(1e180).log10().add(1).pow(hasPrestige(1,167)?(player.dark.matters.final+1)**.5:1)
        if (a.gte('e345')) x.csp = a.div('e345').log10().add(1).pow(2)
        if (a.gte('e800') && tmp.matterUnl) x.mexp = a.div('e800').log10().div(10).add(1).root(2.5)
        if (a.gte('e2500') && hasElement(199)) x.accelPow = a.div('e2500').log10().add(1).log10().add(1).pow(1.5).softcap(5,0.2,0)
        if (a.gte('e56000') && !tmp.c16active) x.ApQ_Overflow = Decimal.pow(10,a.div('e56000').log10().add(1).log10())
        if (a.gte('e125500')) x.fss = a.div('e56000').log10().add(1).log10().div(10).add(1).toNumber()

        return x
    },
}

function calcDark(dt, dt_offline) {
    if (player.dark.unl) {
        player.dark.shadow = player.dark.shadow.add(tmp.dark.shadowGain.mul(dt))

        if (tmp.chal14comp) player.dark.abyssalBlot = player.dark.abyssalBlot.add(tmp.dark.abGain.mul(dt))

        if (tmp.dark.rayEff.passive) player.dark.rays = player.dark.rays.add(tmp.dark.gain.mul(dt).mul(tmp.dark.rayEff.passive))

        if (tmp.matterUnl) {
            let mu = player.dark.matters.unls

            for (let x = 0; x < mu-1; x++) {
                player.dark.matters.amt[x] = player.dark.matters.amt[x].add(tmp.matters.gain[x].mul(dt))
                if (hasElement(195)) getMatterUpgrade(x)
            }
            if (player.dark.matters.unls<MATTERS_LEN+1 && player.dark.matters.amt[mu-2].gte(tmp.matters.req_unl)) player.dark.matters.unls++
        }
    }

    if (tmp.c16active) player.dark.c16.bestBH = player.dark.c16.bestBH.max(player.bh.mass)

    if (hasCharger(1)) {
        player.bh.unstable = UNSTABLE_BH.getProduction(player.bh.unstable,tmp.unstable_bh.gain.mul(dt))
    }
}

function updateDarkTemp() {
    let dtmp = tmp.dark

    updateMattersTemp()
    updateDarkRunTemp()

    dtmp.rayEff = DARK.rayEffect()
    dtmp.abGain = DARK.abGain()
    dtmp.abEff = DARK.abEff()
    dtmp.shadowGain = DARK.shadowGain()
    dtmp.shadowEff = DARK.shadowEff()

    dtmp.gain = DARK.gain()
}

function setupDarkHTML() {
    setupDarkRunHTML()
    setupMattersHTML()
    setupC16HTML()
}

function updateDarkHTML() {
    let og = hasElement(118)
    let unl = og || player.dark.unl
    let dtmp = tmp.dark
	tmp.el.dark_div.setDisplay(unl)
	if (unl) tmp.el.darkAmt.setHTML(player.dark.rays.format(0)+"<br>"+(og?dtmp.rayEff.passive?player.dark.rays.formatGain(dtmp.gain.mul(dtmp.rayEff.passive)):"(+"+dtmp.gain.format(0)+")":"(require Og-118)"))
    let c16 = tmp.c16active

    unl = player.dark.matters.final>0
	tmp.el.fss_div.setDisplay(unl)
	if (unl) tmp.el.FSS2.setHTML(format(player.dark.matters.final,0)+"<br>(+"+(tmp.matters.FSS_base.gte(tmp.matters.FSS_req)?1:0)+")")

	unl = player.dark.c16.first
	tmp.el.corrupt_div.setDisplay(unl)
	if (unl) tmp.el.corruptShard1.setHTML(format(player.dark.c16.shard,0)+"<br>(+"+tmp.c16.shardGain.format(0)+")")

    if (tmp.tab == 7) {
        if (tmp.stab[7] == 0) {
            tmp.el.darkRay.setHTML(player.dark.rays.format(0))
            tmp.el.darkShadow.setHTML(player.dark.shadow.format(0)+""+player.dark.shadow.formatGain(tmp.dark.shadowGain))

            let eff = dtmp.shadowEff

            let e = getNextDarkEffectFromID(1) +`
                Boosts mass gain by <b>${eff.mass.format(3)}次方</b><br>
                Boosts dark ray gain by <b>${eff.ray.format(3)}倍</b>
            `

            if (eff.bp) e += `<br>Boosts blueprint particles gain by <b>${eff.bp.format(3)}倍</b>`
            if (eff.sn) e += `<br>Makes you becoming <b>${eff.sn.format(3)}倍</b> more supernovas`+eff.sn.softcapHTML(7.5)
            if (eff.en) e += `<br>Boosts entropy earned by <b>${eff.en.format(3)}倍</b>`
            if (eff.ab) e += `<br>Boosts abyssal blots earned by <b>${eff.ab.format(3)}倍</b>`
            if (eff.bhp) e += `<br>Boosts exponent from the mass of BH formula by <b>+${eff.bhp.format(3)}</b><br>Uncaps BH-Exponent Boost's effect`.corrupt(c16)

            tmp.el.dsEff.setHTML(e)

            tmp.el.ab_div.setDisplay(tmp.chal14comp)
            if (tmp.chal14comp) {
                tmp.el.abyssalBlot.setHTML(player.dark.abyssalBlot.format(0)+""+player.dark.abyssalBlot.formatGain(tmp.dark.abGain))

                eff = dtmp.abEff

                e = getNextDarkEffectFromID(2) + `
                    Boosts dark shadows gain by <b>${eff.shadow.format(3)}倍</b>
                    <br>Makes mass gain softcaps 4-${hasElement(159)?8:6} start <b>${eff.msoftcap.format(3)}次方</b> later
                `

                if (eff.hr) e += `<br>Boosts hawking radiation gain by <b>${eff.hr.format(3)}倍</b>`
                if (eff.pb) e += `<br>Boosts prestige base's multiplier by <b>${eff.pb.format(3)}倍</b>`
                if (eff.csp) e += `<br>Boosts cosmic string's power by <b>${eff.csp.format(3)}倍</b>`
                if (eff.mexp) e += `<br>`+`Boosts all matters gain by <b>${eff.mexp.format(3)}次方</b>`.corrupt(c16)
                if (eff.accelPow) e += `<br>Boosts accelerator power by <b>${eff.accelPow.format(3)}倍</b>`+eff.accelPow.softcapHTML(5)
                if (eff.ApQ_Overflow) e += `<br>Atomic power & quark overflows start <b>${eff.ApQ_Overflow.format(3)}次方</b> later`.corrupt(c16)
                if (eff.fss) e += `<br>Final Star Shards are <b>${formatPercent(eff.fss-1)}</b> stronger`

                tmp.el.abEff.setHTML(e)
            }

            eff = dtmp.rayEff

            e = getNextDarkEffectFromID(0) + `
                Boosts dark shadows gain by <b>${eff.shadow.format(2)}倍</b>
            `

            if (eff.passive) e += `<br>Passively gains <b>${formatPercent(eff.passive)}</b> of dark rays gained on reset per second`
            if (eff.glyph) e += `<br>Earns <b>${format(eff.glyph,3)}倍</b> more glyphic mass`
            if (eff.dChal) e += `<br>Adds <b>${format(eff.dChal,0)}</b> more C13-15 maximum completions`+eff.dChal.softcapHTML(100)

            tmp.el.drEff.setHTML(e)
        } else if (tmp.stab[7] == 1) {
            updateDarkRunHTML()
        } else if (tmp.stab[7] == 2) {
            updateMattersHTML()
        } else if (tmp.stab[7] == 3) {
            updateC16HTML()
        }
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

        run: {
            active: false,
            glyphs: [0,0,0,0,0,0],
            gmode: 0,
            gamount: 1,
            upg: [],
        },

        matters: {
            amt: [],
            upg: [],
            unls: 3,
            final: 0,
        },

        c16: {
            first: false,
            shard: E(0),
            totalS: E(0),
            bestBH: E(0),
            charger: [],
            tree: [],
        },
    }
    for (let x = 0; x < MATTERS_LEN; x++) {
        s.matters.amt[x] = E(0)
        s.matters.upg[x] = E(0)
    }
    return s
}