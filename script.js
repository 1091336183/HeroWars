const GAME_DATA = {
    MONSTERS: {
        goblin: { id: 'goblin', name: '哥布林', icon: '👹', level: 3, hp: 80, maxHp: 80, attack: 15, defense: 5, exp: 30, gold: 10, drops: ['goblin_skin', 'health_potion', 'wood_sword', 'cloth_hat', 'cloth_pants'] },
        goblin_elite: { id: 'goblin_elite', name: '精英哥布林', icon: '👹', level: 5, hp: 150, maxHp: 150, attack: 22, defense: 10, exp: 60, gold: 25, drops: ['goblin_skin', 'health_potion', 'wood_sword', 'iron_sword', 'cloth_armor', 'cloth_shoes', 'copper_ring'] },
        wolf: { id: 'wolf', name: '灰狼', icon: '🐺', level: 5, hp: 120, maxHp: 120, attack: 20, defense: 8, exp: 50, gold: 20, drops: ['wolf_fur', 'attack_potion', 'iron_sword', 'iron_helmet', 'leather_pants'] },
        wolf_alpha: { id: 'wolf_alpha', name: '狼王', icon: '🐺', level: 8, hp: 220, maxHp: 220, attack: 30, defense: 14, exp: 100, gold: 45, drops: ['wolf_fur', 'leather_boots', 'strength_potion', 'iron_sword', 'leather_armor', 'iron_necklace'] },
        skeleton: { id: 'skeleton', name: '骷髅兵', icon: '💀', level: 8, hp: 150, maxHp: 150, attack: 25, defense: 12, exp: 80, gold: 35, drops: ['bone', 'mp_potion', 'mithril_sword', 'mithril_helmet', 'speed_boots'] },
        skeleton_mage: { id: 'skeleton_mage', name: '骷髅法师', icon: '💀', level: 11, hp: 180, maxHp: 180, attack: 35, defense: 10, exp: 120, gold: 50, drops: ['bone', 'mp_potion', 'iron_necklace', 'mithril_armor', 'mithril_legs', 'life_amulet'] },
        orc: { id: 'orc', name: '兽人战士', icon: '👺', level: 12, hp: 250, maxHp: 250, attack: 35, defense: 18, exp: 150, gold: 60, drops: ['orc_blood', 'strength_potion', 'shadow_blade', 'shadow_hood', 'shadow_boots'] },
        orc_commander: { id: 'orc_commander', name: '兽人指挥官', icon: '👺', level: 16, hp: 400, maxHp: 400, attack: 50, defense: 25, exp: 250, gold: 100, drops: ['orc_blood', 'chain_armor', 'mithril_sword', 'shadow_armor', 'shadow_legs', 'power_ring'] },
        dark_knight: { id: 'dark_knight', name: '暗黑骑士', icon: '🦹', level: 20, hp: 600, maxHp: 600, attack: 65, defense: 35, exp: 350, gold: 150, drops: ['shadow_blade', 'shadow_armor', 'dragon_scale', 'shadow_hood', 'shadow_boots', 'shadow_legs'] },
        dragon: { id: 'dragon', name: '巨龙', icon: '🐉', level: 30, hp: 1000, maxHp: 1000, attack: 100, defense: 50, exp: 1000, gold: 500, drops: ['dragon_scale', 'dragon_heart', 'dragon_fang', 'dragon_helmet', 'dragon_boots'] },
        dragon_elder: { id: 'dragon_elder', name: '远古巨龙', icon: '🐉', level: 40, hp: 2000, maxHp: 2000, attack: 150, defense: 70, exp: 2000, gold: 1000, drops: ['dragon_scale', 'dragon_heart', 'dragon_fang', 'dragon_armor', 'dragon_helmet', 'dragon_boots', 'dragon_ring'] },
    },
    EQUIPMENT: {
        // 武器
        wood_sword: { id: 'wood_sword', name: '木剑', type: 'weapon', icon: '🪵', quality: 'white', levelReq: 1, price: 30, stats: { attack: 8 } },
        iron_sword: { id: 'iron_sword', name: '铁剑', type: 'weapon', icon: '⚔️', quality: 'green', levelReq: 5, price: 100, stats: { attack: 25, critRate: 3 } },
        mithril_sword: { id: 'mithril_sword', name: '秘银剑', type: 'weapon', icon: '🗡️', quality: 'blue', levelReq: 12, price: 250, stats: { attack: 45, critRate: 5 } },
        shadow_blade: { id: 'shadow_blade', name: '暗影之刃', type: 'weapon', icon: '🔪', quality: 'purple', levelReq: 20, price: 450, stats: { attack: 70, critRate: 8, speed: 5 } },
        fire_sword: { id: 'fire_sword', name: '烈焰剑', type: 'weapon', icon: '🔥', quality: 'orange', levelReq: 25, price: 500, stats: { attack: 80, critRate: 10, fireDamage: 20 } },
        dragon_fang: { id: 'dragon_fang', name: '龙牙', type: 'weapon', icon: '🦷', quality: 'orange', levelReq: 35, price: 800, stats: { attack: 120, critRate: 15, penetration: 10 } },
        // 头盔
        cloth_hat: { id: 'cloth_hat', name: '布帽', type: 'helmet', icon: '🎩', quality: 'white', levelReq: 1, price: 20, stats: { defense: 5, hp: 15 } },
        iron_helmet: { id: 'iron_helmet', name: '铁头盔', type: 'helmet', icon: '🪖', quality: 'green', levelReq: 8, price: 90, stats: { defense: 15, hp: 30 } },
        mithril_helmet: { id: 'mithril_helmet', name: '秘银盔', type: 'helmet', icon: '⛑️', quality: 'blue', levelReq: 14, price: 180, stats: { defense: 25, hp: 45 } },
        shadow_hood: { id: 'shadow_hood', name: '暗影兜帽', type: 'helmet', icon: '🎭', quality: 'purple', levelReq: 22, price: 350, stats: { defense: 35, hp: 60, dodgeRate: 5 } },
        dragon_helmet: { id: 'dragon_helmet', name: '龙鳞盔', type: 'helmet', icon: '🐲', quality: 'orange', levelReq: 30, price: 600, stats: { defense: 50, hp: 100, dodgeRate: 5 } },
        // 护甲
        cloth_armor: { id: 'cloth_armor', name: '布衣', type: 'armor', icon: '👕', quality: 'white', levelReq: 1, price: 25, stats: { defense: 5, hp: 30 } },
        leather_armor: { id: 'leather_armor', name: '皮甲', type: 'armor', icon: '🦺', quality: 'white', levelReq: 3, price: 80, stats: { defense: 10, hp: 50 } },
        chain_armor: { id: 'chain_armor', name: '锁子甲', type: 'armor', icon: '🔗', quality: 'green', levelReq: 10, price: 160, stats: { defense: 22, hp: 80 } },
        mithril_armor: { id: 'mithril_armor', name: '秘银甲', type: 'armor', icon: '🛡️', quality: 'blue', levelReq: 16, price: 300, stats: { defense: 35, hp: 120 } },
        shadow_armor: { id: 'shadow_armor', name: '暗影铠甲', type: 'armor', icon: '🦹', quality: 'purple', levelReq: 24, price: 500, stats: { defense: 50, hp: 180, damageReduce: 5 } },
        dragon_armor: { id: 'dragon_armor', name: '龙鳞铠', type: 'armor', icon: '🐉', quality: 'orange', levelReq: 32, price: 900, stats: { defense: 70, hp: 250, damageReduce: 8 } },
        // 护腿
        cloth_pants: { id: 'cloth_pants', name: '布裤', type: 'legs', icon: '👖', quality: 'white', levelReq: 1, price: 15, stats: { defense: 3, hp: 20 } },
        leather_pants: { id: 'leather_pants', name: '皮裤', type: 'legs', icon: '🩳', quality: 'green', levelReq: 7, price: 70, stats: { defense: 10, hp: 40 } },
        chain_legs: { id: 'chain_legs', name: '锁子腿甲', type: 'legs', icon: '🦿', quality: 'green', levelReq: 11, price: 130, stats: { defense: 18, hp: 55 } },
        mithril_legs: { id: 'mithril_legs', name: '秘银腿甲', type: 'legs', icon: '🦵', quality: 'blue', levelReq: 17, price: 220, stats: { defense: 28, hp: 85 } },
        shadow_legs: { id: 'shadow_legs', name: '暗影护腿', type: 'legs', icon: '👢', quality: 'purple', levelReq: 25, price: 400, stats: { defense: 40, hp: 130 } },
        // 靴子
        cloth_shoes: { id: 'cloth_shoes', name: '布鞋', type: 'boots', icon: '👟', quality: 'white', levelReq: 1, price: 20, stats: { speed: 3, dodgeRate: 2 } },
        leather_boots: { id: 'leather_boots', name: '皮靴', type: 'boots', icon: '🥾', quality: 'green', levelReq: 6, price: 80, stats: { speed: 5, dodgeRate: 3 } },
        speed_boots: { id: 'speed_boots', name: '疾风靴', type: 'boots', icon: '👟', quality: 'blue', levelReq: 10, price: 150, stats: { dodgeRate: 5, speed: 10 } },
        shadow_boots: { id: 'shadow_boots', name: '暗影之靴', type: 'boots', icon: '👢', quality: 'purple', levelReq: 19, price: 320, stats: { dodgeRate: 8, speed: 15, critRate: 3 } },
        dragon_boots: { id: 'dragon_boots', name: '龙鳞靴', type: 'boots', icon: '👢', quality: 'orange', levelReq: 28, price: 550, stats: { dodgeRate: 10, speed: 20, critRate: 5 } },
        // 饰品
        copper_ring: { id: 'copper_ring', name: '铜戒指', type: 'accessory', icon: '💍', quality: 'white', levelReq: 3, price: 40, stats: { attack: 5 } },
        iron_necklace: { id: 'iron_necklace', name: '铁项链', type: 'accessory', icon: '📿', quality: 'green', levelReq: 8, price: 100, stats: { hp: 60, defense: 5 } },
        power_ring: { id: 'power_ring', name: '力量戒指', type: 'accessory', icon: '💍', quality: 'purple', levelReq: 15, price: 200, stats: { attack: 30, critRate: 5 } },
        life_amulet: { id: 'life_amulet', name: '生命护符', type: 'accessory', icon: '🔮', quality: 'blue', levelReq: 18, price: 280, stats: { hp: 150, hpRegen: 5 } },
        dragon_ring: { id: 'dragon_ring', name: '龙鳞戒指', type: 'accessory', icon: '💍', quality: 'orange', levelReq: 30, price: 600, stats: { attack: 40, critRate: 8, hp: 100 } },
    },
    CONSUMABLES: {
        health_potion: { id: 'health_potion', name: '生命药水', icon: '🧪', type: 'consumable', effect: { hp: 50 }, price: 20 },
        mp_potion: { id: 'mp_potion', name: '法力药水', icon: '💧', type: 'consumable', effect: { mp: 30 }, price: 25 },
        attack_potion: { id: 'attack_potion', name: '力量药水', icon: '💪', type: 'consumable', effect: { attack: 10, duration: 30 }, price: 40 },
        strength_potion: { id: 'strength_potion', name: '强化药水', icon: '✨', type: 'consumable', effect: { attack: 20, defense: 10, duration: 60 }, price: 80 },
    },
    MATERIALS: {
        goblin_skin: { id: 'goblin_skin', name: '哥布林皮', icon: '🧴', type: 'material' },
        wolf_fur: { id: 'wolf_fur', name: '狼皮', icon: '🧶', type: 'material' },
        bone: { id: 'bone', name: '骨头', icon: '🦴', type: 'material' },
        orc_blood: { id: 'orc_blood', name: '兽人血', icon: '🩸', type: 'material' },
        dragon_scale: { id: 'dragon_scale', name: '龙鳞', icon: '🔶', type: 'material' },
        dragon_heart: { id: 'dragon_heart', name: '龙心', icon: '💗', type: 'material' },
    },
    SKILLS: {
        slash: { id: 'slash', name: '斩击', icon: '⚔️', type: 'active', level: 1, maxLevel: 10, unlockLevel: 1, mpCost: 10, cd: 3, damageCoeff: 1.2, description: '对敌人造成120%攻击力伤害' },
        heal: { id: 'heal', name: '治疗', icon: '💚', type: 'active', level: 1, maxLevel: 10, unlockLevel: 5, mpCost: 20, cd: 8, healCoeff: 1.0, description: '恢复100%智力值的生命值' },
        fireball: { id: 'fireball', name: '火球术', icon: '🔥', type: 'active', level: 1, maxLevel: 10, unlockLevel: 3, mpCost: 15, cd: 4, damageCoeff: 1.5, description: '对敌人造成150%法攻伤害' },
        shield: { id: 'shield', name: '护盾', icon: '🛡️', type: 'active', level: 1, maxLevel: 10, unlockLevel: 7, mpCost: 25, cd: 10, shieldCoeff: 1.5, description: '获得150%防御值的护盾' },
        ultimate: { id: 'ultimate', name: '必杀技', icon: '💥', type: 'ultimate', level: 1, maxLevel: 5, unlockLevel: 10, mpCost: 50, cd: 30, damageCoeff: 3.0, description: '对敌人造成300%攻击力伤害' },
        passive_attack: { id: 'passive_attack', name: '战斗本能', icon: '⚡', type: 'passive', level: 1, maxLevel: 10, unlockLevel: 1, effect: { attack: 5 }, description: '永久增加5%攻击力' },
        passive_defense: { id: 'passive_defense', name: '铁壁', icon: '🛡️', type: 'passive', level: 1, maxLevel: 10, unlockLevel: 5, effect: { defense: 5 }, description: '永久增加5%防御力' },
    },
    TASKS: {
        // 主线任务 - 逐级解锁
        main_001: { id: 'main_001', type: 'main', title: '初出茅庐', description: '【新手村/迷雾森林】消灭5只哥布林', objectives: [{ type: 'kill', target: 'goblin', count: 5 }], rewards: { exp: 200, gold: 50, item: 'iron_sword' }, requireLevel: 1, unlockNext: 'main_002', locked: false },
        main_002: { id: 'main_002', type: 'main', title: '森林探险', description: '【迷雾森林】消灭10只灰狼', objectives: [{ type: 'kill', target: 'wolf', count: 10 }], rewards: { exp: 400, gold: 100, item: 'leather_armor' }, requireLevel: 3, unlockNext: 'main_003', locked: true },
        main_003: { id: 'main_003', type: 'main', title: '洞穴深处', description: '【幽暗洞穴】消灭15只骷髅兵', objectives: [{ type: 'kill', target: 'skeleton', count: 15 }], rewards: { exp: 600, gold: 150, item: 'iron_helmet' }, requireLevel: 6, unlockNext: 'main_004', locked: true },
        main_004: { id: 'main_004', type: 'main', title: '兽人入侵', description: '【地下城】消灭10只兽人战士', objectives: [{ type: 'kill', target: 'orc', count: 10 }], rewards: { exp: 800, gold: 200, item: 'mithril_sword' }, requireLevel: 10, unlockNext: 'main_005', locked: true },
        main_005: { id: 'main_005', type: 'main', title: '王城危机', description: '【王城】前往王城与国王对话', objectives: [{ type: 'talk', target: '国王', count: 1 }], rewards: { exp: 500, gold: 300, item: 'power_ring' }, requireLevel: 12, unlockNext: 'main_006', locked: true },
        main_006: { id: 'main_006', type: 'main', title: '收集龙鳞', description: '【魔王殿】收集3片龙鳞（击败巨龙掉落）', objectives: [{ type: 'collect', target: 'dragon_scale', count: 3 }], rewards: { exp: 1500, gold: 500, item: 'fire_sword' }, requireLevel: 18, unlockNext: 'main_007', locked: true },
        main_007: { id: 'main_007', type: 'main', title: '屠龙勇士', description: '【魔王殿】击败巨龙', objectives: [{ type: 'kill', target: 'dragon', count: 1 }], rewards: { exp: 3000, gold: 1000, item: 'dragon_armor' }, requireLevel: 25, unlockNext: 'main_008', locked: true },
        main_008: { id: 'main_008', type: 'main', title: '最终决战', description: '【魔王殿】击败远古巨龙，拯救世界！', objectives: [{ type: 'kill', target: 'dragon_elder', count: 1 }], rewards: { exp: 5000, gold: 2000, item: 'dragon_fang' }, requireLevel: 35, unlockNext: null, locked: true },
        // 支线任务
        side_001: { id: 'side_001', type: 'side', title: '收集材料', description: '【新手村/迷雾森林】收集5张哥布林皮', objectives: [{ type: 'collect', target: 'goblin_skin', count: 5 }], rewards: { exp: 100, gold: 80 }, requireLevel: 1, locked: false },
        side_002: { id: 'side_002', type: 'side', title: '狼皮贸易', description: '【迷雾森林】收集8张狼皮给猎人', objectives: [{ type: 'collect', target: 'wolf_fur', count: 8 }], rewards: { exp: 200, gold: 150 }, requireLevel: 3, locked: false },
        side_003: { id: 'side_003', type: 'side', title: '骷髅遗骸', description: '【幽暗洞穴】收集10根骷髅骨头', objectives: [{ type: 'collect', target: 'bone', count: 10 }], rewards: { exp: 250, gold: 180 }, requireLevel: 6, locked: false },
        side_004: { id: 'side_004', type: 'side', title: '兽人血液', description: '【地下城】收集5瓶兽人血给铁匠', objectives: [{ type: 'collect', target: 'orc_blood', count: 5 }], rewards: { exp: 300, gold: 220, item: 'chain_armor' }, requireLevel: 10, locked: false },
        side_005: { id: 'side_005', type: 'side', title: '装备大师', description: '【任意】将任意一件装备强化到+5', objectives: [{ type: 'enhance', count: 5 }], rewards: { exp: 500, gold: 300 }, requireLevel: 8, locked: false },
        side_006: { id: 'side_006', type: 'side', title: '装备收藏家', description: '【任意】收集15件不同的装备', objectives: [{ type: 'collect_equip', count: 15 }], rewards: { exp: 600, gold: 400 }, requireLevel: 5, locked: false },
        // 每日任务
        daily_001: { id: 'daily_001', type: 'daily', title: '日常战斗', description: '【任意地图】完成5次战斗', objectives: [{ type: 'battle', count: 5 }], rewards: { exp: 300, gold: 100 }, requireLevel: 1, locked: false },
        daily_002: { id: 'daily_002', type: 'daily', title: '日常探索', description: '【任意地图】探索3个不同区域', objectives: [{ type: 'explore', count: 3 }], rewards: { exp: 200, gold: 150 }, requireLevel: 2, locked: false },
        daily_003: { id: 'daily_003', type: 'daily', title: '装备获取', description: '【任意地图】获得3件装备', objectives: [{ type: 'collect_equip', count: 3 }], rewards: { exp: 250, gold: 120 }, requireLevel: 3, locked: false },
        daily_004: { id: 'daily_004', type: 'daily', title: '金币达人', description: '【任意地图】获得200金币', objectives: [{ type: 'gold', count: 200 }], rewards: { exp: 200, gold: 100 }, requireLevel: 4, locked: false },
        daily_005: { id: 'daily_005', type: 'daily', title: '药水大师', description: '【任意地图】使用5次任意药水', objectives: [{ type: 'use_potion', count: 5 }], rewards: { exp: 180, gold: 80 }, requireLevel: 5, locked: false },
    },
    NPC_TASKS: {
        n_village: { id: 'n_village', type: 'npc', title: '村长的委托', description: '【新手村】收集5张哥布林皮', objectives: [{ type: 'collect', target: 'goblin_skin', count: 5 }], rewards: { exp: 50, gold: 100 }, npcName: '村长', accepted: false, completed: false },
        n_forest: { id: 'n_forest', type: 'npc', title: '猎人的请求', description: '【迷雾森林】收集8张狼皮', objectives: [{ type: 'collect', target: 'wolf_fur', count: 8 }], rewards: { exp: 80, gold: 150 }, npcName: '猎人', accepted: false, completed: false },
        n_cave: { id: 'n_cave', type: 'npc', title: '矿工的研究', description: '【幽暗洞穴】收集10根骨头', objectives: [{ type: 'collect', target: 'bone', count: 10 }], rewards: { exp: 100, gold: 180, enhanceStones: 3 }, npcName: '矿工', accepted: false, completed: false },
        n_king: { id: 'n_king', type: 'npc', title: '王国的委托', description: '【魔王殿】收集5片龙鳞', objectives: [{ type: 'collect', target: 'dragon_scale', count: 5 }], rewards: { exp: 300, gold: 500, item: 'dragon_armor' }, npcName: '国王', accepted: false, completed: false },
        n_smith: { id: 'n_smith', type: 'npc', title: '铁匠的锻造', description: '【地下城】收集5瓶兽人血', objectives: [{ type: 'collect', target: 'orc_blood', count: 5 }], rewards: { exp: 150, gold: 220, item: 'chain_legs' }, npcName: '铁匠', accepted: false, completed: false },
        n_merchant: { id: 'n_merchant', type: 'npc', title: '商人的收购', description: '【任意地图】收集3件任意装备', objectives: [{ type: 'collect_equip', count: 3 }], rewards: { exp: 100, gold: 200 }, npcName: '商人', accepted: false, completed: false },
        n_adventurer: { id: 'n_adventurer', type: 'npc', title: '冒险者的求助', description: '【地下城】击败10只兽人战士', objectives: [{ type: 'kill', target: 'orc', count: 10 }], rewards: { exp: 200, gold: 300 }, npcName: '冒险者', accepted: false, completed: false },
    },
    NPCS: {
        村长: { name: '村长', icon: '👴', location: 'village', description: '新手村的村长，会给勇者指引方向' },
        猎人: { name: '猎人', icon: '🏹', location: 'forest', description: '在迷雾森林狩猎的老猎人，收购狼皮' },
        矿工: { name: '矿工', icon: '⛏️', location: 'cave', description: '被困在幽暗洞穴的矿工，需要帮助' },
        国王: { name: '国王', icon: '👑', location: 'castle', description: '王城的统治者，正在寻找屠龙的勇者' },
        铁匠: { name: '铁匠', icon: '🔨', location: 'castle', description: '王城铁匠铺的老板，可以强化装备' },
        商人: { name: '商人', icon: '💰', location: 'castle', description: '王城商会的商人，买卖各种物品' },
        冒险者: { name: '冒险者', icon: '🧑‍💼', location: 'dungeon', description: '被困在地下城的冒险者，需要救援' },
    },
    LOCATIONS: {
        village: { id: 'village', name: '新手村', icon: '🏠', description: '欢迎来到新手村，这里是冒险的起点。', unlocked: true, monsters: ['goblin', 'goblin_elite'], npcs: ['村长'], requirement: '无限制' },
        forest: { id: 'forest', name: '迷雾森林', icon: '🌲', description: '神秘的森林，据说里面有很多怪物出没。', unlocked: true, monsters: ['wolf', 'wolf_alpha'], npcs: ['猎人'], requirement: 'Lv.1+ 可进入' },
        cave: { id: 'cave', name: '幽暗洞穴', icon: '⛰️', description: '阴森的洞穴，骷髅兵和骷髅法师在此盘踞。', unlocked: false, monsters: ['skeleton', 'skeleton_mage'], npcs: ['矿工'], requirement: '完成「初出茅庐」后解锁' },
        castle: { id: 'castle', name: '王城', icon: '🏰', description: '宏伟的王城，国王、铁匠、商人都在此等待勇者。', unlocked: false, monsters: [], npcs: ['国王', '铁匠', '商人'], requirement: '完成「洞穴深处」后解锁' },
        dungeon: { id: 'dungeon', name: '地下城', icon: '🏚️', description: '危险的地下城，兽人指挥官和暗黑骑士在此驻扎。', unlocked: false, monsters: ['orc', 'orc_commander', 'dark_knight'], npcs: ['冒险者'], requirement: '完成「洞穴深处」后解锁' },
        boss: { id: 'boss', name: '魔王殿', icon: '👿', description: '最终的挑战，巨龙和远古巨龙在此守护宝藏。', unlocked: false, monsters: ['dragon', 'dragon_elder'], npcs: [], requirement: '完成「王城危机」后解锁' },
    },
    DIALOGS: {
        村长: [
            { text: '欢迎来到新手村，年轻的冒险者。我是这里的村长。村子东边的迷雾森林最近有哥布林出没，你能帮我们消灭它们吗？', choices: null },
            { text: '如果你能消灭5只哥布林，我会给你丰厚的奖励！当然，如果你需要更好的装备，我可以先送你一把铁剑。',
              choices: [
                { text: '请给我铁剑，我这就去消灭哥布林！', next: 'accept', effect: { item: 'iron_sword', gold: 20, npcQuest: 'n_village' } },
                { text: '我等不及了，先出发再说！', next: 'accept', effect: { gold: 10, npcQuest: 'n_village' } }
              ]
            },
            { text: '祝你好运，勇者！完成任务后回来找我，我会给你更多奖励。', choices: null }
        ],
        猎人: [
            { text: '嘿，冒险者！我是森林的猎人。迷雾森林里有大量灰狼，它们的皮毛很值钱。', choices: null },
            { text: '如果你能带回8张狼皮给我，我会给你丰厚的报酬。另外，我还知道哪里有上等的皮靴。',
              choices: [
                { text: '好！我帮你收集狼皮，有什么好东西？', next: 'accept', effect: { gold: 30, npcQuest: 'n_forest' } },
                { text: '能否先给我一些装备？任务太危险了。', next: 'accept', effect: { item: 'leather_boots', gold: 10, npcQuest: 'n_forest' } }
              ]
            },
            { text: '收集到足够的狼皮后记得回来找我，准备好皮靴再出发吧！', choices: null }
        ],
        矿工: [
            { text: '谢天谢地，终于有人来了！我被困在幽暗洞穴好几天了，骷髅们封锁了出口。', choices: null },
            { text: '我需要10根骨头来完成我的研究，同时清理这些骷髅。作为报酬，我可以告诉你哪里藏着强化石。',
              choices: [
                { text: '我帮你收集骨头，强化石在哪里？', next: 'accept', effect: { gold: 40, npcQuest: 'n_cave' } },
                { text: '这太危险了，我需要报酬。', next: 'accept', effect: { item: 'cloth_armor', gold: 15, npcQuest: 'n_cave' } }
              ]
            },
            { text: '多谢！骷髅的骨头很有研究价值，完成后回洞里找我。', choices: null }
        ],
        国王: [
            { text: '勇者啊，你终于抵达王城了！王国正面临前所未有的危机。', choices: null },
            { text: '魔王殿的巨龙正在集结黑暗力量。我需要一位真正的勇士前往挑战。在此之前，你先去收集3片龙鳞作为证明吧。铁匠和商人可以帮你准备装备。',
              choices: [
                { text: '为了王国荣耀，我愿意前往！', next: 'accept', effect: { item: 'chain_armor', gold: 100, npcQuest: 'n_king' } },
                { text: '陛下的任务很危险，我需要更强装备。', next: 'accept', effect: { item: 'mithril_helmet', gold: 50, npcQuest: 'n_king' } }
              ]
            },
            { text: '击败巨龙后回来见我，整个王国都将感谢你！', choices: null }
        ],
        铁匠: [
            { text: '欢迎来到我的铁匠铺！我打造王城最好的武器和防具。', choices: null },
            { text: '我可以帮你强化装备。如果你能带回5瓶兽人血液，我可以为你打造一件锁子腿甲。地下城的兽人指挥官还带着秘银剑。',
              choices: [
                { text: '帮我看看装备，我会收集兽人血。', next: 'enhance' },
                { text: '这消息有用！给我来一件皮裤。', next: 'accept', effect: { item: 'leather_pants', npcQuest: 'n_smith' } }
              ]
            },
            { text: '兽人血液是绝佳的锻造材料，带回来后找我！', choices: null }
        ],
        商人: [
            { text: '欢迎！王城商会为你服务。你需要什么？药水、装备、还是材料？', choices: null },
            { text: '我有各种稀有商品。另外，如果你收集到足够的哥布林皮，我可以高价收购。',
              choices: [
                { text: '让我看看商店。', next: 'shop' },
                { text: '给我来瓶药水解解渴。', next: 'accept', effect: { item: 'health_potion', npcQuest: 'n_merchant' } }
              ]
            },
            { text: '欢迎下次再来！', choices: null }
        ],
        冒险者: [
            { text: '太好了，又有人来了！我在探索地下城时受了伤，药水用完了...', choices: null },
            { text: '地下城不仅有兽人，还有暗黑骑士！他们的装备非常好。如果你有药水，分我一些吧，我可以分享一个秘密。',
              choices: [
                { text: '给你生命药水，告诉我秘密。', next: 'accept', effect: { exp: 150, gold: 30, npcQuest: 'n_adventurer' } },
                { text: '我也没有多余药水，保重。', next: 'leave' }
              ]
            },
            { text: '谢谢！暗黑骑士掉落的暗影装备非常稀有，值得挑战。南边还有一条秘密通道直达魔王殿。', choices: null }
        ],
    },
    ACHIEVEMENTS: {
        // 战斗类
        combat_001: { id: 'combat_001', name: '初战', description: '完成1次战斗', type: 'combat', target: 1, reward: { attack: 5 } },
        combat_002: { id: 'combat_002', name: '百战', description: '完成100次战斗', type: 'combat', target: 100, reward: { attack: 10 } },
        combat_003: { id: 'combat_003', name: '千战', description: '完成500次战斗', type: 'combat', target: 500, reward: { attack: 20 } },
        combat_004: { id: 'combat_004', name: '万战', description: '完成2000次战斗', type: 'combat', target: 2000, reward: { attack: 50 } },
        combat_005: { id: 'combat_005', name: '战神', description: '完成5000次战斗', type: 'combat', target: 5000, reward: { attack: 100 } },
        // 等级类
        level_001: { id: 'level_001', name: '入门', description: '达到5级', type: 'level', target: 5, reward: { skillPoints: 1 } },
        level_002: { id: 'level_002', name: '初级', description: '达到10级', type: 'level', target: 10, reward: { skillPoints: 2 } },
        level_003: { id: 'level_003', name: '中级', description: '达到20级', type: 'level', target: 20, reward: { skillPoints: 3 } },
        level_004: { id: 'level_004', name: '高级', description: '达到35级', type: 'level', target: 35, reward: { skillPoints: 5 } },
        level_005: { id: 'level_005', name: '巅峰', description: '达到50级', type: 'level', target: 50, reward: { skillPoints: 10 } },
        // 收藏类
        collect_001: { id: 'collect_001', name: '收集者', description: '收集10件不同装备', type: 'collect', target: 10, reward: { gold: 100 } },
        collect_002: { id: 'collect_002', name: '收藏家', description: '收集25件不同装备', type: 'collect', target: 25, reward: { hp: 50 } },
        collect_003: { id: 'collect_003', name: '博物家', description: '收集40件不同装备', type: 'collect', target: 40, reward: { attackPct: 10 } },
        collect_004: { id: 'collect_004', name: '宝库', description: '收集50件不同装备', type: 'collect', target: 50, reward: { allStats: 5 } },
        // 强化类
        enhance_001: { id: 'enhance_001', name: '锻造师', description: '拥有1件强化+5以上装备', type: 'enhance', target: 1, enhanceLevel: 5, reward: { defense: 10 } },
        enhance_002: { id: 'enhance_002', name: '精炼师', description: '拥有1件强化+8以上装备', type: 'enhance', target: 1, enhanceLevel: 8, reward: { attack: 15 } },
        enhance_003: { id: 'enhance_003', name: '大师', description: '拥有1件强化+10装备', type: 'enhance', target: 1, enhanceLevel: 10, reward: { allStats: 10 } },
        enhance_004: { id: 'enhance_004', name: '神话', description: '拥有3件强化+10装备', type: 'enhance', target: 3, enhanceLevel: 10, reward: { attackPct: 20 } },
        // 探索类
        explore_001: { id: 'explore_001', name: '旅行者', description: '探索2个区域', type: 'explore', target: 2, reward: { expBonus: 5 } },
        explore_002: { id: 'explore_002', name: '冒险家', description: '探索4个区域', type: 'explore', target: 4, reward: { expBonus: 10 } },
        explore_003: { id: 'explore_003', name: '探索者', description: '探索6个区域', type: 'explore', target: 6, reward: { expBonus: 25 } },
    },
};

class Game {
    constructor() {
        this.player = null;
        this.currentScreen = 'start';
        this.currentLocation = 'village';
        this.currentEnemy = null;
        this.battleLog = [];
        this.autoBattle = false;
        this.selectedItem = null;
        this.loadGame();
        this.initEvents();
    }

    createPlayer(name, playerClass) {
        const classConfig = {
            warrior: { avatar: '⚔️', stats: { str: 13, int: 10, agi: 10, con: 12 }, startingSkill: 'slash' },
            mage:    { avatar: '🔮', stats: { str: 10, int: 13, agi: 12, con: 10 }, startingSkill: 'fireball' },
            ranger:  { avatar: '🏹', stats: { str: 12, int: 10, agi: 13, con: 10 }, startingSkill: 'slash' },
        };
        const config = classConfig[playerClass] || classConfig['warrior'];

        this.player = {
            name: name,
            playerClass: playerClass,
            avatar: config.avatar,
            level: 1,
            exp: 0,
            expNeeded: 100,
            gold: 100,
            enhanceStones: 3,
            stats: { ...config.stats },
            combatStats: {},
            currentHp: 0,
            maxHp: 0,
            currentMp: 0,
            maxMp: 0,
            skillPoints: 0,
            talents: [],
            equipment: { weapon: null, helmet: null, armor: null, legs: null, boots: null, accessory: null },
            quickSlots: [null, null, null, null],
            inventory: [
                { ...GAME_DATA.CONSUMABLES.health_potion, count: 3 },
            ],
            achievements: [],
            questProgress: {},
            mapProgress: { village: true, forest: true },
            storyChoices: [],
            battleCount: 0,
            exploreCount: 0,
        };
        // 计算战斗属性后再初始化HP/MP
        this.player.combatStats = this.calculateCombatStats();
        this.player.maxHp = Math.floor(this.player.combatStats.hp);
        this.player.currentHp = this.player.maxHp;
        this.player.maxMp = Math.floor(this.player.combatStats.mp);
        this.player.currentMp = this.player.maxMp;
        this.saveGame();
    }

    calculateCombatStats() {
        if (!this.player) return {};
        const { str, int, agi, con } = this.player.stats;
        let stats = {
            attack: str * 1.5,
            magic: int * 1.5,
            defense: con * 0.8 + str * 0.3,
            mdefense: int * 0.5,
            critRate: agi * 0.3,
            critDamage: 150 + int * 0.5,
            dodgeRate: agi * 0.2,
            hp: con * 10 + 50,
            mp: int * 5 + 20,
        };
        for (const slot in this.player.equipment) {
            const equip = this.player.equipment[slot];
            if (equip) {
                const upgradeBonus = 1 + (equip.upgradeLevel || 0) * 0.1;
                for (const stat in equip.stats) {
                    if (stats[stat] !== undefined) {
                        stats[stat] += Math.floor(equip.stats[stat] * upgradeBonus);
                    }
                }
            }
        }
        for (const talent of this.player.talents) {
            if (talent === 'warrior_1') stats.attack *= 1.1;
            if (talent === 'warrior_2') stats.defense *= 1.15;
            if (talent === 'warrior_3') stats.critDamage *= 1.3;
            if (talent === 'mage_1') stats.magic *= 1.1;
            if (talent === 'mage_2') stats.defense *= 1.15;
            if (talent === 'mage_3') stats.attack *= 1.2;
            if (talent === 'ranger_1') stats.critRate += 5;
            if (talent === 'ranger_2') stats.dodgeRate += 12;
            if (talent === 'ranger_3') stats.critRate += 8;
        }
        // 被动技能加成（根据技能等级）
        if (this.player.skillLevels) {
            for (const sid in this.player.skillLevels) {
                const skill = GAME_DATA.SKILLS[sid];
                if (skill && skill.type === 'passive') {
                    const level = this.player.skillLevels[sid] || 1;
                    const effect = skill.effect;
                    if (effect.attack) stats.attack *= (1 + effect.attack / 100 * (1 + (level - 1) * 0.5));
                    if (effect.defense) stats.defense *= (1 + effect.defense / 100 * (1 + (level - 1) * 0.5));
                }
            }
        }
        // 成就奖励加成
        if (this.player.achievementBonuses) {
            const ab = this.player.achievementBonuses;
            if (ab.attack) stats.attack += ab.attack;
            if (ab.defense) stats.defense += ab.defense;
            if (ab.hp) stats.hp += ab.hp;
            if (ab.attackPct) stats.attack *= (1 + ab.attackPct / 100);
            if (ab.allStats) {
                const mult = 1 + ab.allStats / 100;
                stats.attack *= mult;
                stats.magic *= mult;
                stats.defense *= mult;
                stats.mdefense *= mult;
                stats.hp *= mult;
                stats.mp *= mult;
            }
        }
        return stats;
    }

    addStatPoint(stat) {
        if (this.player.skillPoints > 0) {
            this.player.stats[stat]++;
            this.player.skillPoints--;
            this.player.combatStats = this.calculateCombatStats();
            this.player.maxHp = Math.floor(this.player.combatStats.hp);
            this.player.maxMp = Math.floor(this.player.combatStats.mp);
            this.player.currentHp = Math.min(this.player.currentHp, this.player.maxHp);
            this.player.currentMp = Math.min(this.player.currentMp, this.player.maxMp);
            this.saveGame();
            return true;
        }
        return false;
    }

    addExp(exp) {
        this.player.exp += exp;
        const MAX_LEVEL = 50;
        while (this.player.exp >= this.player.expNeeded && this.player.level < MAX_LEVEL) {
            this.player.exp -= this.player.expNeeded;
            this.player.level++;
            this.player.expNeeded = Math.floor(100 * Math.pow(this.player.level, 2));
            this.player.skillPoints += 2;
            this.player.combatStats = this.calculateCombatStats();
            this.player.maxHp = Math.floor(this.player.combatStats.hp);
            this.player.maxMp = Math.floor(this.player.combatStats.mp);
            this.player.currentHp = this.player.maxHp;
            this.player.currentMp = this.player.maxMp;
            this.showToast(`🎉 升级！${this.player.name} 达到 ${this.player.level} 级！`);
            this.checkAchievements();
        }
        if (this.player.level >= MAX_LEVEL && this.player.exp >= this.player.expNeeded) {
            this.player.exp = this.player.expNeeded - 1;
        }
        this.player.combatStats = this.calculateCombatStats();
        this.player.maxHp = Math.floor(this.player.combatStats.hp);
        this.player.maxMp = Math.floor(this.player.combatStats.mp);
        this.saveGame();
    }

    addGold(gold) {
        this.player.gold += gold;
        this.checkQuests('gold', null, gold);
        this.saveGame();
    }

    addItem(itemId, count = 1) {
        let item;
        if (GAME_DATA.EQUIPMENT[itemId]) {
            item = { ...GAME_DATA.EQUIPMENT[itemId], upgradeLevel: 0, count };
            this.checkQuests('collect_equip');
        } else if (GAME_DATA.CONSUMABLES[itemId]) {
            item = { ...GAME_DATA.CONSUMABLES[itemId], count };
        } else if (GAME_DATA.MATERIALS[itemId]) {
            item = { ...GAME_DATA.MATERIALS[itemId], count };
            this.checkQuests('collect', itemId, count);
        }
        if (!item) return;
        const existing = this.player.inventory.find(i => i.id === itemId);
        if (existing) {
            existing.count += count;
        } else {
            this.player.inventory.push(item);
        }
        this.saveGame();
        this.checkAchievements();
    }

    removeItem(itemId, count = 1) {
        const index = this.player.inventory.findIndex(i => i.id === itemId);
        if (index !== -1) {
            if (this.player.inventory[index].count > count) {
                this.player.inventory[index].count -= count;
            } else {
                this.player.inventory.splice(index, 1);
            }
            this.saveGame();
            return true;
        }
        return false;
    }

    equipItem(slotKey, equipData) {
        // equipData is the actual equipment object from inventory (with upgradeLevel)
        if (!equipData || !equipData.type) return false;
        if (this.player.level < equipData.levelReq) {
            this.showToast(`等级不足，需要 ${equipData.levelReq} 级`);
            return false;
        }
        const slot = this.getEquipSlot(equipData.type);
        // 如果传入的slotKey与装备部位不匹配，使用装备类型对应的槽位
        const targetSlot = slotKey || slot;
        const oldEquip = this.player.equipment[targetSlot];
        this.player.equipment[targetSlot] = { ...equipData };
        if (oldEquip) {
            this.player.inventory.push({ ...oldEquip, count: 1 });
        }
        // 从背包中移除
        const index = this.player.inventory.findIndex(i => i.id === equipData.id);
        if (index !== -1) {
            if (this.player.inventory[index].count > 1) {
                this.player.inventory[index].count--;
            } else {
                this.player.inventory.splice(index, 1);
            }
        }
        this.player.combatStats = this.calculateCombatStats();
        this.player.maxHp = Math.floor(this.player.combatStats.hp);
        this.player.maxMp = Math.floor(this.player.combatStats.mp);
        this.player.currentHp = Math.min(this.player.currentHp, this.player.maxHp);
        this.player.currentMp = Math.min(this.player.currentMp, this.player.maxMp);
        this.saveGame();
        this.showToast(`装备了 ${equipData.name}${equipData.upgradeLevel > 0 ? ' +' + equipData.upgradeLevel : ''}`);
        this.selectedItem = null;
        this.updateBackpackUI();
        this.updateMainUI();
        return true;
    }

    unequipItem(slot) {
        const equip = this.player.equipment[slot];
        if (!equip) return;
        this.player.equipment[slot] = null;
        this.player.inventory.push({ ...equip, count: 1 });
        this.player.combatStats = this.calculateCombatStats();
        this.player.maxHp = Math.floor(this.player.combatStats.hp);
        this.player.maxMp = Math.floor(this.player.combatStats.mp);
        this.player.currentHp = Math.min(this.player.currentHp, this.player.maxHp);
        this.player.currentMp = Math.min(this.player.currentMp, this.player.maxMp);
        this.saveGame();
        this.showToast(`卸下了 ${equip.name}`);
        this.updateBackpackUI();
        this.updateMainUI();
    }

    getEquipSlot(type) {
        const slots = { weapon: 'weapon', helmet: 'helmet', armor: 'armor', legs: 'legs', boots: 'boots', accessory: 'accessory' };
        return slots[type] || 'weapon';
    }

    enhanceEquip(slot) {
        this._enhanceSlot = slot;
        this._enhanceRefreshUI();
    }

    _enhanceRefreshUI() {
        const slot = this._enhanceSlot;
        const equip = this.player.equipment[slot];
        if (!equip) {
            this.showToast('该部位没有装备');
            this.switchScreen('backpack');
            return;
        }
        const currentLevel = equip.upgradeLevel || 0;
        const MAX_ENHANCE = 30;
        if (currentLevel >= MAX_ENHANCE) {
            this.showToast('已达到最高强化等级(+30)！');
            this.switchScreen('backpack');
            return;
        }
        const nextLevel = currentLevel + 1;
        const goldCost = Math.floor(50 + nextLevel * 30 + Math.pow(nextLevel, 2) * 10);
        const stoneCost = Math.max(1, Math.floor(nextLevel / 3) + 1);
        // 每次强化成功率降低10%，最低1%
        const successRate = Math.max(0.01, 1.0 - (nextLevel - 1) * 0.1);

        this.switchScreen('enhance');
        document.getElementById('enhance-icon').textContent = equip.icon;
        document.getElementById('enhance-name').textContent = equip.name;
        document.getElementById('enhance-level').textContent = `+${currentLevel}`;

        // 属性对比
        const compareDiv = document.getElementById('enhance-compare');
        compareDiv.innerHTML = '';
        const bonus = 1 + currentLevel * 0.1;
        const nextBonus = 1 + nextLevel * 0.1;
        const statNames = { attack: '攻击力', defense: '物理防御', magic: '魔法攻击', magic_def: '魔法防御', hp: '生命值', mp: '法力值', critRate: '暴击率', dodgeRate: '闪避率', speed: '速度' };
        for (const stat in equip.stats) {
            const row = document.createElement('div');
            row.className = 'compare-row';
            const before = Math.floor(equip.stats[stat] * bonus);
            const after = Math.floor(equip.stats[stat] * nextBonus);
            row.innerHTML = `${statNames[stat] || stat}: ${before} <span class="compare-arrow">→</span> <span class="compare-up">${after}</span>`;
            compareDiv.appendChild(row);
        }

        document.getElementById('enhance-gold-cost').textContent = goldCost;
        document.getElementById('enhance-stone-cost').textContent = stoneCost;

        const rateDiv = document.getElementById('enhance-rate');
        rateDiv.textContent = `成功率: ${Math.floor(successRate * 100)}% (Lv.${nextLevel}/${MAX_ENHANCE})`;
        rateDiv.className = 'enhance-rate';
        if (successRate < 0.2) rateDiv.classList.add('danger');
        else if (successRate < 0.5) rateDiv.classList.add('warning');

        // 绑定强化按钮（可连续强化）
        const enhanceBtn = document.getElementById('btn-enhance-start');
        enhanceBtn.disabled = false;
        enhanceBtn.onclick = () => {
            if (this.player.gold < goldCost) {
                this.showToast(`金币不足！需要 ${goldCost} 金币`);
                return;
            }
            if (this.player.enhanceStones < stoneCost) {
                this.showToast(`强化石不足！需要 ${stoneCost} 颗强化石`);
                return;
            }
            this.player.gold -= goldCost;
            this.player.enhanceStones -= stoneCost;
            const roll = Math.random();
            if (roll < successRate) {
                equip.upgradeLevel = nextLevel;
                this.player.combatStats = this.calculateCombatStats();
                this.player.maxHp = Math.floor(this.player.combatStats.hp);
                this.player.maxMp = Math.floor(this.player.combatStats.mp);
                this.player.currentHp = Math.min(this.player.currentHp, this.player.maxHp);
                this.player.currentMp = Math.min(this.player.currentMp, this.player.maxMp);
                this.saveGame();
                this.showToast(`🎉 强化成功！${equip.name} → +${equip.upgradeLevel}`);
                this.checkQuests('enhance');
                this.updateBackpackUI();
                this.updateMainUI();
                // 自动刷新强化界面进入下一级
                if (equip.upgradeLevel >= MAX_ENHANCE) {
                    this.showToast('🏆 已达到最高强化等级 +30！');
                    setTimeout(() => this.switchScreen('backpack'), 1500);
                } else {
                    setTimeout(() => this._enhanceRefreshUI(), 300);
                }
            } else {
                this.saveGame();
                this.showToast('💔 强化失败！装备等级保持不变，可再次尝试');
                document.getElementById('enhance-rate').textContent = `强化失败 (Lv.${nextLevel}/${MAX_ENHANCE}) — 可再次尝试`;
                document.getElementById('enhance-rate').classList.add('danger');
                this.updateBackpackUI();
            }
        };
    }

    useConsumable(itemId) {
        const item = GAME_DATA.CONSUMABLES[itemId];
        if (!item) return false;
        if (item.effect.hp) {
            const heal = Math.min(item.effect.hp, this.player.maxHp - this.player.currentHp);
            this.player.currentHp += heal;
            this.showToast(`使用 ${item.name}，恢复 ${heal} 生命值`);
        }
        if (item.effect.mp) {
            const restore = Math.min(item.effect.mp, this.player.maxMp - this.player.currentMp);
            this.player.currentMp += restore;
            this.showToast(`使用 ${item.name}，恢复 ${restore} 法力值`);
        }
        this.checkQuests('use_potion');
        this.removeItem(itemId);
        return true;
    }

    startBattle(monsterId) {
        const monster = { ...GAME_DATA.MONSTERS[monsterId] };
        this.currentEnemy = monster;
        // 战斗前重新计算战斗属性（含装备加成）
        this.player.combatStats = this.calculateCombatStats();
        this.player.maxHp = Math.floor(this.player.combatStats.hp);
        this.player.maxMp = Math.floor(this.player.combatStats.mp);
        this.player.currentHp = this.player.maxHp;
        this.player.currentMp = this.player.maxMp;
        this.switchScreen('battle');
        this.updateBattleUI();
        this.addBattleLog('战斗开始！');
        this.player.battleCount++;
        this.checkAchievements();
    }

    playerAttack() {
        if (!this.currentEnemy) return;
        const damage = this.calculateDamage(this.player.combatStats.attack, this.currentEnemy.defense);
        this.currentEnemy.hp -= damage;
        this.addBattleLog(`⚔️ ${this.player.name} 攻击造成 ${damage} 点伤害`, 'player');
        this.updateBattleUI();
        if (this.currentEnemy.hp <= 0) {
            this.battleVictory();
            return;
        }
        setTimeout(() => this.enemyAttack(), 500);
    }

    useSkill(skillId) {
        const skill = GAME_DATA.SKILLS[skillId];
        const skillLv = (this.player.skillLevels && this.player.skillLevels[skillId]) || 1;
        const mpCost = Math.floor(skill.mpCost * (1 + (skillLv - 1) * 0.05));
        if (!skill || this.player.currentMp < mpCost) {
            this.showToast('法力不足！');
            return;
        }
        this.player.currentMp -= mpCost;
        if (skill.type === 'active' && skill.damageCoeff) {
            const coeff = skill.damageCoeff + (skillLv - 1) * 0.15;
            const damage = Math.floor(this.player.combatStats.attack * coeff);
            this.currentEnemy.hp -= damage;
            this.addBattleLog(`✨ ${this.player.name} 使用 ${skill.name}(Lv.${skillLv}) 造成 ${damage} 点伤害`, 'player');
        } else if (skill.healCoeff) {
            const coeff = skill.healCoeff + (skillLv - 1) * 0.1;
            const heal = Math.floor(this.player.combatStats.magic * coeff);
            this.player.currentHp = Math.min(this.player.maxHp, this.player.currentHp + heal);
            this.addBattleLog(`💚 ${this.player.name} 使用 ${skill.name}(Lv.${skillLv}) 恢复 ${heal} 生命值`, 'heal');
        }
        this.updateBattleUI();
        if (this.currentEnemy.hp <= 0) {
            this.battleVictory();
            return;
        }
        setTimeout(() => this.enemyAttack(), 500);
    }

    useUltimate() {
        const skill = GAME_DATA.SKILLS.ultimate;
        const skillLv = (this.player.skillLevels && this.player.skillLevels['ultimate']) || 1;
        if (this.player.level < skill.unlockLevel) {
            this.showToast(`需要 ${skill.unlockLevel} 级才能使用必杀技！`);
            return;
        }
        const mpCost = Math.floor(skill.mpCost * (1 + (skillLv - 1) * 0.05));
        if (this.player.currentMp < mpCost) {
            this.showToast('法力不足！');
            return;
        }
        this.player.currentMp -= mpCost;
        const coeff = skill.damageCoeff + (skillLv - 1) * 0.2;
        const damage = Math.floor(this.player.combatStats.attack * coeff);
        this.currentEnemy.hp -= damage;
        this.addBattleLog(`💥 ${this.player.name} 使用必杀技(Lv.${skillLv})！造成 ${damage} 点伤害！`, 'crit');
        this.updateBattleUI();
        if (this.currentEnemy.hp <= 0) {
            this.battleVictory();
            return;
        }
        setTimeout(() => this.enemyAttack(), 500);
    }

    enemyAttack() {
        if (!this.currentEnemy || this.currentEnemy.hp <= 0) return;
        const damage = this.calculateDamage(this.currentEnemy.attack, this.player.combatStats.defense);
        this.player.currentHp -= damage;
        this.addBattleLog(`👹 ${this.currentEnemy.name} 攻击造成 ${damage} 点伤害`, 'enemy');
        this.updateBattleUI();
        if (this.player.currentHp <= 0) {
            this.battleDefeat();
            return;
        }
        if (this.autoBattle) {
            setTimeout(() => this.autoBattleTurn(), 500);
        }
    }

    calculateDamage(attack, defense) {
        let damage = Math.max(1, attack - defense * 0.5);
        if (Math.random() * 100 < this.player.combatStats.critRate) {
            damage = Math.floor(damage * this.player.combatStats.critDamage / 100);
        }
        return Math.floor(damage);
    }

    battleVictory() {
        this._retryAutoBattle = this.autoBattle;
        this.autoBattle = false;
        const exp = this.currentEnemy.exp;
        const gold = this.currentEnemy.gold;
        const drops = [];
        for (const dropId of this.currentEnemy.drops) {
            if (Math.random() < 0.3) {
                drops.push(dropId);
                this.addItem(dropId);
            }
        }
        if (Math.random() < 0.2) {
            this.player.enhanceStones = (this.player.enhanceStones || 0) + 1;
            drops.push('强化石');
        }
        this.addExp(exp);
        this.addGold(gold);
        this._lastBattleVictory = true;
        this.switchScreen('battle-result');
        document.getElementById('result-title').textContent = '战斗胜利！';
        document.getElementById('result-title').className = '';
        document.getElementById('reward-exp').textContent = exp;
        document.getElementById('reward-gold').textContent = gold;
        const itemsDiv = document.getElementById('reward-items');
        const itemsList = document.getElementById('reward-items-list');
        if (drops.length > 0) {
            itemsDiv.style.display = 'block';
            itemsList.textContent = drops.map(id => GAME_DATA.EQUIPMENT[id]?.name || GAME_DATA.CONSUMABLES[id]?.name || GAME_DATA.MATERIALS[id]?.name || id).join(', ');
        } else {
            itemsDiv.style.display = 'none';
        }
        // 显示批量挑战按钮
        document.getElementById('batch-btns').style.display = 'flex';
        this.checkQuests('kill', this.currentEnemy.id);
        this.checkQuests('battle');
        this.checkAchievements();
    }

    battleDefeat() {
        this._retryAutoBattle = this.autoBattle;
        this.autoBattle = false;
        const exp = Math.floor(this.currentEnemy.exp / 3);
        const gold = Math.floor(this.currentEnemy.gold / 3);
        this.addExp(exp);
        this.addGold(gold);
        this.player.currentHp = Math.floor(this.player.maxHp * 0.3);
        this.player.currentMp = Math.floor(this.player.maxMp * 0.3);
        this._lastBattleVictory = false;
        this.switchScreen('battle-result');
        document.getElementById('result-title').textContent = '战斗失败！';
        document.getElementById('result-title').className = 'lose';
        document.getElementById('reward-exp').textContent = exp;
        document.getElementById('reward-gold').textContent = gold;
        document.getElementById('reward-items').style.display = 'none';
        // 失败不显示批量按钮
        document.getElementById('batch-btns').style.display = 'none';
    }

    batchBattle(totalCount) {
        if (!this.currentEnemy || !this.currentEnemy.id) {
            this.showToast('没有可挑战的怪物');
            return;
        }
        const monsterId = this.currentEnemy.id;
        const monster = GAME_DATA.MONSTERS[monsterId];
        if (!monster) return;

        // 战斗前恢复满HP/MP
        this.player.combatStats = this.calculateCombatStats();
        this.player.maxHp = Math.floor(this.player.combatStats.hp);
        this.player.maxMp = Math.floor(this.player.combatStats.mp);
        this.player.currentHp = this.player.maxHp;
        this.player.currentMp = this.player.maxMp;

        // 创建进度遮罩
        const overlay = document.createElement('div');
        overlay.className = 'batch-progress';
        overlay.id = 'batch-progress-overlay';
        overlay.innerHTML = `
            <div class="batch-progress-content">
                <div class="batch-progress-title">⚔️ 批量挑战中...</div>
                <div class="batch-progress-bar">
                    <div class="batch-progress-fill" id="batch-fill" style="width:0%"></div>
                </div>
                <div class="batch-progress-text" id="batch-text">0 / ${totalCount}</div>
                <button class="batch-cancel-btn" id="batch-cancel">取消</button>
            </div>
        `;
        document.body.appendChild(overlay);

        let cancelled = false;
        document.getElementById('batch-cancel').onclick = () => { cancelled = true; };

        let completed = 0;
        let totalExp = 0, totalGold = 0;
        const totalDrops = {};
        // 预缓存DOM引用和元素值，避免每次迭代查找DOM
        const fillEl = document.getElementById('batch-fill');
        const textEl = document.getElementById('batch-text');
        const progressStep = Math.max(1, Math.floor(totalCount / 100)); // 每1%更新一次
        let lastDomUpdate = 0;

        // 批量处理：每次执行多个战斗回合
        const batchSize = Math.max(1, Math.floor(totalCount / 1000)); // 每批处理totalCount/1000场
        const delay = Math.max(1, Math.floor(10000 / Math.max(1, Math.ceil(totalCount / batchSize))));

        const runBatch = () => {
            if (cancelled || completed >= totalCount) {
                if (overlay.parentNode) overlay.remove();
                if (!cancelled) {
                    this.showToast(`🎉 批量挑战完成！${totalCount}场战斗，获得 ${totalExp}经验, ${totalGold}金币`);
                } else {
                    this.showToast(`批量挑战已取消，完成了 ${completed}/${totalCount} 场`);
                }
                this.switchScreen('battle-result');
                document.getElementById('result-title').textContent = `批量挑战${cancelled ? '中止' : '完成'}！`;
                document.getElementById('result-title').className = '';
                document.getElementById('reward-exp').textContent = totalExp;
                document.getElementById('reward-gold').textContent = totalGold;
                const dropsStr = Object.entries(totalDrops).map(([k, v]) => `${GAME_DATA.EQUIPMENT[k]?.name || GAME_DATA.CONSUMABLES[k]?.name || GAME_DATA.MATERIALS[k]?.name || k}x${v}`).join(', ');
                const itemsDiv = document.getElementById('reward-items');
                if (dropsStr) {
                    itemsDiv.style.display = 'block';
                    document.getElementById('reward-items-list').textContent = dropsStr;
                } else {
                    itemsDiv.style.display = 'none';
                }
                document.getElementById('batch-btns').style.display = 'none';
                return;
            }

            // 批量执行多个战斗回合
            const endIdx = Math.min(completed + batchSize, totalCount);
            while (completed < endIdx) {
                if (cancelled) break;
                completed++;

                const playerAtk = Math.max(1, Math.floor((this.player.combatStats.attack || 20) * (0.9 + Math.random() * 0.2)));
                const monsterDef = monster.defense * 0.5;
                const dmg = Math.max(1, playerAtk - monsterDef);
                const roundsNeeded = Math.ceil(monster.hp / dmg);
                const damageTaken = Math.max(0, Math.floor((monster.attack - this.player.combatStats.defense * 0.5) * roundsNeeded * 0.7));
                this.player.currentHp = Math.max(1, this.player.currentHp - damageTaken);

                // 自动吃药
                if (this.player.currentHp < this.player.maxHp * 0.3) {
                    const hpPot = this.player.inventory.find(i => i.id === 'health_potion' && (i.count || 1) > 0);
                    if (hpPot) {
                        hpPot.count--;
                        if (hpPot.count <= 0) this.player.inventory = this.player.inventory.filter(i => i.id !== 'health_potion');
                        this.player.currentHp += 50;
                        if (this.player.currentHp > this.player.maxHp) this.player.currentHp = this.player.maxHp;
                    }
                }
                if (this.player.currentMp < this.player.maxMp * 0.3) {
                    const mpPot = this.player.inventory.find(i => i.id === 'mp_potion' && (i.count || 1) > 0);
                    if (mpPot) {
                        mpPot.count--;
                        if (mpPot.count <= 0) this.player.inventory = this.player.inventory.filter(i => i.id !== 'mp_potion');
                        this.player.currentMp += 30;
                        if (this.player.currentMp > this.player.maxMp) this.player.currentMp = this.player.maxMp;
                    }
                }

                const exp = Math.floor(monster.exp * (0.8 + Math.random() * 0.4));
                const gold = Math.floor(monster.gold * (0.8 + Math.random() * 0.4));
                totalExp += exp;
                totalGold += gold;
                this.addExp(exp);
                this.addGold(gold);
                this.player.battleCount++;

                for (const dropId of monster.drops) {
                    if (Math.random() < 0.3) {
                        if (!totalDrops[dropId]) totalDrops[dropId] = 0;
                        totalDrops[dropId]++;
                        this.addItem(dropId);
                    }
                }
                if (Math.random() < 0.2) {
                    this.player.enhanceStones = (this.player.enhanceStones || 0) + 1;
                    if (!totalDrops['强化石']) totalDrops['强化石'] = 0;
                    totalDrops['强化石']++;
                }
                this.checkQuests('kill', monster.id);
                this.checkQuests('battle');
            }

            // 只在间隔够大时更新DOM（避免大量DOM操作阻塞主线程）
            if (completed - lastDomUpdate >= progressStep) {
                lastDomUpdate = completed;
                const pct = Math.floor((completed / totalCount) * 100);
                if (fillEl) fillEl.style.width = `${pct}%`;
                if (textEl) textEl.textContent = `${completed} / ${totalCount} | ⭐${totalExp} 💰${totalGold}`;
            }

            setTimeout(runBatch, delay);
        };

        setTimeout(runBatch, 10);
    }

    fleeBattle() {
        if (Math.random() < 0.5) {
            this.showToast('逃跑成功！');
            this.player.currentHp = Math.floor(this.player.maxHp * 0.5);
            this.switchScreen('main');
        } else {
            this.showToast('逃跑失败！');
            setTimeout(() => this.enemyAttack(), 500);
        }
    }

    autoBattleTurn() {
        if (!this.currentEnemy || !this.autoBattle) return;
        let usedPotion = false;

        // 检查MP：低于30%时自动吃法力药水
        if (this.player.currentMp < this.player.maxMp * 0.3) {
            const mpPotion = this.player.inventory.find(i => i.type === 'consumable' && i.effect?.mp);
            if (mpPotion) {
                this.useConsumable(mpPotion.id);
                this.addBattleLog(`🧪 自动使用法力药水`);
                usedPotion = true;
            }
        }

        // 检查HP：低于35%时自动吃生命药水
        if (this.player.currentHp < this.player.maxHp * 0.35) {
            const hpPotion = this.player.inventory.find(i => i.type === 'consumable' && i.effect?.hp);
            if (hpPotion) {
                this.useConsumable(hpPotion.id);
                this.addBattleLog(`🧪 自动使用生命药水`);
                usedPotion = true;
            }
        }

        // 吃药后继续攻击，不暂停
        if (this.player.currentMp >= GAME_DATA.SKILLS.slash.mpCost && this.player.currentHp > 0) {
            this.useSkill('slash');
        } else {
            this.playerAttack();
        }
    }

    addBattleLog(message, type = '') {
        this.battleLog.push({ message, type });
        const logDiv = document.getElementById('battle-logs');
        const entry = document.createElement('div');
        entry.className = `log-entry ${type}`;
        entry.textContent = message;
        logDiv.appendChild(entry);
        logDiv.scrollTop = logDiv.scrollHeight;
    }

    updateBattleUI() {
        document.getElementById('battle-hp-fill').style.width = `${(this.player.currentHp / this.player.maxHp) * 100}%`;
        document.getElementById('battle-hp-text').textContent = `${Math.floor(this.player.currentHp)}/${this.player.maxHp}`;
        document.getElementById('battle-mp-fill').style.width = `${(this.player.currentMp / this.player.maxMp) * 100}%`;
        document.getElementById('battle-mp-text').textContent = `${Math.floor(this.player.currentMp)}/${this.player.maxMp}`;
        if (this.currentEnemy) {
            document.getElementById('enemy-avatar').textContent = this.currentEnemy.icon;
            document.getElementById('enemy-hp-fill').style.width = `${(this.currentEnemy.hp / this.currentEnemy.maxHp) * 100}%`;
            document.getElementById('enemy-hp-text').textContent = `${Math.floor(this.currentEnemy.hp)}/${this.currentEnemy.maxHp}`;
        }
        // 更新快键技能按钮
        if (!this.player.quickSlots) this.player.quickSlots = [null, null, null, null];
        for (let i = 0; i < 4; i++) {
            const btn = document.getElementById(`btn-quick-slot${i + 1}`);
            if (!btn) continue;
            const skillId = this.player.quickSlots[i];
            if (skillId && GAME_DATA.SKILLS[skillId]) {
                const skill = GAME_DATA.SKILLS[skillId];
                btn.textContent = `${skill.icon} ${skill.name}`;
                btn.disabled = this.player.currentMp < skill.mpCost;
            } else {
                btn.textContent = '[空]';
                btn.disabled = true;
            }
        }

        // 更新药水数量
        const hpPotCount = this.player.inventory.reduce((sum, i) => i.type === 'consumable' && i.effect?.hp ? sum + i.count : sum, 0);
        const mpPotCount = this.player.inventory.reduce((sum, i) => i.type === 'consumable' && i.effect?.mp ? sum + i.count : sum, 0);
        const hpEl = document.getElementById('battle-hp-potion');
        const mpEl = document.getElementById('battle-mp-potion');
        if (hpEl) hpEl.textContent = `❤️生命药水: ${hpPotCount}`;
        if (mpEl) mpEl.textContent = `💙法力药水: ${mpPotCount}`;
    }

    checkQuests(type, target, count = 1) {
        // 检查常规任务
        for (const questId in GAME_DATA.TASKS) {
            const quest = GAME_DATA.TASKS[questId];
            if (quest.locked && this.player.level < (quest.requireLevel || 1)) continue;
            const qp = this.player.questProgress[questId];
            if (qp && qp.completed) continue;
            if (!this.player.questProgress[questId]) {
                this.player.questProgress[questId] = {};
            }
            for (const obj of quest.objectives) {
                let match = false;
                if (obj.type === type) {
                    if ((type === 'kill' || type === 'collect' || type === 'talk') && obj.target && obj.target === target) match = true;
                    else if (!obj.target) match = true;
                }
                if (match) {
                    if (!this.player.questProgress[questId][obj.type]) {
                        this.player.questProgress[questId][obj.type] = 0;
                    }
                    this.player.questProgress[questId][obj.type] += count;
                    // Check if objective met
                    let totalProgress = 0;
                    let totalTarget = 0;
                    for (const o of quest.objectives) {
                        totalProgress += this.player.questProgress[questId][o.type] || 0;
                        totalTarget += o.count;
                    }
                    if (totalProgress >= totalTarget && !this.player.questProgress[questId].completed) {
                        this.showToast(`🎊 任务目标完成！${quest.title} — 前往任务界面领取奖励`);
                    }
                }
            }
        }
        // 检查NPC任务
        for (const questId in GAME_DATA.NPC_TASKS) {
            const quest = GAME_DATA.NPC_TASKS[questId];
            if (!quest.accepted || quest.completed) continue;
            if (!this.player.questProgress[questId]) {
                this.player.questProgress[questId] = {};
            }
            const qp = this.player.questProgress[questId];
            for (const obj of quest.objectives) {
                let match = false;
                if (obj.type === type) {
                    if ((type === 'kill' || type === 'collect' || type === 'talk') && obj.target && obj.target === target) match = true;
                    else if (!obj.target) match = true;
                }
                if (match) {
                    if (!qp[obj.type]) qp[obj.type] = 0;
                    qp[obj.type] += count;
                    let totalProgress = 0;
                    let totalTarget = 0;
                    for (const o of quest.objectives) {
                        totalProgress += qp[o.type] || 0;
                        totalTarget += o.count;
                    }
                    if (totalProgress >= totalTarget && !qp.completed) {
                        this.showToast(`🎊 NPC任务目标完成！${quest.title} — 前往任务界面领取奖励`);
                    }
                }
            }
        }
        this.saveGame();
    }

    completeQuest(questId) {
        let quest = GAME_DATA.TASKS[questId];
        let isNpcQuest = false;
        if (!quest) {
            quest = GAME_DATA.NPC_TASKS[questId];
            isNpcQuest = true;
        }
        if (!quest) return;
        const qp = this.player.questProgress[questId] || {};

        // 检查目标是否达成
        let totalProgress = 0;
        let totalTarget = 0;
        for (const obj of quest.objectives) {
            totalProgress += qp[obj.type] || 0;
            totalTarget += obj.count;
        }
        if (totalProgress < totalTarget) {
            this.showToast('任务目标尚未完成！');
            return;
        }
        if (qp.completed) {
            this.showToast('奖励已领取！');
            return;
        }

        // 发放奖励
        if (quest.rewards.exp) this.addExp(quest.rewards.exp);
        if (quest.rewards.gold) this.addGold(quest.rewards.gold);
        if (quest.rewards.item) this.addItem(quest.rewards.item);
        if (quest.rewards.enhanceStones) this.player.enhanceStones = (this.player.enhanceStones || 0) + quest.rewards.enhanceStones;
        qp.completed = true;

        // NPC任务标记
        if (isNpcQuest) {
            quest.completed = true;
            this.showToast(`🎉 NPC委托完成！${quest.title} — 获得 ${quest.rewards.exp}经验, ${quest.rewards.gold}金币`);
            this.saveGame();
            this.updateTasksUI();
            return;
        }

        // 解锁下一个主线任务
        if (quest.unlockNext && GAME_DATA.TASKS[quest.unlockNext]) {
            GAME_DATA.TASKS[quest.unlockNext].locked = false;
            this.showToast(`📜 新任务解锁：${GAME_DATA.TASKS[quest.unlockNext].title}`);
        }

        // 解锁对应区域
        // 完成任务后解锁对应地图区域
        if (questId === 'main_001') { this.player.mapProgress.cave = true; this.player.mapProgress.forest = true; }
        if (questId === 'main_003') { this.player.mapProgress.castle = true; this.player.mapProgress.dungeon = true; }
        if (questId === 'main_005') { this.player.mapProgress.boss = true; }

        this.showToast(`🎉 任务完成！${quest.title} — 获得 ${quest.rewards.exp}经验, ${quest.rewards.gold}金币`);
        this.saveGame();
        this.updateTasksUI();
        this.updateMainUI();
    }

    claimQuestReward(quest) {
        // Legacy method, now handled by completeQuest
        this.completeQuest(quest.id);
    }

    checkAchievements() {
        if (!this.player.achievementBonuses) {
            this.player.achievementBonuses = { attack: 0, defense: 0, hp: 0, expBonus: 0, goldBonus: 0, attackPct: 0, allStats: 0 };
        }
        for (const id in GAME_DATA.ACHIEVEMENTS) {
            const achieve = GAME_DATA.ACHIEVEMENTS[id];
            if (this.player.achievements.includes(id)) continue;
            let progress = 0;
            if (achieve.type === 'combat') progress = this.player.battleCount;
            if (achieve.type === 'explore') progress = Object.keys(this.player.mapProgress).length;
            if (achieve.type === 'collect') {
                // 统计不同装备数量（背包+已装备）
                const equipIds = new Set();
                for (const item of this.player.inventory) {
                    if (item.type === 'weapon' || item.type === 'helmet' || item.type === 'armor' || item.type === 'legs' || item.type === 'boots' || item.type === 'accessory') {
                        equipIds.add(item.id);
                    }
                }
                for (const slot in this.player.equipment) {
                    if (this.player.equipment[slot]) equipIds.add(this.player.equipment[slot].id);
                }
                progress = equipIds.size;
            }
            if (achieve.type === 'level') progress = this.player.level;
            if (achieve.type === 'enhance') {
                const enhanceLv = achieve.enhanceLevel || 5;
                let count = 0;
                for (const slot in this.player.equipment) {
                    const equip = this.player.equipment[slot];
                    if (equip && (equip.upgradeLevel || 0) >= enhanceLv) count++;
                }
                for (const item of this.player.inventory) {
                    if ((item.type === 'weapon' || item.type === 'helmet' || item.type === 'armor' || item.type === 'legs' || item.type === 'boots' || item.type === 'accessory') && (item.upgradeLevel || 0) >= enhanceLv) {
                        count++;
                    }
                }
                progress = count;
            }
            achieve.progress = progress;
            if (progress >= achieve.target) {
                this.player.achievements.push(id);
                // 应用奖励
                const r = achieve.reward;
                if (r.attack) this.player.achievementBonuses.attack = (this.player.achievementBonuses.attack || 0) + r.attack;
                if (r.defense) this.player.achievementBonuses.defense = (this.player.achievementBonuses.defense || 0) + r.defense;
                if (r.hp) this.player.achievementBonuses.hp = (this.player.achievementBonuses.hp || 0) + r.hp;
                if (r.gold) this.addGold(r.gold);
                if (r.expBonus) this.player.achievementBonuses.expBonus = (this.player.achievementBonuses.expBonus || 0) + r.expBonus;
                if (r.goldBonus) this.player.achievementBonuses.goldBonus = (this.player.achievementBonuses.goldBonus || 0) + r.goldBonus;
                if (r.skillPoints) this.player.skillPoints += r.skillPoints;
                if (r.attackPct) this.player.achievementBonuses.attackPct = (this.player.achievementBonuses.attackPct || 0) + r.attackPct;
                if (r.allStats) this.player.achievementBonuses.allStats = (this.player.achievementBonuses.allStats || 0) + r.allStats;
                // 更新战斗属性
                this.player.combatStats = this.calculateCombatStats();
                this.player.maxHp = Math.floor(this.player.combatStats.hp);
                this.player.maxMp = Math.floor(this.player.combatStats.mp);
                this.player.currentHp = Math.min(this.player.currentHp, this.player.maxHp);
                this.player.currentMp = Math.min(this.player.currentMp, this.player.maxMp);
                this.showToast(`🏆 成就解锁：${achieve.name}`);
            }
        }
    }

    startDialog(npcName) {
        const dialogs = GAME_DATA.DIALOGS[npcName];
        if (!dialogs) return;
        this.switchScreen('dialog');
        document.getElementById('npc-name').textContent = npcName;
        this.showDialogLine(dialogs, 0);
    }

    showDialogLine(dialogs, index) {
        if (index >= dialogs.length) {
            this.switchScreen('main');
            return;
        }
        const dialog = dialogs[index];
        document.getElementById('dialog-content').textContent = dialog.text;
        const choicesDiv = document.getElementById('dialog-choices');
        const nextBtn = document.getElementById('btn-next-dialog');
        choicesDiv.innerHTML = '';
        if (dialog.choices) {
            nextBtn.style.display = 'none';
            for (const choice of dialog.choices) {
                // 如果选项包含npcQuest且任务已接受，隐藏该选项
                if (choice.effect && choice.effect.npcQuest && GAME_DATA.NPC_TASKS[choice.effect.npcQuest] && GAME_DATA.NPC_TASKS[choice.effect.npcQuest].accepted) {
                    continue;
                }
                const btn = document.createElement('button');
                btn.className = 'choice-btn';
                btn.textContent = choice.text;
                btn.onclick = () => {
                    // 应用选择效果
                    this.applyDialogChoice(choice);
                    this.player.storyChoices.push({ dialog: dialog.text, choice: choice.text });

                    // 根据next决定跳转
                    let nextIndex = index + 1;
                    if (choice.next === 'accept') {
                        // 通用接受逻辑
                        nextIndex = dialogs.length - 1; // 跳到结束语
                    } else if (choice.next === 'shop') {
                        this.switchScreen('shop');
                        return;
                    } else if (choice.next === 'leave') {
                        this.switchScreen('main');
                        return;
                    } else if (choice.next === 'enhance') {
                        this.switchScreen('backpack');
                        return;
                    } else if (typeof choice.next === 'number') {
                        nextIndex = choice.next;
                    }
                    this.showDialogLine(dialogs, nextIndex);
                };
                choicesDiv.appendChild(btn);
            }
        } else {
            nextBtn.style.display = 'block';
            nextBtn.onclick = () => this.showDialogLine(dialogs, index + 1);
        }

        // 对话结束后检查talk类型任务
        const npcName = document.getElementById('npc-name').textContent;
        this.checkQuests('talk', npcName);
    }

    applyDialogChoice(choice) {
        if (!choice.effect) return;
        if (choice.effect.gold) {
            this.addGold(choice.effect.gold);
            this.showToast(`获得 💰${choice.effect.gold} 金币`);
        }
        if (choice.effect.exp) {
            this.addExp(choice.effect.exp);
            this.showToast(`获得 ⭐${choice.effect.exp} 经验`);
        }
        if (choice.effect.item) {
            const itemId = choice.effect.item;
            this.addItem(itemId);
            const item = GAME_DATA.EQUIPMENT[itemId] || GAME_DATA.CONSUMABLES[itemId] || GAME_DATA.MATERIALS[itemId];
            if (item) this.showToast(`获得 ${item.icon}${item.name}`);
        }
        if (choice.effect.reputation) {
            if (!this.player.reputation) this.player.reputation = 0;
            this.player.reputation += choice.effect.reputation;
        }
        if (choice.effect.npcQuest && GAME_DATA.NPC_TASKS[choice.effect.npcQuest]) {
            GAME_DATA.NPC_TASKS[choice.effect.npcQuest].accepted = true;
            this.showToast(`📜 接受NPC委托：${GAME_DATA.NPC_TASKS[choice.effect.npcQuest].title}`);
        }
    }

    exploreLocation() {
        const location = GAME_DATA.LOCATIONS[this.currentLocation];
        if (!location.monsters || location.monsters.length === 0) {
            this.showToast('这里没有怪物可以战斗');
            return;
        }
        const randomMonster = location.monsters[Math.floor(Math.random() * location.monsters.length)];
        this.startBattle(randomMonster);
    }

    travelTo(locationId) {
        const location = GAME_DATA.LOCATIONS[locationId];
        if (!this.player.mapProgress[locationId]) {
            this.showToast('该区域尚未解锁！');
            return;
        }
        this.currentLocation = locationId;
        this.checkQuests('explore');
        this.switchScreen('main');
        this.updateMainUI();
    }

    updateMainUI() {
        document.getElementById('player-avatar').textContent = this.player.avatar;
        document.getElementById('player-name-display').textContent = this.player.name;
        document.getElementById('player-level').textContent = `Lv.${this.player.level}`;
        document.getElementById('player-gold').textContent = this.player.gold;
        document.getElementById('player-power').textContent = Math.floor(this.player.combatStats.attack + this.player.combatStats.defense);
        document.getElementById('current-location').textContent = GAME_DATA.LOCATIONS[this.currentLocation].name;
        document.getElementById('location-desc').textContent = GAME_DATA.LOCATIONS[this.currentLocation].description;
        document.querySelectorAll('.map-cell').forEach(cell => {
            const locId = cell.dataset.location;
            const loc = GAME_DATA.LOCATIONS[locId];
            cell.classList.remove('current');
            if (locId === this.currentLocation) {
                cell.classList.add('current');
            }
            // 更新条件显示
            const reqEl = cell.querySelector('.cell-req');
            if (reqEl && loc) {
                reqEl.textContent = loc.requirement || '';
                if (loc.unlocked || this.player.mapProgress[locId]) {
                    reqEl.style.color = '#4CAF50';
                } else {
                    reqEl.style.color = '#FF6B6B';
                }
            }
        });
        // NPC显示
        this.updateNPCList();
    }

    updateNPCList() {
        const npcList = document.getElementById('npc-list');
        if (!npcList) return;
        const location = GAME_DATA.LOCATIONS[this.currentLocation];
        const npcNames = location.npcs || [];
        npcList.innerHTML = '';
        for (const name of npcNames) {
            const npc = GAME_DATA.NPCS[name];
            if (!npc) continue;
            const chip = document.createElement('div');
            chip.className = 'npc-chip';
            chip.innerHTML = `${npc.icon} ${npc.name}`;
            chip.title = npc.description;
            chip.onclick = () => this.startDialog(name);
            npcList.appendChild(chip);
        }
    }

    switchScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        // 确保战斗结算界面的内联样式被清除
        const resultScreen = document.getElementById('battle-result-screen');
        if (resultScreen) resultScreen.style.display = 'none';
        if (screenId === 'battle-result') {
            resultScreen.style.display = 'flex';
        } else {
            const target = document.getElementById(`${screenId}-screen`);
            if (target) target.classList.add('active');
        }
        this.currentScreen = screenId;
        if (screenId === 'main') this.updateMainUI();
        if (screenId === 'char') this.updateCharUI();
        if (screenId === 'backpack') this.updateBackpackUI();
        if (screenId === 'skills') this.updateSkillsUI();
        if (screenId === 'tasks') this.updateTasksUI();
        if (screenId === 'map') this.updateMapUI();
        if (screenId === 'achieve') this.updateAchieveUI();
        if (screenId === 'shop') this.updateShopUI();
    }

    updateCharUI() {
        document.getElementById('char-avatar').textContent = this.player.avatar;
        document.getElementById('char-name').textContent = this.player.name;
        document.getElementById('char-level').textContent = `Lv.${this.player.level}`;
        document.getElementById('char-power').textContent = `战力: ${Math.floor(this.player.combatStats.attack + this.player.combatStats.defense)}`;
        document.getElementById('stat-str').textContent = this.player.stats.str;
        document.getElementById('stat-int').textContent = this.player.stats.int;
        document.getElementById('stat-agi').textContent = this.player.stats.agi;
        document.getElementById('stat-con').textContent = this.player.stats.con;
        document.getElementById('stat-points').textContent = this.player.skillPoints;
        document.getElementById('combat-hp').textContent = `${Math.floor(this.player.currentHp)}/${this.player.maxHp}`;
        document.getElementById('combat-mp').textContent = `${Math.floor(this.player.currentMp)}/${this.player.maxMp}`;
        document.getElementById('combat-attack').textContent = Math.floor(this.player.combatStats.attack);
        document.getElementById('combat-magic').textContent = Math.floor(this.player.combatStats.magic);
        document.getElementById('combat-def').textContent = Math.floor(this.player.combatStats.defense);
        document.getElementById('combat-mdef').textContent = Math.floor(this.player.combatStats.mdefense);
        document.getElementById('combat-crit').textContent = `${this.player.combatStats.critRate.toFixed(1)}%`;
        document.getElementById('combat-dodge').textContent = `${this.player.combatStats.dodgeRate.toFixed(1)}%`;
        document.querySelectorAll('.stat-btn').forEach(btn => {
            btn.disabled = this.player.skillPoints <= 0;
        });
        document.querySelectorAll('.talent-node').forEach(node => {
            node.classList.remove('active');
            if (this.player.talents.includes(node.dataset.talent)) {
                node.classList.add('active');
            }
        });
    }

    updateBackpackUI() {
        // 更新装备栏
        const slotLabels = { weapon: '武器', helmet: '头盔', armor: '护甲', legs: '护腿', boots: '靴子', accessory: '饰品' };
        for (const slot in this.player.equipment) {
            const equip = this.player.equipment[slot];
            const el = document.getElementById(`equipped-${slot}`);
            const slotEl = document.querySelector(`.equip-slot[data-slot="${slot}"]`);
            if (el) {
                if (equip) {
                    el.textContent = `${equip.icon} ${equip.name}${equip.upgradeLevel > 0 ? ' +' + equip.upgradeLevel : ''}`;
                    el.style.color = equip.quality === 'orange' ? '#FF8C00' :
                                     equip.quality === 'purple' ? '#9932CC' :
                                     equip.quality === 'blue' ? '#1E90FF' :
                                     equip.quality === 'green' ? '#32CD32' : '#FFE896';
                } else {
                    el.textContent = '空';
                    el.style.color = '#666';
                }
            }
            if (slotEl) {
                slotEl.classList.toggle('equipped', !!equip);
            }
        }

        // 更新装备属性加成总览
        const statsDiv = document.getElementById('bp-equip-stats');
        statsDiv.innerHTML = '<div style="color:#FFD700;margin-bottom:6px;">装备总加成</div>';
        const totalStats = {};
        for (const slot in this.player.equipment) {
            const equip = this.player.equipment[slot];
            if (equip) {
                const bonus = 1 + (equip.upgradeLevel || 0) * 0.1;
                for (const stat in equip.stats) {
                    totalStats[stat] = (totalStats[stat] || 0) + Math.floor(equip.stats[stat] * bonus);
                }
            }
        }
        if (Object.keys(totalStats).length === 0) {
            statsDiv.innerHTML += '<div style="color:#666;">未穿戴装备</div>';
        } else {
            const statNames = { attack: '攻击力', defense: '物理防御', magic: '魔法攻击', magic_def: '魔法防御', hp: '生命值', mp: '法力值', critRate: '暴击率', dodgeRate: '闪避率', speed: '速度' };
            for (const stat in totalStats) {
                const row = document.createElement('div');
                row.className = 'stat-row';
                row.innerHTML = `<span>${statNames[stat] || stat}</span><span style="color:#4CAF50;">+${totalStats[stat]}</span>`;
                statsDiv.appendChild(row);
            }
        }

        // 更新背包物品
        const grid = document.getElementById('inventory-grid');
        grid.innerHTML = '';
        const tab = document.querySelector('.backpack-tabs .tab-btn.active')?.dataset?.tab || 'all';
        for (const item of this.player.inventory) {
            if (tab === 'equipment' && item.type !== 'weapon' && item.type !== 'helmet' && item.type !== 'armor' && item.type !== 'legs' && item.type !== 'boots' && item.type !== 'accessory') continue;
            if (tab === 'consumables' && item.type !== 'consumable') continue;
            if (tab === 'materials' && item.type !== 'material') continue;
            const div = document.createElement('div');
            div.className = `inventory-item ${item.quality || ''}`;
            div.setAttribute('data-item', item.id);
            div.innerHTML = `
                <div class="item-icon">${item.icon}</div>
                <div class="item-name">${item.name}</div>
                ${item.upgradeLevel > 0 ? `<div class="upgrade-badge">+${item.upgradeLevel}</div>` : ''}
                <div class="item-count">${item.count > 1 ? 'x' + item.count : item.type === 'equipment' || item.type === 'weapon' ? '' : ''}</div>
            `;
            div.onclick = () => this.selectItem(item.id);
            grid.appendChild(div);
        }
        document.getElementById('bp-gold').textContent = this.player.gold;
        document.getElementById('bp-enhance-stone').textContent = this.player.enhanceStones || 0;
    }

    selectItem(itemId) {
        this.selectedItem = itemId;
        document.querySelectorAll('.inventory-item').forEach(i => i.classList.remove('selected'));
        const itemEl = document.querySelector(`.inventory-item[data-item="${itemId}"]`);
        if (itemEl) itemEl.classList.add('selected');

        // 找到实际物品数据
        const item = this.player.inventory.find(i => i.id === itemId);
        const isEquip = item && (item.type === 'weapon' || item.type === 'helmet' || item.type === 'armor' || item.type === 'legs' || item.type === 'boots' || item.type === 'accessory');
        const isConsumable = item && item.type === 'consumable';
        const isMaterial = item && item.type === 'material';

        // 设置物品类型，供分解等操作使用
        if (isEquip) this.selectedItemType = 'equipment';
        else if (isMaterial) this.selectedItemType = 'material';
        else if (isConsumable) this.selectedItemType = 'consumable';
        else this.selectedItemType = null;

        // 显示/隐藏操作按钮
        document.getElementById('btn-equip-item').style.display = isEquip ? 'inline-block' : 'none';
        document.getElementById('btn-unequip-item').style.display = 'none';
        document.getElementById('btn-bp-use').style.display = isConsumable ? 'inline-block' : 'none';
        document.getElementById('btn-enhance-item').style.display = 'none';
        document.getElementById('btn-decompose-item').style.display = (isEquip || isMaterial) ? 'inline-block' : 'none';

        // 显示道具说明面板
        const tooltip = document.getElementById('item-tooltip');
        if (item) {
            tooltip.style.display = 'block';
            document.getElementById('tooltip-icon').textContent = item.icon;
            document.getElementById('tooltip-name').textContent = item.name;
            const qualityEl = document.getElementById('tooltip-quality');
            const qualityNames = { white: '普通', green: '优秀', blue: '精良', purple: '史诗', orange: '传说' };
            qualityEl.textContent = qualityNames[item.quality] || '';
            qualityEl.style.color = item.quality === 'orange' ? '#FF8C00' :
                                     item.quality === 'purple' ? '#9932CC' :
                                     item.quality === 'blue' ? '#1E90FF' :
                                     item.quality === 'green' ? '#32CD32' : '#FFF';

            const bodyEl = document.getElementById('tooltip-body');
            const statsEl = document.getElementById('tooltip-stats');
            statsEl.innerHTML = '';

            if (isEquip) {
                const typeNames = { weapon: '武器', helmet: '头盔', armor: '护甲', legs: '护腿', boots: '靴子', accessory: '饰品' };
                const upgradeLevel = item.upgradeLevel || 0;
                bodyEl.textContent = `类型：${typeNames[item.type] || item.type} | 需求等级：${item.levelReq} | 强化：+${upgradeLevel}`;
                if (item.stats) {
                    const statNames = { attack: '攻击力', defense: '物理防御', hp: '生命值', critRate: '暴击率', dodgeRate: '闪避率', speed: '速度', fireDamage: '火焰伤害' };
                    const bonus = 1 + upgradeLevel * 0.1;
                    for (const stat in item.stats) {
                        const val = Math.floor(item.stats[stat] * bonus);
                        const line = document.createElement('div');
                        line.className = 'stat-line';
                        line.innerHTML = `<span>${statNames[stat] || stat}</span><span class="stat-val">+${val}</span>`;
                        statsEl.appendChild(line);
                    }
                }
            } else if (isConsumable) {
                bodyEl.textContent = '💊 消耗品 — 使用后立即生效';
                if (item.effect) {
                    if (item.effect.hp) {
                        const line = document.createElement('div');
                        line.className = 'stat-line';
                        line.innerHTML = `<span>恢复生命值</span><span class="stat-val">+${item.effect.hp} HP</span>`;
                        statsEl.appendChild(line);
                    }
                    if (item.effect.mp) {
                        const line = document.createElement('div');
                        line.className = 'stat-line';
                        line.innerHTML = `<span>恢复法力值</span><span class="stat-val">+${item.effect.mp} MP</span>`;
                        statsEl.appendChild(line);
                    }
                    if (item.effect.attack) {
                        const line = document.createElement('div');
                        line.className = 'stat-line';
                        line.innerHTML = `<span>临时攻击提升</span><span class="stat-val">+${item.effect.attack}</span>`;
                        statsEl.appendChild(line);
                    }
                    if (item.effect.defense) {
                        const line = document.createElement('div');
                        line.className = 'stat-line';
                        line.innerHTML = `<span>临时防御提升</span><span class="stat-val">+${item.effect.defense}</span>`;
                        statsEl.appendChild(line);
                    }
                    if (item.effect.duration) {
                        const line = document.createElement('div');
                        line.className = 'stat-line';
                        line.innerHTML = `<span>持续时间</span><span class="stat-val">${item.effect.duration}秒</span>`;
                        statsEl.appendChild(line);
                    }
                }
            } else if (isMaterial) {
                bodyEl.textContent = '📦 材料 — 可用于装备强化、任务交付等用途';
                const line = document.createElement('div');
                line.className = 'stat-line';
                line.innerHTML = `<span>用途</span><span>强化材料</span>`;
                statsEl.appendChild(line);
            }
        } else {
            tooltip.style.display = 'none';
        }
    }

    updateSkillsUI() {
        const content = document.getElementById('skills-content');
        content.innerHTML = '';
        if (!this.player.quickSlots) this.player.quickSlots = [null, null, null, null];
        if (!this.player.skillLevels) this.player.skillLevels = {};
        while (this.player.quickSlots.length < 4) this.player.quickSlots.push(null);

        const skillPointsEl = document.getElementById('skill-points-display');
        if (skillPointsEl) skillPointsEl.textContent = `技能点: ${this.player.skillPoints}`;

        for (const id in GAME_DATA.SKILLS) {
            const skill = GAME_DATA.SKILLS[id];
            const currentLevel = this.player.skillLevels[id] || 1;
            const maxLevel = skill.maxLevel || 10;
            const canUpgrade = currentLevel < maxLevel && this.player.skillPoints > 0;
            const isAssigned = this.player.quickSlots.includes(id);
            const slotIndex = this.player.quickSlots.indexOf(id);

            const div = document.createElement('div');
            div.className = `skill-card ${isAssigned ? 'assigned' : ''} ${skill.type === 'passive' ? 'passive' : ''}`;
            const upgradedDesc = this.getSkillUpgradedDesc(skill, currentLevel);
            div.innerHTML = `
                <div class="skill-info">
                    <div class="skill-name">${skill.icon} ${skill.name} ${isAssigned ? `<span class="quick-slot-tag">[快键${slotIndex + 1}]</span>` : ''}</div>
                    <div class="skill-desc">${upgradedDesc}</div>
                    <div class="skill-stats">
                        ${skill.type !== 'passive' ? `消耗: ${Math.floor(skill.mpCost * (1 + (currentLevel-1) * 0.05))} MP | ` : ''}
                        等级: <span class="skill-lv-num">${currentLevel}/${maxLevel}</span>
                        ${skill.type !== 'passive' ? ` | CD: ${Math.max(1, skill.cd - Math.floor((currentLevel-1) * 0.2))}秒` : ''}
                    </div>
                </div>
                <div class="skill-right">
                    ${skill.type !== 'passive' ? 
                        `<button class="btn-mini-assign" onclick="event.stopPropagation();game.assignSkillToSlot('${id}')">${isAssigned ? '取消' : '快键'}</button>` : ''}
                    <button class="btn-mini-upgrade" onclick="event.stopPropagation();game.upgradeSkill('${id}')" 
                        ${!canUpgrade ? 'disabled' : ''}>
                        ${currentLevel >= maxLevel ? '已满级' : `升级 (${this.player.skillPoints}点)`}
                    </button>
                </div>
            `;
            content.appendChild(div);
        }

        // 更新快键槽显示
        for (let i = 0; i < 4; i++) {
            const slotEl = document.getElementById(`qslot-${i + 1}`);
            if (!slotEl) continue;
            const skillId = this.player.quickSlots[i];
            const nameSpan = slotEl.querySelector('.slot-name');
            if (skillId && GAME_DATA.SKILLS[skillId]) {
                const skill = GAME_DATA.SKILLS[skillId];
                const lv = this.player.skillLevels[skillId] || 1;
                nameSpan.textContent = `${skill.icon} ${skill.name} Lv.${lv}`;
                slotEl.classList.add('filled');
            } else {
                nameSpan.textContent = '[空]';
                slotEl.classList.remove('filled');
            }
            slotEl.onclick = () => this.clearQuickSlot(i);
        }
        document.getElementById('qslot-5').querySelector('.slot-name').textContent = '🔥 必杀技';
    }

    getSkillUpgradedDesc(skill, level) {
        if (skill.type === 'passive') {
            const bonus = Math.floor((skill.effect?.attack || skill.effect?.defense || 5) * (1 + (level - 1) * 0.5));
            return `${skill.description}（当前: +${bonus}%）`;
        }
        if (skill.damageCoeff) {
            const coeff = (skill.damageCoeff + (level - 1) * 0.15).toFixed(1);
            return skill.description.replace(/[\d.]+%/, `${Math.floor(coeff * 100)}%`);
        }
        if (skill.healCoeff) {
            const coeff = (skill.healCoeff + (level - 1) * 0.1).toFixed(1);
            return skill.description.replace(/[\d.]+%/, `${Math.floor(coeff * 100)}%`);
        }
        return skill.description;
    }

    upgradeSkill(skillId) {
        const skill = GAME_DATA.SKILLS[skillId];
        if (!skill) return;
        if (!this.player.skillLevels) this.player.skillLevels = {};
        const currentLevel = this.player.skillLevels[skillId] || 1;
        const maxLevel = skill.maxLevel || 10;

        if (currentLevel >= maxLevel) {
            this.showToast('技能已达最高等级！');
            return;
        }
        if (this.player.skillPoints < 1) {
            this.showToast('技能点不足！每次升级可获得2点技能点');
            return;
        }

        this.player.skillPoints--;
        this.player.skillLevels[skillId] = currentLevel + 1;

        // 更新战斗属性（被动技能生效）
        this.player.combatStats = this.calculateCombatStats();
        this.player.maxHp = Math.floor(this.player.combatStats.hp);
        this.player.maxMp = Math.floor(this.player.combatStats.mp);
        this.player.currentHp = Math.min(this.player.currentHp, this.player.maxHp);
        this.player.currentMp = Math.min(this.player.currentMp, this.player.maxMp);

        this.saveGame();
        this.showToast(`🎉 ${skill.name} 升级成功！Lv.${currentLevel} → Lv.${currentLevel + 1}`);
        this.updateSkillsUI();
    }

    assignSkillToSlot(skillId) {
        if (!this.player.quickSlots) this.player.quickSlots = [null, null, null, null];
        const skill = GAME_DATA.SKILLS[skillId];
        if (!skill || skill.type === 'passive') return;
        if (this.player.level < skill.unlockLevel) {
            this.showToast(`需要 ${skill.unlockLevel} 级才能使用此技能！`);
            return;
        }

        // 如果已在槽位中，移除
        const existingIndex = this.player.quickSlots.indexOf(skillId);
        if (existingIndex !== -1) {
            this.player.quickSlots[existingIndex] = null;
            this.saveGame();
            this.updateSkillsUI();
            return;
        }

        // 找第一个空槽位
        const emptyIndex = this.player.quickSlots.indexOf(null);
        if (emptyIndex === -1) {
            this.showToast('快键槽已满！点击已分配技能可移除');
            return;
        }

        this.player.quickSlots[emptyIndex] = skillId;
        this.saveGame();
        this.updateSkillsUI();
    }

    clearQuickSlot(index) {
        if (!this.player.quickSlots) this.player.quickSlots = [null, null, null, null];
        this.player.quickSlots[index] = null;
        this.saveGame();
        this.updateSkillsUI();
    }

    updateTasksUI() {
        const list = document.getElementById('tasks-list');
        list.innerHTML = '';
        const activeTab = document.querySelector('#tasks-screen .tab-btn.active')?.dataset?.tab || 'main';

        // NPC任务Tab
        if (activeTab === 'npc') {
            for (const id in GAME_DATA.NPC_TASKS) {
                const quest = GAME_DATA.NPC_TASKS[id];
                if (!quest.accepted) continue;
                const questProgress = this.player.questProgress[id];
                const completed = quest.completed || (questProgress && questProgress.completed);

                const div = document.createElement('div');
                div.className = `task-card npc`;
                if (completed) div.classList.add('completed');

                let progress = 0;
                let target = 0;
                if (questProgress) {
                    for (const obj of quest.objectives) {
                        progress += questProgress[obj.type] || 0;
                        target += obj.count;
                    }
                }

                div.innerHTML = `
                    <div class="task-header">
                        <span class="task-title">${completed ? '✅ ' : ''}${quest.title}</span>
                        <span class="task-type-badge npc">NPC委托</span>
                    </div>
                    <div class="task-desc">${quest.description}</div>
                    ${target > 0 ? `
                    <div class="task-progress">
                        <div class="progress-bar"><div class="progress-fill" style="width:${Math.min(100, (progress/target)*100)}%"></div></div>
                        <span>${progress}/${target}</span>
                    </div>` : ''}
                    <div class="task-rewards">奖励: ${quest.rewards.exp}经验, ${quest.rewards.gold}金币${quest.rewards.item ? ', ' + (GAME_DATA.EQUIPMENT[quest.rewards.item]?.name || '装备') : ''}${quest.rewards.enhanceStones ? ', ' + quest.rewards.enhanceStones + '强化石' : ''}</div>
                `;
                if (questProgress && progress >= target && !completed) {
                    const claimBtn = document.createElement('button');
                    claimBtn.className = 'btn-primary';
                    claimBtn.textContent = '领取奖励';
                    claimBtn.onclick = () => this.completeQuest(id);
                    div.appendChild(claimBtn);
                }
                list.appendChild(div);
            }
            if (list.children.length === 0) {
                list.innerHTML = '<div style="color:#666;text-align:center;padding:20px;">暂无NPC委托，与各地的NPC对话接受委托吧！</div>';
            }
            return;
        }

        for (const id in GAME_DATA.TASKS) {
            const quest = GAME_DATA.TASKS[id];
            if (quest.type !== activeTab) continue;
            // 检查是否解锁（locked=false 或 player level >= requireLevel）
            const unlocked = !quest.locked || this.player.level >= (quest.requireLevel || 1);
            const questProgress = this.player.questProgress[id];
            const completed = questProgress && questProgress.completed;

            if (!unlocked && quest.type === 'main' && !completed) {
                // 主线未解锁的不显示
                continue;
            }

            const div = document.createElement('div');
            div.className = `task-card ${quest.type}`;
            if (completed) div.classList.add('completed');
            if (!unlocked && !completed) div.classList.add('locked');

            let progress = 0;
            let target = 0;
            if (questProgress) {
                for (const obj of quest.objectives) {
                    progress += questProgress[obj.type] || 0;
                    target += obj.count;
                }
            }

            div.innerHTML = `
                <div class="task-header">
                    <span class="task-title">${completed ? '✅ ' : !unlocked ? '🔒 ' : ''}${quest.title}</span>
                    <span class="task-type-badge ${quest.type}">${quest.type === 'main' ? '主线' : quest.type === 'side' ? '支线' : '日常'}</span>
                </div>
                <div class="task-desc">${quest.description}</div>
                ${target > 0 ? `
                <div class="task-progress">
                    <div class="progress-bar"><div class="progress-fill" style="width:${Math.min(100, (progress/target)*100)}%"></div></div>
                    <span>${progress}/${target}</span>
                </div>` : ''}
                <div class="task-rewards">奖励: ${quest.rewards.exp}经验, ${quest.rewards.gold}金币${quest.rewards.item ? ', ' + (GAME_DATA.EQUIPMENT[quest.rewards.item]?.name || '装备') : ''}</div>
            `;
            // 已完成显示领取按钮
            if (questProgress && progress >= target && !completed) {
                const claimBtn = document.createElement('button');
                claimBtn.className = 'btn-primary';
                claimBtn.textContent = '领取奖励';
                claimBtn.onclick = () => this.completeQuest(id);
                div.appendChild(claimBtn);
            }
            list.appendChild(div);
        }
    }

    updateMapUI() {
        document.querySelectorAll('.map-region').forEach(region => {
            const id = region.dataset.region;
            region.classList.remove('unlocked', 'selected');
            if (this.player.mapProgress[id]) {
                region.classList.add('unlocked');
            }
            if (id === this.currentLocation) {
                region.classList.add('selected');
            }
        });
    }

    updateAchieveUI() {
        const list = document.getElementById('achieve-list');
        list.innerHTML = '';
        const typeNames = { combat: '战斗', level: '等级', collect: '收藏', enhance: '强化', explore: '探索' };
        const rewardNames = { attack: '攻击', defense: '防御', hp: '生命', gold: '金币', expBonus: '经验加成', goldBonus: '金币加成', skillPoints: '技能点', attackPct: '攻击加成', allStats: '全属性' };
        const formatReward = (reward) => {
            const parts = [];
            for (const key in reward) {
                const label = rewardNames[key] || key;
                if (key === 'expBonus' || key === 'goldBonus' || key === 'attackPct' || key === 'allStats') {
                    parts.push(`${label}+${reward[key]}%`);
                } else {
                    parts.push(`${label}+${reward[key]}`);
                }
            }
            return parts.join('，');
        };
        for (const type of ['combat', 'level', 'collect', 'enhance', 'explore']) {
            const typeDiv = document.createElement('div');
            typeDiv.innerHTML = `<div style="color:#FFD700;margin:10px 0 5px;font-weight:bold;">${typeNames[type] || type}</div>`;
            list.appendChild(typeDiv);
            for (const id in GAME_DATA.ACHIEVEMENTS) {
                const achieve = GAME_DATA.ACHIEVEMENTS[id];
                if (achieve.type !== type) continue;
                const completed = this.player.achievements.includes(id);
                const div = document.createElement('div');
                div.className = `achieve-item ${completed ? 'completed' : ''}`;
                div.innerHTML = `
                    <div class="achieve-icon">${completed ? '✅' : '🔒'}</div>
                    <div class="achieve-info">
                        <div class="achieve-name">${achieve.name}</div>
                        <div class="achieve-desc">${achieve.description}</div>
                        <div class="achieve-progress">${Math.min(achieve.progress || 0, achieve.target)}/${achieve.target}</div>
                        <div class="achieve-reward" style="color:#FFD700;font-size:0.75rem;">🎁 ${formatReward(achieve.reward)}</div>
                    </div>
                `;
                list.appendChild(div);
            }
        }
    }

    updateShopUI() {
        const itemsDiv = document.getElementById('shop-items');
        itemsDiv.innerHTML = '';

        if (!this.shopItems || this.shopItems.length === 0) {
            this.generateShopItems();
        }

        for (const item of this.shopItems) {
            const div = document.createElement('div');
            div.className = 'shop-item';
            const qualityNames = { white: '普通', green: '优秀', blue: '精良', purple: '史诗', orange: '传说' };
            div.innerHTML = `
                <div class="shop-item-icon">${item.icon}</div>
                <div class="shop-item-name">${item.name} <span style="font-size:0.75rem;color:#AAA">${qualityNames[item.quality] || ''}</span></div>
                <div class="shop-item-desc">${item.levelReq ? 'Lv.' + item.levelReq + ' 可装备' : item.material ? '材料' : '消耗品'}</div>
                <div class="shop-item-price">💰 ${item.price}</div>
                <button class="btn-primary" onclick="game.buyShopItem('${item.id}')">购买</button>
            `;
            itemsDiv.appendChild(div);
        }
        document.getElementById('shop-gold').textContent = this.player.gold;
    }

    refreshShop() {
        if (this.player.gold < 50) {
            this.showToast('金币不足！刷新需要50金币');
            return;
        }
        this.player.gold -= 50;
        this.generateShopItems();
        this.saveGame();
        this.updateShopUI();
    }

    generateShopItems() {
        this.shopItems = [];
        const location = this.currentLocation;

        // 品质概率映射
        const qualityOdds = {
            village: { white: 1.0, green: 0.5, blue: 0.2, purple: 0.1, orange: 0.05, legendary: 0.01 },
            forest: { white: 1.0, green: 0.8, blue: 0.4, purple: 0.2, orange: 0.1, legendary: 0.05 },
            cave: { white: 1.0, green: 1.0, blue: 0.6, purple: 0.35, orange: 0.2, legendary: 0.08 },
            dungeon: { white: 1.0, green: 1.0, blue: 0.8, purple: 0.5, orange: 0.3, legendary: 0.15 },
            castle: { white: 1.0, green: 1.0, blue: 0.8, purple: 0.5, orange: 0.3, legendary: 0.15 },
            boss: { white: 1.0, green: 1.0, blue: 1.0, purple: 0.7, orange: 0.5, legendary: 0.25 },
        };
        const odds = qualityOdds[location] || qualityOdds['village'];

        // 随机生成6件装备
        const allEquip = Object.values(GAME_DATA.EQUIPMENT);
        for (let i = 0; i < 6; i++) {
            // 按概率随机品质
            const qualities = ['white', 'green', 'blue', 'purple', 'orange'];
            let selectedQuality = 'white';
            for (const q of qualities) {
                if (Math.random() < (odds[q] || 0)) selectedQuality = q;
            }
            if (Math.random() < (odds['legendary'] || 0) && Math.random() < 0.1) selectedQuality = 'orange';

            const candidates = allEquip.filter(e => e.quality === selectedQuality);
            if (candidates.length > 0) {
                const equip = candidates[Math.floor(Math.random() * candidates.length)];
                this.shopItems.push({ ...equip });
            } else {
                const fallback = allEquip.filter(e => e.quality === 'white');
                this.shopItems.push({ ...fallback[Math.floor(Math.random() * fallback.length)] });
            }
        }

        // 固定药水
        this.shopItems.push({ ...GAME_DATA.CONSUMABLES.health_potion });
        this.shopItems.push({ ...GAME_DATA.CONSUMABLES.mp_potion });

        // 1种怪物掉落材料
        const locationMaterials = {
            village: 'goblin_skin',
            forest: 'wolf_fur',
            cave: 'bone',
            dungeon: 'orc_blood',
            castle: 'orc_blood',
            boss: 'dragon_scale',
        };
        const materialPrices = { village: 15, forest: 25, cave: 40, dungeon: 60, castle: 60, boss: 100 };
        const matId = locationMaterials[location] || 'goblin_skin';
        const matData = GAME_DATA.MATERIALS[matId];
        if (matData) {
            this.shopItems.push({ ...matData, price: materialPrices[location] || 15, material: true });
        }
    }

    buyShopItem(itemId) {
        const item = this.shopItems.find(i => i.id === itemId);
        if (!item || !item.price) return;
        if (this.player.gold < item.price) {
            this.showToast('金币不足！');
            return;
        }
        this.player.gold -= item.price;
        this.addItem(itemId);
        this.showToast(`购买了 ${item.name}`);
        this.updateShopUI();
    }

    buyItem(itemId) {
        // Legacy - now redirects to buyShopItem
        this.buyShopItem(itemId);
    }

    showToast(message) {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2000);
    }

    saveGame() {
        localStorage.setItem('rpg_save', JSON.stringify(this.player));
    }

    loadGame() {
        const save = localStorage.getItem('rpg_save');
        if (save) {
            this.player = JSON.parse(save);
            // 向后兼容：确保有quickSlots和enhanceStones
            if (!this.player.quickSlots) this.player.quickSlots = [null, null, null, null];
            if (!this.player.enhanceStones) this.player.enhanceStones = 0;
            // 确保已有装备都有upgradeLevel
            for (const slot in this.player.equipment) {
                const equip = this.player.equipment[slot];
                if (equip && equip.upgradeLevel === undefined) equip.upgradeLevel = 0;
            }
            // 确保成就加成数据存在
            if (!this.player.achievementBonuses) {
                this.player.achievementBonuses = { attack: 0, defense: 0, hp: 0, expBonus: 0, goldBonus: 0, attackPct: 0, allStats: 0 };
            }
            // 确保背包装备都有upgradeLevel
            for (const item of this.player.inventory) {
                if (item && (item.type === 'weapon' || item.type === 'helmet' || item.type === 'armor' || item.type === 'legs' || item.type === 'boots' || item.type === 'accessory')) {
                    if (item.upgradeLevel === undefined) item.upgradeLevel = 0;
                }
            }
            document.getElementById('btn-continue').style.display = 'block';
        }
    }

    deleteSave() {
        localStorage.removeItem('rpg_save');
        this.player = null;
        document.getElementById('btn-continue').style.display = 'none';
        this.showToast('存档已删除');
    }

    dailyReset() {
        const today = new Date().toDateString();
        const lastReset = localStorage.getItem('rpg_daily_reset_date');
        if (lastReset !== today) {
            localStorage.setItem('rpg_daily_reset_date', today);
            // 重置每日任务进度
            for (const id in GAME_DATA.TASKS) {
                const quest = GAME_DATA.TASKS[id];
                if (quest.type === 'daily') {
                    if (this.player.questProgress[id]) {
                        this.player.questProgress[id] = {};
                    }
                }
            }
            this.showToast('🌅 新的一天！每日任务已重置');
            this.saveGame();
        }
    }

    enterGame() {
        this.dailyReset();
        const loginPage = document.getElementById('login-page');
        const gameContainer = document.getElementById('game-container');
        if (loginPage) loginPage.style.display = 'none';
        if (gameContainer) gameContainer.style.display = 'block';
        this.switchScreen('main');
        this.startDialog('村长');
    }

    returnToLogin() {
        const loginPage = document.getElementById('login-page');
        const gameContainer = document.getElementById('game-container');
        if (gameContainer) gameContainer.style.display = 'none';
        if (loginPage) {
            loginPage.style.display = 'block';
            // 重置登录表单
            const nameInput = document.getElementById('player-name');
            const btnNewGame = document.getElementById('btn-new-game');
            if (nameInput) nameInput.value = '';
            if (btnNewGame) btnNewGame.disabled = true;
            document.querySelectorAll('.class-card').forEach(c => c.classList.remove('selected'));
            const nameHint = document.getElementById('name-hint');
            const classHint = document.getElementById('class-hint');
            if (nameHint) { nameHint.textContent = ''; }
            if (classHint) { classHint.textContent = '请点击上方卡片选择职业'; classHint.style.color = '#AAA'; }
        }
    }

    initEvents() {
        // ========== 开始界面：名称输入和职业选择 ==========
        const nameInput = document.getElementById('player-name');
        const nameHint = document.getElementById('name-hint');
        const btnNewGame = document.getElementById('btn-new-game');
        let selectedClass = null;

        // 名称输入实时验证
        nameInput.oninput = () => {
            const val = nameInput.value.trim();
            if (!val) {
                nameHint.textContent = '请输入勇者名称';
                nameHint.style.color = '#E53935';
            } else if (val.length > 10) {
                nameHint.textContent = '名称不能超过10个字';
                nameHint.style.color = '#E53935';
            } else {
                nameHint.textContent = '✓ 名称可用';
                nameHint.style.color = '#4CAF50';
            }
            checkStartButton();
        };

        // 职业卡片点击
        document.querySelectorAll('.class-card').forEach(card => {
            card.onclick = () => {
                document.querySelectorAll('.class-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                selectedClass = card.dataset.class;
                const classHint = document.getElementById('class-hint');
                const className = card.querySelector('.class-name').textContent;
                classHint.textContent = `✓ 已选择：${className}`;
                classHint.style.color = '#4CAF50';
                checkStartButton();
            };
        });

        function checkStartButton() {
            const name = nameInput.value.trim();
            if (name && name.length <= 10 && selectedClass) {
                btnNewGame.disabled = false;
            } else {
                btnNewGame.disabled = true;
            }
        }

        btnNewGame.onclick = () => {
            const name = nameInput.value.trim() || '冒险者';
            if (!selectedClass) {
                this.showToast('请先选择职业！');
                return;
            }
            this.createPlayer(name, selectedClass);
            this.enterGame();
        };

        document.getElementById('btn-continue').onclick = () => {
            this.enterGame();
        };

        document.getElementById('btn-char').onclick = () => this.switchScreen('char');
        document.getElementById('btn-backpack').onclick = () => this.switchScreen('backpack');
        document.getElementById('btn-skills').onclick = () => this.switchScreen('skills');
        document.getElementById('btn-tasks').onclick = () => this.switchScreen('tasks');
        document.getElementById('btn-map').onclick = () => this.switchScreen('map');
        document.getElementById('btn-achieve').onclick = () => this.switchScreen('achieve');
        document.getElementById('btn-settings').onclick = () => this.switchScreen('settings');

        document.querySelectorAll('.btn-close').forEach(btn => {
            btn.onclick = () => this.switchScreen('main');
        });

        // 对话界面关闭按钮
        const dialogCloseBtn = document.getElementById('btn-dialog-close');
        if (dialogCloseBtn) dialogCloseBtn.onclick = () => this.switchScreen('main');

        document.querySelectorAll('.stat-btn').forEach(btn => {
            btn.onclick = () => {
                if (this.addStatPoint(btn.dataset.stat)) {
                    this.updateCharUI();
                } else {
                    this.showToast('没有剩余属性点！');
                }
            };
        });

        document.querySelectorAll('.talent-node').forEach(node => {
            node.onclick = () => {
                const talent = node.dataset.talent;
                if (this.player.talents.includes(talent)) {
                    this.player.talents = this.player.talents.filter(t => t !== talent);
                } else {
                    this.player.talents.push(talent);
                }
                this.player.combatStats = this.calculateCombatStats();
                this.saveGame();
                this.updateCharUI();
            };
        });

        document.querySelectorAll('.map-cell').forEach(cell => {
            cell.onclick = () => {
                const locId = cell.dataset.location;
                if (this.player.mapProgress[locId]) {
                    this.currentLocation = locId;
                    this.updateMainUI();
                }
            };
        });

        document.getElementById('btn-talk-npc').onclick = () => {
            const location = GAME_DATA.LOCATIONS[this.currentLocation];
            if (location.npcs && location.npcs.length > 0) {
                this.startDialog(location.npcs[0]);
            } else {
                this.showToast('这里没有NPC');
            }
        };

        document.getElementById('btn-explore').onclick = () => {
            this.player.exploreCount++;
            this.checkQuests('explore');
            this.exploreLocation();
        };

        document.getElementById('btn-fight-monster').onclick = () => {
            this.exploreLocation();
        };

        document.getElementById('btn-shop').onclick = () => {
            if (this.currentLocation === 'village' || this.currentLocation === 'castle') {
                this.switchScreen('shop');
            } else {
                this.showToast('只有在城镇才能访问商店');
            }
        };

        document.getElementById('btn-attack').onclick = () => this.playerAttack();

        // 快键槽技能按钮（战斗界面）
        for (let i = 0; i < 4; i++) {
            document.getElementById(`btn-quick-slot${i + 1}`).onclick = () => {
                const skillId = this.player.quickSlots ? this.player.quickSlots[i] : null;
                if (skillId) {
                    if (skillId === 'ultimate') this.useUltimate();
                    else this.useSkill(skillId);
                } else {
                    this.showToast('该快键槽未分配技能');
                }
            };
        }

        document.getElementById('btn-battle-ultimate').onclick = () => this.useUltimate();
        document.getElementById('btn-flee').onclick = () => this.fleeBattle();
        document.getElementById('btn-auto-battle').onclick = () => {
            this.autoBattle = !this.autoBattle;
            document.getElementById('btn-auto-battle').textContent = this.autoBattle ? '⏹️ 停止自动' : '🤖 自动战斗';
            if (this.autoBattle) {
                setTimeout(() => this.autoBattleTurn(), 500);
            }
        };

        // 战斗界面批量挑战按钮
        document.querySelectorAll('#battle-batch-row .btn-batch-sm').forEach(btn => {
            btn.onclick = () => {
                const count = parseInt(btn.dataset.batch);
                if (!this.currentEnemy || !this.currentEnemy.id) {
                    this.showToast('没有可挑战的怪物');
                    return;
                }
                this.autoBattle = false;
                document.getElementById('btn-auto-battle').textContent = '🤖 自动战斗';
                this.batchBattle(count);
            };
        });

        document.getElementById('btn-loot').onclick = () => this.switchScreen('main');
        document.getElementById('btn-retry').onclick = () => {
            const monsterId = this.currentEnemy.id;
            const wasAuto = this._retryAutoBattle || false;
            this.startBattle(monsterId);
            this._retryAutoBattle = null;
            if (wasAuto) {
                // 恢复自动战斗模式
                this.autoBattle = true;
                document.getElementById('btn-auto-battle').textContent = '⏹️ 停止自动';
                setTimeout(() => this.autoBattleTurn(), 800);
            }
        };
        document.getElementById('btn-back-main').onclick = () => this.switchScreen('main');
        // 批量挑战按钮
        document.querySelectorAll('.btn-batch').forEach(btn => {
            btn.onclick = () => {
                const count = parseInt(btn.dataset.count);
                this.batchBattle(count);
            };
        });

        document.getElementById('btn-manual-save').onclick = () => {
            this.saveGame();
            this.showToast('手动保存成功');
        };

        document.getElementById('btn-delete-save').onclick = () => {
            if (confirm('确定要删除存档吗？删除后将返回登录页。')) {
                this.deleteSave();
                this.returnToLogin();
            }
        };

        document.querySelectorAll('.map-region').forEach(region => {
            region.onclick = () => {
                document.querySelectorAll('.map-region').forEach(r => r.classList.remove('selected'));
                region.classList.add('selected');
                document.getElementById('btn-travel').style.display = region.classList.contains('unlocked') ? 'block' : 'none';
                document.getElementById('map-info').textContent = GAME_DATA.LOCATIONS[region.dataset.region].description;
                document.getElementById('btn-travel').onclick = () => this.travelTo(region.dataset.region);
            };
        });

        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.onclick = () => {
                const parent = btn.parentElement;
                parent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                // 背包标签切换时刷新
                if (parent.classList.contains('backpack-tabs')) {
                    this.updateBackpackUI();
                }
                // 任务标签切换时刷新
                if (parent.closest('#tasks-screen')) {
                    this.updateTasksUI();
                }
            };
        });

        // 背包：装备操作按钮
        document.getElementById('btn-equip-item').onclick = () => {
            if (this.selectedItem) {
                const item = this.player.inventory.find(i => i.id === this.selectedItem);
                if (item && (item.type === 'weapon' || item.type === 'helmet' || item.type === 'armor' || item.type === 'legs' || item.type === 'boots' || item.type === 'accessory')) {
                    this.equipItem(null, item);
                }
            } else {
                this.showToast('请先在背包中选择装备');
            }
        };

        document.getElementById('btn-bp-use').onclick = () => {
            if (this.selectedItem) {
                const item = this.player.inventory.find(i => i.id === this.selectedItem);
                if (item && item.type === 'consumable') {
                    this.useConsumable(item.id);
                    this.updateBackpackUI();
                    this.updateMainUI();
                    this.showToast(`使用了 ${item.name}`);
                }
            } else {
                this.showToast('请先选择物品');
            }
        };

        document.getElementById('btn-enhance-item').onclick = () => {
            if (this.selectedItem) {
                // 强化已穿戴装备 - 点击装备槽触发强化
                this.showToast('请在装备栏中点击已穿戴的装备进行强化');
            }
        };

        document.getElementById('btn-decompose-item').onclick = () => {
            if (this.selectedItem) {
                const item = this.player.inventory.find(i => i.id === this.selectedItem);
                if (item && item.price) {
                    const goldReward = Math.floor((item.price || 50) * 0.4);
                    this.removeItem(this.selectedItem);
                    this.addGold(goldReward);
                    this.selectedItem = null;
                    this.showToast(`分解获得 ${goldReward} 金币`);
                    this.updateBackpackUI();
                }
            }
        };

        // 背包：装备槽点击 → 弹出选择弹窗（卸下 / 强化 / 取消），弹窗悬停在装备槽旁边
        let currentEquipSlot = null;
        document.querySelectorAll('.equip-slot').forEach(slot => {
            slot.onclick = (e) => {
                e.stopPropagation();
                const slotName = slot.dataset.slot;
                const equip = this.player.equipment[slotName];
                if (!equip) return;

                const popup = document.getElementById('equip-action-popup');
                const equipName = equip.name + (equip.upgradeLevel > 0 ? ' +' + equip.upgradeLevel : '');
                document.getElementById('popup-equip-name').textContent = equip.icon + ' ' + equipName;
                popup.style.display = 'block';
                currentEquipSlot = slotName;

                // 定位弹窗在装备槽右侧
                const rect = slot.getBoundingClientRect();
                popup.style.top = rect.top + 'px';
                popup.style.left = (rect.right + 10) + 'px';

                // 如果右侧空间不足，放到左侧
                if (rect.right + 200 > window.innerWidth) {
                    popup.style.left = (rect.left - 200) + 'px';
                }

                // 绑定弹窗按钮
                document.getElementById('btn-popup-unequip').onclick = () => {
                    this.unequipItem(currentEquipSlot);
                    popup.style.display = 'none';
                };
                document.getElementById('btn-popup-enhance').onclick = () => {
                    popup.style.display = 'none';
                    this.enhanceEquip(currentEquipSlot);
                };
                document.getElementById('btn-popup-cancel').onclick = () => {
                    popup.style.display = 'none';
                };
            };
        });

        // 点击其他地方关闭弹窗
        document.addEventListener('click', (e) => {
            const popup = document.getElementById('equip-action-popup');
            if (popup && popup.style.display === 'block') {
                if (!popup.contains(e.target)) {
                    popup.style.display = 'none';
                }
            }
        });

        // 强化界面关闭（返回背包）
        document.getElementById('btn-close-enhance').onclick = () => {
            const enhanceScreen = document.getElementById('enhance-screen');
            if (enhanceScreen) enhanceScreen.classList.remove('active');
            this.switchScreen('backpack');
            this.updateBackpackUI();
        };

        // 商店内购买按钮
        document.getElementById('btn-use-item').onclick = () => {
            const potion = this.player.inventory.find(i => i.type === 'consumable' && i.effect?.hp);
            if (potion) {
                this.useConsumable(potion.id);
                this.updateBattleUI();
            } else {
                this.showToast('没有可用的药水！');
            }
        };

        document.getElementById('btn-decompose').onclick = () => {
            if (!this.selectedItem || !this.selectedItemType) {
                this.showToast('请先选择要分解的物品');
                return;
            }
            const qtyInput = document.getElementById('decompose-quantity');
            let decomposeQty = parseInt(qtyInput?.value) || 1;
            if (decomposeQty < 1) decomposeQty = 1;

            const itemId = this.selectedItem;
            let totalGoldReward = 0;

            if (this.selectedItemType === 'equipment') {
                // 装备分解
                const item = GAME_DATA.EQUIPMENT[itemId];
                if (!item) return;
                const goldPer = Math.floor((item.price || 30) / 2);
                // 检查背包中该装备的数量
                const invItem = this.player.inventory.find(i => i.id === itemId);
                const availableCount = invItem ? (invItem.count || 1) : 0;
                const actualQty = Math.min(decomposeQty, availableCount);
                if (actualQty <= 0) {
                    this.showToast('背包中没有该装备');
                    return;
                }
                for (let i = 0; i < actualQty; i++) this.removeItem(itemId);
                totalGoldReward = goldPer * actualQty;
                if (actualQty > 1) {
                    this.showToast(`批量分解了 ${actualQty}件 ${item.name}，获得 ${totalGoldReward} 金币`);
                } else {
                    this.showToast(`分解了 ${item.name}，获得 ${totalGoldReward} 金币`);
                }
            } else if (this.selectedItemType === 'material') {
                // 材料分解
                const material = GAME_DATA.MATERIALS[itemId];
                if (!material) return;
                const invItem = this.player.inventory.find(i => i.id === itemId);
                const availableCount = invItem ? (invItem.count || 1) : 0;
                const actualQty = Math.min(decomposeQty, availableCount);
                if (actualQty <= 0) {
                    this.showToast('背包中没有该材料');
                    return;
                }
                for (let i = 0; i < actualQty; i++) this.removeItem(itemId);
                totalGoldReward = actualQty * 10; // 材料每个10金币
                if (actualQty > 1) {
                    this.showToast(`批量分解了 ${actualQty}个 ${material.name}，获得 ${totalGoldReward} 金币`);
                } else {
                    this.showToast(`分解了 ${material.name}，获得 ${totalGoldReward} 金币`);
                }
            } else {
                this.showToast('该物品不可分解');
                return;
            }

            this.addGold(totalGoldReward);
            this.updateBackpackUI();
        };
    }
}

const game = new Game();