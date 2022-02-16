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
    'Loading Offline Progress... (': '计算离线进度……(',
    'Okay': '好的',
    'x speed': '倍速度',
    'Main': '主要',
    'Stats': '统计',
    'Upgrades': '升级',
    'Challenges': '挑战',
    'Atom': '原子',
    'Supernova': '超新星',
    'Fermion Tier': '费米子阶层',
    'Options': '选项',
    'Mass': '质量',
    'Black Hole': '黑洞',
    'Atomic Generator': '原子发生器',
    'Stars': '星辰',
    'Ranks Rewards': '级别奖励',
    'Scaling': '折算',
    'Particles': '粒子',
    'Elements': '元素',
    'Mass Dilation': '质量膨胀',
    'Neutron Tree': '中子树',
    'Bosons': '玻色子',
    'Fermions': '费米子',
    'Radiation': '射线',
    'Buy Max': '最大化购买',
    'ON': '开启',
    'OFF': '关闭',
    'softcapped': '受软上限限制',
    'softcapped^2': '受二重软上限限制',
    'Require over 1e9 tonne of mass to reset previous features for gain Rage Powers': '需要超过1e9吨质量才可以进行狂怒重置，重置之前的所有内容，获得狂怒能量',
    'Require over 1e20 Rage Power to reset all previous features for gain Dark Matters': '需要超过1e20狂怒能量才可以进行暗物质重置，重置之前的所有内容，获得暗物质',
    'Require over 1e100 uni of black hole to reset all previous features for gain Atoms & Quarks': '需要黑洞质量超过1e100宇宙才可以进行原子重置，重置之前的所有内容，获得原子和夸克',
    'Dilate mass, then cancel': '使质量膨胀，然后再取消',
    'Rank up.': '提升级别。',
    'Tier up.': '提升阶层。',
    'Tetr up.': '提升三重阶层。',
    'Super': '超级折算',
    'Hyper': '究级折算',
    'Ultra': '超究折算',
    'Meta': '元折算',
    'Super ': '超级折算|',
    'Hyper ': '究级折算|',
    'Ultra ': '超究折算|',
    'Meta-': '元折算|',
    'Muscler [': '锻体器[',
    'Booster [': '助推器[',
    'Stronger [': '强化器[',
    'Tickspeeds [': '时间速度[',
    ' Rage Points': '狂怒能量',
    'Tickspeed Power': '时间速度倍率',
    'Tickspeed Effect': '时间速度效果',
    'After ': '当到达',
    ' of mass gain will softcap mass gain!': '的质量获取速度以后，质量获取速度将受到软上限限制！',
    ' of mass gain will softcap^2 mass gain!': '的质量获取速度以后，质量获取速度将受到二重软上限限制！',
    ' of mass gain will softcap^3 mass gain!': '的质量获取速度以后，质量获取速度将受到三重软上限限制！',
    'You have ': '您拥有',
    ' of Black Hole': '黑洞',
    'Which multiplies mass gain by ': '它将质量获取速度乘以',
    'Black Hole mass\'s gain formula - (x + 1': '黑洞质量获取公式为：(x + 1',
    'Black Hole Condensers [': '黑洞压缩器[',
    ' Dark Matters': '暗物质',
    'BH Condenser Power': '黑洞压缩器倍率',
    ' worth of mass gain from Black Hole, mass gain will be softcapped!': '的黑洞质量获取速度以后，质量获取速度将受到软上限限制！',
    ' Atomic Power': '原子能量',
    'Which provides ': '它使您获得了',
    ' free Tickspeeds': '个免费时间速度升级',
    'Cosmic Rays [': '宇宙射线[',
    ' Atoms': '原子',
    'Cosmic Ray Power': '宇宙射线倍率',
    'Cosmic Ray Effect': '宇宙射线效果',
    'You collapsed ': '您已经坍缩了',
    ' stars, which makes mass gain is multiplied based on every type of Ranks': '星辰，质量获取速度基于级别的种类而增加',
    ' of collapsed stars gain will softcap collapsed stars gain!': '的坍缩星辰以后，星辰获取速度将受到软上限限制！',
    //主界面等结束

    //统计
    'Rank': '级别',
    'Tier': '阶层',
    'Tetr': '三重阶层',
    'Pent': '五重阶层',
    'Mass Upgrades': '质量升级',
    'Tickspeed': '时间速度',
    'Black Hole Condenser': '黑洞压缩器',
    'Cosmic Ray': '宇宙射线',
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
    'Hyper Tickspeed starts 50 later.': '时间速度的究级折算延迟50次出现。',
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
    'Stronger Effect\'s softcap start later based on unspent Dark Matters.': '强化器的软上限基于未花费的暗物质数值而延迟出现。',
    'Mass gain is boosted by OoM of Dark Matters.': '质量获取速度基于暗物质的数量级而增加。',
    'Mass gain softcap is 10% weaker.': '质量获取速度的软上限弱化10%。',
    'Hyper Mass Upgrade & Tickspeed scales 15% weaker.': '质量升级和时间速度的究级折算弱化15%。',
    'Quark gain is multiplied by 10.': '夸克获取速度变为原来的10倍。',
    'Neutron Powers boosts mass of Black Hole gain.': '中子能量可以加成黑洞质量获取速度。',
    'Atomic Powers adds Black Hole Condensers at a reduced rate.': '原子能量可以增加黑洞压缩器的数量，只是效果倍率降低。',
    'Atom Upgrades': '原子升级',
    'Start with Mass upgrades unlocked.': '初始状态下就解锁质量升级。',
    'You can automatically buy BH Condenser and upgrades. Tickspeed no longer spent Rage Powers.': '您可以自动购买黑洞压缩器和黑洞升级。购买时间速度不再花费狂怒能量。',
    '[Tetr Era] Unlock Tetr.': '[三重阶层纪元]解锁三重阶层。',
    'Keep 1-4 Challenge on reset. BH Condensers adds Cosmic Rays Power at a reduced rate.': '重置时保留挑战1-挑战4的完成次数。黑洞压缩器可以增加宇宙射线的数量，只是效果倍率降低。',
    'You can automatically Tetr up. Super Tier starts 10 later.': '您可以自动提升三重阶层。阶层的超级折算延迟10次出现。',
    'Gain 100% of Dark Matters gained from reset per second. Mass gain from Black Hole softcap starts later based on Atomic Powers.': '每秒获得暗物质，数量为重置时获取数量的100%。黑洞质量获取速度的软上限基于原子能量的数值而延迟出现。',
    'Tickspeed boost each particle powers gain.': '时间速度可以加成粒子能量的获取速度。',
    'Atomic Powers boosts Quark gain.': '原子能量可以加成夸克的获取速度。',
    'Stronger effect softcap is 15% weaker.': '强化器效果的软上限弱化15%。',
    'Tier requirement is halved. Hyper Rank starts later based on Tiers you have.': '阶层的需求减半。级别的究级折算基于目前的阶层数值而延迟出现。',
    'Dilated mass also boost BH Condenser & Cosmic Ray powers at a reduced rate.': '膨胀质量可以加成黑洞压缩器倍率和宇宙射线倍率，只是效果倍率降低。',
    'Mass from Black Hole effect is better.': '黑洞质量效果变得更好。',
    //升级结束

    //挑战
    'Hint: Click any image to show challenge description. Click again to enter any challenge': '提示：点击图片以查看挑战详情。再次点击该挑战后将进入该挑战。',
    'Exit Challenge': '退出挑战',
    'Enter Challenge': '进入挑战',
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
    'You cannot gain Rage Powers, but Dark Matters are gained by mass instead of Rage Powers at a reduced rate.': '您无法获得狂怒能量，但暗物质可以通过质量，而不是狂怒能量来获取，只是获取倍率降低。',
    'In addtional, mass gain softcap is stronger.': '另外，质量获取速度软上限的效果变得更严重。',
    'Reward: Completions adds 2 maximum completions of 1-4 Challenge.': '奖励：每次完成该挑战，就使挑战1-挑战4的次数上限增加2。',
    'On 16th completion, unlock Elements': '当完成第16次该挑战时，解锁元素',
    'Dark Matter & Mass from Black Hole gains are rooted by 8.': '暗物质和黑洞质量变为原来的八次方根。',
    'Reward: Dark Matter & Mass from Black Hole gains are raised by completions.': '奖励：暗物质和黑洞质量获取速度随着完成次数变为原来的一个指数。',
    'On first completion, unlock 3 rows of Elements': '当完成第1次该挑战时，解锁3行元素',
    'You cannot assign quarks. In addtional, mass gains exponent is raised to 0.9th power.': '您无法分配夸克。另外，质量获取速度的指数变为原来的0.9次方。',
    'Reward: Improve Magnesium-12 better.': '奖励：镁(12Mg)的效果变得更好。',
    'All challenges 1-8 are applied at once. In addtional, you are trapped in Mass Dilation!': '挑战1-挑战8同时触发，并强制进行质量膨胀。',
    'Reward: The exponent of the RP formula is multiplied by completions. (this effect doesn\'t work while in this challenge': '奖励：相对论粒子公式的指数乘以该挑战的完成次数。(在该挑战内此奖励无效',
    'On first completion, unlock Fermions!': '当完成第1次该挑战时，解锁费米子！',
    'You cannot gain relativistic particles or dilated mass. However, you are stuck in Mass Dilation.': '您无法获得相对论粒子和膨胀质量。强制进行质量膨胀。',
    'Reward: Star Booster is stonger by completions.': '奖励：星辰发生器的效果随着完成次数变得更好。',
    'Entering challenge will reset with Dark Matters!': '进入挑战时将同时进行暗物质重置！',
    'Entering challenge will reset with Atoms except previous challenges!': '进入挑战时将同时进行原子重置！但不会影响到之前挑战的完成次数。',
    'Entering challenge will reset without being Supernova!': '进入挑战时将同时在未成为超新星的前提下重置！',
    //挑战结束

    //原子
    ' unassigned Quarks': '尚未分配的夸克',
    'Distribute': '分配',
    'Ratio Mode': '比例模式',
    ' Quark': '夸克',
    ' Relativistic particles': '相对论粒子',
    ' of dilated mass, which makes Tickspeed ': '膨胀质量，它使时间速度强化',
    ' stronger': '',
    'Dilate Mass': '质量膨胀',
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
    '[Beryllium] Stronger\'s power is stronger based on Proton Powers.': '[铍]强化器倍率基于质子能量变得更多。',
    '[Boron] The 7th challenge\'s effect is twice as effective.': '[硼]挑战7的奖励效果翻倍。',
    '[Carbon] Gain 1% more quarks for each challenge completion.': '[碳]每完成1次任意挑战，夸克获取速度就增加1%。',
    '[Nitrogen] Carbon\'s effect is now multiplied by the number of elements bought.': '[氮]碳(6C)的效果乘以已经购买的元素数量。',
    '[Oxygen] C2\'s reward\'s softcap is 75% weaker.': '[氧]挑战2的奖励软上限弱化75%。',
    '[Fluorine] The Tetr requirement is 15% weaker.': '[氟]三重阶层的需求降低15%。',
    '[Neon] 3rd & 4th challenges\' scaling is weakened.': '[氖]挑战3和挑战4的折算弱化。',
    '[Sodium] Nitrogen\'s multiplier is squared.': '[钠]氮(7N)的效果变为原来的平方。',
    '[Magnesium] Power\'s gain from each particle formula is better.': '[镁]所有粒子的能量获取公式变得更好。',
    '[Aluminium] For every c7 completion, add 2 c5 & 6 completion.': '[铝]每完成1次挑战7，就使挑战5和挑战6的次数上限增加2。',
    '[Silicon] Passively gain 5% of the quarks you would get from resetting each second.': '[硅]每秒获得夸克，数量为重置时获取数量的5%。',
    '[Phosphorus] Super BH Condenser & Cosmic Ray scales 20% weaker.': '[磷]黑洞压缩器和宇宙射线的超级折算弱化20%。',
    '[Sulfur] Silicon now gets +2% for each element bought.': '[硫]每购买1种元素，就使硅(14Si)的效果数值增加2%。',
    '[Chlorine] Raise Atom\'s gain by 1.1.': '[氯]使原子的获取速度变为原来的1.1次方。',
    '[Argon] You can now automatically buy Cosmic Rays. Cosmic Ray raise tickspeed effect at an extremely reduced rate.': '[氩]您可以自动购买宇宙射线。宇宙射线可以增加时间速度效果，只是效果倍率极度降低。',
    '[Potassium] 2nd Neutron\'s effect is better.': '[钾]中子的第2个效果变得更好。',
    '[Calcium] Adds 50 more C7 maximum completions.': '[钙]挑战7的次数上限增加50。',
    '[Scandium] Unlock Mass Dilation.': '[钪]解锁质量膨胀。',
    '[Titanium] Dilated mass gain is affected by tickspeed at a reduced rate.': '[钛]时间速度可以加成膨胀质量获取速度，只是效果倍率降低。',
    '[Vanadium] The Atomic Power effect is better.': '[钒]原子能量的效果变得更好。',
    '[Chromium] Passively gain 100% of the atoms you would get from resetting each second. Atomic Power boost Relativistic particles gain at a reduced rate.': '[铬]每秒获得原子，数量为重置时获取数量的100%。原子能量可以加成相对论粒子获取速度，只是效果倍率降低。',
    '[Manganese] Adds 1 base of Mass Dilation upgrade 1 effect.': '[锰]质量膨胀升级1的基础效果增加1倍。',
    '[Iron] Hardened Challenge scaling weaker for each element bought.': '[铁]硬化挑战的折算效果基于购买的元素数量而弱化。',
    '[Cobalt] Hyper/Ultra Rank & Tickspeed scales 25% weaker.': '[钴]级别和时间速度的究级折算和超究折算弱化25%。',
    '[Nickel] Mass gain is raised to the power of 1.5th if you dilated mass.': '[镍]如果正在进行质量膨胀，则质量获取速度变为原来的1.5次方。',
    '[Copper] Proton powers effect is better.': '[铜]质子能量的效果变得更好。',
    '[Zinc] Electron powers effect is better. Passively gain 10% of each particle you would assign quarks.': '[锌]电子能量的效果变得更好。自动获得每种粒子，数量为分配夸克时增加数量的10%。',
    '[Gallium] Dilated mass boost Relativistic particles gain.': '[镓]膨胀质量可以加成相对论粒子获取速度。',
    '[Germanium] Increase dilated mass gain exponent by 5%.': '[锗]膨胀质量获取速度的指数增加5%。',
    '[Arsenic] Add 50 more C8 maximum completions.': '[砷]挑战8的次数上限增加50。',
    '[Selenium] Rage power boost Relativistic particles gain.': '[硒]狂怒能量可以加成相对论粒子获取速度。',
    '[Bromine] Mass from Black Hole boost dilated mass gain.': '[溴]黑洞质量可以加成膨胀质量获取速度。',
    '[Krypton] Unlock Stars.': '[氪]解锁星辰。',
    '[Rubidium] Super Tier scale weaker based on Tetr.': '[铷]阶层的超级折算基于三重阶层的数值而弱化。',
    '[Strontium] Cosmic Ray\'s free tickspeeds now adds to RU7.': '[锶]通过宇宙射线获得的免费时间速度升级计入狂怒升级7。',
    '[Yttrium] Remove softcap from C2 & C6 effects.': '[钇]移除挑战2和挑战6奖励效果的软上限。',
    '[Zirconium] Collapsed star boost dilated mass gain.': '[锆]坍缩星辰可以加成膨胀质量获取速度。',
    '[Niobium] Add 50 more C7 maximum completions.': '[铌]挑战7的次数上限增加50。',
    '[Molybdenum] Collapsed star boost quark gain.': '[钼]坍缩星辰可以加成夸克获取速度。',
    '[Technetium] You can now automatically buy mass dilation upgrades if you purchased any first. They no longer spent dilated mass.': '[锝]只要您购买过相应的质量膨胀升级，就可以自动购买它们。购买质量膨胀升级不再花费膨胀质量。',
    '[Ruthenium] The Tetr requirement is broken.': '[钌]三重阶层的需求大幅降低。',
    '[Rhodium] Collapsed star boost relativistic particles gain.': '[铑]坍缩星辰可以加成相对论粒子获取速度。',
    '[Palladium] Collapsed star\'s effect boost mass gain from the black hole at a reduced rate.': '[钯]坍缩星辰可以加成黑洞质量获取速度，只是效果倍率降低。',
    '[Silver] Quarks gain is raised to the 1.05th power.': '[银]夸克获取速度变为原来的1.05次方。',
    '[Cadmium] Collapsed stars effect is 10% stronger.': '[镉]坍缩星辰效果增加10%。',
    '[Indium] Collapsed star boost last type of stars.': '[铟]坍缩星辰可以加强最后一种星辰。',
    '[Tin] Star generator is now ^1.05 stronger.': '[锡]星辰发生器的速度变为原来的1.05次方。',
    '[Antimony] Mass gain softcap^2 is 10% weaker.': '[锑]质量获取速度的二重软上限效果弱化10%。',
    '[Tellurium] Mass of black hole boost atomic powers gain at a reduced rate.': '[碲]黑洞质量可以加成原子能量，只是效果倍率降低。',
    '[Iodine] Mass Dilation upgrade 6 is 75% stronger.': '[碘]质量膨胀升级6的效果增加75%。',
    '[Xenon] Collapsed stars boost all-star resources at a reduced rate.': '[氙]坍缩星辰可以加成所有星辰相关资源，只是效果倍率降低。',
    '[Caesium] Hyper/Ultra BH Condenser & Cosmic Ray scale 25% weaker.': '[铯]黑洞压缩器和宇宙射线的究级和超究折算弱化25%。',
    '[Barium] Add 200 more C8 maximum completions.': '[钡]挑战8的次数上限增加200。',
    '[Lanthanum] Tickspeed power boost base from Star Booster at a reduced rate.': '[镧]时间速度倍率可以加成星辰发生器的基础加成，只是效果倍率降低。',
    '[Cerium] Ultra Rank & Tickspeed scales weaker based on Tier.': '[铈]级别和时间速度的超究折算基于阶层的数值而弱化。',
    '[Praseodymium] The power from the mass of the BH formula is increased to 0.45.': '[镨]黑洞质量公式中，指数增加为0.45。',
    '[Neodymium] Add 100 more C7 maximum completions.': '[钕]挑战7的次数上限增加100。',
    '[Promethium] Multiply Particle Powers gain by ^0.5 of its Particle\'s amount after softcap.': '[钷]使粒子能量的获取速度在到达软上限以后，乘以粒子数量的0.5次方。',
    '[Samarium] Ultra Rank scale 3 later for every Supernova.': '[钐]每有一次成为超新星，级别的超究折算就延迟3次出现。',
    '[Europium] Non-bonus Tickspeed is 25x effective.': '[铕]非加成的时间速度效果变为原来的25倍。',
    '[Gadolinium] Rewards from Challenges 3-4 & 8 are 50% effective.': '[钆]挑战3、挑战4和挑战8的奖励增加50%。',
    '[Terbium] Add 200 more C7 & c8 maximum completions.': '[铽]挑战7和挑战8的次数上限增加200。',
    '[Dysprosium] Lanthanum\'s effect is twice stronger.': '[镝]镧(57La)的效果翻倍。',
    '[Holmium] Collapsed star boost quarks gain.': '[钬]坍缩星辰可以加成夸克获取速度。',
    '[Erbium] Meta-Tickspeed start 2x later.': '[铒]时间速度的元折算延迟2倍出现。',
    '[Thulium] Pent is now added in mass gain formula from collapsed stars.': '[铥]坍缩星辰的质量获取速度公式根据五重阶层的数值变得更好。',
    '[Ytterbium] Add 200 more C7 & c8 maximum completions.': '[镱]挑战7和挑战8的次数上限增加200。',
    'inactive': '未激活',
    'Double dilated mass gain.': '使膨胀质量获取速度翻倍。',
    'Make dilated mass effect stronger.': '使膨胀质量的效果变得更好。',
    'Double relativistic particles gain.': '使相对论粒子获取速度翻倍。',
    'Dilated mass also boost Stronger\'s power.': '膨胀质量可以加成强化器倍率。',
    'Mass Dilation upgrade 3 scales 10% weaker.': '质量膨胀升级3的折算弱化10%。',
    'Increase the exponent of the RP formula.': '增加相对论粒子公式的指数。',
    'Dilated mass boost quarks gain.': '膨胀质量可以加成夸克获取速度。',
    'Mass Dilation upgrade 2 effect\'s formula is better.': '质量膨胀升级2的效果公式变得更好。',
    'Tickspeed affect all-star resources at a reduced rate.': '时间速度可以对所有星辰相关资源生效，只是效果倍率降低。',
    'Double quarks gain.': '夸克获取速度翻倍。',
    'Add 0.015 Mass Dilation upgrade 6\'s base.': '使质量膨胀升级6的基础效果增加0.015。',
    'First 3 Mass Dilation upgrades are stronger.': '使前3个质量膨胀升级的效果变得更好。',
    'Currently': '目前效果',
    //原子结束

    //超新星
    'You have become SUPERNOVA!': '您终于成为了超新星！',
    'But will reset everything, and gain SUPERNOVA!': '迄今为止的一切都将重置，但可以获得超新星！',
    'You can pass it...': '继续前行吧……',
    '... to discover!': '去探索，去发现！',
    'You\'ll be Supernova...': '您将成为超新星……',
    'Back to Main': '返回主游戏',
    'Reset without being Supernova': '在未成为超新星的前提下重置',
    'You become ': '您已经有',
    ' Supernova': '次成为超新星了',
    'Next Supernova at ': '下次超新星需要',
    ' stars': '星辰',
    ' Neutron star.': '中子星。',
    'You become Supernova!': '您成为了超新星！',
    '[c] Start generating 0.1 Neutron Star per second (not affected by offline production).': '[c]开始每秒产生0.1中子星(不受离线产量影响)。',
    '[sn1] Tickspeed affects Neutron Star gain at a reduced rate.': '[sn1]时间速度可以加成中子星获取速度，只是效果倍率降低。',
    '[sn2] Supernova boosts Neutron Star gain.': '[sn2]超新星次数可以加成中子星获取速度。',
    '[sn3] Blue star boost Neutron star gain at a reduced rate.': '[sn3]蓝色星辰可以加成中子星获取速度，只是效果倍率降低。',
    '[sn4] Tree “sn2”\'s effect base is increased by Supernova.': '[sn4]中子树sn2的基础效果基于超新星次数而增加。',
    '[m1] Neutron star multiplies Mass gain.': '[m1]中子星可以加成质量获取速度。',
    '[m2] Multiplies the Mass requirement for softcap^2 by 1.5': '[m2]使质量获取速度的二重软上限阈值变为原来的1.5倍。',
    '[m3] Mass gain softcap^2-3 starts later based on Supernovas.': '[m3]使质量获取速度的二重软上限和三重软上限基于超新星次数而延迟出现。',
    '[t1] Tickspeed Power is raised to the 1.15th.': '[t1]时间速度倍率变为原来的1.15次方。',
    '[rp1] Neutron Stars multiplies Rage Powers gain': '[rp1]中子星可以加成狂怒能量获取速度。',
    '[bh1] Neutron Star multiplies Dark Matters gain.': '[bh1]中子星可以加成暗物质获取速度。',
    '[bh2] BH Condenser power is raised to the 1.15th.': '[bh2]黑洞压缩器倍率变为原来的1.15次方。',
    '[s1] Neutron Star boosts last star gain.': '[s1]中子星可以加成最后一种星辰的获取速度。',
    '[s2] Star boost\'s Tetr\'s softcap is 50% weaker.': '[s2]星辰加成的三重阶层的软上限弱化50%。',
    '[s3] Star generators are stronger based on Supernova.': '[s3]星辰发生器的效果基于超新星次数变得更强。',
    '[s4] Beyond unlocking stars, Star Unlocker will transform into Booster.': '[s4]解锁完星辰以后，星辰解锁的功能变为星辰加成。',
    '[qol1] Start with Silicon-14 & Argon-18 unlocked. You can now automatically buy Elements & Atom upgrades.': '[qol1]初始状态下就解锁硅(Si14)和氩(Ar18)。您可以自动购买元素和原子升级。',
    '[qol2] Start with Chromium-24 and Atom upgrade 6 unlocked.': '[qol2]初始状态下就解锁铬(Cr24)和原子升级6。',
    '[qol3] Start with Techntium-43 unlocked, improve their element better. You can automatically gain Relativistic particles from mass.': '[qol3]初始状态下就解锁锝(Tc43)，并且相应的元素效果更好。您可以自动从质量中获得相对论粒子。',
    '[qol4] You can now automatically buy Star unlockers & boosters.': '[qol4]您可以自动购买星辰解锁和星辰加成。',
    '[qol5] Tetrs no longer resets anything.': '[qol5]三重阶层不再重置任何东西。',
    '[qol6] While in any challenge, you can now automatically complete it before exiting.': '[qol6]不需要退出挑战也可以自动完成它。',
    '[qol7] You can now automatically buy Photon & Gluon upgrades, they no longer spent their amount.': '[qol7]您可以自动购买光子和胶子升级，购买它们不再消耗相应资源。',
    '[qol8] You can now automatically Pent up, Pent no longer resets anything.': '[qol8]您可以自动提升五重阶层，五重阶层不再重置任何东西。',
    '[chal1] Add 100 more C7 & C8 maximum completions.': '[chal1]挑战7和挑战8的次数上限增加100。',
    '[chal2] Keep challenge 1-4 completions on reset.': '[chal2]重置时保留挑战1-挑战4的完成次数。',
    '[chal3] Keep challenge 5-8 completions on reset.': '[chal3]重置时保留挑战5-挑战8的完成次数。',
    '[chal4] Unlock new challenge.': '[chal4]解锁新的挑战。',
    '[chal4a] Make 9th Challenges effect better.': '[chal4a]使挑战9的奖励效果变得更好。',
    '[chal5] Unlock new challenge.': '[chal5]解锁新的挑战。',
    '[chal6] Unlock new challenges.': '[chal6]解锁新的挑战。',
    '[gr1] BH Condensers power boost Cosmic Rays power.': '[gr1]黑洞压缩器倍率可以加成宇宙射线倍率。',
    '[gr2] Cosmic Rays Power is raised to 1.25th power.': '[gr2]宇宙射线倍率变为原来的1.25次方。',
    '[bs1] Tickspeed affect Higgs Bosons gain at a reduced rate.': '[bs1]时间速度可以加成希格斯玻色子获取速度，只是效果倍率降低。',
    '[bs2] Photon, Gluon powers up each other.': '[bs2]光子和胶子互相加成彼此的获取速度。',
    '[bs3] Neutrons gain is affected by Graviton\'s effect at a reduced rate.': '[bs3]引力子可以加成中子获取速度，只是效果倍率降低。',
    '[bs4] Raise Z Bosons gain to the 1.5th power.': '[bs4]Z玻色子获取速度变为原来的1.5次方。',
    '[fn1] Tickspeed affect each Fermions gain at a reduced rate.': '[fn1]时间速度可以加成所有费米子获取速度，只是效果倍率降低。',
    '[fn2] Unlock 2 new types of U-Quark & U-Fermion.': '[fn2]解锁两种新的U-夸克和U-轻子。',
    '[fn3] Super Fermion\'s Tier scaling is 7.5% weaker.': '[fn3]费米子阶层的超级折算弱化7.5%。',
    '[fn4] 2nd Photon & Gluon upgrades are slightly stronger.': '[fn4]光子和胶子升级2的效果略微增强。',
    '[fn5] [Electron] max tier is increased by 35. Its effect softcap is weaker.': '[fn5][电子]的阶层上限增加35。它的软上限效果弱化。',
    '[fn6] Unlock 2 new more types of U-Quark & U-Fermion.': '[fn6]解锁两种新的U-夸克和U-轻子。',
    '[d1] Generating Relativistic particles outside Mass dilation is 25% stronger.': '[d1]未进行质量膨胀时，相对论粒子获取速度增加25%。',
    '[unl1] Unlock Radiation.': '[unl1]解锁射线。',
    '[rad1] Gain more frequency based on Supernova, any more radiation if you unlocked next radiation.': '[rad1]频率获取速度基于超新星次数而增加，如果您解锁了下一种射线，还会使之前射线的波长获取速度也增加。',
    '[rad2] Gain x10 any more Radiation.': '[rad2]射线的距离获取速度变为原来的10倍。',
    '[rad3] Radiation Boosts are 1.1x cheaper.': '[rad3]射线的加成便宜1.1倍。',
    'click any tree upgrade to show': '点击任意中子树升级以查看详情',
    'click again to buy if affordable': '如果资源足够，再次点击将购买升级',
    ' Graviton, which speeds Bosons production by ': '引力子，因此玻色子获取速度乘以',
    ' Higgs Boson, which raises Gravitons effect by ': '希格斯玻色子，因此引力子效果乘以',
    ' Photon': '光子',
    ' Gluon': '胶子',
    ' Boson, which multiplies Mass gain by ': '玻色子，因此质量获取速度乘以',
    ' multiplies W': '并使W',
    ' Bosons gain by ': '玻色子获取速度乘以',
    ' Boson, which makes Mass gains softcap^2 starts ^': '玻色子，因此质量获取速度的二重软上限延迟',
    ' later,': '次方出现，',
    ' Boson, which multiplies Tickspeed Power by ': '玻色子，因此时间速度倍率乘以',
    ' multiplies W Bosons gain by ': '并使W玻色子的获取速度乘以',
    'Note: Choosing any fermion will reset without being Supernova!': '注意：选择任意费米子后，将在未成为超新星的前提下重置！',
    'Back to Normal': '恢复正常',
    ' You have ': '您拥有',
    ' U-Quark': 'U-夸克',
    ' U-Lepton': 'U-轻子',
    '[Up]': '[上夸克]',
    '[Down]': '[下夸克]',
    '[Charm]': '[粲夸克]',
    '[Strange]': '[奇夸克]',
    '[Top]': '[顶夸克]',
    '[Bottom]': '[底夸克]',
    '[Electron]': '[电子]',
    '[Muon]': '[缪子]',
    '[Tau]': '[陶子]',
    '[Neutrion]': '[电中微子]',
    '[Neut-Muon]': '[缪中微子]',
    '[Neut-Tau]': '[陶中微子]',
    'Tier ': '阶层',
    'Next Tier at': '下一阶层需',
    '(Increased by Atomic Powers': '(单位为原子能量',
    '(Increased by Relativistic Particle': '(单位为相对论粒子',
    '(Increased by Mass': '(单位为质量',
    '(Increased by Quark': '(单位为夸克',
    '(Increased by Mass of Black Hole': '(单位为黑洞质量',
    '(Increased by Dark Matter': '(单位为暗物质',
    '(Increased by Rage Power': '(单位为狂怒能量',
    '(Increased by Collapsed Star': '(单位为坍缩星辰',
    'Effect': '效果',
    'On Active: ^0.6 to the exponent of Atomic Powers gain': '激活时，使原子能量的获取速度指数变为原来的0.6次方',
    'On Active: The exponent of the RP formula is divided by 10': '激活时，使相对论粒子公式的指数除以10',
    'On Active: You are trapped in Mass Dilation, but they are twice effective': '激活时，强制进行质量膨胀，但它的效果翻倍',
    'On Active: ^0.625 to the exponent of Atoms gain': '激活时，使原子的获取速度指数变为原来的0.625次方',
    'On Active: The power from the mass of the BH formula is always -1': '激活时，黑洞质量公式中，指数始终为-1',
    'On Active: You are trapped in Challenges 8-9': '激活时，强制进行挑战8和挑战9',
    'On Active: You are trapped in Mass Dilation and Challenges 3-5': '激活时，强制进行质量膨胀，和挑战3-挑战5',
    'On Active: Star generators are decreased to ^0.5': '激活时，星辰发生器的效果变为原来的0.5次方',
    'Your frequency is ': '您的频率为',
    ' Hz, which multiples any Fermions gain by ': '赫兹，将使费米子获取速度变为原来的',
    'At ': '当频率到达',
    ' of frequency, unlock ': '赫兹时，将解锁',
    ' meter.': '米。',
    ' meters': '米',
    ' Aplitude': '振幅',
    ' Velocity': '波速',
    'Radio Boost [': '无线电波加成[',
    'Tickspeed Boost [': '时间速度加成[',
    'Mass-Softcap Boost [': '质量软上限加成[',
    'Microwave Boost [': '微波加成[',
    'BH-Exponent Boost [': '黑洞指数加成[',
    'BH-Condenser Boost [': '黑洞压缩器加成[',
    'Infrared Boost [': '红外线加成[',
    'Photo-Gluon Boost [': '光子胶子加成[',
    'Meta-Boost I [': '元加成 I [',
    'Visible Boost [': '可见光加成[',
    'Cosmic-Ray Boost [': '宇宙射线加成[',
    'Neturon-Star Boost [': '中子星加成[',
    'Ultraviolet Boost [': '紫外线加成[',
    'Tickspeed-Softcap Boost [': '时间速度软上限加成[',
    'Meta-Rank Boost [': '级别元折算加成[',
    ']: ': ']：',
    //超新星结束
    
    //选项
    'Save': '保存',
    'Game Saved': '游戏进度已保存',
    'Hard Reset': '硬重置',
    'Export': '导出',
    'Export to clipboard': '导出到剪贴板',
    'Copied to Clipboard': '已导出至剪贴板',
    'Import': '导入',
    'Error Importing': '输入有误，导入失败',
    'Join Discord': '加入Discord频道',
    'Help': '帮助',
    'Offline Production': '离线产量',
    'Fonts': '字体',
    'Notations': '记数法',
    'Confirmation Settings': '确认窗口设置',
    'Elemental': '元素记数法',
    'Engineering': '工程记数法',
    'Mixed Scientific': '混合科学记数法',
    'Prestige Layer': '转生层级记数法',
    'Scientific': '科学记数法',
    'Standard': '普通记数法',
    'Old Scientific': '旧科学记数法',
    'Omega': 'Omega记数法',
    'Omega Short': 'Omega Short记数法',
    'Congratulations!': '恭喜您！',
    'You have becomed 10 Supernovas!': '您已经有10次成为超新星了！',
    'And you can manualy supernova!': '您可以手动成为超新星了！',
    'Bosons are unlocked in Supernova tab!': '另外，超新星选项卡下解锁了玻色子！',
    'You have beated Challenge 10!': '您已经通过了挑战10！',
    'Fermions are unlocked in Supernova tab!': '超新星选项卡下解锁了费米子！',
    'Incremental Mass Rewritten v0.4.3.2 - made by MrRedShark77': '质量增量重制版v0.4.3.2 - 作者为MrRedShark77，由by22dgb汉化',
    'The game is inspired by Distance Incremental & Synergism': '本游戏灵感来自于距离增量及协同放置',
    'Hint 1: Hover top image above tabs to show description...': '提示1：鼠标停留在选项卡上方的图片以查看详情……',
    'Total time played': '游戏总时间',
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
    /^\/?\^?\d+[e\.\,\d\/]+$/, //处理数字及单位
    /^[e\.\,\d]+ \+ [e\.\,\d]+$/, //处理数字及单位
    /^[A-Z][a-z]?$/, //单独处理短文字
    /^(.*)[\u4E00-\u9FFF]+(.*)$/, //不抓取内容
    /^e\d\.[e\d]+e\d$/, //不抓取内容
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
    [/^Unlock new type of Stars, require (.+) Quark$/, '解锁新的星辰，需$1夸克'], //主界面等
    [/^Boost all-Star resources gain, require (.+) Quark$/, '加成所有星辰相关资源的获取速度，需$1夸克'], //主界面等
    [/^Reach over (.+) collapsed stars to be Supernova$/, '坍缩星辰不少于$1时就可以成为超新星了'], //主界面等
    [/^Cost: (.+) Rage Power$/, '花费：$1狂怒能量'], //升级等
    [/^Cost: (.+) Dark Matter$/, '花费：$1暗物质'], //升级等
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
    [/^Currently: \+(.+) to Rage Power Upgrade 7$/, '目前效果：狂怒升级7的效果增加$1'], //原子等，前置
    [/^Currently: \+(.+)$/, '目前效果：增加$1'], //挑战等
    [/^Multiplies Mass gain by\s*(.*)$/, '使质量获取速度乘以$1'], //原子等
    [/^Adds Tickspeed Power by (.+)%$/, '使时间速度倍率增加$1%'], //原子等
    [/^Multiplies Rage Power gain by\s*(.*)$/, '使狂怒能量获取速度乘以$1'], //原子等
    [/^Makes Mass gain boosted by Rage Powers - (.+)x$/, '使狂怒能量可以加成质量获取速度 - 倍率为$1倍'], //原子等
    [/^Multiplies Dark Matter gain by\s*(.*)$/, '使暗物质获取速度乘以$1'], //原子等
    [/^Adds BH Condenser Power by\s*(.*)$/, '使黑洞压缩器倍率增加$1'], //原子等
    [/^ Protons Powers, which:\s*$/, '质子能量，因此获得以下效果：'], //原子等
    [/^ Neutrons Powers, which:\s*$/, '中子能量，因此获得以下效果：'], //原子等
    [/^ Electrons Powers, which:\s*$/, '电子能量，因此获得以下效果：'], //原子等
    [/^Currently: (.+)x\s?$/, '目前效果：$1倍'], //原子等
    [/^Currently: (.+)x stronger$/, '目前效果：强化$1倍'], //原子等
    [/^Currently: (.+) later$/, '目前效果：延迟$1次出现'], //原子等
    [/^\s*\[Level $/, '[等级：'], //原子等
    [/^Cancel for (.+) Relativistic particles$/, '取消质量膨胀后可获得$1相对论粒子'], //原子等
    [/^Cost: (.+) Neutron star$/, '需：$1中子星'], //超新星等
    [/^\s+Gain more Dark Matters & Mass from Black Hole based on Photon.$/, '基于光子的数值，增加暗物质和黑洞质量的获取速度。'], //超新星等
    [/^\s+Boost BH Condenser Power.$/, '增加黑洞压缩器倍率。'], //超新星等
    [/^\s+Photons gain is boosted by Collapsed Star.$/, '使坍缩星辰可以加成光子获取速度。'], //超新星等
    [/^\s+All-Star resources gain is boosted by Photon.$/, '使光子可以加成所有星辰相关资源的获取速度。'], //超新星等
    [/^\s+Gain more Atoms & Atomic Powers based on Gluon.$/, '基于胶子的数值，增加原子获取速度及原子能量。'], //超新星等
    [/^\s+Boost Cosmic Ray Power.$/, '增加宇宙射线倍率。'], //超新星等
    [/^\s+Gluons gain is boosted by Quark.$/, '使夸克可以加成胶子获取速度。'], //超新星等
    [/^\s+Supernova requirement is decreased based on Gluon.$/, '基于胶子的数值，降低超新星的需求。'], //超新星等
    [/^\s+Currently$/, '目前效果'], //超新星等
    [/^Adds (.+) free Cosmic Rays$/, '增加$1个免费宇宙射线'], //超新星等
    [/^x(.+) to Relativistic Particles gain$/, '相对论粒子获取速度变为原来的$1倍'], //超新星等
    [/^ Boson's first effect is (.+)% stronger$/, '玻色子的第一个效果强化$1%'], //超新星等
    [/^4th Photon & Gluon upgrades are (.+)x stronger$/, '光子和胶子升级4强化$1倍'], //超新星等
    [/^Collapse Stars gain softcap starts \^(.+) later$/, '坍缩星辰获取速度的软上限延迟$1次方出现'], //超新星等
    [/^x(.+) to Higgs Bosons & Gravitons gain$/, '希格斯玻色子和引力子的获取速度变为原来的$1倍'], //超新星等
    [/^Tickspeed is (.+)x cheaper \(before Meta scaling$/, '时间速度便宜$1倍(在元折算前生效'], //超新星等
    [/^Tier requirement is (.+)x cheaper$/, '阶层的需求便宜$1倍'], //超新星等
    [/^Radiowave is boosted by (.+)x \(based on Frequency$/, '无线电波的获取速度变为原来的$1倍(基于频率的数值'], //超新星等
    [/^Non-bonus tickspeed is (.+)x stronger$/, '非加成的时间速度强化$1倍'], //超新星等
    [/^Softcap\^3 from mass gain start \^(.+) later$/, '质量获取速度的三重软上限延迟$1次方出现'], //超新星等
    [/^Microwave is boosted by (.+)x \(based on Radio$/, '微波的获取速度变为原来的$1倍(基于无线电波的数值'], //超新星等
    [/^Exponent from the mass of BH formula is increased by (.+) \(hardcapped to 0.3$/, '黑洞质量公式中，指数增加$1(硬上限为0.3'], //超新星等
    [/^Non-bonus BH condenser is (.+)x stronger$/, '非加成的黑洞压缩器强化$1倍'], //超新星等
    [/^Infrared is boosted by (.+)x \(based on Microwave$/, '红外线的获取速度变为原来的$1倍(基于微波的数值'], //超新星等
    [/^1st Photon & Gluon upgrades are (.+)x stronger$/, '光子和胶子升级1强化$1倍'], //超新星等
    [/^Add (.+) levels to all above boosts$/, '上方所有加成的等级增加$1级'], //超新星等
    [/^Visible is boosted by (.+)x \(based on Infrared$/, '可见光的获取速度变为原来的$1倍(基于红外线的数值'], //超新星等
    [/^Cosmic Ray power is boosted by (.+)x$/, '宇宙射线倍率变为原来的$1倍'], //超新星等
    [/^Neutron Star is boosted by (.+)x \(based on Frequency$/, '中子星的获取速度变为原来的$1倍(基于频率的数值'], //超新星等
    [/^Visible is boosted by (.+)x \(based on Visible$/, '紫外线的获取速度变为原来的$1倍(基于可见光的数值'], //超新星等
    [/^Tickspeed power's softcap starts (.+)x later$/, '速度倍率的软上限延迟$1倍出现'], //超新星等
    [/^Meta-Rank starts (.+)x later$/, '级别的元折算延迟$1倍出现'], //超新星等
]);