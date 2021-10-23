/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //主界面等
    'Loading game...': '载入游戏中……',
    'Main': '主要',
    'Stats': '统计',
    'Upgrades': '升级',
    'Challenges': '挑战',
    'Atom': '原子',
    'Options': '选项',
    'Mass': '质量',
    'Black Hole': '黑洞',
    'Atomic Generator': '原子发生器',
    'Ranks Rewards': '级别奖励',
    'Scaling': '折算',
    'Particles': '粒子',
    'Elements': '元素',
    'Mass Dilation': '质量膨胀',
    'Buy Max': '最大化购买',
    'ON': '开启',
    'OFF': '关闭',
    'softcapped': '受软上限限制',
    'Require over 1e9 tonne of mass to reset previous features for gain Rage Powers': '需要超过1e9吨质量才可以进行狂怒重置，重置之前的所有内容，获得狂怒能量',
    'Require over 1e20 Rage Power to reset all previous features for gain Dark Matters': '需要超过1e20狂怒能量才可以进行暗能量重置，重置之前的所有内容，获得暗能量',
    'Require over 1e100 uni of black hole to reset all previous features for gain Atoms & Quarks': '需要黑洞质量超过1e100宇宙才可以进行原子重置，重置之前的所有内容，获得原子和夸克',
    'Dilate mass, then cancel': '使质量膨胀，然后再取消',
    'Rank up.': '提升级别。',
    'Tier up.': '提升阶层。',
    'Tetr up.': '提升三重阶层。',
    'unlock mass upgrade 1.': '解锁质量升级1。',
    'unlock mass upgrade 2, reduce mass upgrade 1 cost scaled by 20%.': '解锁质量升级2，使质量升级1的花费折算弱化20%。',
    'unlock mass upgrade 3, reduce mass upgrade 2 cost scaled by 20%, mass upgrade 1 boosts itself.': '解锁质量升级3，使质量升级2的花费折算弱化20%，质量升级1的效果对自身生效。',
    'unlock mass upgrade 3, reduce mass upgrade 2 cost scaled by 20%, mass upgrade 1 boosts itself. Currently': '解锁质量升级3，使质量升级2的花费折算弱化20%，质量升级1的效果对自身生效。目前效果',
    'reduce mass upgrade 3 cost scale by 20%.': '使质量升级3的花费折算弱化20%。',
    'mass upgrade 2 boosts itself.': '质量升级2的效果对自身生效。',
    'mass upgrade 2 boosts itself. Currently': '质量升级2的效果对自身生效。目前效果',
    'make mass gain is boosted by (x+1)^2, where x is rank.': '使质量获取速度乘以(级别+1)的平方。',
    'make mass gain is boosted by (x+1)^2, where x is rank. Currently': '使质量获取速度乘以(级别+1)的平方。目前效果',
    'triple mass gain.': '使质量获取速度变为原来的3倍。',
    'double Rage Powers gain.': '使狂怒能量获取速度翻倍。',
    'make rank 6 reward effect is better. [(x+1)^2 -> (x+1)^x^1/3]': '使级别6的奖励公式变得更好。即原公式的指数从2变为级别的1/3次方。',
    'make mass upgrade 3 softcap start 1.2x later.': '使质量升级3的软上限延迟1.2倍出现。',
    'adds tickspeed power based on ranks.': '基于级别的数值，增加时间速度倍率。',
    'adds tickspeed power based on ranks. Currently': '基于级别的数值，增加时间速度倍率。目前效果',
    'ranks boosts Rage Powers gain.': '级别可以加成狂怒能量获取速度。',
    'ranks boosts Rage Powers gain. Currently': '级别可以加成狂怒能量获取速度。目前效果',
    'rank 40 reward is stronger.': '级别40的奖励变得更好。',
    'mass gain is raised by 1.025.': '质量获取速度变为原来的1.025次方。',
    'rank 40 reward is overpowered.': '级别40的奖励变得滥强。',
    'rank multiplie quark gain.': '级别可以加成夸克获取速度。',
    'rank multiplie quark gain. Currently': '级别可以加成夸克获取速度。目前效果',
    'rank multiplie mass gain.': '级别可以加成质量获取速度。',
    'rank multiplie mass gain. Currently': '级别可以加成质量获取速度。目前效果',
    'make mass gain softcap 0.25% weaker based on rank.': '基于级别的数值，使质量获取速度的软上限弱化0.25%。',
    'make mass gain softcap 0.25% weaker based on rank. Currently': '基于级别的数值，使质量获取速度的软上限弱化0.25%。目前效果',
    'reduce rank reqirements by 20%.': '使级别的需求减少20%。',
    'raise mass gain by 1.15': '质量获取速度变为原来的1.15次方。',
    'reduce all mass upgrades cost scale by 20%.': '使所有质量升级的花费折算弱化20%。',
    'adds +5% tickspeed power for every tier you have, softcaps at +40%.': '每有1个阶层，时间速度倍率就增加5%，在增加40%时达到软上限。',
    'adds +5% tickspeed power for every tier you have, softcaps at +40%. Currently': '每有1个阶层，时间速度倍率就增加5%，在增加40%时达到软上限。目前效果',
    'make rage powers boosted by tiers.': '阶层可以加成狂怒能量。',
    'make rage powers boosted by tiers. Currently': '阶层可以加成狂怒能量。目前效果',
    'make tier 6\'s reward effect stronger by dark matters.': '使阶层6的奖励效果基于暗能量的数值变得更强。',
    'make tier 6\'s reward effect stronger by dark matters. Currently': '使阶层6的奖励效果基于暗能量的数值变得更强。目前效果',
    'make tier 4\'s reward effect twice effective and remove softcap.': '使阶层4的奖励效果翻倍，且移除软上限。',
    'stronger effect\'s softcap is 10% weaker.': '强化器效果的软上限弱化10%。',
    'reduce tier reqirements by 25%, make Hyper Rank scaling is 15% weaker.': '使阶层的需求减少25%，级别的究极折算弱化15%。',
    'mass upgrade 3 boosts itself.': '质量升级3的效果对自身生效。',
    'mass upgrade 3 boosts itself. Currently': '质量升级3的效果对自身生效。目前效果',
    'raise tickspeed effect by 1.05.': '时间速度效果变为原来的1.05次方。',
    'Super Rank scale weaker based on Tier, Super Tier scale 20% weaker.': '级别的超级折算基于阶层的数值而弱化，阶层的超级折算弱化20%。',
    'Super Rank scale weaker based on Tier, Super Tier scale 20% weaker. Currently': '级别的超级折算基于阶层的数值而弱化，阶层的超级折算弱化20%。目前效果',
    'Super': '超级折算',
    'Hyper': '究级折算',
    'Ultra': '超究折算',
    'Super ': '超级折算',
    'Hyper ': '究级折算',
    'Ultra ': '超究折算',
    'Muscler [': '锻体器[',
    'Booster [': '助推器[',
    'Stronger [': '强化器[',
    'Tickspeeds [': '时间速度[',
    ' Rage Points': '狂怒能量',
    'Tickspeed Power': '时间速度倍率',
    'Tickspeed Effect': '时间速度效果',
    'After ': '当到达',
    ' of mass gain will softcap mass gain!': '的质量获取速度以后，质量获取速度将受到软上限限制！',
    'You have ': '您拥有',
    ' of Black Hole': '黑洞',
    'Which multiplies mass gain by ': '它将质量获取速度乘以',
    'Black Hole mass\'s gain formula - (x + 1': '黑洞质量获取公式为：(x + 1',
    'Black Hole Condensers [': '黑洞压缩器[',
    ' Dark Matters': '暗能量',
    'BH Condenser Power': '黑洞压缩器倍率',
    ' worth of mass gain from Black Hole, mass gain will be softcapped!': '的黑洞质量获取速度以后，质量获取速度将受到软上限限制！',
    ' Atomic Power': '原子能量',
    'Which provides ': '它使您获得了',
    ' free Tickspeeds': '个免费时间速度升级',
    'Gamma Rays [': '伽马射线[',
    ' Atoms': '原子',
    'Gamma Ray Power': '伽马射线倍率',
    'Gamma Ray Effect': '伽马射线效果',
    'Hint: Click any image for show challenge description.': '提示：点击图片以查看挑战详情。',
    'Exit Challenge': '退出挑战',
    'Enter Challenge': '进入挑战',
    ' unassigned Quarks': '尚未分配的夸克',
    'Distribute': '分配',
    'Ratio Mode': '比例模式',
    ' Quark': '夸克',
    ' Relativistic particles': '相对论粒子',
    ' of dilated mass, which makes Tickspeed ': '膨胀质量，它使时间速度强化',
    ' stronger': '',
    'Dilate Mass': '质量膨胀',
    //主界面等结束

    //统计
    'Rank': '级别',
    'Tier': '阶层',
    'Mass Upgrades': '质量升级',
    'Tickspeed': '时间速度',
    'Black Hole Condenser': '黑洞压缩器',
    'Gamma Ray': '伽马射线',
    '): Starts at ': ')：开始次数为',
    //统计结束

    //升级
    'Rage Upgrades': '狂怒升级',
    'Boosters adds Musclers.': '助推器可以增加锻体器数量。',
    'Strongers adds Boosters.': '强化器可以增加助推器数量。',
    'You can automatically buys mass upgrades.': '您可以自动购买质量升级。',
    'Ranks no longer resets anything.': '级别不再重置任何东西。',
    'You can automatically rank up.': '您可以自动提升级别。',
    'You can automatically tier up.': '您可以自动提升阶层。',
    'For every 3 tickspeeds adds Stronger.': '每购买3次时间速度，就增加1个强化器。',
    'Super Mass Upgrades scaling is weaker by Rage Points.': '质量升级的超级折算基于狂怒能量的数值而弱化。',
    'Stronger Power is added +^0.25.': '强化器倍率的效果指数增加0.25',
    'Super Rank scaling is 20% weaker.': '级别的超级折算弱化20%。',
    'Black Hole mass\'s gain is boosted by Rage Points.': '黑洞质量的获取速度基于狂怒能量的数值变得更多。',
    'For every OoM of Rage Powers adds Stronger Power at a reduced rate.': '狂怒能量的数量级可以增加强化器倍率，只是效果倍率降低。',
    'Mass gain softcap starts 3x later for every Rank you have.': '每有1个级别，质量获取速度的软上限就延迟3倍出现。',
    'Hyper Tickspeed starts 50 later.': '时间速度的究极折算延迟50次出现。',
    'Mass boost Atom gain.': '质量可以加成原子获取速度。',
    'Black Hole Upgrades': '黑洞升级',
    'Mass Upgardes no longer spends mass.': '购买质量升级不再花费质量。',
    'Tickspeeds boosts BH Condenser Power.': '时间速度可以加成黑洞压缩器倍率。',
    'Super Mass Upgrade scales later based on mass of Black Hole.': '质量升级的超级折算基于黑洞质量的数值而延迟出现。',
    'Tiers no longer resets anything.': '阶层不再重置任何东西。',
    'You can automatically buy tickspeed and Rage Power upgrades.': '您可以自动购买时间速度升级和狂怒能量升级。',
    'Gain 100% of Rage Power gained from reset per second. Rage Powers are boosted by mass of Black Hole.': '每秒获得狂怒能量，数量为重置时获取数量的100%。狂怒能量获取速度基于黑洞质量的数值而增加。',
    'Mass gain softcap start later based on mass of Black Hole.': '质量获取速度的软上限基于黑洞质量的数值而延迟出现。',
    'Raise Rage Power gain by 1.15.': '狂怒能量获取速度变为原来的1.15次方。',
    'Stronger Effect\'s softcap start later based on unspent Dark Matters.': '强化器的软上限基于未花费的暗能量数值而延迟出现。',
    'Mass gain is boosted by OoM of Dark Matters.': '质量获取速度基于暗能量的数量级而增加。',
    'Mass gain softcap is 10% weaker.': '质量获取速度的软上限弱化10%。',
    'Hyper Mass Upgrade & Tickspeed scales 15% weaker.': '质量升级和时间速度的究极折算弱化15%。',
    'Quark gain is multiplied by 10.': '夸克获取速度变为原来的10倍。',
    'Neturon Powers boosts mass of Black Hole gain.': '中子能量可以加成黑洞质量获取速度。',
    'Atomic Powers adds Black Hole Condensers at a reduced rate.': '原子能量可以增加黑洞压缩器的数量，只是效果倍率降低。',
    'Atom Upgrades': '原子升级',
    'Start with Mass upgrades unlocked.': '初始状态下就解锁质量升级。',
    'You can automatically buy BH Condenser and upgrades. Tickspeed no longer spent Rage Powers.': '您可以自动购买黑洞压缩器和黑洞升级。购买时间速度不再花费狂怒能量。',
    '[Tetr Era] Unlock Tetr.': '[三重阶层纪元]解锁三重阶层。',
    'Keep 1-4 Challenge on reset. BH Condensers adds Gamma Rays Power at a reduced rate.': '重置时保留挑战1-挑战4的完成次数。黑洞压缩器可以增加伽马射线的数量，只是效果倍率降低。',
    'You can automatically Tetr up. Super Tier starts 10 later.': '您可以自动提升三重阶层。阶层的超级折算延迟10次出现。',
    'Gain 100% of Dark Matters gained from reset per second. Mass gain from Black Hole softcap starts later based on Atomic Powers.': '每秒获得暗能量，数量为重置时获取数量的100%。黑洞质量获取速度的软上限基于原子能量的数值而延迟出现。',
    'Tickspeed boost each particle powers gain.': '时间速度可以加成粒子能量的获取速度。',
    'Atomic Powers boosts Quark gain.': '原子能量可以加成夸克的获取速度。',
    'Stronger effect softcap is 15% weaker.': '强化器效果的软上限弱化15%。',
    'Tier requirement is halved. Hyper Rank starts later based on Tiers you have.': '阶层的需求减半。级别的究极折算基于目前的阶层数值而延迟出现。',
    //升级结束

    //挑战
    'Super Ranks, Mass Upgrades starts at 25. In addtional, Super Tickspeed start at 50.': '级别和质量升级的超级折算在25次就开始出现。另外，时间速度的超级折算在50次就开始出现。',
    'Reward: Super Ranks starts later, Super Tickspeed scaling weaker by completions.': '奖励：级别的超级折算更迟出现，时间速度的超级折算效果随着完成次数而弱化。',
    'You cannot buy Tickspeed.': '您无法购买时间速度。',
    'Reward: For every completions adds +7.5% to Tickspeed Power.': '奖励：每次完成该挑战，就使时间速度倍率增加7.5%。',
    'Mass gain softcap is divided by 1e150, and is stronger.': '质量获取速度软上限除以1e150，并且效果变得更严重。',
    'Reward: Mass gain are raised by completions, but cannot append while in this challenge!': '奖励：质量获取速度随着完成次数变为原来的一个指数，但在该挑战内此奖励无效！',
    'Rage Points gain is rooted by 10. In addtional, mass gain softcap is divided by 1e100.': '狂怒能量获取速度变为原来的十次方根。另外，质量获取速度软上限除以1e100。',
    'Reward: Rage Powers gain are raised by completions.': '奖励：狂怒能量获取速度随着完成次数变为原来的一个指数。',
    'You cannot rank up.': '您无法提升级别。',
    'Reward: Rank requirement are weaker by completions.': '奖励：级别的需求随着完成次数而降低。',
    'You cannot buy Tickspeed & BH Condenser.': '您无法购买时间速度和黑洞压缩器。',
    'Reward: For every completions adds +10% to Tickspeed & BH Condenser Power.': '奖励：每次完成该挑战，就使时间速度倍率和黑洞压缩器倍率增加10%。',
    'You cannot gain Rage Powers, but Dark Matters are gained by mass instead of Rage Powers at a reduced rate.': '您无法获得狂怒能量，但暗能量可以通过质量，而不是狂怒能量来获取，只是获取倍率降低。',
    'In addtional, mass gain softcap is stronger.': '另外，质量获取速度软上限的效果变得更严重。',
    'Reward: Completions adds 2 maximum completions of 1-4 Challenge.': '奖励：每次完成该挑战，就使挑战1-挑战4的次数上限增加2。',
    'On 16th completion, unlock Elements': '当完成第16次该挑战时，解锁元素',
    'Dark Matter & Mass from Black Hole gains are rooted by 8.': '通过黑洞获取的暗能量和质量变为原来的八次方根。',
    'Reward: Dark Matter & Mass from Black Hole gains are raised by completions.': '奖励：暗能量和黑洞质量获取速度随着完成次数变为原来的一个指数。',
    'On first completion, unlock 3 rows of Elements': '当完成第1次该挑战时，解锁3行元素',
    'Entering challenge will reset with Dark Matters!': '进入挑战时将同时进行暗能量重置！',
    'Entering challenge will reset with Atoms except previous challenges!': '进入挑战时将同时进行原子重置！但不会影响到之前挑战的完成次数。',
    //挑战结束

    //原子
    'Assign': '分配',
    ' Protons': '质子',
    ' Neutrons': '中子',
    ' Electrons': '电子',
    'Which generates ': '它可以产生',
    ' Protons Powers': '质子能量',
    ' Neutrons Powers': '中子能量',
    ' Electrons Powers': '电子能量',
    '[Hydrogen] Improves quark gain formula is better.': '[氢]增加夸克获取速度的公式变得更好。',
    '[Helium] Hardened Challenge scale 25% weaker.': '[氦]硬化挑战的折算效果弱化25%。',
    '[Lithium] Electron Power boost Atomic Powers gain.': '[锂]电子能量可以加成原子能量获取速度。',
    '[Beryllium] Stronger’s power is stronger based on Proton Powers.': '[铍]强化器倍率基于质子能量变得更多。',
    '[Boron] The 7th challenge’s effect is twice as effective.': '[硼]挑战7的奖励效果翻倍。',
    '[Carbon] Gain 1% more quarks for each challenge completion.': '[碳]每完成1次任意挑战，夸克获取速度就增加1%。',
    '[Nitrogen] Carbon’s effect is now multiplied by the number of elements bought.': '[氮]碳(6C)的效果乘以已经购买的元素数量。',
    '[Oxygen] C2’s reward’s softcap is 75% weaker.': '[氧]挑战2的奖励软上限弱化75%。',
    '[Fluorine] The Tetr requirement is 15% weaker.': '[氟]三重阶层的需求降低15%。',
    '[Neon] 3rd & 4th challenges’ scaling is weakened.': '[氖]挑战3和挑战4的折算弱化。',
    '[Sodium] Nitrogen’s multiplier is squared.': '[钠]氮(7N)的效果变为原来的平方。',
    '[Magnesium] Power’s gain from each particle formula is better.': '[镁]所有粒子的能量获取公式变得更好。',
    '[Aluminium] For every c7 completion, add 2 c5 & 6 completion.': '[铝]每完成1次挑战7，就使挑战5和挑战6的次数上限增加2。',
    '[Silicon] Passively gain 5% of the quarks you would get from resetting each second.': '[硅]每秒获得夸克，数量为重置时获取数量的5%。',
    '[Phosphorus] Super BH Condenser & Gamma Ray scales 20% weaker.': '[磷]黑洞压缩器和伽马射线的超级折算弱化20%。',
    '[Sulfur] Silicon now gets +2% for each element bought.': '[硫]每购买1种元素，就使硅(14Si)的效果数值增加2%。',
    '[Chlorine] Raise Atom’s gain by 1.1.': '[氯]使原子的获取速度变为原来的1.1次方。',
    '[Argon] You can now automatically buy gamma rays. Gamma ray raise tickspeed effect at an extremely reduced rate.': '[氩]您可以自动购买伽马射线。伽马射线可以增加时间速度效果，只是效果倍率极度降低。',
    '[Potassium] 2nd Neutron’s effect is better.': '[钾]中子的第2个效果变得更好。',
    '[Calcium] Adds 50 more C7 maximum completions.': '[钙]挑战7的次数上限增加50。',
    '[Scandium] Unlock Mass Dilation.': '[钪]解锁质量膨胀。',
    '[Titanium] Dilated mass gain is affected by tickspeed at a reduced rate.': '[钛]时间速度可以加成膨胀质量获取速度，只是效果倍率降低。',
    '[Vanadium] The Atomic Power effect is better.': '[钒]原子能量的效果变得更好。',
    '[Chromium] Passively gain 100% of the atoms you would get from resetting each second. Atomic Power boost Relativistic particles gain at a reduced rate.': '[铬]每秒获得原子，数量为重置时获取数量的100%。原子能量可以加成相对论粒子获取速度，只是效果倍率降低。',
    '[Manganese] Adds 1 base of Mass Dilation upgrade 1 effect.': '[锰]质量膨胀升级1的基础效果增加1倍。',
    '[Iron] Hardened Challenge scaling weaker for each element bought.': '[铁]硬化挑战的折算效果基于购买的元素数量而弱化。',
    '[Cobalt] Hyper/Ultra Rank & Tickspeed scales 25% weaker.': '[钴]级别和时间速度的究极折算和超究折算弱化25%。',
    '[Nickel] Mass gain is raised to the power of 1.5th if you dilated mass.': '[镍]如果正在进行质量膨胀，则质量获取速度变为原来的1.5次方。',
    '[Copper] Proton powers effect is better.': '[铜]质子能量的效果变得更好。',
    '[Zinc] Electron powers effect is better. Passively gain 10% of each particle you would assign quarks.': '[锌]电子能量的效果变得更好。自动获得每种粒子，数量为分配夸克时增加数量的10%。',
    '[Gallium] Dilated mass boost Relativistic particles gain.': '[镓]膨胀质量可以加成相对论粒子获取速度。',
    'inactive': '未激活',
    'Double dilated mass gain.': '使膨胀质量获取速度翻倍。',
    'Make dilated mass effect stronger.': '使膨胀质量的效果更好。',
    'Double relativistic particles gain.': '使相对论粒子获取数量翻倍。',
    'Dilated mass also boost Stronger’s power.': '膨胀质量可以加成强化器倍率。',
    'Mass Dilation upgrade 3 scales 10% weaker.': '质量膨胀升级3的折算弱化10%。',
    'Increase the exponent of the RP formula.': '增加相对论粒子公式的指数。',
    'Currently': '目前效果',
    //原子结束

    //选项
    'Save': '保存',
    'Hard Reset': '硬重置',
    'Export': '导出',
    'Export to clipboard': '导出到剪贴板',
    'Import': '导入',
    'Join Discord': '加入Discord频道',
    'Help': '帮助',
    'Font Settings': '字体设置',
    'Confirmation Settings': '确认窗口设置',
    'Notation Settings': '记数法设置',
    'Elemental': '元素记数法',
    'Scientific': '科学记数法',
    'Standard': '普通记数法',
    'Omega': 'Omega记数法',
    'Omega Short': 'Omega Short记数法',
    'Incremental Mass Rewritten v0.3.2.3.1 - made by MrRedShark77': '质量增量重制版v0.3.2.3.1 - 作者为MrRedShark77，由by22dgb汉化',
    'The game is inspired by Distance Incremental & Synergism': '本游戏灵感来自于距离增量及协同放置',
    'Hint 1: Hover top image above tabs to show description...': '提示1：鼠标停留在选项卡上方的图片以查看详情……',
    //选项结束
}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    ": ": "：",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "：",
    "： ": "：",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    "\n": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?(e[+\-]?\d?\.?\d+)?(e\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\s\d+(e\.\,\d+)?[A-Za-z]{0,4}(.*)$/, //处理数字及单位
    /^\d+(e\.\,\d+)+$/, //处理数字及单位
    /^\d+ \+ \d+$/, //处理数字及单位
    /^(.*)[\u4E00-\u9FFF]+(.*)$/, //不抓取内容
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^x to mass gain\s*$/, '倍质量获取速度'], //主界面等
    [/^\s*Cost$/, '需'], //主界面等
    [/^\s*Req$/, '需求'], //主界面等
    [/^\s*Muscler Power$/, '锻体器倍率'], //主界面等
    [/^\s*Muscler Effect$/, '锻体器效果'], //主界面等
    [/^\s*Booster Power$/, '助推器倍率'], //主界面等
    [/^\s*Booster Effect$/, '助推器效果'], //主界面等
    [/^x(.+) to Muscler Power$/, 'x$1倍锻体器倍率'], //主界面等
    [/^\s*Stronger Power$/, '强化器倍率'], //主界面等
    [/^\s*Stronger Effect$/, '强化器效果'], //主界面等
    [/^\^(.+) to Booster Power\s*$/, '^$1助推器倍率'], //主界面等
    [/^Cost: (.+) Rage Power$/, '花费：$1狂怒能量'], //升级等
    [/^Cost: (.+) Dark Matter$/, '花费：$1暗能量'], //升级等
    [/^Cost: (.+) Atom$/, '花费：$1原子'], //升级等
    [/^Currently: \+(.+) Musclers$/, '目前效果：增加$1锻体器'], //升级等
    [/^Currently: \+(.+) Boosters$/, '目前效果：增加$1助推器'], //升级等
    [/^Currently: \+(.+) Stronger$/, '目前效果：增加$1强化器'], //升级等
    [/^Currently: x(.*)$/, '目前效果：倍率为$1'], //升级等
    [/^Currently: \+(.+) later\s*$/, '目前效果：延迟$1次出现'], //升级等
    [/^Currently: (.+)x later$/, '目前效果：延迟$1倍出现'], //升级等
    [/^(.+) Completions \(\+1 at (.+) of Black Hole$/, '本次挑战可增加$1次完成次数(下一个完成次数在$2黑洞质量'], //挑战等
    [/^(.+) Completions \(\+1 at\s*(.*)$/, '本次挑战可增加$1次完成次数(下一个完成次数在$2'], //挑战等
    [/^Finish Challenge for \+(.+) Completions$/, '完成挑战，完成次数增加$1次'], //挑战等
    [/^Currently: \+(.+) later to Super Ranks, Super Tickspeed scaling (.+)% weaker$/, '目前效果：级别的超级折算延迟$1次出现，时间速度的超级折算弱化$2%'], //挑战等
    [/^Currently: \+(.+)%\s?$/, '目前效果：增加$1%'], //挑战等
    [/^Currently: \^(.*)$/, '目前效果：^$1'], //挑战等
    [/^Currently: (.+)% weaker\s?$/, '目前效果：降低$1%'], //挑战等
    [/^Currently: \+(.+)x\s?$/, '目前效果：增加$1倍'], //挑战等
    [/^Currently: \+(.+)$/, '目前效果：增加$1'], //挑战等
    [/^Multiplies Mass gain by\s*(.*)$/, '使质量获取速度乘以$1'], //原子等
    [/^Adds Tickspeed Power by (.+)%$/, '使时间速度倍率增加$1%'], //原子等
    [/^Multiplies Rage Power gain by\s*(.*)$/, '使狂怒能量获取速度乘以$1'], //原子等
    [/^Makes Mass gain boosted by Rage Powers - (.+)x$/, '使狂怒能量可以加成质量获取速度 - 倍率为$1倍'], //原子等
    [/^Multiplies Dark Matter gain by\s*(.*)$/, '使暗能量获取速度乘以$1'], //原子等
    [/^Adds BH Condenser Power by\s*(.*)$/, '使黑洞压缩器倍率增加$1'], //原子等
    [/^ Protons Powers, which:\s*$/, '质子能量，因此获得以下效果：'], //原子等
    [/^ Neutrons Powers, which:\s*$/, '中子能量，因此获得以下效果：'], //原子等
    [/^ Electrons Powers, which:\s*$/, '电子能量，因此获得以下效果：'], //原子等
    [/^Currently: (.+)x\s?$/, '目前效果：$1倍'], //原子等
    [/^Currently: (.+)x stronger$/, '目前效果：强化$1倍'], //原子等
    [/^\s*\[Level $/, '[等级：'], //原子等
    [/^Cancel for (.+) Relativistic particles$/, '取消质量膨胀后可获得$1相对论粒子'], //原子等
]);