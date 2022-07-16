const RANKS = {
    names: ['rank', 'tier', 'tetr', 'pent'],
    fullNames: ['级别', '阶层', '三重阶层', '五重阶层'],
    reset(type) {
        if (tmp.ranks[type].can) {
            player.ranks[type] = player.ranks[type].add(1)
            let reset = true
            if (type == "rank" && player.mainUpg.rp.includes(4)) reset = false
            if (type == "tier" && player.mainUpg.bh.includes(4)) reset = false
            if (type == "tetr" && hasTree("qol5")) reset = false
            if (type == "pent" && hasTree("qol8")) reset = false
            if (reset) this.doReset[type]()
            updateRanksTemp()
        }
    },
    bulk(type) {
        if (tmp.ranks[type].can) {
            player.ranks[type] = player.ranks[type].max(tmp.ranks[type].bulk.max(player.ranks[type].add(1)))
            let reset = true
            if (type == "rank" && player.mainUpg.rp.includes(4)) reset = false
            if (type == "tier" && player.mainUpg.bh.includes(4)) reset = false
            if (type == "tetr" && hasTree("qol5")) reset = false
            if (type == "pent" && hasTree("qol8")) reset = false
            if (reset) this.doReset[type]()
            updateRanksTemp()
        }
    },
    unl: {
        tier() { return player.ranks.rank.gte(3) || player.ranks.tier.gte(1) || player.mainUpg.atom.includes(3) || tmp.radiation.unl },
        tetr() { return player.mainUpg.atom.includes(3) || tmp.radiation.unl },
        pent() { return tmp.radiation.unl },
    },
    doReset: {
        rank() {
            player.mass = E(0)
            for (let x = 1; x <= UPGS.mass.cols; x++) if (player.massUpg[x]) player.massUpg[x] = E(0)
        },
        tier() {
            player.ranks.rank = E(0)
            this.rank()
        },
        tetr() {
            player.ranks.tier = E(0)
            this.tier()
        },
        pent() {
            player.ranks.tetr = E(0)
            this.tetr()
        },
    },
    autoSwitch(rn) { player.auto_ranks[rn] = !player.auto_ranks[rn] },
    autoUnl: {
        rank() { return player.mainUpg.rp.includes(5) },
        tier() { return player.mainUpg.rp.includes(6) },
        tetr() { return player.mainUpg.atom.includes(5) },
        pent() { return hasTree("qol8") },
    },
    desc: {
        rank: {
            '1': "解锁质量升级1。",
            '2': "解锁质量升级2，使质量升级1的花费折算弱化20%。",
            '3': "解锁质量升级3，使质量升级2的花费折算弱化20%，质量升级1的效果对自身生效。",
            '4': "使质量升级3的花费折算弱化20%。",
            '5': "使质量升级2的效果对自身生效。",
            '6': "使质量获取速度乘以(级别+1)的平方。",
            '13': "使质量获取速度变为原来的3倍。",
            '14': "使狂怒能量获取速度翻倍。",
            '17': "使级别6的奖励公式变得更好。即原公式的指数从2变为级别的1/3次方。",
            '34': "使质量升级3的软上限延迟1.2倍出现。",
            '40': "基于级别的数值，增加时间速度倍率。",
            '45': "使级别可以加成狂怒能量获取速度。",
            '90': "使级别40的奖励变得更好。",
            '180': "使质量获取速度变为原来的1.025次方。",
            '220': "使级别40的奖励变得滥强。",
            '300': "使级别可以加成夸克获取速度。",
            '380': "使级别可以加成质量获取速度。",
            '800': "基于级别的数值，使质量获取速度的软上限弱化0.25%。",
        },
        tier: {
            '1': "使级别的需求减少20%。",
            '2': "使质量获取速度变为原来的1.15次方。",
            '3': "使所有质量升级的花费折算弱化20%。",
            '4': "每有1个阶层，时间速度倍率就增加5%，在增加40%时达到软上限。",
            '6': "使阶层可以加成狂怒能量。",
            '8': "使阶层6的奖励效果基于暗物质的数值变得更强。",
            '12': "使阶层4的奖励效果翻倍，且移除软上限。",
            '30': "使强化器效果的软上限弱化10%。",
            '55': "使级别380的效果基于阶层的数值变得更强。",
            '100': "使三重阶层的超级折算延迟5次出现。",
        },
        tetr: {
            '1': "使阶层的需求减少25%，级别的究级折算弱化15%。",
            '2': "使质量升级3的效果对自身生效。",
            '3': "使时间速度效果变为原来的1.05次方。",
            '4': "使级别的超级折算基于阶层的数值而弱化，阶层的超级折算弱化20%。",
            '5': "使时间速度的究级折算和超究折算基于三重阶层的数值而延迟出现。",
            '8': "使质量获取速度的二重软上限延迟1.5次方出现。",
        },
        pent: {
            '1': "使三重阶层的需求减少15%，级别的元折算延迟1.1倍出现。",
            '2': "使三重阶层可以加成射线的获取速度。",
            '4': "使时间速度的元折算基于超新星次数而延迟出现。",
            '5': "使级别的元折算基于五重阶层的数值而延迟出现。",
            '8': "使质量获取速度的四重软上限基于五重阶层的数值而延迟出现。",
            '15': "移除强化器效果的三重软上限。",
        },
    },
    effect: {
        rank: {
            '3'() {
                let ret = E(player.massUpg[1]||0).div(20)
                return ret
            },
            '5'() {
                let ret = E(player.massUpg[2]||0).div(40)
                return ret
            },
            '6'() {
                let ret = player.ranks.rank.add(1).pow(player.ranks.rank.gte(17)?player.ranks.rank.add(1).root(3):2)
                return ret
            },
            '40'() {
                let ret = player.ranks.rank.root(2).div(100)
                if (player.ranks.rank.gte(90)) ret = player.ranks.rank.root(1.6).div(100)
                if (player.ranks.rank.gte(220)) ret = player.ranks.rank.div(100)
                return ret
            },
            '45'() {
                let ret = player.ranks.rank.add(1).pow(1.5)
                return ret
            },
            '300'() {
                let ret = player.ranks.rank.add(1)
                return ret
            },
            '380'() {
                let ret = E(10).pow(player.ranks.rank.sub(379).pow(1.5).pow(player.ranks.tier.gte(55)?RANKS.effect.tier[55]():1).softcap(1000,0.5,0))
                return ret
            },
            '800'() {
                let ret = E(1).sub(player.ranks.rank.sub(799).mul(0.0025).add(1).softcap(1.25,0.5,0).sub(1)).max(0.75)
                return ret
            },
        },
        tier: {
            '4'() {
                let ret = E(0)
                if (player.ranks.tier.gte(12)) ret = player.ranks.tier.mul(0.1)
                else ret = player.ranks.tier.mul(0.05).add(1).softcap(1.4,0.75,0).sub(1)
                return ret
            },
            '6'() {
                let ret = E(2).pow(player.ranks.tier)
                if (player.ranks.tier.gte(8)) ret = ret.pow(RANKS.effect.tier[8]())
                return ret
            },
            '8'() {
                let ret = player.bh.dm.max(1).log10().add(1).root(2)
                return ret
            },
            '55'() {
                let ret = player.ranks.tier.max(1).log10().add(1).root(4)
                return ret
            },
        },
        tetr: {
            '2'() {
                let ret = E(player.massUpg[3]||0).div(400)
                if (ret.gte(1) && hasPrestige(0,15)) ret = ret.pow(1.5)
                return ret
            },
            '4'() {
                let ret = E(0.96).pow(player.ranks.tier.pow(1/3))
                return ret
            },
            '5'() {
                let ret = player.ranks.tetr.pow(4).softcap(1000,0.25,0)
                return ret
            },
        },
        pent: {
            '2'() {
                let ret = E(1.3).pow(player.ranks.tetr)
                return ret
            },
            '4'() {
                let ret = player.supernova.times.add(1).root(5)
                return ret
            },
            '5'() {
                let ret = E(1.05).pow(player.ranks.pent)
                return ret
            },
            '8'() {
                let ret = E(1.1).pow(player.ranks.pent)
                return ret
            },
        },
    },
    effDesc: {
        rank: {
            3(x) { return "+"+format(x) },
            5(x) { return "+"+format(x) },
            6(x) { return format(x)+"倍" },
            40(x) {  return "+"+format(x.mul(100))+"%" },
            45(x) { return format(x)+"倍" },
            300(x) { return format(x)+"倍" },
            380(x) { return format(x)+"倍" },
            800(x) { return "弱化"+format(E(1).sub(x).mul(100))+"%" },
        },
        tier: {
            4(x) { return "+"+format(x.mul(100))+"%" },
            6(x) { return format(x)+"倍" },
            8(x) { return "^"+format(x) },
            55(x) { return "^"+format(x) },
        },
        tetr: {
            2(x) { return "+"+format(x) },
            4(x) { return "弱化"+format(E(1).sub(x).mul(100))+"%" },
            5(x) { return "延迟"+format(x,0)+"次出现" },
        },
        pent: {
            2(x) { return format(x)+"倍" },
            4(x) { return "延迟"+format(x)+"倍出现" },
            5(x) { return "延迟"+format(x)+"倍出现" },
            8(x) { return "延迟"+format(x)+"次方出现" },
        },
    },
    fp: {
        rank() {
            let f = E(1)
            if (player.ranks.tier.gte(1)) f = f.mul(1/0.8)
            f = f.mul(tmp.chal.eff[5].pow(-1))
            return f
        },
        tier() {
            let f = E(1)
            f = f.mul(tmp.fermions.effs[1][3])
            if (player.ranks.tetr.gte(1)) f = f.mul(1/0.75)
            if (player.mainUpg.atom.includes(10)) f = f.mul(2)
            return f
        },
    },
}

const PRESTIGES = {
    fullNames: ["转生等级", "荣耀"],
    baseExponent() {
        let x = 0
        if (hasElement(100)) x += tmp.elements.effect[100]
        if (hasPrestige(0,32)) x += prestigeEff(0,32,0)
        return x+1
    },
    base() {
        let x = E(1)

        for (let i = 0; i < RANKS.names.length; i++) {
            let r = player.ranks[RANKS.names[i]]
            if (hasPrestige(0,18) && i == 0) r = r.mul(2)
            x = x.mul(r.add(1))
        }

        return x.sub(1)
    },
    req(i) {
        let x = EINF, y = player.prestiges[i]
        switch (i) {
            case 0:
                x = Decimal.pow(1.1,y.scaleEvery('prestige0').pow(1.1)).mul(2e13)
                break;
            case 1:
                x = y.scaleEvery('prestige1').pow(1.25).mul(3).add(4)
                break;
            default:
                x = EINF
                break;
        }
        return x.ceil()
    },
    bulk(i) {
        let x = E(0), y = i==0?tmp.prestiges.base:player.prestiges[i-1]
        switch (i) {
            case 0:
                if (y.gte(2e13)) x = y.div(2e13).max(1).log(1.1).max(0).root(1.1).scaleEvery('prestige0',true).add(1)
                break;
            case 1:
                if (y.gte(4)) x = y.sub(4).div(2).max(0).root(1.5).scaleEvery('prestige1',true).add(1)
                break
            default:
                x = E(0)
                break;
        }
        return x.floor()
    },
    unl: [
        _=>true,
        _=>true,
    ],
    noReset: [
        _=>hasUpgrade('br',11),
        _=>false,
    ],
    rewards: [
        {
            "1": `使到五重质量软上限为止的所有质量软上限延迟10次方出现。`,
            "2": `量子碎片的基础效果指数增加0.5。`,
            "3": `使量子泡沫和死寂碎片获取速度变为原来的4倍。`,
            "5": `使量子之前所有资源获取速度变为原来的2次方(在计算削弱之前生效)。`,
            "6": `使时间速度倍率的软上限延迟100次方出现。`,
            "8": `使质量获取速度的五重软上限基于转生等级而延迟出现。`,
            "10": `使相对论能量的获取速度基于转生等级而增加。`,
            "12": `使强化器效果的二重软上限弱化7.04%。`,
            "15": `使三重阶层2的奖励变得滥强。`,
            "18": `使计算转生基础值时级别的数值翻倍。`,
            "24": `使宇宙弦的超级折算弱化20%。`,
            "28": `移除胶子升级4的所有软上限。`,
            "32": `使转生基础值的指数基于转生等级而增加。`,
            "40": `使铬(24Cr)的效果略微增加。`,
        },
        {
            "1": `使所有星辰相关资源获取速度变为原来的2次方。`,
            "2": `使超新星的元折算延迟100次出现。`,
            "3": `使玻色子的加成基于转生基础值而增加。`,
            "4": `所有原基粒子获得5级免费等级。`,
            "5": `使五重阶层5的奖励基于转生基础值变得更强。`,
            "7": `使夸克获取速度基于荣耀的数值而增加。`,
        },
    ],
    rewardEff: [
        {
            "8": [_=>{
                let x = player.prestiges[0].root(2).div(2).add(1)
                return x
            },x=>"延迟"+x.format()+"次方"],
            "10": [_=>{
                let x = Decimal.pow(2,player.prestiges[0])
                return x
            },x=>x.format()+"倍"],
            "32": [_=>{
                let x = player.prestiges[0].div(1e4).toNumber()
                return x
            },x=>"+"+format(x)+"次方"],
            /*
            "1": [_=>{
                let x = E(1)
                return x
            },x=>{
                return x.format()+"x"
            }],
            */
        },
        {
            "3": [_=>{
                let x = tmp.prestiges.base.max(1).log10().div(10).add(1).root(2)
                return x
            },x=>""+x.format()+"次方"],
            "5": [_=>{
                let x = tmp.prestiges.base.max(1).log10().div(10).add(1).root(3)
                return x
            },x=>""+x.format()+"倍"],
            "7": [_=>{
                let x = player.prestiges[1].add(1).root(3)
                return x
            },x=>""+x.format()+"次方"],
        },
    ],
    reset(i) {
        if (i==0?tmp.prestiges.base.gte(tmp.prestiges.req[i]):player.prestiges[i-1].gte(tmp.prestiges.req[i])) {
            player.prestiges[i] = player.prestiges[i].add(1)

            if (!this.noReset[i]()) {
                for (let j = i-1; j >= 0; j--) {
                    player.prestiges[j] = E(0)
                }
                QUANTUM.enter(false,true,false,true)
            }
            
            updateRanksTemp()
        }
    },
}

const PRES_LEN = PRESTIGES.fullNames.length

function hasPrestige(x,y) { return player.prestiges[x].gte(y) }

function prestigeEff(x,y,def=E(1)) { return tmp.prestiges.eff[x][y] || def }

function updateRanksTemp() {
    if (!tmp.ranks) tmp.ranks = {}
    for (let x = 0; x < RANKS.names.length; x++) if (!tmp.ranks[RANKS.names[x]]) tmp.ranks[RANKS.names[x]] = {}
    let fp2 = tmp.qu.chroma_eff[1]
    let fp = RANKS.fp.rank()
    tmp.ranks.rank.req = E(10).pow(player.ranks.rank.div(fp2).scaleEvery('rank').div(fp).pow(1.15)).mul(10)
    tmp.ranks.rank.bulk = E(0)
    if (player.mass.gte(10)) tmp.ranks.rank.bulk = player.mass.div(10).max(1).log10().root(1.15).mul(fp).scaleEvery('rank',true).mul(fp2).add(1).floor();
    tmp.ranks.rank.can = player.mass.gte(tmp.ranks.rank.req) && !CHALS.inChal(5) && !CHALS.inChal(10) && !FERMIONS.onActive("03")

    fp = RANKS.fp.tier()
    tmp.ranks.tier.req = player.ranks.tier.div(fp2).scaleEvery('tier').div(fp).add(2).pow(2).floor()
    tmp.ranks.tier.bulk = player.ranks.rank.max(0).root(2).sub(2).mul(fp).scaleEvery('tier',true).mul(fp2).add(1).floor();

    fp = E(1)
    let pow = 2
    if (hasElement(44)) pow = 1.75
    if (hasElement(9)) fp = fp.mul(1/0.85)
    if (player.ranks.pent.gte(1)) fp = fp.mul(1/0.85)
    if (hasElement(72)) fp = fp.mul(1/0.85)
    tmp.ranks.tetr.req = player.ranks.tetr.div(fp2).scaleEvery('tetr').div(fp).pow(pow).mul(3).add(10).floor()
    tmp.ranks.tetr.bulk = player.ranks.tier.sub(10).div(3).max(0).root(pow).mul(fp).scaleEvery('tetr',true).mul(fp2).add(1).floor();

    fp = E(1)
    pow = 1.5
    tmp.ranks.pent.req = player.ranks.pent.scaleEvery('pent').div(fp).pow(pow).add(15).floor()
    tmp.ranks.pent.bulk = player.ranks.tetr.sub(15).gte(0)?player.ranks.tetr.sub(15).max(0).root(pow).mul(fp).scaleEvery('pent',true).add(1).floor():E(0);

    for (let x = 0; x < RANKS.names.length; x++) {
        let rn = RANKS.names[x]
        if (x > 0) {
            tmp.ranks[rn].can = player.ranks[RANKS.names[x-1]].gte(tmp.ranks[rn].req)
        }
    }

    // Prestige

    tmp.prestiges.baseMul = PRESTIGES.base()
    tmp.prestiges.baseExp = PRESTIGES.baseExponent()
    tmp.prestiges.base = tmp.prestiges.baseMul.pow(tmp.prestiges.baseExp)
    for (let x = 0; x < PRES_LEN; x++) {
        tmp.prestiges.req[x] = PRESTIGES.req(x)
        for (let y in PRESTIGES.rewardEff[x]) {
            if (PRESTIGES.rewardEff[x][y]) tmp.prestiges.eff[x][y] = PRESTIGES.rewardEff[x][y][0]()
        }
    }
}

function updateRanksHTML() {
    tmp.el.rank_tabs.setDisplay(hasUpgrade('br',9))
    for (let x = 0; x < 2; x++) {
        tmp.el["rank_tab"+x].setDisplay(tmp.rank_tab == x)
    }

    if (tmp.rank_tab == 0) {
        for (let x = 0; x < RANKS.names.length; x++) {
            let rn = RANKS.names[x]
            let unl = RANKS.unl[rn]?RANKS.unl[rn]():true
            tmp.el["ranks_div_"+x].setDisplay(unl)
            if (unl) {
                let keys = Object.keys(RANKS.desc[rn])
                let desc = ""
                for (let i = 0; i < keys.length; i++) {
                    if (player.ranks[rn].lt(keys[i])) {
                        desc = `在${RANKS.fullNames[x]}${format(keys[i],0)}，将${RANKS.desc[rn][keys[i]]}`
                        break
                    }
                }
    
                tmp.el["ranks_scale_"+x].setTxt(getScalingName(rn))
                tmp.el["ranks_amt_"+x].setTxt(format(player.ranks[rn],0))
                tmp.el["ranks_"+x].setClasses({btn: true, reset: true, locked: !tmp.ranks[rn].can})
                tmp.el["ranks_desc_"+x].setTxt(desc)
                tmp.el["ranks_req_"+x].setTxt(x==0?formatMass(tmp.ranks[rn].req):RANKS.fullNames[x-1]+" "+format(tmp.ranks[rn].req,0))
                tmp.el["ranks_auto_"+x].setDisplay(RANKS.autoUnl[rn]())
                tmp.el["ranks_auto_"+x].setTxt(player.auto_ranks[rn]?"ON":"OFF")
            }
        }
    }
    if (tmp.rank_tab == 1) {
        tmp.el.pres_base.setHTML(`${tmp.prestiges.baseMul.format(0)}<sup>${format(tmp.prestiges.baseExp)}</sup> = ${tmp.prestiges.base.format(0)}`)

        for (let x = 0; x < PRES_LEN; x++) {
            let unl = PRESTIGES.unl[x]?PRESTIGES.unl[x]():true

            tmp.el["pres_div_"+x].setDisplay(unl)

            if (unl) {
                let p = player.prestiges[x] || E(0)
                let keys = Object.keys(PRESTIGES.rewards[x])
                let desc = ""
                for (let i = 0; i < keys.length; i++) {
                    if (p.lt(keys[i])) {
                        desc = `在${PRESTIGES.fullNames[x]}${format(keys[i],0)}，将${PRESTIGES.rewards[x][keys[i]]}`
                        break
                    }
                }

                tmp.el["pres_scale_"+x].setTxt(getScalingName("prestige"+x))
                tmp.el["pres_amt_"+x].setTxt(format(p,0))
                tmp.el["pres_"+x].setClasses({btn: true, reset: true, locked: x==0?tmp.prestiges.base.lt(tmp.prestiges.req[x]):player.prestiges[x-1].lt(tmp.prestiges.req[x])})
                tmp.el["pres_desc_"+x].setTxt(desc)
                tmp.el["pres_req_"+x].setTxt(x==0?format(tmp.prestiges.req[x],0)+"转生基础值":PRESTIGES.fullNames[x-1]+" "+format(tmp.prestiges.req[x],0))
                tmp.el["pres_auto_"+x].setDisplay(false)
                tmp.el["pres_auto_"+x].setTxt(false?"ON":"OFF")
            }
        }
    }
}