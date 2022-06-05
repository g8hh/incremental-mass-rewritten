const BIG_RIP = {
    rip() {
        if (!player.qu.rip.active && player.confirms.br) if (!confirm(`您确定要使维度大撕裂吗？
        大撕裂维度后，熵的加成失效，所有原基粒子的效果减半，艾普西隆粒子完全失效，中子树升级[qu2]和[qu10]失效，并且您强制以[10,2,10,10,5,0,2,10]的配置进行量子挑战。
        但大撕裂维度后，您可以根据质量获得死寂碎片。
        您可以使用死寂碎片解锁新升级。`)) return
        if (player.qu.rip.active) player.qu.rip.amt = player.qu.rip.amt.add(tmp.rip.gain)
        player.qu.qc.active = false
        player.qu.rip.first = true
        player.qu.rip.active = !player.qu.rip.active
        QUANTUM.enter(false,true,true)
    },
    gain() {
        let x = player.mass.add(1).log10().div(2e5).max(0)
        if (!player.qu.rip.active || x.lt(1)) return E(0)
        if (hasTree('br1')) x = x.mul(treeEff('br1'))
        if (hasElement(90)) x = x.mul(tmp.elements.effect[90]||1)
        if (hasElement(94)) x = x.mul(tmp.elements.effect[94]||1)
        if (hasPrestige(0,2)) x = x.mul(4)
        return x.floor()
    },
}

const BIG_RIP_QC = [10,2,10,10,5,0,2,10]

function updateBigRipTemp() {
    tmp.rip.gain = BIG_RIP.gain()
}