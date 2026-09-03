const nodes = {
  root: {
    text: "今夜はどんな感情や体験を味わいたいですか？",
    image: "images/q_root.png",
    options: [
      { label: "絶叫と台パンが響く、阿鼻叫喚の耐久", next: "scream_root" },
      { label: "胸を締め付ける感動や、仲間たちとの大冒険", next: "rpg_root" },
      { label: "治安の悪い煽りや、ノリノリの悪徳プレイ", next: "attitude_root" },
      { label: "知恵比べや、盤面を組み替える思考戦", next: "puzzle_manage_root" },
      { label: "息を呑むような、極限の集中と緊張感", next: "tense_root" }
    ]
  },

  scream_root: {
    text: "どんな絶叫をお求めですか？",
    image: "images/q_action.png",
    options: [
      { label: "数秒で散る、理不尽極まる死の連続", next: "scream_makai" },
      { label: "一瞬の判断ミスで落ちる、奈落のアスレチック", next: "scream_platform_select" },
      { label: "暗闇から迫る怪異への、ガチの悲鳴", next: "scream_horror_select" },
      { label: "思い通りに動かない理不尽へのブチギレ", next: "scream_physics" },
      { label: "強敵ボスに阻まれ、泥沼化する耐久戦", next: "scream_boss_branch" }
    ]
  },
  scream_makai: {
    text: "どの過酷な死闘を見届けますか？",
    image: "images/q_action_sub.png",
    options: [
      { label: "かつて19時間を費やした、伝説の原点", result: "makai_chou" },
      { label: "朝7時まで終わるのか！？、耐久配信！", result: "makai_dai" },
      { label: "完全初見で飛び込んだ、最新の高難度地獄", result: "makai_kaettekita" },
      { label: "すべてを失い振り出しに戻る、初代の絶望", result: "makai_first" },
      { label: "怪物の館で肉片と戦う、凄惨な耐久", result: "splatterhouse" }
    ]
  },
  scream_platform_select: {
    text: "どの世界で足場に苦しむ姿が見たいですか？",
    image: "images/q_action_sub.png",
    options: [
      { label: "伝統のコースを駆け抜ける、不屈の挑戦", next: "scream_mario_branch" },
      { label: "密林や工場で、容赦ないトゲと奈落に散る", next: "scream_dk_branch" },
      { label: "奥スクロールを駆け、トラップに弾き飛ばされる", next: "scream_crash_branch" },
      { label: "吸い込みや変身、名作横スクロールアクション", next: "scream_kirby_action" },
      { label: "小人たちや特殊な足場アクションに苦しむ枠", next: "scream_platform_other" }
    ]
  },
  scream_platform_other: {
    text: "どの特殊な操作感に手こずる姿を見ますか？",
    image: "images/q_action_sub.png",
    options: [
      { label: "ミニうつろたちを救えずパニックになる誘導パズル", result: "lemmings" },
      { label: "釣り竿ワイヤーに翻弄される、独特のアクション", result: "umihara" },
      { label: "木槌を手に足場を駆け抜ける職人アクション", result: "gen_san" },
      { label: "奇怪な光線銃とパルテナの試練に挑む名作", result: "palutena" },
      { label: "肉体を乗り移りながら進む異色アクション", result: "phantasm" }
    ]
  },
  scream_mario_branch: {
    text: "どの難関コースで心を折られかけますか？",
    image: "images/q_action_sub.png",
    options: [
      { label: "全9枠に及んだ、超高難度コース", result: "mario2" },
      { label: "シリーズ初の３D！星を集めるプレイスタイル！", result: "mario64" },
      { label: "リゾート気分を粉砕する、凶悪アスレチック", result: "mariosunshine" },
      { label: "時間制限に追われながら完全制覇を目指す初代", result: "mario1" },
      { label: "その他の伝統的なコース走破に挑む枠", next: "scream_mario_other" }
    ]
  },
  scream_mario_other: {
    text: "どの冒険での手こずりを見ますか？",
    image: "images/q_action_sub.png",
    options: [
      { label: "昔の記憶を頼りに最終関門を目指す名作", result: "mario3" },
      { label: "携帯機のコースをサクッと駆け抜ける挑戦", result: "marioland" },
      { label: "コインを集めて一枠完結を目指す携帯機シリーズ", result: "marioland2" },
      { label: "敵を持ち上げ投げる、少し変わった冒険", result: "mariousa" },
      { label: "SFCのローンチタイトル！そして超名作！", result: "marioworld" }
    ]
  },
  scream_dk_branch: {
    text: "密林のどの過酷な試練に挑みますか？",
    image: "images/q_action_sub.png",
    options: [
      { label: "シリーズ2作目もやっぱり鬼畜だった！", result: "dk2" },
      { label: "疾走感あふれる初代密林の耐久配信！", result: "dk1" },
      { label: "ギミック満載の秘密の島を制覇する旅", result: "dk3" },
      { label: "広大な箱庭3Dで激ムズ収集に挑む旅", result: "dk64" }
    ]
  },
  scream_crash_branch: {
    text: "奥スクロールのどの挑戦を見届けますか？",
    image: "images/q_action_sub.png",
    options: [
      { label: "プレステと言えばこのゲーム！初代の高難度に挑む", result: "crash1" },
      { label: "モノマネ声を取り戻すため、荒ぶる叫びと共に走る続編", result: "crash2" },
      { label: "多彩なアクションで世界中を飛び回る第3弾", result: "crash3" },
      { label: "白熱のカート勝負で声マネで吠えるレース枠", result: "crash_racing" }
    ]
  },
  scream_kirby_action: {
    text: "どの名作アクションの世界へ飛び込みますか？",
    image: "images/q_action_sub.png",
    options: [
      { label: "吸い込みとコピー能力を駆使するポップスターの旅", next: "kirby_series_branch" },
      { label: "不死身の怪力で宝を奪い尽くすワリオの冒険", next: "wario_series_branch" },
      { label: "赤ちゃんを背負いタマゴを投げる手書き風大冒険", result: "yoshi_island" },
      { label: "風のリングを掲げ、哀しき夢の世界を巡る名作", result: "klonoa" },
      { label: "超音速でループを駆け抜ける青いハリネズミ", result: "sonic1" }
    ]
  },
  kirby_series_branch: {
    text: "どのカービィの物語を見届けますか？",
    image: "images/q_action_sub.png",
    options: [
      { label: "すべての原点！吸って吐き出す初代クリア枠", result: "kirby1" },
      { label: "コピー能力が初登場したファミコンの傑作", result: "kirby_fountain" },
      { label: "頼れる仲間たちと共に虹の島を救う第2作", result: "kirby2" },
      { label: "クレヨン調の優しい世界でハートを集める第3作", result: "kirby3" },
      { label: "多彩なオムニバスゲームが詰まったスーファミ名作", result: "kirby_sdx" }
    ]
  },
  wario_series_branch: {
    text: "どちらのワリオの悪巧みを見ますか？",
    image: "images/q_action_sub.png",
    options: [
      { label: "海賊の黄金像を奪い自分の城を建てる初代ワリオ", result: "wario1" },
      { label: "不死身のリアクションで謎を解く盗まれた財宝", result: "wario2" }
    ]
  },
  scream_horror_select: {
    text: "どんな恐怖に怯えてほしいですか？",
    image: "images/q_horror.png",
    options: [
      { label: "洋館や街から脱出する、生化学の惨劇", next: "scream_bio_branch" },
      { label: "日常に忍び寄る怪異や、身近な異変探し", next: "scream_chillas_branch" },
      { label: "狂気の館や美術館からの、命がけの脱出", next: "scream_escape_branch" },
      { label: "不気味な廃村や都市伝説の巨大怪異", next: "scream_legend_horror" },
      { label: "宇宙船や配信環境での、逃げ場のない狂気", next: "scream_indie_branch" }
    ]
  },
  scream_bio_branch: {
    text: "どの惨劇からの脱出劇を見届けますか？",
    image: "images/q_horror.png",
    options: [
      { label: "限られた物資で進む、洋館からの脱出劇", result: "bio_hd" },
      { label: "巨大な追跡者に怯え、裏編まで制覇する警察署", result: "bio_re2" },
      { label: "崩壊する都市を駆け抜ける、緊迫の完結編", result: "bio_re3" }
    ]
  },
  scream_chillas_branch: {
    text: "どの怪異に悲鳴を上げてほしいですか？",
    image: "images/q_horror.png",
    options: [
      { label: "深夜のコンビニバイトで怪異に襲われ悪態を突く", result: "yakinjiken" },
      { label: "夜のビルを一人で巡回する警備員の悪夢", result: "yakankeibi" },
      { label: "包丁を振るう怪異と、命がけ鬼ごっこ", result: "akamanto" },
      { label: "異変を見逃して引き返すたびにビビる地下通路", result: "exit8" },
      { label: "その他の日常侵食・怪異監視のホラー枠", next: "scream_chillas_other" }
    ]
  },
  scream_chillas_other: {
    text: "どちらの恐怖に直面させますか？",
    image: "images/q_horror.png",
    options: [
      { label: "レトロな銭湯に潜む狂気と恐怖に立ち向かう", result: "jigoku_sento" },
      { label: "事故物件の監視カメラを見張る深夜のバイト", result: "jsp3" },
      { label: "隣の部屋から聞こえる異様な物音と悪意", result: "dread_neighbor" },
      { label: "写真に写り込む怪異の謎を追う短編ホラー", result: "dezicame" }
    ]
  },
  scream_escape_branch: {
    text: "どの屋敷や施設からの脱出を見ますか？",
    image: "images/q_horror.png",
    options: [
      { label: "ドアを開けて青い化け物が追ってくる定番フリゲ", result: "aooni" },
      { label: "残酷な罠が仕掛けられた、不気味な魔女の館", result: "majonoya" },
      { label: "動き出す美術品から逃げ、脱出を目指す名作", result: "ib" },
      { label: "水浸しの不気味な空間を探索する心理ホラー", result: "pools" },
      { label: "部屋の隙間が広がる恐怖に立ち向かう短編", result: "sukima" }
    ]
  },
  scream_legend_horror: {
    text: "どの怪奇や都市伝説に挑ませますか？",
    image: "images/q_horror.png",
    options: [
      { label: "友人の警告を無視して潜入する、ヤバすぎる廃村", result: "shissou_takeshi" },
      { label: "八尺様より遥かに巨大な百尺様の怪異から逃走", result: "hyakushaku" },
      { label: "クソデカい怪異が全てを解決するパワー系ホラー", result: "kusodeka" }
    ]
  },
  scream_indie_branch: {
    text: "どんな不気味な世界に放り込みますか？",
    image: "images/q_horror.png",
    options: [
      { label: "死を待つしかない閉鎖宇宙船での心理劇", result: "mouthwashing" },
      { label: "身バレしたら命がない、危険な生配信ホラー", result: "pi_horror" },
      { label: "ジャンプスケアしかないなら怖くないはずの検証", result: "jumpscare_only" },
      { label: "異変探しと恐怖演出がループする階層ホラー", result: "jumpscare_loop" }
    ]
  },
  scream_physics: {
    text: "どんな理不尽な操作感にキレ散らかさせますか？",
    image: "images/q_variety.png",
    options: [
      { label: "思い通りに動かない理不尽へのブチギレ耐久", result: "bad_control" },
      { label: "ふにゃふにゃ人間を操作して学園先輩と大騒ぎ", result: "humanfallflat" },
      { label: "悪魔と子どもの遊びで戦う、不気味なミニゲーム", result: "bonesaw" },
      { label: "死んだ妻にリスを留めて蘇生させるクレイジーFPS", result: "squirrel_stapler" }
    ]
  },
  scream_boss_branch: {
    text: "どの要塞やボスの猛攻に悲鳴を上げさせますか？",
    image: "images/q_action_sub.png",
    options: [
      { label: "ファミコン時代のロックマン要塞攻略", next: "scream_rockman_fc" },
      { label: "スーパーファミコン以降の進化形ロックマン", next: "scream_rockman_sfc" },
      { label: "吸血鬼の古城に潜入し、ムチで魔物に挑む", next: "scream_dracula_branch" },
      { label: "爆弾を設置し、凶悪なボス軍団を迎え撃つ", next: "scream_bomber_branch" },
      { label: "弾幕シューティングに完全初見で飛び込む一戦", result: "touhou" }
    ]
  },
  scream_rockman_fc: {
    text: "どのファミコン要塞に挑みますか？",
    image: "images/q_action_sub.png",
    options: [
      { label: "初代の凶悪分裂ボスに絶望しつつ挑む", result: "rockman1" },
      { label: "心折る難易度との壮絶な戦い第2段", result: "rockman2" },
      { label: "過去のボスの亡霊に苦戦する第3弾", result: "rockman3" },
      { label: "敵博士の罠に挑む第4弾クリア耐久", result: "rockman4" },
      { label: "第5弾・第6弾・原点回帰の第9弾耐久", next: "scream_rockman_fc2" }
    ]
  },
  scream_rockman_fc2: {
    text: "どの死闘を見届けますか？",
    image: "images/q_action_sub.png",
    options: [
      { label: "赤いマフラーの戦士を追う第5弾耐久", result: "rockman5" },
      { label: "世界一をかけた決戦に挑む第6弾耐久", result: "rockman6" },
      { label: "原点回帰した超絶難易度の要塞耐久", result: "rockman9" }
    ]
  },
  scream_rockman_sfc: {
    text: "どの美麗ドットの死闘を見ますか？",
    image: "images/q_action_sub.png",
    options: [
      { label: "凶悪すぎるワイリーカプセルと戦う第7弾", result: "rockman7" },
      { label: "スノーボード難所に唸りながら進む第8弾", result: "rockman8" },
      { label: "新世代の疾走感！壁蹴りとダッシュのX初代", result: "x1" },
      { label: "エアダッシュとパーツ奪還のX第2弾", result: "x2" },
      { label: "鍛え上げたX筋でシグマを砕くX第3弾", result: "x3" }
    ]
  },
  scream_dracula_branch: {
    text: "どの古城探索へ乗り込みますか？",
    image: "images/q_action_sub.png",
    options: [
      { label: "吸血鬼の古城で、最強の死神に立ち向かう", result: "dracula_densetsu" },
      { label: "階段すら命がけ！硬派な初代古城潜入", result: "dracula1" },
      { label: "美麗アニメと硬派アクションが融合した名作", result: "dracula_rondo" },
      { label: "逆さ城まで余すことなく探索する金字塔", result: "dracula_gekka" }
    ]
  },
  scream_bomber_branch: {
    text: "どの爆弾バトルを観戦しますか？",
    image: "images/q_action_sub.png",
    options: [
      { label: "シンプルな駆け引きを味わう初代クリア枠", result: "bomber1" },
      { label: "凶悪5人衆の罠に挑む第2弾クリア耐久", result: "bomber2" },
      { label: "相棒ルーイと共にバグラーシップを追う第3弾", result: "bomber3" },
      { label: "多彩な乗り物を操りステージを駆ける第4弾", result: "bomber4" },
      { label: "真エンディングを目指すシリーズ集大成の第5弾", result: "bomber5" }
    ]
  },

  rpg_root: {
    text: "どんな冒険の物語に浸りたいですか？",
    image: "images/q_rpg.png",
    options: [
      { label: "特定キャラへの激重感情と、名シーンでの大号泣", result: "db_kakarot" },
      { label: "仲間たちとの過酷な旅路と、切なすぎる祈りの結末", result: "ff10" },
      { label: "3日後に滅びる世界で、人々の未練を解く旅", result: "zelda_majora" },
      { label: "自由な編成や育成を楽しみ、世界を救う大冒険", next: "rpg_adventure_branch" },
      { label: "時空や世代を超えて紡がれる、泥臭い人間賛歌", next: "emotion_chronicle" }
    ]
  },
  rpg_adventure_branch: {
    text: "どんな育成や旅の手応えをお望みですか？",
    image: "images/q_rpg_sub.png",
    options: [
      { label: "尖った職業編成で試行錯誤し、地下世界を目指す旅", result: "dq3" },
      { label: "多彩な役割を極め、おじいちゃんとの約束に挑む冒険", result: "ff5" },
      { label: "武器屋や復讐の姉妹…個性豊かな仲間たちの群像劇", result: "dq4" },
      { label: "たった一人で魔王討伐へ旅立つ、初代の原点", result: "dq1" },
      { label: "3人の王子王女で過酷な雪原を越える続編", result: "dq2" }
    ]
  },
  emotion_chronicle: {
    text: "どの奇跡とドラマを見届けますか？",
    image: "images/q_rpg_sub.png",
    options: [
      { label: "全滅を重ね、猛特訓で強敵を倒す皇帝の歴史", result: "rs2r" },
      { label: "滅亡の未来を変えるため、時空を駆ける傑作", result: "chrono" },
      { label: "悲劇を越え、魂の救済を目指す複数主人公の物語", result: "livealive" },
      { label: "日本各地を旅する、賑やかなゴエモン道中記", next: "goemon_series_branch" },
      { label: "ハイラルや星々、心揺さぶる名作アドベンチャー", next: "emotion_other_rpg" }
    ]
  },
  goemon_series_branch: {
    text: "どのゴエモンの大冒険に同行しますか？",
    image: "images/q_rpg_sub.png",
    options: [
      { label: "ゆき姫を救うため日本中を旅する初代クリア耐久", result: "goemon1" },
      { label: "マッギネスの野望を阻止する最高傑作クリア耐久", result: "goemon2" },
      { label: "未来と過去を股にかけ、からくり卍固めに挑む", result: "goemon3" },
      { label: "横スクロールの頂点にして僕がダンサーになった理由", result: "goemon4" },
      { label: "宇宙海賊アコギングの野望に挑むPS名作", result: "goemon_akoging" }
    ]
  },
  emotion_other_rpg: {
    text: "どの深淵な物語を味わいますか？",
    image: "images/q_rpg_sub.png",
    options: [
      { label: "退魔の剣を抜き『謎解き最強』と叫ぶ金字塔", result: "zelda_kami" },
      { label: "3Dの謎に呻きつつ、名ダンジョンを越える名作", result: "zelda_toki" },
      { label: "赤魔道士と共にクリスタルを巡る初代の冒険", result: "ff1" },
      { label: "46億年の進化を辿り、生命の頂点を目指す旅", result: "eden46" },
      { label: "その他の哀しき運命や惑星探索の物語", next: "emotion_destiny_branch" }
    ]
  },
  emotion_destiny_branch: {
    text: "どの過酷な運命を見届けますか？",
    image: "images/q_rpg_sub.png",
    options: [
      { label: "過酷な運命に翻弄される、相棒の哀しき物語", result: "x4" },
      { label: "コロニー落下を阻止し、宿敵と対峙する完結編", result: "x5" },
      { label: "記憶喪失の少女を巡る、映画のようなサスペンス", result: "doublecast" },
      { label: "未知の惑星を孤独に探索する、探索アクション", next: "metroid_branch" },
      { label: "家族を救うため、幻の薬を求めて旅立つトカゲ", result: "sandra" }
    ]
  },
  metroid_branch: {
    text: "どちらの孤独な惑星探索へ赴きますか？",
    image: "images/q_action_sub.png",
    options: [
      { label: "迷路のような要塞を孤独に探索する初代の金字塔", result: "metroid1" },
      { label: "美しく深淵な星でベビーを追うスーパーな冒険", result: "metroid_super" }
    ]
  },

  attitude_root: {
    text: "どんな「悪さ」をお望みですか？",
    image: "images/q_variety.png",
    options: [
      { label: "近所の子供たちを煽り倒す、気だるげな年上", next: "attitude_boku_branch" },
      { label: "正義の味方を罠にハメて高笑いする外道プレイ", next: "attitude_daikan_branch" },
      { label: "爆弾の連鎖で全方位から嫌われる、破滅学園生活", next: "attitude_tokimeki_branch" },
      { label: "巨大怪獣にガチ恋して純愛を育む、狂気の企画", result: "zetton" },
      { label: "理不尽な怪作に、冷静かつ鋭いツッコミを入れる枠", next: "attitude_tsukkomi" }
    ]
  },
  attitude_boku_branch: {
    text: "どちらの夏休みを治安悪く染め上げますか？",
    image: "images/q_variety_sub.png",
    options: [
      { label: "駄菓子屋でキッズをカツアゲする大人気シリーズ", result: "bokunatsu2" },
      { label: "田舎の夏休みにカス姉として凱旋する初代実況", result: "bokunatsu1" }
    ]
  },
  attitude_daikan_branch: {
    text: "どちらの成敗劇で悪徳トークを炸裂させますか？",
    image: "images/q_variety_sub.png",
    options: [
      { label: "正義の味方を返り討ちにする、外道プレイの原点", result: "akudaikan" },
      { label: "歴史の偉人たちを罠で粛正していく妄想伝", result: "akudaikan2" },
      { label: "クビになったメイドがコンビニで暴れる単発枠", result: "boku_arubaito" },
      { label: "保安官となって会話次第で銃を抜く西部の掟", result: "lawofthewest" }
    ]
  },
  attitude_tokimeki_branch: {
    text: "どの学園生活で破滅を迎えますか？",
    image: "images/q_variety_sub.png",
    options: [
      { label: "誰とでもいいから付き合いたいが、爆弾連鎖で自滅する", result: "tokimemo" },
      { label: "クイズ勝負で好感度を奪い合う変わり種実況", result: "tokimemo_quiz" },
      { label: "承認欲求の強い配信者を導き、破滅を見る育成", result: "needy_girl" }
    ]
  },
  attitude_tsukkomi: {
    text: "どの奇妙な世界にツッコませますか？",
    image: "images/q_variety_sub.png",
    options: [
      { label: "レースのはずが突如車を降りる、伝説の闇鍋", result: "paridakar" },
      { label: "羊に乗りマッチョと戦う、アーケードの怪奇", result: "triothepunch" },
      { label: "ただ規約に同意したいだけなのに、泣きの一枠へ", result: "kiyaku" },
      { label: "開始数歩で穴に落ちて即死する、理不尽推理", result: "mississippi" },
      { label: "その他のB級珍作やネタゲームに挑む枠", next: "attitude_rare_branch" }
    ]
  },
  attitude_rare_branch: {
    text: "どの珍品ゲームで呆れさせますか？",
    image: "images/q_variety_sub.png",
    options: [
      { label: "プレミアのついたコーラ男の疾走アクション", result: "pepsiman" },
      { label: "高騰している伝説のB級探検アクション", result: "not_treasure" },
      { label: "主人の寝首を掻くのが得意なメイドの単発枠", result: "goblin_gnome" },
      { label: "オチが最初から割れているギャグ短編RPG", result: "netabare_rpg" },
      { label: "バグだらけの不完全な世界にツッコむ単発RPG", result: "testplay_rpg" }
    ]
  },

  puzzle_manage_root: {
    text: "どんな知恵比べやゲームの回し方を見たいですか？",
    image: "images/q_thinking.png",
    options: [
      { label: "カードの相乗効果を見極め、淡々と心臓を目指す戦い", next: "puzzle_card_branch" },
      { label: "素材や事業を計算し、帝国を築く経営・育成シム", next: "puzzle_sim_branch" },
      { label: "集中してパネルやボールを操るパズル・対決枠", next: "puzzle_action_branch" },
      { label: "音波で敵を止め、しりとり等のミニゲームで知恵比べ", next: "wagyan_branch" },
      { label: "知識や教養、推理力を試すクイズ・ADV企画枠", next: "quiz_trivia_branch" }
    ]
  },
  puzzle_card_branch: {
    text: "どちらのカード対決を所望されますか？",
    image: "images/q_thinking.png",
    options: [
      { label: "デッキを組み心臓を撃破する、人生のゲーム", result: "slaythespire" },
      { label: "アーリー初日からガチ知識で回す至高の続編", result: "slaythespire2" },
      { label: "童心に帰ってパックを剥きまくるカード店経営", result: "tcg_simulator" },
      { label: "電脳空間で新時代のカードバトルに挑む枠", result: "shadowverse_beyond" },
      { label: "カードゲーム化したロボット最新作を先行体験", result: "medarot_card_pr" }
    ]
  },
  puzzle_sim_branch: {
    text: "どの経営や育成に情熱を注がせますか？",
    image: "images/q_thinking.png",
    options: [
      { label: "素材と利益を計算し、チェーン展開を目指す経営シム", result: "burger" },
      { label: "機械の少年に心と倫理を教え込む育成シム", result: "pino" },
      { label: "馬の知識ゼロから馬主になって頂点を目指す", result: "winning_post2" }
    ]
  },
  puzzle_action_branch: {
    text: "どのパズルや対決企画を観戦しますか？",
    image: "images/q_thinking.png",
    options: [
      { label: "集中してパネルを組み替え、ひたすら連鎖を繋ぐ耐久", result: "panepon" },
      { label: "ボールを弾いてホールインワンを目指す超難関パズル", result: "kirby_bowl" },
      { label: "マシンを強化してリスナーと乱闘するエアライド", result: "airride" },
      { label: "初代スマブラでリスナーと大暴れする対戦枠", result: "smash_bros" }
    ]
  },
  wagyan_branch: {
    text: "どの作品でしりとり対決を見ますか？",
    image: "images/q_thinking.png",
    options: [
      { label: "ボスとしりとり対決！完全初見のクリア耐久初代", result: "wagyan1" },
      { label: "さらにパワーアップした知恵比べに挑む第2弾耐久", result: "wagyan2" },
      { label: "スーファミでワイワイ楽しむ、進化した知恵比べ", result: "wagyan_super" }
    ]
  },
  quiz_trivia_branch: {
    text: "どんな教養や推理ドラマを見届けますか？",
    image: "images/q_thinking.png",
    options: [
      { label: "難読なマンガ技名漢字に準一級の腕前で挑む", result: "kanji_de_go" },
      { label: "ネット記事の人気度を勘と知識で当てる勝負", result: "wikiarena" },
      { label: "東日本と西日本の文化クイズで地元トーク", result: "east_west_quiz" },
      { label: "一般常識クイズに挑む休日のメイド", result: "general_quiz" },
      { label: "クラシックな本格推理アドベンチャーに挑む枠", next: "detective_adv_branch" }
    ]
  },
  detective_adv_branch: {
    text: "どの事件の捜査を担当させますか？",
    image: "images/q_thinking.png",
    options: [
      { label: "「犯人はヤス」の真相へ向かう昭和の名作推理", result: "portopia" },
      { label: "新宿の夜で煙草を燻らせるハードボイルド推理", result: "jinguji" },
      { label: "理不尽な即死トラップが満載の伝説の迷宮探索", result: "shadowgate" },
      { label: "奇怪な洋館からの脱出に挑むクラシックADV", result: "akuma_shoutaijou" },
      { label: "脳内会話でコミュ力を測る診断ゲーム", result: "oshaberi_king" }
    ]
  },

  tense_root: {
    text: "息を呑む真剣勝負、どのような極限状態が良いですか？",
    image: "images/q_shooting.png",
    options: [
      { label: "知識と運を総動員する、1000回遊べる迷宮探索", next: "tense_shir_branch" },
      { label: "一度倒れた仲間は二度と戻らない、命がけの旅", next: "tense_poke_branch" },
      { label: "装甲と重火器を組み換え、超高速の弾幕を掻い潜る", next: "tense_mecha_select" },
      { label: "敵に見つからず任務を遂行する、極限の潜入作戦", next: "tense_sneak_branch" },
      { label: "命をチップにした心理戦や、即詰みのある超硬派枠", next: "tense_hardcore_branch" }
    ]
  },
  tense_shir_branch: {
    text: "どちらの迷宮で、プロの眼差しを見たいですか？",
    image: "images/q_thinking.png",
    options: [
      { label: "300時間の知識で最深部99Fを目指す全19枠の血闘", result: "shiren6" },
      { label: "裏での猛特訓も惜しまず深淵に挑む聖地での記録", result: "asuka" }
    ]
  },
  tense_poke_branch: {
    text: "どの地方での、命をかけた死闘を見届けますか？",
    image: "images/q_rpg_sub.png",
    options: [
      { label: "一度全滅しても立ち上がり頂点へ挑んだ原点", result: "poke_red" },
      { label: "相棒の奮闘と壊滅を乗り越え全地方制覇へ至る続編", result: "poke_crystal" },
      { label: "泥水すする戦術で制した死闘が見られる3作目", result: "poke_emerald" }
    ]
  },
  tense_mecha_select: {
    text: "どのメカ・重火器戦線に投入しますか？",
    image: "images/q_shooting.png",
    options: [
      { label: "圧倒的な高速戦闘に挑むアーマードコア三部作", next: "tense_ac_branch" },
      { label: "宇宙を駆ける戦闘機シューティングの名作たち", next: "tense_stg_branch" },
      { label: "パーツを奪い合いカスタマイズするロボット育成", next: "tense_medarot_branch" }
    ]
  },
  tense_ac_branch: {
    text: "どの戦場で、傭兵として覚醒する姿を見ますか？",
    image: "images/q_shooting.png",
    options: [
      { label: "巨大な壁を越え、3周全ルートを踏破した過酷な惑星", result: "ac6" },
      { label: "超高速の洗礼に叩きのめされ、適応していく戦場", result: "ac4" },
      { label: "過酷な選択を迫られる、大空と企業を巡る戦争", result: "acfa" }
    ]
  },
  tense_stg_branch: {
    text: "どの宇宙戦線で弾幕を掻い潜りますか？",
    image: "images/q_shooting.png",
    options: [
      { label: "異形の生命体兵器を操り、名作STGに挑む枠", result: "rtype" },
      { label: "幾度撃墜されても蘇る、不死鳥の宇宙シューティング", result: "gradius" },
      { label: "買い物しながら進むパステルカラーの傑作STG", result: "fantasyzone" },
      { label: "宙返りとレーザーでアンドルフ打倒を目指す名作", next: "starfox_select" },
      { label: "超高難度同人シューティングの謎に迫る単発", result: "iruka_stg" }
    ]
  },
  starfox_select: {
    text: "どのスターフォックス戦線を見届けますか？",
    image: "images/q_shooting.png",
    options: [
      { label: "宇宙を駆けるクリア耐久の64名作", result: "sf64" },
      { label: "発売中止となった幻の戦略続編をプレイ", result: "sf2" },
      { label: "真のエンディングを目指して翔けるリメイク版", result: "sf_remake" }
    ]
  },
  tense_medarot_branch: {
    text: "どちらのバージョンでロボトルを極めますか？",
    image: "images/q_shooting.png",
    options: [
      { label: "パーツを奪いガチ勢へ進化していく初代クワガタ", result: "medarot1" },
      { label: "最強の威力を叩き出す続編クワガタバージョン", result: "medarot2" }
    ]
  },
  tense_sneak_branch: {
    text: "どの戦場への潜入任務を見届けますか？",
    image: "images/q_shooting.png",
    options: [
      { label: "無線を聞きまくり、孤島要塞へ単独潜入する原点", result: "mgs1" },
      { label: "情報社会の欺瞞に立ち向かう、海上施設での任務", result: "mgs2" },
      { label: "大自然で動植物を捕食しながら師を討つ密林潜入", result: "mgs3" },
      { label: "映画的サイバーパンクの世界で謎を追う傑作ADV", result: "snatcher" },
      { label: "64スパイアクションの金字塔で要塞を駆ける枠", result: "goldeneye" }
    ]
  },
  tense_hardcore_branch: {
    text: "どの極限の駆け引きや詰み要素に挑みますか？",
    image: "images/q_shooting.png",
    options: [
      { label: "命をチップにした、闇ディーラーとの散弾銃心理戦", result: "buckshot" },
      { label: "力を使いすぎたら即詰み、過酷な地下からの脱出", result: "bof5" },
      { label: "沈没していく豪華客船から生存者を率いて脱出", result: "septentrion" },
      { label: "死んだらキャラロストの戦術シミュレーション", result: "fe_monshou" },
      { label: "その他の硬派ミリタリー・格闘アクション", next: "tense_action_other" }
    ]
  },
  tense_action_other: {
    text: "どの研ぎ澄まされた戦いに立ち会いますか？",
    image: "images/q_action.png",
    options: [
      { label: "ミリタリーアクションをノーコンクリアする耐久", result: "metalslug1" },
      { label: "さらに進化した爽快ミリタリーアクション第2弾", result: "metalslug2" },
      { label: "神の手を持つ格闘メイドとして敵を殴り倒す", result: "godhand" },
      { label: "悪魔をスタイリッシュに泣かせるスタイリッシュ激闘", next: "dmc_branch" },
      { label: "魂斗羅や和風剣劇、その他の熱血バトル", next: "tense_battle_other" }
    ]
  },
  dmc_branch: {
    text: "どのデビルメイクライで悪魔を泣かせますか？",
    image: "images/q_action.png",
    options: [
      { label: "若きダンテの軽口とスタイリッシュアクション初代", result: "dmc1" },
      { label: "寡黙なダンテがビル街で舞う第2弾", result: "dmc2" },
      { label: "悪魔をスタイリッシュに泣かせる激闘第3弾", result: "dmc3" }
    ]
  },
  tense_battle_other: {
    text: "どの熱血バトルを見届けますか？",
    image: "images/q_action.png",
    options: [
      { label: "戦国時代で敵を一閃する和風剣劇の原点", result: "onimusha1" },
      { label: "十兵衛となって愛と敵を両断する和風剣劇続編", result: "onimusha2" },
      { label: "エイリアンを迎え撃つ硬派ミリタリーアクション", next: "contra_branch" },
      { label: "圧倒的な力で悪党を殴り飛ばす市長アクション", result: "finalfight" },
      { label: "神室町の極道ドラマと熱い漢のドラマ", result: "ryu_ga_gotoku" }
    ]
  },
  contra_branch: {
    text: "どの魂斗羅戦線でエイリアンを撃ちますか？",
    image: "images/q_action.png",
    options: [
      { label: "屈強な戦士となって一気に駆け抜ける初代耐久", result: "contra1" },
      { label: "さらに進化したエイリアン掃討戦の第2弾", result: "contra_super" },
      { label: "歴代最高難度に挑み、ボス撃破まで戦うスピリッツ", result: "contra_spirits" },
      { label: "格闘ゲームで王子を操作してはしゃぐ枠", result: "db_butouden2" },
      { label: "尸魂界から破面篇へ挑む死神アクション", result: "bleach_rebirth" }
    ]
  }
};
