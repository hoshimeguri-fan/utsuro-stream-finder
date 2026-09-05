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

  // ── ① 阿鼻叫喚・絶叫ルート ──
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
      { label: "すべての原点となった、理不尽な死にゲーの絶望", result: "makai_first" },
      { label: "聖夜の朝まで終わらない、過酷すぎるリベンジ耐久", result: "makai_dai" },
      { label: "かつて19時間を費やした、入村時の伝説的激闘", result: "makai_chou" },
      { label: "完全初見で飛び込んだ、最新の高難度地獄", result: "makai_kaettekita" },
      { label: "怪物の館でナタを振るい肉片と戦う、凄惨な耐久", result: "splatterhouse" }
    ]
  },
  scream_platform_select: {
    text: "どの世界で足場に苦戦する姿が見たいですか？",
    image: "images/q_action_sub.png",
    options: [
      { label: "伝統の王道コースを駆け抜ける、不屈の挑戦", next: "scream_mario_branch" },
      { label: "密林や工場で、容赦ないトゲと奈落に散る", next: "scream_dk_branch" },
      { label: "奥スクロールを駆け、トラップに弾き飛ばされる", next: "scream_crash_branch" },
      { label: "吸い込みや変身、ポップな世界での激闘", next: "scream_kirby_action" },
      { label: "特殊な足場や変則アクションに苦しむ枠", next: "scream_platform_other" }
    ]
  },
  scream_platform_other: {
    text: "どの特殊な操作感に手こずる姿を見ますか？",
    image: "images/q_action_sub.png",
    options: [
      { label: "歩き続ける小人たちを救えずパニックになる誘導パズル", result: "lemmings" },
      { label: "釣り竿ワイヤーに翻弄される、独特のラバーリングアクション", result: "umihara" },
      { label: "木槌を手に足場を駆け抜ける、職人の痛快アクション", result: "gen_san" },
      { label: "ナスビの呪いに怯えながら天界を目指す上昇アクション", result: "palutena" },
      { label: "肉体を乗り移りながら進む、異色のアーケードアクション", result: "phantasm" }
    ]
  },
  scream_mario_branch: {
    text: "どの難関コースで心を折られかけますか？",
    image: "images/q_action_sub.png",
    options: [
      { label: "時間制限に追われながら完全制覇を目指す、原点の耐久", result: "mario1" },
      { label: "全9枠に及んだ、シリーズ屈指の超高難度コースとの死闘", result: "mario2" },
      { label: "昔の記憶を頼りに、多彩な変身で最終関門を目指す旅", result: "mario3" },
      { label: "敵を持ち上げて投げる、異色のリベンジ冒険", result: "mariousa" },
      { label: "名ハードの幕開けを飾った、恐竜ランドの大冒険", result: "marioworld" },
      { label: "携帯機や3D空間でのアクロバティックな挑戦", next: "scream_mario_other" }
    ]
  },
  scream_mario_other: {
    text: "どの冒険での手こずりを見ますか？",
    image: "images/q_action_sub.png",
    options: [
      { label: "モノクロ画面のコースをサクッと駆け抜ける初見枠", result: "marioland" },
      { label: "金貨を集めて一枠完結を目指す、携帯機の名作", result: "marioland2" },
      { label: "子供の頃のトラウマを克服し、星を集め尽くす3Dの金字塔", result: "mario64" },
      { label: "リゾート気分を粉砕する、凶悪なポンプアスレチック", result: "mariosunshine" }
    ]
  },
  scream_dk_branch: {
    text: "密林のどの過酷な試練に挑みますか？",
    image: "images/q_action_sub.png",
    options: [
      { label: "美しい自然と名曲に包まれ、1日で走り切る耐久配信", result: "dk1" },
      { label: "海賊島を舞台にした、さらに凶悪なトゲと茨の試練", result: "dk2" },
      { label: "ギミック満載の秘密の島を制覇する、象と赤ちゃんの旅", result: "dk3" },
      { label: "広大な箱庭3Dで仲間を切り替え、激ムズ収集に挑む旅", result: "dk64" }
    ]
  },
  scream_crash_branch: {
    text: "奥スクロールのどの挑戦を見届けますか？",
    image: "images/q_action_sub.png",
    options: [
      { label: "次世代機の幕開けを飾った、手応え抜群の原点", result: "crash1" },
      { label: "モノマネ声を取り戻すため、荒ぶる叫びと共に走る続編", result: "crash2" },
      { label: "多彩な乗り物を駆使して世界中を飛び回る第3弾", result: "crash3" },
      { label: "白熱のカート勝負で声マネで吠えるレース枠", result: "crash_racing" }
    ]
  },
  scream_kirby_action: {
    text: "どの名作アクションの世界へ飛び込みますか？",
    image: "images/q_action_sub.png",
    options: [
      { label: "すべての原点！吸って吐き出す過酷な高難度モード耐久", result: "kirby1" },
      { label: "多彩な技の奪い合いが始まった、ファミコン末期の傑作", result: "kirby_fountain" },
      { label: "頼れる動物の仲間たちと共に、虹の島を救う第2作", result: "kirby2" },
      { label: "クレヨン調の優しい世界でハートを集める第3作", result: "kirby3" },
      { label: "多彩なオムニバスゲームが詰まった、伝説のスーファミ名作", result: "kirby_sdx" },
      { label: "その他の個性派横スクロール名作", next: "scream_wario_yoshi" }
    ]
  },
  scream_wario_yoshi: {
    text: "どちらの個性派アクションに挑みますか？",
    image: "images/q_action_sub.png",
    options: [
      { label: "黄金像を奪い自分の城を建てる、パワフルなお宝奪還劇", result: "wario1" },
      { label: "絶対に死なない不死身のリアクションで謎を解く冒険", result: "wario2" },
      { label: "赤ちゃんを背負いタマゴを投げる、手書き風の大冒険", result: "yoshi_island" },
      { label: "風のリングを掲げ、哀しき夢の世界を巡る名作", result: "klonoa" },
      { label: "超音速でループを駆け抜ける、青いスピードアクション", result: "sonic1" }
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
      { label: "限られた物資とインクリボンで進む、洋館からの生還劇", result: "bio_hd" },
      { label: "巨大な追跡者に怯え、裏編まで制覇するゾンビ警察署", result: "bio_re2" },
      { label: "崩壊する都市を駆け抜ける、追跡者との緊迫の完結編", result: "bio_re3" }
    ]
  },
  scream_chillas_branch: {
    text: "どの怪異に悲鳴を上げてほしいですか？",
    image: "images/q_horror.png",
    options: [
      { label: "深夜のコンビニバイトで怪異に襲われ悪態を突く", result: "yakinjiken" },
      { label: "夜のビルを一人で巡回する警備員の悪夢", result: "yakankeibi" },
      { label: "包丁を振るう怪異と、命がけの廃校鬼ごっこ", result: "akamanto" },
      { label: "異変を見逃して引き返すたびにビビる地下通路", result: "exit8" },
      { label: "その他の日常侵食・怪異監視のホラー枠", next: "scream_chillas_other" }
    ]
  },
  scream_chillas_other: {
    text: "どちらの恐怖に直面させますか？",
    image: "images/q_horror.png",
    options: [
      { label: "下町のレトロな風呂屋に潜む狂気と怪奇現象", result: "jigoku_sento" },
      { label: "事故物件の監視カメラを見張る深夜のバイト監視員", result: "jsp3" },
      { label: "隣の部屋から聞こえる異様な物音と生々しい悪意", result: "dread_neighbor" },
      { label: "写真に写り込む不気味な影の謎を追う短編枠", result: "dezicame" }
    ]
  },
  scream_escape_branch: {
    text: "どの屋敷や施設からの脱出を見ますか？",
    image: "images/q_horror.png",
    options: [
      { label: "ドアを開けたら青い巨顔が追ってくる、名作フリーホラー", result: "aooni" },
      { label: "残酷な即死罠が張り巡らされた、不気味な森の洋館", result: "majonoya" },
      { label: "動き出す不気味な美術品から逃げ惑う、奇妙な美術館", result: "ib" },
      { label: "水浸しの無機質な空間をひたすら彷徨う心理ホラー", result: "pools" },
      { label: "部屋中の隙間が広がる恐怖に立ち向かう短編", result: "sukima" }
    ]
  },
  scream_legend_horror: {
    text: "どの怪奇や都市伝説に挑ませますか？",
    image: "images/q_horror.png",
    options: [
      { label: "友人の警告を無視して潜入する、ヤバすぎる廃村", result: "shissou_takeshi" },
      { label: "有名な都市伝説の怪異がさらに巨大化して迫る逃走劇", result: "hyakushaku" },
      { label: "クソデカい怪異が全てを解決するパワー系ホラー", result: "kusodeka" }
    ]
  },
  scream_indie_branch: {
    text: "どんな不気味な世界に放り込みますか？",
    image: "images/q_horror.png",
    options: [
      { label: "死を待つしかない閉鎖宇宙船での濃厚な心理劇", result: "mouthwashing" },
      { label: "身バレしたら命がない、危険な生配信ホラー", result: "pi_horror" },
      { label: "びっくり演出しかないなら怖くないはずという検証枠", result: "jumpscare_only" },
      { label: "異変探しと恐怖演出がループする階層ホラー", result: "jumpscare_loop" }
    ]
  },
  scream_physics: {
    text: "どんな理不尽な操作感・過酷な手応えに挑みますか？",
    image: "images/q_variety.png",
    options: [
      { label: "悪意ある操作性とガチで戦う、伝説の理不尽耐久試験", result: "bad_control" },
      { label: "シチュエーションも操作も異様な、狂気のサバイバルFPS", result: "squirrel_stapler" },
      { label: "絶望的な死闘を強いられる、超高難度レトロアクション", result: "makai_first" },
      { label: "一瞬の油断も許されない、極限の死にゲー挑戦", result: "makai_chou" }
    ]
  },
  scream_boss_branch: {
    text: "どの要塞やボスの猛攻に悲鳴を上げさせますか？",
    image: "images/q_action_sub.png",
    options: [
      { label: "ドット絵時代の青いロボット要塞攻略（初期）", next: "scream_rockman_fc" },
      { label: "ハードの進化と共に激しさを増すロボットアクション", next: "scream_rockman_sfc" },
      { label: "吸血鬼の古城に潜入し、ムチで魔物に挑む", next: "scream_dracula_branch" },
      { label: "爆弾を設置し、凶悪なボス軍団を迎え撃つ", next: "scream_bomber_branch" },
      { label: "弾幕シューティングに完全初見で飛び込む一戦", result: "touhou" }
    ]
  },
  scream_rockman_fc: {
    text: "どの初期要塞に挑みますか？",
    image: "images/q_action_sub.png",
    options: [
      { label: "凶悪な分裂ボスに絶望しつつ挑む、初代の挑戦", result: "rockman1" },
      { label: "心折る難易度と名曲に彩られた、伝説の第2作", result: "rockman2" },
      { label: "過去のボスの亡霊に苦戦する、スライディング導入作", result: "rockman3" },
      { label: "タメ撃ちを武器に敵博士の罠に挑む、第4作耐久", result: "rockman4" },
      { label: "変身ギミックや原点回帰のさらなる挑戦", next: "scream_rockman_fc2" }
    ]
  },
  scream_rockman_fc2: {
    text: "どの死闘を見届けますか？",
    image: "images/q_action_sub.png",
    options: [
      { label: "赤いマフラーの兄貴分を追う第5弾耐久", result: "rockman5" },
      { label: "世界一をかけた決戦に挑むジェット変身の第6弾", result: "rockman6" },
      { label: "原点回帰した超絶難易度の土下座要求耐久", result: "rockman9" }
    ]
  },
  scream_rockman_sfc: {
    text: "どの美麗ドットの死闘を見ますか？",
    image: "images/q_action_sub.png",
    options: [
      { label: "凶悪すぎる最終カプセルと戦う第7弾", result: "rockman7" },
      { label: "スノーボード難所に唸りながら進むボイス付きの第8弾", result: "rockman8" },
      { label: "新世代の疾走感！ダッシュと壁蹴りの新章初代", result: "x1" },
      { label: "エアダッシュとパーツ奪還に燃える新章第2弾", result: "x2" },
      { label: "鍛え上げた腕前で巨大ボスを粉砕する新章第3弾", result: "x3" }
    ]
  },
  scream_dracula_branch: {
    text: "どの古城探索へ乗り込みますか？",
    image: "images/q_action_sub.png",
    options: [
      { label: "古城で無限の飛び道具を手に、最強の死神に立ち向かう", result: "dracula_densetsu" },
      { label: "階段すら命がけ！硬派を極めた初代の古城潜入", result: "dracula1" },
      { label: "美麗アニメと硬派アクションが融合した傑作探索", result: "dracula_rondo" },
      { label: "城が反転する驚きの仕掛けまで探索し尽くす金字塔", result: "dracula_gekka" }
    ]
  },
  scream_bomber_branch: {
    text: "どの爆弾バトルを観戦しますか？",
    image: "images/q_action_sub.png",
    options: [
      { label: "シンプルな駆け引きを味わう、スーファミ原点のクリア枠", result: "bomber1" },
      { label: "凶悪5人衆の罠に挑む第2弾クリア耐久", result: "bomber2" },
      { label: "カンガルー風の相棒と共に宇宙戦艦を追う第3弾", result: "bomber3" },
      { label: "多彩な敵を乗り物にしてステージを駆ける第4弾", result: "bomber4" },
      { label: "真エンディングを目指すシリーズ集大成の第5弾", result: "bomber5" }
    ]
  },

  // ── ② 大冒険・感情移入・物語ルート ──
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
      { label: "尖った職業編成で試行錯誤し、地下の闇世界を目指す旅", result: "dq3" },
      { label: "多彩な役割を極め、おじいちゃんとの約束に挑む冒険", result: "ff5" },
      { label: "武器屋や復讐の姉妹…個性豊かな仲間たちの群像劇", result: "dq4" },
      { label: "たった一人で竜王討伐へ旅立つ、王道RPGの原点", result: "dq1" },
      { label: "3人の王子王女で過酷な雪原を越える続編", result: "dq2" }
    ]
  },
  emotion_chronicle: {
    text: "どの奇跡とドラマを見届けますか？",
    image: "images/q_rpg_sub.png",
    options: [
      { label: "全滅を重ね、猛特訓で強敵を倒す皇帝の歴史絵巻", result: "rs2r" },
      { label: "滅亡の未来を変えるため、時空を駆け抜ける傑作", result: "chrono" },
      { label: "悲劇を越え、魂の救済を目指す複数主人公の物語", result: "livealive" },
      { label: "日本各地を賑やかに巡る、痛快道中記アクション", next: "goemon_series_branch" },
      { label: "伝説の剣や星々、心揺さぶる名作アドベンチャー", next: "emotion_other_rpg" }
    ]
  },
  goemon_series_branch: {
    text: "どの痛快な大冒険に同行しますか？",
    image: "images/q_rpg_sub.png",
    options: [
      { label: "さらわれたお姫様を救うため日本中を旅する初代耐久", result: "goemon1" },
      { label: "将軍の野望を阻止する最高傑作アクション耐久", result: "goemon2" },
      { label: "未来と過去を股にかけ、巨大からくり城に挑む長編", result: "goemon3" },
      { label: "横スクロールの頂点にして、旅芸人の輝きを追う第4弾", result: "goemon4" },
      { label: "宇宙海賊の野望に挑む、初代プレステの歯ごたえある名作", result: "goemon_akoging" }
    ]
  },
  emotion_other_rpg: {
    text: "どの深淵な物語を味わいますか？",
    image: "images/q_rpg_sub.png",
    options: [
      { label: "退魔の剣を抜き『謎解き最強』と叫ぶ、見下ろし型の金字塔", result: "zelda_kami" },
      { label: "立体的な謎に呻きつつ、名ダンジョンを越える時の旅", result: "zelda_toki" },
      { label: "赤魔道士と共にクリスタルを巡る、幻想世界の原点", result: "ff1" },
      { label: "46億年の進化を辿り、生命の頂点を目指す旅", result: "eden46" },
      { label: "その他の哀しき運命や惑星探索の物語", next: "emotion_destiny_branch" }
    ]
  },
  emotion_destiny_branch: {
    text: "どの過酷な運命を見届けますか？",
    image: "images/q_rpg_sub.png",
    options: [
      { label: "過酷な運命に翻弄される、真紅のセイバーを持つ相棒の悲哀", result: "x4" },
      { label: "巨大人工物の落下を阻止し、宿敵と対峙する完結編", result: "x5" },
      { label: "記憶喪失の少女を巡る、映画のようなフルアニメサスペンス", result: "doublecast" },
      { label: "未知の星を孤独に探索する、SFアクション", next: "metroid_branch" },
      { label: "家族を救うため、幻の薬を求めて旅立つトカゲの冒険", result: "sandra" }
    ]
  },
  metroid_branch: {
    text: "どちらの孤独な惑星探索へ赴きますか？",
    image: "images/q_action_sub.png",
    options: [
      { label: "寄生生物の脅威に晒されたステーションを探索する冒険", result: "metroid1" },
      { label: "美しく深淵な星で幼生を追う、最高峰の探索アクション", result: "metroid_super" }
    ]
  },

  // ── ③ 治安最悪・悪ノリ・ロールプレイルート ──
  attitude_root: {
    text: "どんな「悪さ」をお望みですか？",
    image: "images/q_variety.png",
    options: [
      { label: "近所の子供たちを煽り倒す、気だるげな年上のおねえちゃん", next: "attitude_boku_branch" },
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
      { label: "海の見える町で子供をカツアゲする大人気シリーズ", result: "bokunatsu2" },
      { label: "田舎の夏休みに気だるげに凱旋する初代実況", result: "bokunatsu1" }
    ]
  },
  attitude_daikan_branch: {
    text: "どの成敗劇で悪徳トークを炸裂させますか？",
    image: "images/q_variety_sub.png",
    options: [
      { label: "正義の味方を返り討ちにする、外道プレイの原点", result: "akudaikan" },
      { label: "歴史の偉人たちを罠で粛正していく、悪ノリ加速の妄想伝", result: "akudaikan2" },
      { label: "クビになったメイドがコンビニで暴れるドタバタ枠", result: "boku_arubaito" }
    ]
  },
  attitude_tokimeki_branch: {
    text: "どの学園生活で破滅を迎えますか？",
    image: "images/q_variety_sub.png",
    options: [
      { label: "伝説の樹の下を目指すはずが、爆弾連鎖で自滅する恋愛劇", result: "tokimemo" },
      { label: "クイズ勝負で好感度を奪い合う、変わり種恋愛シム", result: "tokimemo_quiz" },
      { label: "承認欲求の強い配信者を導き、破滅を見ていく育成劇", result: "needy_girl" }
    ]
  },
  attitude_tsukkomi: {
    text: "どの奇妙な世界にツッコませますか？",
    image: "images/q_variety_sub.png",
    options: [
      { label: "保安官となって会話次第で銃を抜く、荒野の掟", result: "lawofthewest" },
      { label: "レースのはずが突如車を降りる、伝説のファミコン闇鍋奇ゲー", result: "paridakar" },
      { label: "羊に乗りマッチョと戦う、アーケードが生んだ伝説のカオス", result: "triothepunch" },
      { label: "ただ規約に同意したいだけなのに、あまりの理不尽に泣く枠", result: "kiyaku" },
      { label: "開始数歩で穴に落ちて即死する、理不尽推理アドベンチャー", result: "mississippi" },
      { label: "その他のB級珍作やネタゲームに挑む枠", next: "attitude_rare_branch" }
    ]
  },
  attitude_rare_branch: {
    text: "どの珍品ゲームで呆れさせますか？",
    image: "images/q_variety_sub.png",
    options: [
      { label: "プレミアのついた炭酸飲料マスコット男の疾走アクション", result: "pepsiman" },
      { label: "高騰している伝説のB級探検アクションアドベンチャー", result: "not_treasure" },
      { label: "主人の寝首を掻くのが得意なメイドのシュールな単発枠", result: "goblin_gnome" },
      { label: "オチが最初からタイトルで割れている出オチ短編RPG", result: "netabare_rpg" },
      { label: "バグだらけの不完全な世界にツッコミを入れる単発RPG", result: "testplay_rpg" }
    ]
  },

  // ── ④ 思考・知恵比べ・経営ルート ──
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
      { label: "早期アクセス初日からガチ知識で回す至高の続編", result: "slaythespire2" },
      { label: "童心に帰ってパックを剥きまくるカードショップ経営", result: "tcg_simulator" },
      { label: "電脳空間で新時代のカードバトルに挑むガチ勢枠", result: "shadowverse_beyond" },
      { label: "カードゲーム化したロボット対戦最新作を先行体験", result: "medarot_card_pr" }
    ]
  },
  puzzle_sim_branch: {
    text: "どの経営や育成に情熱を注がせますか？",
    image: "images/q_thinking.png",
    options: [
      { label: "素材と利益を計算し、チェーン展開でハンバーガー帝国を目指す", result: "burger" },
      { label: "機械の少年に心と倫理を教え込む、名作育成アドベンチャー", result: "pino" },
      { label: "知識ゼロから馬主になって競走馬の頂点を目指すシム", result: "winning_post2" }
    ]
  },
  puzzle_action_branch: {
    text: "どのパズルや対決企画を観戦しますか？",
    image: "images/q_thinking.png",
    options: [
      { label: "集中してパネルを組み替え、ひたすら連鎖を繋ぐパズル耐久", result: "panepon" },
      { label: "ボールを弾いてカップインを目指す、超難関パズルゴルフ", result: "kirby_bowl" },
      { label: "マシンを強化してリスナーと街中を駆け回る乱闘レース", result: "airride" },
      { label: "初代乱闘アクションでリスナーと大暴れする対戦枠", result: "smash_bros" }
    ]
  },
  wagyan_branch: {
    text: "どの作品でしりとり対決を見ますか？",
    image: "images/q_thinking.png",
    options: [
      { label: "ボスとしりとり対決！完全初見のクリア耐久初代", result: "wagyan1" },
      { label: "さらにパワーアップした知恵比べに挑む第2弾耐久", result: "wagyan2" },
      { label: "進化した美麗グラフィックで楽しむ、知恵比べ第3弾", result: "wagyan_super" }
    ]
  },
  quiz_trivia_branch: {
    text: "どんな教養や推理ドラマを見届けますか？",
    image: "images/q_thinking.png",
    options: [
      { label: "難読なマンガ技名漢字に漢検準一級の腕前で挑む", result: "kanji_de_go" },
      { label: "ネット記事の人気度を勘と知識で当てるリスナー参加型勝負", result: "wikiarena" },
      { label: "東西の文化や方言クイズから広がる地元トーク", result: "east_west_quiz" },
      { label: "一般常識クイズに挑む休日のメイド常識チェック", result: "general_quiz" },
      { label: "クラシックな本格推理アドベンチャーに挑む枠", next: "detective_adv_branch" }
    ]
  },
  detective_adv_branch: {
    text: "どの事件の捜査を担当させますか？",
    image: "images/q_thinking.png",
    options: [
      { label: "有名なあの犯人の真相へ向かう、昭和の名作本格推理", result: "portopia" },
      { label: "眠らない街で煙草を燻らせる、ハードボイルド探偵劇", result: "jinguji" },
      { label: "理不尽な即死トラップが満載の伝説の迷宮探索ADV", result: "shadowgate" },
      { label: "奇怪な洋館からの脱出に挑む、クラシックホラーADV", result: "akuma_shoutaijou" },
      { label: "脳内会話でコミュ力を測る診断ゲーム", result: "oshaberi_king" }
    ]
  },

  // ── ⑤ ガチ集中・極限の緊張感ルート ──
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
      { label: "300時間の知識で最深部99Fを目指す、全19枠に及んだ血闘", result: "shiren6" },
      { label: "裏での猛特訓も惜しまず深淵に挑む、憧れの聖地での記録", result: "asuka" }
    ]
  },
  tense_poke_branch: {
    text: "どの地方での、命をかけた死闘を見届けますか？",
    image: "images/q_rpg_sub.png",
    options: [
      { label: "一度全滅しても立ち上がり頂点へ挑んだ、過酷な初代人生縛り", result: "poke_red" },
      { label: "相棒の奮闘と壊滅を乗り越え全地方制覇へ至る、第2世代の死闘", result: "poke_crystal" },
      { label: "序盤の絶望から泥水すする戦術で制した、第3世代の死闘", result: "poke_emerald" }
    ]
  },
  tense_mecha_select: {
    text: "どのメカ・重火器戦線に投入しますか？",
    image: "images/q_shooting.png",
    options: [
      { label: "圧倒的な高速戦闘に挑むメカカスタマイズ三部作", next: "tense_ac_branch" },
      { label: "宇宙を駆ける戦闘機シューティングの名作たち", next: "tense_stg_branch" },
      { label: "パーツを奪い合いカスタマイズするロボット育成バトル", next: "tense_medarot_branch" }
    ]
  },
  tense_ac_branch: {
    text: "どの戦場で、傭兵として覚醒する姿を見ますか？",
    image: "images/q_shooting.png",
    options: [
      { label: "巨大な壁を越え、3周全ルートを踏破した過酷な惑星の炎", result: "ac6" },
      { label: "超高速の洗礼に叩きのめされ、驚異の適応力で覚醒していく戦場", result: "ac4" },
      { label: "過酷な選択を迫られる、大空と巨大企業を巡る戦争", result: "acfa" }
    ]
  },
  tense_stg_branch: {
    text: "どの宇宙戦線で弾幕を掻い潜りますか？",
    image: "images/q_shooting.png",
    options: [
      { label: "異形の生命体兵器を操り、名作SFシューティングに挑む枠", result: "rtype" },
      { label: "幾度撃墜されても蘇る、不死鳥の宇宙シューティング", result: "gradius" },
      { label: "買い物しながら進むパステルカラーの傑作シューティング", result: "fantasyzone" },
      { label: "宙返りとレーザーで巨悪打倒を目指す、3D飛行アクション", next: "starfox_select" },
      { label: "超高難度同人シューティングの謎と理由に迫る単発", result: "iruka_stg" }
    ]
  },
  starfox_select: {
    text: "どの飛行戦線を見届けますか？",
    image: "images/q_shooting.png",
    options: [
      { label: "宇宙を駆けるクリア耐久の64名作フライトアクション", result: "sf64" },
      { label: "発売中止となった幻の戦略的続編をプレイ", result: "sf2" },
      { label: "真のエンディングを目指して翔けるリメイク版フライト", result: "sf_remake" }
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
      { label: "無線を聞きまくり、孤島要塞へ単独潜入する20世紀最高のシナリオ", result: "mgs1" },
      { label: "情報社会の欺瞞に立ち向かう、海上施設での過酷な任務", result: "mgs2" },
      { label: "大自然で動植物を捕食しながら恩師を討つ密林潜入", result: "mgs3" },
      { label: "映画的サイバーパンクの世界で謎を追う傑作ADV", result: "snatcher" },
      { label: "名作スパイアクションの金字塔で要塞を駆けるFPS", result: "goldeneye" }
    ]
  },
  tense_hardcore_branch: {
    text: "どの極限の駆け引きや詰み要素に挑みますか？",
    image: "images/q_shooting.png",
    options: [
      { label: "命をチップにした、闇ディーラーとの散弾銃心理戦", result: "buckshot" },
      { label: "竜の力を使いすぎたら即詰み、過酷な地下からの脱出", result: "bof5" },
      { label: "沈没していく豪華客船から生存者を率いて脱出する極限状態", result: "septentrion" },
      { label: "倒れた仲間は二度と戻らない、死と隣り合わせの戦術シミュレーション", result: "fe_monshou" },
      { label: "その他の硬派ミリタリー・格闘アクション", next: "tense_action_other" }
    ]
  },
  tense_action_other: {
    text: "どの研ぎ澄まされた戦いに立ち会いますか？",
    image: "images/q_action.png",
    options: [
      { label: "ミリタリーアクションをノーコンクリアする初代耐久", result: "metalslug1" },
      { label: "さらに進化した爽快ミリタリーアクション第2弾", result: "metalslug2" },
      { label: "神の手を持つ格闘メイドとして悪党を殴り倒す痛快アクション", result: "godhand" },
      { label: "悪魔をスタイリッシュに泣かせるスタイリッシュ激闘", next: "dmc_branch" },
      { label: "屈強な戦士や和風剣劇、その他の熱血バトル", next: "tense_battle_other" }
    ]
  },
  dmc_branch: {
    text: "どのスタイリッシュアクションで悪魔を泣かせますか？",
    image: "images/q_action.png",
    options: [
      { label: "若きダンテの軽口と華麗な剣銃アクション初代", result: "dmc1" },
      { label: "寡黙なダンテがビル街で舞う第2弾", result: "dmc2" },
      { label: "悪魔をスタイリッシュに泣かせる兄弟喧嘩の最高峰激闘", result: "dmc3" }
    ]
  },
  tense_battle_other: {
    text: "どの熱血バトルを見届けますか？",
    image: "images/q_action.png",
    options: [
      { label: "戦国時代で敵を一閃する和風剣劇アクションの原点", result: "onimusha1" },
      { label: "十兵衛となって愛と敵を両断する和風剣劇の最高峰続編", result: "onimusha2" },
      { label: "エイリアンを迎え撃つ硬派な銃撃アクション", next: "contra_branch" },
      { label: "圧倒的な力で悪党を殴り飛ばす市長のベルトスクロール", result: "finalfight" },
      { label: "歓楽街の裏社会で漢たちの熱いドラマに立ち会う", result: "ryu_ga_gotoku" }
    ]
  },
  contra_branch: {
    text: "どの戦線でエイリアンを迎え撃ちますか？",
    image: "images/q_action.png",
    options: [
      { label: "屈強な戦士となって一気に駆け抜ける初代耐久", result: "contra1" },
      { label: "さらに進化したエイリアン掃討戦の第2弾", result: "contra_super" },
      { label: "歴代最高難度に挑み、最終ボス撃破まで戦うスピリッツ", result: "contra_spirits" },
      { label: "格闘ゲームでサイヤ人の王子を操作して無邪気にはしゃぐ枠", result: "db_butouden2" },
      { label: "死神たちの抗争に飛び込むスタイリッシュ対戦アクション", result: "bleach_rebirth" }
    ]
  }
};
