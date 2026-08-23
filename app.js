(function() {

    var MOUNTAINS = [{
        id: 0,
        name: '阴阳总纲',
        nameEN: 'Yin-Yang',
        chapters: [
            {
                title: '阴阳的定义',
                titleEN: 'Definition of Yin-Yang',
                content: '阴阳是对自然界相互关联的事物和现象对立双方的概括。阴代表静态、内在、寒凉、下降；阳代表动态、外在、温热、上升。阴阳不是固定的标签，而是描述事物运动状态的相对概念。',
                contentEN: 'Yin-Yang is a generalization of the opposing aspects of interrelated things and phenomena in nature. Yin represents stillness, interior, cold, and descending; Yang represents motion, exterior, heat, and ascending. Yin and Yang are not fixed labels, but relative concepts describing the state of movement of things.',
                nishi: '阴阳是"气"的两种状态，不是玄学。你摸到病人皮肤是冷的，那就是阴；是热的，那就是阳。临床上一摸就知。',
                nishiEN: 'Yin-Yang are two states of "Qi", not metaphysics. When you feel a patient\'s skin is cold, that\'s Yin; if hot, that\'s Yang. In clinical practice, you know by touch.'
            },
            {
                title: '阴阳的互根互用',
                titleEN: 'Interdependence and Mutual Support',
                content: '阴与阳互相依存，任何一方都不能脱离另一方单独存在。没有阴就无所谓阳，没有阳也无所谓阴。同时，阴阳之间互相滋生、互相促进：阳化气，阴成形。',
                contentEN: 'Yin and Yang depend on each other. Neither can exist without the other. Without Yin, there is no Yang; without Yang, there is no Yin. At the same time, they nourish and promote each other: Yang transforms Qi, Yin forms shape.',
                nishi: '孤阴不生，独阳不长。治病时，补阳要兼顾阴，补阴要兼顾阳。你看一个病人，阴虚到极点，你猛补阴，反而伤阳。要阴阳同补。',
                nishiEN: 'Isolated Yin cannot generate, alone Yang cannot grow. When treating, nourishing Yang must consider Yin, and vice versa. If a patient is extremely Yin-deficient and you heavily supplement Yin, you damage Yang. Supplement both together.'
            },
            {
                title: '阴阳的消长平衡',
                titleEN: 'Waxing, Waning and Balance',
                content: '阴阳始终处于动态的消长变化之中。阳长则阴消，阴长则阳消。但这种变化是有度的，维持在一定的平衡范围内就是健康状态；一旦失衡，就是疾病。',
                contentEN: 'Yin and Yang are always in dynamic waxing and waning. When Yang increases, Yin decreases; when Yin increases, Yang decreases. But this change has limits. Maintaining balance within a certain range is health; once imbalanced, disease arises.',
                nishi: '人为什么会生病？就是阴阳失衡。你看一个人，白天没精神（阳不足），晚上睡不好（阴不敛阳），这就是阴阳不交。调阴阳，就是调平衡。',
                nishiEN: 'Why do people get sick? Yin-Yang imbalance. A person has no energy during the day (Yang deficiency) and can\'t sleep at night (Yin fails to contain Yang)—this is Yin-Yang disharmony. Regulating Yin-Yang means restoring balance.'
            },
            {
                title: '阴阳的转化',
                titleEN: 'Transformation of Yin-Yang',
                content: '在一定条件下，阴阳可以向其对立面转化。所谓"重阴必阳，重阳必阴"、"寒极生热，热极生寒"。这种转化是质变，是疾病转归的关键节点。',
                contentEN: 'Under certain conditions, Yin and Yang can transform into their opposites. "Extreme Yin turns to Yang, extreme Yang turns to Yin"; "Extreme cold generates heat, extreme heat generates cold." This transformation is qualitative change and a key node in the outcome of disease.',
                nishi: '病到最后，往往是阴阳离决。但在这之前，有一个转化的机会。你看一个病人，高烧不退（阳），突然体温下降手脚冰冷（阴），这是转机，也可能是危象。要抓住这个点。',
                nishiEN: 'At the end stage of disease, it is often Yin-Yang separation. But before that, there is a window of transformation. A patient with persistent high fever (Yang) suddenly has dropping temperature and cold hands and feet (Yin)—this is a turning point, but may also be a crisis. Seize this moment.'
            }
        ]
    }, {
        id: 1,
        name: '五行学说',
        nameEN: 'Five Phases',
        chapters: [
            {
                title: '五行的基本概念',
                titleEN: 'Basic Concept of Five Phases',
                content: '木、火、土、金、水是自然界五种基本物质的抽象概括。五行不是五种具体的物质，而是五种运动方式和特性的象征。',
                contentEN: 'Wood, Fire, Earth, Metal, Water are abstract generalizations of five fundamental substances in nature. They are not five specific materials, but symbols of five types of movement and characteristics.',
                nishi: '五行是"气"的五种运行状态。你看春天树木发芽（木气升发），夏天炎热（火气炎上），这就是五行在自然界的体现。',
                nishiEN: 'Five Phases are five states of Qi movement. In spring trees sprout (Wood Qi rises), in summer it\'s hot (Fire Qi flames upward)—this is the expression of Five Phases in nature.'
            },
            {
                title: '五行的相生相克',
                titleEN: 'Generating and Restraining',
                content: '相生：木生火、火生土、土生金、金生水、水生木。相克：木克土、土克水、水克火、火克金、金克木。生克是维持动态平衡的两种力量。',
                contentEN: 'Generating: Wood generates Fire, Fire generates Earth, Earth generates Metal, Metal generates Water, Water generates Wood. Restraining: Wood restrains Earth, Earth restrains Water, Water restrains Fire, Fire restrains Metal, Metal restrains Wood. Generating and restraining are two forces maintaining dynamic balance.',
                nishi: '生中有克，克中有生。你看肝（木）太旺了，就会克脾（土），所以肝病的人胃口不好。但如果你去补脾（土），土旺了又能生金，金旺了就能克木，这叫"间接治疗"。',
                nishiEN: 'Within generation there is restraint, within restraint there is generation. If the Liver (Wood) is too strong, it restrains the Spleen (Earth), so liver patients have poor appetite. But if you supplement the Spleen (Earth), Earth generates Metal, and Metal restrains Wood—this is "indirect treatment."'
            },
            {
                title: '五行与五脏对应',
                titleEN: 'Five Phases and Five Zang',
                content: '肝属木、心属火、脾属土、肺属金、肾属水。五脏的功能特性与五行相对应，构成了中医的核心生理模型。',
                contentEN: 'Liver corresponds to Wood, Heart to Fire, Spleen to Earth, Lung to Metal, Kidney to Water. The functional characteristics of the five Zang organs correspond to the Five Phases, forming the core physiological model of TCM.',
                nishi: '你看一个病人，脸色发青（木色），是肝病；发红（火色），是心病；发黄（土色），是脾病；发白（金色），是肺病；发黑（水色），是肾病。望诊就是这么来的。',
                nishiEN: 'A patient with a green complexion (Wood color) indicates Liver disease; red (Fire) indicates Heart disease; yellow (Earth) indicates Spleen disease; white (Metal) indicates Lung disease; black (Water) indicates Kidney disease. This is the basis of inspection diagnosis.'
            },
            {
                title: '五行在临床的应用',
                titleEN: 'Clinical Application of Five Phases',
                content: '通过五行的生克乘侮关系，可以推断疾病的传变规律，并制定相应的治疗策略。如"见肝之病，知肝传脾，当先实脾"。',
                contentEN: 'Through the generating, restraining, overacting and insulting relationships of Five Phases, we can infer the pattern of disease transmission and formulate treatment strategies. For example: "When seeing Liver disease, know it will transmit to Spleen, so first strengthen the Spleen."',
                nishi: '治肝病，不要只盯着肝。你要看脾，看肾，看肺。五行是活的，病也是活的。你只看一个点，治不好病。要看到整个系统。',
                nishiEN: 'When treating Liver disease, don\'t just focus on the Liver. Look at the Spleen, the Kidney, the Lung. Five Phases are alive, and disease is alive. If you only look at one point, you can\'t cure it. See the entire system.'
            }
        ]
    }, {
        id: 2,
        name: '脏腑藏象',
        nameEN: 'Zang-Fu',
        chapters: [
            {
                title: '藏象学说概述',
                titleEN: 'Overview of Zang-Fu Theory',
                content: '藏象是中医关于人体内脏功能系统的理论。"藏"指五脏六腑，"象"指外在表现。藏象不是解剖学，而是功能系统模型。',
                contentEN: 'Zang-Fu is TCM theory on the functional systems of internal organs. "Zang" refers to the five Zang and six Fu organs, "Xiang" refers to external manifestations. Zang-Fu is not anatomy, but a functional system model.',
                nishi: '西医看的是"器"，中医看的是"气"。你解剖死人，看不到"气"，但活人有。所以藏象是活的，是动态的。',
                nishiEN: 'Western medicine looks at "structure", TCM looks at "Qi". When you dissect a dead body, you can\'t see "Qi", but the living have it. Zang-Fu is alive and dynamic.'
            },
            {
                title: '五脏：心',
                titleEN: 'Heart (Xin)',
                content: '心主血脉，主神明。心是血液运行的动力，也是精神意识活动的核心。心开窍于舌，其华在面。',
                contentEN: 'The Heart governs blood vessels and the mind. It is the motive force for blood circulation and the core of mental and conscious activities. The Heart opens into the tongue and its luster is on the face.',
                nishi: '心为君主之官。你看一个病人，舌头不灵活、说话不清，要想到心。脸色苍白无华，也是心的问题。心是"神"的房子，神住在心里。',
                nishiEN: 'The Heart is the monarch organ. A patient with a stiff tongue and unclear speech—think of the Heart. A pale, lusterless face—also a Heart issue. The Heart is the dwelling of "Shen" (spirit).'
            },
            {
                title: '五脏：肝',
                titleEN: 'Liver (Gan)',
                content: '肝主疏泄，主藏血。肝调节全身气机的畅通，储存血液，与情绪（尤其是怒）密切相关。肝开窍于目，其华在爪。',
                contentEN: 'The Liver governs free coursing and stores blood. It regulates the smooth flow of Qi throughout the body, stores blood, and is closely related to emotions (especially anger). The Liver opens into the eyes and its luster is on the nails.',
                nishi: '肝是"将军之官"。你看一个人，老是叹气、胸闷、爱发火，就是肝气郁结。肝不好的人，眼睛干涩、指甲脆，都是信号。',
                nishiEN: 'The Liver is the "general organ". A person who sighs frequently, has chest tightness, and is irritable—that\'s Liver Qi stagnation. Dry eyes and brittle nails are also signs of Liver issues.'
            },
            {
                title: '五脏：脾',
                titleEN: 'Spleen (Pi)',
                content: '脾主运化，主统血。脾负责消化吸收和运输营养，同时统摄血液在脉管内正常运行。脾开窍于口，其华在唇。',
                contentEN: 'The Spleen governs transportation and transformation, and controls blood. It is responsible for digestion, absorption, and transport of nutrients, and keeps blood within the vessels. The Spleen opens into the mouth and its luster is on the lips.',
                nishi: '脾为"后天之本"。一个人不管什么病，先看胃口。胃口好，病就好治；胃口不好，病就难治。为什么？脾是气血生化之源，脾不行，气血就不足。',
                nishiEN: 'The Spleen is the "root of acquired constitution." No matter what the disease, first check the appetite. If appetite is good, the disease is easy to treat; if not, it\'s difficult. Why? The Spleen is the source of Qi and blood production.'
            },
            {
                title: '五脏：肺与肾',
                titleEN: 'Lung and Kidney',
                content: '肺主气、司呼吸，主宣发肃降，通调水道。肾主藏精、主水、主纳气，是先天之本。肺为"相傅之官"，肾为"作强之官"。',
                contentEN: 'The Lung governs Qi, controls respiration, and regulates water channels. The Kidney stores essence, governs water, and receives Qi. The Lung is the "prime minister," the Kidney is the "organ of strength."',
                nishi: '肺主皮毛。看一个人皮肤好不好，就知道肺好不好。肾主骨，看一个人骨头硬不硬、腰好不好，就知道肾好不好。肺和肾还管呼吸的"一出一入"。',
                nishiEN: 'The Lung governs skin and body hair. A person\'s skin condition reflects Lung health. The Kidney governs bones—bone strength and lower back health reflect Kidney health. The Lung and Kidney also govern the "in and out" of breathing.'
            }
        ]
    }, {
        id: 3,
        name: '气血津液',
        nameEN: 'Qi, Blood & Fluids',
        chapters: [
            {
                title: '气的基本概念',
                titleEN: 'Basic Concept of Qi',
                content: '气是构成人体和维持生命活动的最基本物质。气是能量、是动力、是信息。气具有推动、温煦、防御、固摄、气化等功能。',
                contentEN: 'Qi is the most fundamental substance constituting the body and maintaining life activities. Qi is energy, motive force, and information. Qi has functions of promoting, warming, defending, containing, and transforming.',
                nishi: '气就是"能量"。你看一个人有没有力气，说话声音大不大，都是气的表现。气足的人，声音洪亮，手脚温暖；气虚的人，说话无力，手脚冰凉。',
                nishiEN: 'Qi is "energy." Whether a person has strength, whether their voice is loud—these are expressions of Qi. People with sufficient Qi have a strong voice and warm hands and feet; those with deficient Qi speak weakly and have cold extremities.'
            },
            {
                title: '血的生成与功能',
                titleEN: 'Production and Functions of Blood',
                content: '血是由水谷精微和营气化生而成，运行于脉管之中。血具有营养和滋润全身的功能，是精神活动的重要物质基础。',
                contentEN: 'Blood is generated from the essence of food and nutrients and Ying Qi, circulating within the vessels. Blood nourishes and moistens the entire body and is an important material basis for mental activities.',
                nishi: '血是"物质"，是看得见的营养。你看一个人脸色苍白、嘴唇白、指甲白，就是血虚。血虚的人，要补血，但光补血不行，还得补气。气能生血。',
                nishiEN: 'Blood is "substance"—visible nutrition. A pale face, pale lips, pale nails—that\'s Blood deficiency. For Blood deficiency, supplement Blood, but supplementing Blood alone isn\'t enough—also supplement Qi, because Qi generates Blood.'
            },
            {
                title: '津液与精',
                titleEN: 'Fluids and Essence',
                content: '津液是体内水液的总称，包括汗、泪、涎、涕、唾等。精是构成人体和维持生命活动的精微物质，有先天之精和后天之精之分。',
                contentEN: 'Fluids are the general term for body water, including sweat, tears, saliva, nasal discharge, and spittle. Essence is the refined substance constituting the body and maintaining life, divided into prenatal and postnatal essence.',
                nishi: '津液就是"水"。一个人口干、皮肤干、大便干，就是津液不足。精是"根"，是生命最根本的东西。你看老年人，精亏了，头发白、牙齿掉、骨头松。',
                nishiEN: 'Fluids are "water." Dry mouth, dry skin, dry stool—these indicate insufficient fluids. Essence is the "root," the most fundamental thing in life. Elderly people with essence depletion have white hair, tooth loss, and brittle bones.'
            },
            {
                title: '气血津液的关系',
                titleEN: 'Interrelationships',
                content: '气为血帅，血为气母。气能生血、行血、摄血；血能载气、养气。津液与气血相互化生，彼此依存，共同维持人体的生命活动。',
                contentEN: 'Qi is the commander of Blood, Blood is the mother of Qi. Qi generates, moves, and contains Blood; Blood carries and nourishes Qi. Fluids and Qi-Blood mutually generate and depend on each other, jointly maintaining life activities.',
                nishi: '气血津液是一个整体。你看一个病人，大汗淋漓（伤津），气也跟着虚了（气随汗脱）。所以治病要看到整体，不要只看到一个问题。',
                nishiEN: 'Qi, Blood, and Fluids are a whole. A patient with profuse sweating (fluid damage) also has Qi deficiency (Qi follows fluid loss). So when treating, see the whole picture, not just one issue.'
            }
        ]
    }, {
        id: 4,
        name: '经络总论',
        nameEN: 'Meridians',
        chapters: [
            {
                title: '经络的概念与组成',
                titleEN: 'Concept and Composition of Meridians',
                content: '经络是人体气血运行的通道，是联系脏腑、沟通内外、运行气血的通路系统。经络系统由经脉、络脉、经筋、皮部等组成。',
                contentEN: 'Meridians are the channels through which Qi and blood circulate in the body. They connect Zang-Fu organs, communicate interior and exterior, and transport Qi and blood. The meridian system consists of meridians, collaterals, sinews, and skin regions.',
                nishi: '经络不是"血管"，是"气的通道"。西医解剖看不到经络，因为它不是实体，是"能量通道"。就像你看到电线，但看不到电在流动。',
                nishiEN: 'Meridians are not "blood vessels," but "Qi channels." Western anatomy can\'t find meridians because they are not physical structures, but "energy channels." Like seeing wires but not seeing the electricity flowing through them.'
            },
            {
                title: '十二正经',
                titleEN: 'Twelve Regular Meridians',
                content: '十二正经是经络系统的主体，包括手三阴经、手三阳经、足三阳经、足三阴经。它们分别与五脏六腑相联，按一定顺序循环流注。',
                contentEN: 'The Twelve Regular Meridians are the main body of the meridian system, including three Yin meridians of the hand, three Yang meridians of the hand, three Yang meridians of the foot, and three Yin meridians of the foot. They connect to the five Zang and six Fu and circulate in a specific order.',
                nishi: '十二正经就像城市的十二条主干道。每条经都有自己的"值班时间"（流注时辰）。你掌握了这个，就知道了什么时间治什么病效果最好。',
                nishiEN: 'The Twelve Regular Meridians are like the twelve main roads of a city. Each meridian has its own "shift time" (circulation hour). Master this, and you\'ll know the best time to treat specific conditions.'
            },
            {
                title: '奇经八脉与经络流注',
                titleEN: 'Eight Extra Meridians and Circulation',
                content: '奇经八脉包括任脉、督脉、冲脉、带脉等，起调节和蓄溢正经气血的作用。经络之气按特定时辰依次流注于各条经脉，形成循环。',
                contentEN: 'The Eight Extra Meridians include the Ren, Du, Chong, and Dai meridians, regulating and storing Qi and blood of the regular meridians. Qi flows through the meridians in sequence according to specific hours, forming a cycle.',
                nishi: '任脉主"阴"，督脉主"阳"。任督通了，阴阳就通了。奇经八脉是"水库"，正经是"河流"。水库满了，河流才有水。',
                nishiEN: 'The Ren meridian governs "Yin," the Du meridian governs "Yang." When Ren and Du are open, Yin and Yang are in harmony. The Eight Extra Meridians are "reservoirs," the regular meridians are "rivers." Only when the reservoirs are full do the rivers have water.'
            },
            {
                title: '经络的功能与临床应用',
                titleEN: 'Functions and Clinical Application',
                content: '经络具有沟通联络、感应传导、运行气血、调节平衡等四大功能。针灸、推拿、导引等疗法都是通过调节经络来治疗疾病。',
                contentEN: 'Meridians have four major functions: communication and connection, sensing and transmission, transporting Qi and blood, and regulating balance. Acupuncture, massage, and Daoyin therapy all treat diseases by regulating meridians.',
                nishi: '经络通了，病就好了。不通，病就来了。你看一个人，哪里疼，就是哪里不通。针灸就是"疏通"——把堵的地方通开，气过去了，病就好了。',
                nishiEN: 'When meridians are open, disease is gone. When blocked, disease comes. Wherever it hurts, that\'s where it\'s blocked. Acupuncture is "dredging"—opening the blockage, letting Qi pass through, and the disease resolves.'
            }
        ]
    }, {
        id: 5,
        name: '病因病机',
        nameEN: 'Etiology',
        chapters: [
            {
                title: '外感六淫',
                titleEN: 'Six External Pathogens',
                content: '六淫是风、寒、暑、湿、燥、火六种外感病邪的总称。它们各自有不同的性质和致病特点，如风为百病之长，寒性凝滞，火性炎上。',
                contentEN: 'Six Pathogens are the collective term for Wind, Cold, Summerheat, Dampness, Dryness, and Fire. Each has distinct characteristics: Wind is the chief of all diseases, Cold is coagulating and stagnating, Fire is flaring upward.',
                nishi: '六淫是"天气"的病态。风，你看中风的人，口眼歪斜；寒，你看伤寒的人，浑身冷痛。湿，看水肿的人。每一种都有特点，学会分辨。',
                nishiEN: 'Six Pathogens are "weather" in a pathological state. Wind—stroke patients with facial deviation. Cold—cold strike patients with body pain and chills. Dampness—edema patients. Each has distinct signs—learn to distinguish them.'
            },
            {
                title: '内伤七情',
                titleEN: 'Seven Internal Emotions',
                content: '七情是喜、怒、忧、思、悲、恐、惊七种情志活动。正常情况下是生理反应，过度则成为致病因素，直接损伤相应脏腑。',
                contentEN: 'Seven Emotions are joy, anger, worry, thought, grief, fear, and shock. Normally they are physiological responses, but when excessive they become pathogenic factors, directly damaging the corresponding Zang organs.',
                nishi: '怒伤肝，喜伤心，思伤脾，忧伤肺，恐伤肾。你看一个病人，脾气特别大，就是肝有问题。太高兴了也不行，会"乐极生悲"，伤了心气。',
                nishiEN: 'Anger damages the Liver, joy damages the Heart, thought damages the Spleen, worry damages the Lung, fear damages the Kidney. A patient with a hot temper—that\'s a Liver issue. Too much joy is also harmful—it damages Heart Qi.'
            },
            {
                title: '饮食与劳逸',
                titleEN: 'Diet and Lifestyle',
                content: '饮食不节、过劳过逸也是重要的致病因素。过食肥甘厚味生痰湿，过饥过饱伤脾胃。劳则耗气，逸则气血运行不畅。',
                contentEN: 'Irregular diet, overwork, and excessive rest are also important pathogenic factors. Overeating rich and sweet foods generates phlegm-dampness. Hunger and overeating damage the Spleen and Stomach. Overwork depletes Qi; excessive rest causes Qi and blood stagnation.',
                nishi: '现在很多人都是吃出来的病，肥甘厚味吃太多，痰湿体质。还有很多人是"坐"出来的病，坐着不动，气血不通。饮食要节制，生活要动静结合。',
                nishiEN: 'Many modern diseases come from eating too much rich, sweet, and fatty food, creating phlegm-dampness constitution. Others come from "sitting too much"—lack of movement causes Qi and blood stagnation. Moderation in diet, balance in activity and rest.'
            },
            {
                title: '病机总论',
                titleEN: 'Overview of Pathogenesis',
                content: '病机是疾病发生、发展、变化的机制。核心病机包括正邪相争、阴阳失调、气血失常、脏腑功能紊乱等。审察病机是辨证论治的关键。',
                contentEN: 'Pathogenesis is the mechanism of disease occurrence, development, and change. Core pathogenic mechanisms include struggle between righteous and evil, Yin-Yang imbalance, Qi-blood disorder, and Zang-Fu dysfunction. Examining pathogenesis is key to pattern differentiation and treatment.',
                nishi: '病机就是"为什么病"。你看一个病人，不只是看"什么病"，要看"为什么会得这个病"。找到根，才能治好病。这就是"审证求因，审因论治"。',
                nishiEN: 'Pathogenesis is "why the disease." With a patient, don\'t just ask "what disease," ask "why this disease." Find the root, then you can cure it. This is "examining the pattern to find the cause, and treating based on the cause."'
            }
        ]
    }, {
        id: 6,
        name: '诊法原理',
        nameEN: 'Diagnosis',
        chapters: [
            {
                title: '望诊概要',
                titleEN: 'Inspection Overview',
                content: '望诊是医生通过视觉观察病人的神、色、形、态、舌象等，以判断病情的方法。望诊居四诊之首，所谓"望而知之谓之神"。',
                contentEN: 'Inspection is the method of observing the patient\'s spirit, complexion, body shape, posture, and tongue appearance to judge the condition. Inspection is first among the four examinations—"to know by seeing is called divine."',
                nishi: '望诊是最重要的。一个病人走进来，你一眼看过去，脸色、眼神、走路姿势，信息全有了。望诊要学会看"神"，有神则生，无神则危。',
                nishiEN: 'Inspection is most important. A patient walks in—you take one look at their complexion, eyes, gait—all the information is there. Learn to see "spirit"—with spirit there is life, without it there is danger.'
            },
            {
                title: '闻诊与问诊',
                titleEN: 'Listening and Inquiring',
                content: '闻诊包括听声音和嗅气味。问诊是医生通过询问病人和家属来了解病情的方法，包括十问歌。二者是望诊的重要补充。',
                contentEN: 'Listening includes hearing sounds and smelling odors. Inquiring is the method of learning about the condition by asking the patient and family, including the "Ten Questions." These are important supplements to inspection.',
                nishi: '闻：听病人说话声音大不大、呼吸顺畅不顺畅，闻有没有异味。问：要问寒热、问汗、问饮食、问二便。问得越细，诊断越准。',
                nishiEN: 'Listening: hear if the voice is strong or weak, if breathing is smooth, if there are unusual odors. Inquiring: ask about fever and chills, sweating, appetite, bowel movements. The more detailed the inquiry, the more accurate the diagnosis.'
            },
            {
                title: '切诊概要',
                titleEN: 'Palpation Overview',
                content: '切诊包括脉诊和按诊。脉诊是切按寸口脉，以了解脏腑气血盛衰。按诊是按压体表，了解局部温度、硬度、痛感等。',
                contentEN: 'Palpation includes pulse diagnosis and palpation of the body. Pulse diagnosis is feeling the radial artery to understand the condition of Zang-Fu and Qi-blood. Body palpation is pressing the body surface to feel temperature, hardness, pain, etc.',
                nishi: '脉诊是"号脉"。一个脉，你可以号出阴阳、寒热、虚实、表里。浮脉主表，沉脉主里；数脉主热，迟脉主寒。但记住：脉要"合"证，不能光看脉。',
                nishiEN: 'Pulse diagnosis is "taking the pulse." A pulse tells you Yin-Yang, Cold-Heat, Deficiency-Excess, and Interior-Exterior. Floating pulse indicates exterior, deep pulse indicates interior; rapid pulse indicates heat, slow pulse indicates cold. But remember: pulse must align with symptoms—don\'t rely on pulse alone.'
            },
            {
                title: '四诊合参',
                titleEN: 'Four Examinations Combined',
                content: '四诊合参是综合运用望、闻、问、切四种诊法，全面收集病情资料，综合分析判断。四诊各有优势，缺一不可。',
                contentEN: 'Four Examinations Combined means using inspection, listening, inquiring, and palpation together to comprehensively gather information and make an integrated analysis. Each method has unique advantages—none can be omitted.',
                nishi: '四诊合参就是"全面看问题"。你不能只看脉，不看舌；也不能只看舌，不看脸色。要把所有信息综合起来，才能得出正确的诊断。这就是中医的整体观。',
                nishiEN: 'Four Examinations Combined means "seeing the whole picture." Don\'t just look at the pulse, not the tongue; don\'t just look at the tongue, not the complexion. Integrate all information to reach the correct diagnosis. This is TCM\'s holistic view.'
            }
        ]
    }, {
        id: 7,
        name: '治则治法',
        nameEN: 'Treatment Principles',
        chapters: [
            {
                title: '治病求本',
                titleEN: 'Treat the Root',
                content: '治病求本是中医治疗的总原则。"本"是疾病的本质和根源。标和本是相对概念，急则治其标，缓则治其本。',
                contentEN: 'Treat the root is the overall principle of TCM treatment. "Root" is the essence and origin of the disease. Branch and root are relative concepts—in emergencies treat the branch, otherwise treat the root.',
                nishi: '什么叫"求本"？就是找到病因。头痛，不一定是头的问题，可能是肝的问题、肾的问题。你找到病根在哪，才能真正治好病。',
                nishiEN: 'What is "seeking the root"? Finding the cause. Headache isn\'t necessarily a head problem—it could be a Liver issue, a Kidney issue. Find where the root is, then you can truly cure the disease.'
            },
            {
                title: '扶正祛邪',
                titleEN: 'Support Upright, Dispel Evil',
                content: '扶正即扶助正气，增强抗病能力；祛邪即祛除病邪，消除致病因素。二者相辅相成，根据病情缓急灵活运用。',
                contentEN: 'Supporting upright means strengthening righteous Qi and enhancing disease resistance. Dispel evil means eliminating pathogenic factors. The two complement each other and are applied flexibly according to the urgency of the condition.',
                nishi: '扶正就是"养"，祛邪就是"攻"。体质虚的人，先扶正再祛邪；体质实的人，可以直接祛邪。但大多数时候，要"攻补兼施"。',
                nishiEN: 'Supporting upright is "nourishing," dispelling evil is "attacking." For those with weak constitution, support upright first then dispel evil; for those with strong constitution, directly dispel evil. But most of the time, combine attack and supplement.'
            },
            {
                title: '调和阴阳',
                titleEN: 'Harmonize Yin-Yang',
                content: '调和阴阳是中医治疗的核心。以偏纠偏，损有余而补不足。具体方法包括温阳、滋阴、阴阳双补、交通心肾等。',
                contentEN: 'Harmonizing Yin-Yang is the core of TCM treatment. Correct deviation, reduce excess and supplement deficiency. Specific methods include warming Yang, nourishing Yin, supplementing both Yin and Yang, and communicating Heart and Kidney.',
                nishi: '所有的病，归根结底都是阴阳失调。你治好一个病，就是让阴阳重新恢复平衡。调阴阳不是"平均"，是"动态平衡"。',
                nishiEN: 'All diseases are ultimately Yin-Yang imbalance. Curing a disease means restoring Yin-Yang balance. Harmonizing Yin-Yang is not "equalizing," it\'s "dynamic balance."'
            },
            {
                title: '三因制宜与预防',
                titleEN: 'Three Adaptations and Prevention',
                content: '三因制宜是根据因时、因地、因人制定治疗方案。预防包括治未病、既病防变、愈后防复。上工治未病，强调预防为主的理念。',
                contentEN: 'Three Adaptations means tailoring treatment to time, place, and individual. Prevention includes treating before disease, preventing disease progression, and preventing recurrence after recovery. Superior doctors treat before disease arises, emphasizing prevention first.',
                nishi: '上工治未病——高明的医生在病还没发生的时候就治了。你看一个人有生病的苗头，就要提前干预。不要等病成型了再治，那就晚了。',
                nishiEN: 'Superior doctors treat before disease arises—wise doctors intervene when signs of illness first appear. Don\'t wait until the disease is fully formed—that\'s too late.'
            }
        ]
    }];

    var currentMountain = 0;
    var completedMountains = MOUNTAINS.map(function(m) {
        return m.chapters.map(function() { return false; });
    });

    var mountainStrip = document.getElementById('mountainStrip');
    var mountainContent = document.getElementById('mountainContent');
    var globalFill = document.getElementById('globalFill');
    var globalText = document.getElementById('globalText');
    var globalEN = document.getElementById('globalEN');

    var STAR_SVG = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="1.2"/><circle cx="20" cy="6" r="1"/><circle cx="6" cy="20" r="1.4"/><circle cx="18" cy="18" r="1"/><circle cx="12" cy="3" r="0.8"/><circle cx="12" cy="21" r="0.8"/><line x1="4" y1="4" x2="12" y2="3"/><line x1="12" y1="3" x2="20" y2="6"/><line x1="4" y1="4" x2="6" y2="20"/><line x1="6" y1="20" x2="12" y2="21"/><line x1="12" y1="21" x2="18" y2="18"/><line x1="20" y1="6" x2="18" y2="18"/><line x1="4" y1="4" x2="18" y2="18" stroke-dasharray="2 3" opacity="0.4"/><line x1="6" y1="20" x2="20" y2="6" stroke-dasharray="2 3" opacity="0.4"/></svg>';

    function getTotalChapters() {
        var total = 0;
        MOUNTAINS.forEach(function(m) { total += m.chapters.length; });
        return total;
    }

    function getCompletedChapters() {
        var done = 0;
        completedMountains.forEach(function(m) {
            m.forEach(function(ch) { if (ch) done++; });
        });
        return done;
    }

    function getMountainProgress(mountainId) {
        var chapters = MOUNTAINS[mountainId].chapters;
        var done = completedMountains[mountainId].filter(Boolean).length;
        return { done: done, total: chapters.length, pct: Math.round((done / chapters.length) * 100) };
    }

    function isMountainComplete(mountainId) {
        return completedMountains[mountainId].every(Boolean);
    }

    function getGlobalProgress() {
        var total = getTotalChapters();
        var done = getCompletedChapters();
        return { done: done, total: total, pct: Math.round((done / total) * 100) };
    }

    function renderMountainStrip() {
        var html = '';
        MOUNTAINS.forEach(function(m, idx) {
            var complete = isMountainComplete(idx);
            var prog = getMountainProgress(idx);
            var active = idx === currentMountain ? 'active' : '';
            var done = complete ? 'done' : '';
            var label = complete ? ' ⛰' : (prog.done > 0 ? ' ' + prog.done + '/' + prog.total : '');
            html += '<button class="mountain-tab ' + active + ' ' + done + '" data-index="' + idx + '">' + (idx+1) + '. ' + m.name + label + '</button>';
        });
        mountainStrip.innerHTML = html;

        mountainStrip.querySelectorAll('.mountain-tab').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var idx = parseInt(this.dataset.index);
                switchMountain(idx);
            });
        });
    }

    function renderMountainContent() {
        var m = MOUNTAINS[currentMountain];
        var prog = getMountainProgress(currentMountain);
        var complete = isMountainComplete(currentMountain);

        var html = '';

        html += '<div class="mountain-header"><h2>' + (currentMountain+1) + '. ' + m.name + '</h2><span class="sub">' + m.nameEN + '</span><span class="status">' + prog.done + '/' + prog.total + (complete ? ' ⛰' : '') + '</span></div>';

        html += '<div class="mountain-progress"><div class="track"><div class="fill" style="width:' + prog.pct + '%;"></div></div><div class="label"><span>' + prog.done + ' / ' + prog.total + ' 章 · ' + prog.pct + '%</span><span class="en">' + prog.done + ' of ' + prog.total + ' chapters</span></div></div>';

        html += '<div class="chapter-nav" id="chapterNav">';
        m.chapters.forEach(function(ch, idx) {
            var done = completedMountains[currentMountain][idx];
            var active = idx === 0 ? 'active' : '';
            var cls = done ? 'done' : '';
            html += '<button class="chapter-dot ' + active + ' ' + cls + '" data-index="' + idx + '">' + (done ? '⛰' : (idx+1)) + '</button>';
        });
        html += '</div>';

        var currentChapter = 0;
        var ch = m.chapters[currentChapter];
        var isDone = completedMountains[currentMountain][currentChapter];

        html += '<div id="chapterContent"><div class="content-card"><div class="label">第 ' + (currentChapter+1) + ' 章 · Chapter ' + (currentChapter+1) + (isDone ? ' ⛰' : '') + '</div><h3>' + ch.title + '<span class="en">' + ch.titleEN + '</span></h3><p>' + ch.content + '<span class="en">' + ch.contentEN + '</span></p></div><div class="nishi-tip"><div class="label"><span class="star-line-icon">' + STAR_SVG + '</span>倪师心法 · Ni\'s Insight</div><p>' + ch.nishi + '<span class="en">' + ch.nishiEN + '</span></p></div>' + (isDone ? '<div class="chapter-done-label">⛰ 已登顶 · Summited</div>' : '') + '</div>';

        html += '<div class="action-row"><button class="btn btn-secondary" id="resetMountainBtn">重置此山 · Reset</button><button class="btn btn-primary" id="completeChapterBtn">标记登顶 · Summit →</button></div><div class="feedback" id="feedback">阅读完当前章节后，点击「标记登顶」<span class="en">Read the chapter, then tap "Summit"</span></div>';

        mountainContent.innerHTML = html;

        document.querySelectorAll('#chapterNav .chapter-dot').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var idx = parseInt(this.dataset.index);
                switchChapter(idx);
            });
        });

        document.getElementById('completeChapterBtn').addEventListener('click', markCurrentChapterComplete);
        document.getElementById('resetMountainBtn').addEventListener('click', resetCurrentMountain);

        mountainContent.dataset.currentChapter = currentChapter;
    }

    function updateGlobalProgress() {
        var prog = getGlobalProgress();
        globalFill.style.width = prog.pct + '%';
        globalText.textContent = '总进度 · ' + prog.pct + '% · ' + prog.done + '/' + prog.total;
        globalEN.textContent = 'Overall progress';
    }

    function switchChapter(index) {
        var m = MOUNTAINS[currentMountain];
        var ch = m.chapters[index];
        var isDone = completedMountains[currentMountain][index];

        document.querySelectorAll('#chapterNav .chapter-dot').forEach(function(btn, i) {
            btn.classList.remove('active');
            if (i === index) btn.classList.add('active');
        });

        var container = document.getElementById('chapterContent');
        var html = '<div class="content-card"><div class="label">第 ' + (index+1) + ' 章 · Chapter ' + (index+1) + (isDone ? ' ⛰' : '') + '</div><h3>' + ch.title + '<span class="en">' + ch.titleEN + '</span></h3><p>' + ch.content + '<span class="en">' + ch.contentEN + '</span></p></div><div class="nishi-tip"><div class="label"><span class="star-line-icon">' + STAR_SVG + '</span>倪师心法 · Ni\'s Insight</div><p>' + ch.nishi + '<span class="en">' + ch.nishiEN + '</span></p></div>' + (isDone ? '<div class="chapter-done-label">⛰ 已登顶 · Summited</div>' : '');
        container.innerHTML = html;

        var feedback = document.getElementById('feedback');
        feedback.innerHTML = '📖 第 ' + (index+1) + ' 章 · Chapter ' + (index+1) + '<span class="en">Switched to chapter ' + (index+1) + '</span>';

        mountainContent.dataset.currentChapter = index;
    }

    function switchMountain(index) {
        currentMountain = index;
        renderMountainStrip();
        renderMountainContent();
        updateGlobalProgress();
    }

    function markCurrentChapterComplete() {
        var chapterIdx = parseInt(mountainContent.dataset.currentChapter || 0);
        if (completedMountains[currentMountain][chapterIdx]) {
            var feedback = document.getElementById('feedback');
            feedback.innerHTML = '⏳ 本章已登顶 <span class="en">This chapter is already summited</span>';
            return;
        }

        completedMountains[currentMountain][chapterIdx] = true;

        renderMountainContent();

        var m = MOUNTAINS[currentMountain];
        var next = chapterIdx + 1;
        while (next < m.chapters.length && completedMountains[currentMountain][next]) next++;

        var feedback = document.getElementById('feedback');
        if (next < m.chapters.length) {
            mountainContent.dataset.currentChapter = next;
            switchChapter(next);
            feedback.innerHTML = '⛰ 已登顶 · 继续向上 <span class="en">Summited · Moving up</span>';
        } else {
            mountainContent.dataset.currentChapter = chapterIdx;
            feedback.innerHTML = '🏔 此山登顶成功！<span class="en">Mountain summited!</span>';
        }

        updateGlobalProgress();
        renderMountainStrip();
    }

    function resetCurrentMountain() {
        var m = MOUNTAINS[currentMountain];
        completedMountains[currentMountain] = m.chapters.map(function() { return false; });
        renderMountainContent();
        mountainContent.dataset.currentChapter = 0;
        var feedback = document.getElementById('feedback');
        feedback.innerHTML = '↺ 已重置 · 从山脚重新开始 <span class="en">Reset · Start from the base</span>';
        updateGlobalProgress();
        renderMountainStrip();
    }

    var entryPage = document.getElementById('entryPage');
    var learningPage = document.getElementById('learningPage');
    var enterBtn = document.getElementById('enterBtn');
    var backBtn = document.getElementById('backBtn');

    enterBtn.addEventListener('click', function() {
        entryPage.style.display = 'none';
        learningPage.style.display = 'block';
        renderMountainStrip();
        renderMountainContent();
        updateGlobalProgress();
    });

    backBtn.addEventListener('click', function() {
        learningPage.style.display = 'none';
        entryPage.style.display = 'flex';
    });

    renderMountainStrip();
    renderMountainContent();
    updateGlobalProgress();

    entryPage.style.display = 'flex';
    learningPage.style.display = 'none';

})();