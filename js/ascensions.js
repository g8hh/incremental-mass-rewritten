const ASCENSIONS = {
    names: ['ascension'],
    fullNames: ["飞升"],
    resetName: ['飞升'],
    baseExponent() {
        let x = 0

        x += 1

        return x
    },
    base() {
        let x = E(1)

        for (let i = 0; i < PRESTIGES.names.length; i++) {
            let r = player.prestiges[i]
            x = x.mul(r.add(1).ln().add(1))
        }

        return x.sub(1)
    },
    req(i) {
        let x = EINF, fp = this.fp(i), y = player.ascensions[i]
        switch (i) {
            case 0:
                x = Decimal.pow(1.1,y.div(fp).pow(1.1)).mul(1600)
                break;
            default:
                x = EINF
                break;
        }
        return x.ceil()
    },
    bulk(i) {
        let x = E(0), y = i==0?tmp.ascensions.base:player.ascensions[i-1], fp = this.fp(i)
        switch (i) {
            case 0:
                if (y.gte(1600)) x = y.div(1600).max(1).log(1.1).max(0).root(1.1).mul(fp).add(1)
                break;
            default:
                x = E(0)
                break;
        }
        return x.floor()
    },
    fp(i) {
        let fp = 1
        return fp
    },
    unl: [
        ()=>true,
    ],
    noReset: [
        ()=>false,
    ],
    autoUnl: [
        ()=>false,
    ],
    autoSwitch(x) { player.auto_asc[x] = !player.auto_asc[x] },
    rewards: [
        {
            1: `使时间速度和所有质量升级(除了溢出)与相应免费升级的加成从相加变为相乘。使道尔顿定理变得更强。`,
            2: `使费米子的元折算延迟2次方出现。`,
        },
    ],
    rewardEff: [
        {
            
        },
    ],
    reset(i, bulk = false) {
        let b = this.bulk(i)
        if (i==0?tmp.ascensions.base.gte(tmp.ascensions.req[i]):player.ascensions[i-1].gte(tmp.ascensions.req[i])) if (!bulk || b.gt(player.ascensions[i]) ) {
            if (bulk) player.ascensions[i] = b
            else player.ascensions[i] = player.ascensions[i].add(1)

            if (!this.noReset[i]()) {
                for (let j = i-1; j >= 0; j--) {
                    player.ascensions[j] = E(0)
                }
                INF.doReset()
            }
            
            updateRanksTemp()
        }
    },
}

function hasAscension(i,x) { return player.ascensions[i].gte(x) }

function setupAscensionsHTML() {
    let new_table = new Element("asc_table")
	table = ""
	for (let x = 0; x < ASCENSIONS.names.length; x++) {
		table += `<div style="width: 300px" id="asc_div_${x}">
			<button id="asc_auto_${x}" class="btn" style="width: 80px;" onclick="ASCENSIONS.autoSwitch(${x})">OFF</button>
			<span id="asc_scale_${x}""></span>${ASCENSIONS.fullNames[x]} <span id="asc_amt_${x}">X</span><br><br>
			<button onclick="ASCENSIONS.reset(${x})" class="btn reset" id="asc_${x}">
				进行${ASCENSIONS.resetName[x]}(强制前往无限)，但提升${ASCENSIONS.fullNames[x]}。<span id="asc_desc_${x}"></span><br>
				Req: <span id="asc_req_${x}">X</span>
			</button>
		</div>`
	}
	new_table.setHTML(table)

    new_table = new Element("asc_rewards_table")
	table = ""
	for (let x = 0; x < ASCENSIONS.names.length; x++) {
		table += `<div id="asc_reward_div_${x}">`
		let keys = Object.keys(ASCENSIONS.rewards[x])
		for (let y = 0; y < keys.length; y++) {
			table += `<span id="asc_reward_${x}_${y}"><b>${ASCENSIONS.fullNames[x]} ${keys[y]}:</b> ${ASCENSIONS.rewards[x][keys[y]]}${ASCENSIONS.rewardEff[x][keys[y]]?`目前效果：<span id='asc_eff_${x}_${y}'></span>`:""}</span><br>`
		}
		table += `</div>`
	}
	new_table.setHTML(table)
}

function updateAscensionsHTML() {
    tmp.el.asc_base.setHTML(`${tmp.ascensions.baseMul.format(0)}<sup>${format(tmp.ascensions.baseExp)}</sup> = ${tmp.ascensions.base.format(0)}`)

    for (let x = 0; x < ASCENSIONS.names.length; x++) {
        let unl = ASCENSIONS.unl[x]?ASCENSIONS.unl[x]():true
        tmp.el["asc_div_"+x].setDisplay(unl)
        if (unl) {
            let p = player.ascensions[x] || E(0)
            let keys = Object.keys(ASCENSIONS.rewards[x])
            let desc = ""
            for (let i = 0; i < keys.length; i++) {
                if (p.lt(keys[i]) && (tmp.chal13comp || p.lte(Infinity))) {
                    desc = `${ASCENSIONS.fullNames[x]}${format(keys[i],0)}时，${ASCENSIONS.rewards[x][keys[i]]}`
                    break
                }
            }
            tmp.el["asc_scale_"+x].setTxt(getScalingName("ascension"+x))
            tmp.el["asc_amt_"+x].setTxt(format(p,0))
            tmp.el["asc_"+x].setClasses({btn: true, reset: true, locked: x==0?tmp.ascensions.base.lt(tmp.ascensions.req[x]):player.ascensions[x-1].lt(tmp.ascensions.req[x])})
            tmp.el["asc_desc_"+x].setTxt(desc)
            tmp.el["asc_req_"+x].setTxt(x==0?format(tmp.ascensions.req[x],0)+"飞升基础值":ASCENSIONS.fullNames[x-1]+format(tmp.ascensions.req[x],0))
            tmp.el["asc_auto_"+x].setDisplay(ASCENSIONS.autoUnl[x]())
            tmp.el["asc_auto_"+x].setTxt(player.auto_pres[x]?"ON":"OFF")
        }
    }
}

function updateAscensionsTemp() {
    tmp.ascensions.baseMul = ASCENSIONS.base()
    tmp.ascensions.baseExp = ASCENSIONS.baseExponent()
    tmp.ascensions.base = tmp.ascensions.baseMul.pow(tmp.ascensions.baseExp)
    for (let x = 0; x < PRES_LEN; x++) {
        tmp.ascensions.req[x] = ASCENSIONS.req(x)
        for (let y in ASCENSIONS.rewardEff[x]) {
            if (ASCENSIONS.rewardEff[x][y]) tmp.ascensions.eff[x][y] = ASCENSIONS.rewardEff[x][y][0]()
        }
    }
}

function updateAscensionsRewardHTML() {
	let c16 = tmp.c16active
	// tmp.el["asc_reward_name"].setTxt(ASCENSIONS.fullNames[player.asc_reward])
	for (let x = 0; x < ASCENSIONS.names.length; x++) {
		tmp.el["asc_reward_div_"+x].setDisplay(player.asc_reward == x)
		if (player.asc_reward == x) {
			let keys = Object.keys(ASCENSIONS.rewards[x])
			for (let y = 0; y < keys.length; y++) {
				let unl = player.ascensions[x].gte(keys[y])
				tmp.el["asc_reward_"+x+"_"+y].setDisplay(unl)
				if (unl) {
					tmp.el["asc_reward_"+x+"_"+y].setClasses({corrupted_text2: false})
					if (tmp.el["asc_eff_"+x+"_"+y]) {
						let eff = ASCENSIONS.rewardEff[x][keys[y]]
						tmp.el["asc_eff_"+x+"_"+y].setHTML(eff[1](tmp.ascensions.eff[x][keys[y]]))
					}
				}
			}
		}
	}
}