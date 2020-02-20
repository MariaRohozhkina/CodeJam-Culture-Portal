const photographersData = [
	{
    id: 0,
    surname: 'Anempodistov',
		dataRU: {
			name: 'Анемподистов Михаил Владимирович',
      years: '16 марта 1964 - 24 января 2018',
      birthCity: 'Минск',
			mapCity: 'Минск',
			summary: 'белорусский художник, дизайнер, поэт, культуролог, искусствовед, фотограф',
			info: 'Работал в жанрах прикладной графики, иллюстрации, плаката, фотографии: начинал с плаката, после заинтересовался графикой, а позже и фотографией. Участвовал в коллективных и персональных выставках в Беларуси и за рубежом.',
			timeline: [
				{
					date: '1979—1983',
					fact: 'Минское художественное училище (ныне — Минский государственный художественный колледж имени А. К. Глебова)'
				},
				{
					date: '1989-1994',
					fact: 'Работал художественным редактором в белорусском журнале «Березка»'
				},
				{
					date: '1997',
					fact: 'Вступил в Белорусский союз дизайнеров'
				},
				{
					date: '2011',
					fact: 'Стал членом правления Белорусского союза дизайнеров'
				},
				{
					date: '2011',
					fact: 'Дебютировал как фотограф, презентовав фотовыставку «Under Ground»'
				}
			],
			works: [
				'В 2011 дебютировал в качестве фотографа с фотовыставкой «Under Ground»: в фотографиях сосредоточился на белорусских овощах, чтобы таким способом открыть более глубокое измерение белорусской культуры. Выбор своей тематики объяснил тем, что белорусы, как овощи, скрывают интересные вещи в себе, не показывают их вовне — нация заглубленных в себя людей: выглядят обычно, а внутри фантастические — под испачканной (от почвы) кожурой картофеля спрятано «золотое солнце».'
			]
		},
		dataBE: {
			name: 'Анемпадыстаў Міхаіл Уладзіміравіч',
			years: '16 сакавіка 1964 - 24 студзеня 2018',
			birthCity: 'Мінск',
			mapCity: 'Мінск',
			summary: 'беларускі мастак, дызайнер, паэт, культуролаг, мастацтвазнавец, фатограф',
			info: 'Працаваў ў жанрах ужытковай графікі, ілюстрацыі, плаката, фатаграфіі: пачынаў з плаката, пасля зацікавіўся графікай, а пазней і фатаграфіяй. Удзельнічаў у калектыўных і персанальных выстаўках у Беларусі і за мяжой.',
			timeline: [
				{
					date: '1979—1983',
					fact: 'Мінскае мастацкае вучылішча (цяпер — Мінскі дзяржаўны мастацкі каледж імя А. К. Глебава)'
				},
				{
					date: '1989-1994',
					fact: 'Працаваў мастацкім рэдактарам у беларускім часопісе «Бярозка»'
				},
				{
					date: '1997',
					fact: 'Уступіў у Беларускі саюз дызайнераў'
				},
				{
					date: '2011',
					fact: 'Стаў членам праўлення Беларускага саюза дызайнераў'
				},
				{
					date: '2011',
					fact: 'Дэбютаваў як фатограф, прэзентаваўшы фотавыстаўку «Under Ground»'
				}
			],
			works: [
				'У 2011 г. дэбютаваў як фатограф, прэзентаваўшы фотавыстаўку «Under Ground»: у фотапрацах засяродзіўся на беларускай гародніны, каб такім спосабам адкрыць глыбейшае вымярэнне беларускай культуры. Выбар сваёй тэматыкі патлумачыў тым, што беларусы, на думку Анемпадыстава, як гародніна, хаваюць цікавыя рэчы ў сабе, не паказваюць іх навонкі — нацыя заглыбленых у сябе людзей: выглядаюць звычайна, а ўнутры фантастычныя — пад запэцканай (ад глебы) кажурой бульбы схавана «залатое сонца».'
			]
		},
		dataEN: {
			name: 'Anempodistov Mikhail Vladimirovich',
			years: 'March 16, 1964 - January 24, 2018',
			birthCity: 'Minsk',
			mapCity: 'Minsk',
			summary: 'Belarusian artist, designer, poet, culturologist, art critic, photographer',
			info: 'Mikhail worked in the genres of applied graphics, illustration, poster, and photography: he started with a poster, then became interested in graphics, and later in photography. Participated in collective and personal exhibitions in Belarus and abroad.',
			timeline: [
				{
					date: '1979—1983',
					fact: 'Minsk art school (now - Minsk State Art College named after A. K. Glebov)'
				},
				{
					date: '1989-1994',
					fact: 'Worked as an art editor in the Belarusian magazine «Berezka»'
				},
				{
					date: '1997',
					fact: 'Joined the Belarusian Union of designers'
				},
				{
					date: '2011',
					fact: 'Became a member of the Board of the Belarusian Union of designers'
				},
				{
					date: '2011',
					fact: 'Debuted as a photographer, presenting the photo exhibition «Under Ground»'
				}
			],
			works: [
				'In 2011, he made his debut as a photographer with the photo exhibition "Under Ground": he focused on Belarusian vegetables in order to open a deeper dimension of Belarusian culture in this way. He explained the choice of his theme by the fact that Belarusians, like vegetables, hide interesting things in themselves, do not show them outside — a nation of people buried in themselves: they look normal, but inside they are fantastic — the "Golden sun" is hidden under the dirty (because of the soil) peel of potatoes».'
			]
		},
		photo: 'https://www.velvet.by/files/userfiles/309/maxresdefault_43.jpg',
		photogallery: [
			'https://www.velvet.by/files/userfiles/309/velvet_2_624.jpg',
			'https://www.velvet.by/files/resize/userfiles/309/velvet_3_575-640x427.jpg',
			'https://www.velvet.by/files/userfiles/309/velvet_4_515-thumb.jpg',
			'https://www.velvet.by/files/userfiles/309/velvet_5_512-thumb.jpg',
			'https://www.velvet.by/files/resize/userfiles/309/velvet_6_458-640x427.jpg',
			'https://www.velvet.by/files/userfiles/309/velvet_9_338-thumb.jpg',
			'https://www.velvet.by/files/resize/userfiles/309/velvet_11_280-640x427.jpg',
			'https://www.velvet.by/files/userfiles/309/velvet_12_239-thumb.jpg'
		],
		video: 'https://www.youtube.com/watch?v=TGYfUypAjeE'
	},
	{
    id: 1,
    surname: 'Bazan',
		dataRU: {
			name: 'Владимир Сергеевич Базан',
			years: 'род. 21 октября 1953',
			birthCity: 'Унеча',
			mapCity: 'Витебск',
			summary: 'белорусский фотограф, фотожурналист',
			info: 'Фотографиям Владимира Базана присущи использование оригинальных приемов композиции, тщательный отбор натурного материала, высокий профессионализм технического исполнения. Центральное место в творчестве занимает репортажная, публицистическая, жанровая фотография.',
			timeline: [
				{
					date: '1978',
					fact: 'Окончил художественно-графический факультет Витебского педагогического института'
				},
				{
					date: '1980-1990',
					fact: 'Работал фотографом, корреспондентом, ответственным секретарем в витебской многотиражной газете «Строитель»'
				},
				{
					date: '1990-2007',
					fact: 'Главный редактор, дизайнер и фотокорреспондент газеты «Витебский курьер»'
				},
				{
					date: '1991',
					fact: 'Главный редактор специального номера газеты, посвященного Первым Шагаловского дням в Витебске'
				},
				{
					date: 'Сер. 80-х',
					fact: 'Возглавлял витебский фотоклуб «Витьба».'
				}
			],
			works: [
				'Среди основных работ: серии «Думай, парень!» (1982-2005), «Праздник в православной церкви» (1988), «Армения. Декабрь. 1988», «Пионерский лагерь» (1989), «Приметы»(1989), «Чернобыльский натюрморт»(1996), «Париж! Париж! Я не хочу домой!» (2001-2007).',
				'Владимир является автором фотоальбомов «Витебск» (2004, 2006), «Нинбург» (2007), «Витебск» совместно с А. Глебовым (2007), а также книги «Марк Шагал и Витебск» с Л. Хмельницкой и А. Вышка (2007).'
			]
		},
		dataBE: {
			name: 'Уладзімір Сяргеевіч Базан',
			years: 'нар. 21 кастрычніка 1953',
			birthCity: 'Унеча',
			mapCity: 'Віцебск',
			summary: 'беларускі фотамастак, фотажурналіст',
			info: 'Фатаграфіям У. Базана ўласцівыя выкарыстанне арыгінальных прыёмаў кампазіцыі, старанны адбор натурнага матэрыялу, высокі прафесіяналізм тэхнічнага выканання. Цэнтральнае месца ў творчасці займае рэпартажная, публіцыстычная, жанравая фатаграфія.',
			timeline: [
				{
					date: '1978',
					fact: 'Скончыў мастацка-графічны факультэт Віцебскага педагагічнага інстытута'
				},
				{
					date: '1980—1990',
					fact: 'Працаваў фатографам, карэспандэнтам, адказным сакратаром у віцебскай шматтыражнай газеце «Строитель»'
				},
				{
					date: '1990—2007',
					fact: 'Галоўны рэдактар, дызайнер і фотакарэспандэнт газеты «Витебский курьер»'
				},
				{
					date: '1991',
					fact: 'Галоўны рэдактар спецыяльнага нумара газеты, прысвечанага Першым Шагалаўскім дням у Віцебску'
				},
				{
					date: 'Сяр. 80-х',
					fact: 'Узначальваў віцебскі фотаклуб «Віцьба».'
				}
			],
			works: [
				'Сярод асноўных работ: серыі «Думай, хлопец!» (1982—2005), «Свята ў праваслаўнай царкве» (1988), «Арменія. Снежань. 1988», «Піянерскі лагер» (1989), «Прыкметы» (1989), «Чарнобыльскі нацюрморт» (1996), «Парыж! Парыж! Я не хачу дадому!» (2001—2007).',
				'Аўтар фотаальбомаў «Віцебск» (2004, 2006), «Нінбург» (2007), «Віцебск» сумесна з А. Глебавым (2007), а таксама кнігі «Марк Шагал і Віцебск» з Л. Хмяльніцкай і А. Вышкам (2007).'
			]
		},
		dataEN: {
			name: 'Vladimir Bazan',
			years: 'born 21 October 1953',
			birthCity: 'Unecha',
			mapCity: 'Vitebsk',
			summary: 'Belarusian photographer, photojournalist',
			info: 'The photographs of Vladimir Bazan are characterized by the use of original compositional techniques, careful selection of nature material, and high professionalism of technical performance. He is mainly focused on reportage, journalistic, genre photography.',
			timeline: [
				{
					date: '1978',
					fact: 'Graduated from Vitebsk State University, Faculty of Art and Graphics'
				},
				{
					date: '1980-1990',
					fact: 'Photographer, correspondent, executive secretary of Vitebsk large newspaper «Stroitel»'
				},
				{
					date: '1990-2007',
					fact: 'Chief editor, designer and photojournalist at the «Vitebsky courier» newspaper'
				},
				{
					date: '1991',
					fact: 'Chief editor of a special issue of the newspaper dedicated to the First Shagalovsky days in Vitebsk'
				},
				{
					date: 'Mid-80s',
					fact: 'Headed the Vitebsk photo club "Vitba"'
				}
			],
			works: [
				'Among the main works: the series "Think, man!"(1982-2005), "Holiday in the Orthodox Church" (1988), "Armenia. December. 1988", "Pioneer camp" (1989), "Omens"(1989), "Chernobyl still life" (1996), "Paris! Paris! I do not want to go home!" (2001-2007).',
				'Vladimir is the author of photo albums "Vitebsk" (2004, 2006), "Ninburg" (2007), "Vitebsk" together with A. Glebov (2007), as well as the book "Mark Chagall and Vitebsk" with L. Khmelnitskaya and A. Vyshka (2007).'
			]
		},
		photo: 'https://parizhsk.fr/wp-content/uploads/2017/02/vladimir-bazan-2011.jpg',
		photogallery: [
			'http://www.photoline.ru/critic/picpart/1226/1226601635.jpg',
			'http://www.photoline.ru/critic/picpart/1230/1230276553.jpg',
			'http://www.photoline.ru/critic/picpart/1222/1222859853.jpg',
			'http://www.photoline.ru/critic/picpart/1219/1219580089.jpg',
			'http://www.photoline.ru/critic/picpart/1212/1212226257.jpg',
			'http://www.photoline.ru/critic/picpart/1225/1225100564.jpg',
			'http://www.photoline.ru/critic/picpart/1223/1223664377.jpg'
		],
		video: 'https://www.youtube.com/watch?v=2S5ggpopE5Y'
	},
	{
    id: 2,
    surname: 'Bulgak',
		dataRU: {
			name: 'Ян Бу́лгак',
			years: '6 октября 1876 - 4 февраля 1950',
			birthCity: 'Осташин',
			mapCity: 'Вильнюс',
			summary: 'белорусский и польский фотограф и фотохудожник, «отец польской фотографии», один из пионеров польской художественной фотографии',
			info: 'Его творчество считается частью совместного культурного наследия Беларуси, Литвы и Польши. Принял участие в более чем 170 международных выставках, удостаивался высоких наград. Известность получил благодаря импрессионистским фотографиям Вильны (Вильнюса) и окрестностей, других литовских местностей. Фотографии Булгака, передающие саму ауру Старого города и окружающего ландшафта, относят к произведениям «несравненной художественной ценности».',
			timeline: [
				{
					date: '1897',
					fact: 'Окончил классическую гимназию в Вильне'
				},
				{
					date: '1897—1899',
					fact: 'Изучал философию в Ягеллонском университете в Кракове, но нехватка средств заставила бросить учебу'
				},
				{
					date: '1911',
					fact: 'Познакомился с Фердинандом Рущицем. Заинтересовался фотографией. Прошел практику в Германии у известного дрезденского портретиста Хуго Эрфурта'
				},
				{
					date: '1911',
					fact: 'Виленский городской магистрат создал должность городского фотографа и пригласил на нее Яна Булгака'
				},
				{
					date: '1912',
					fact: 'Открыл фотоателье в Вильне'
				},
				{
					date: '1912—1915',
					fact: 'По заказу магистрата фотографировал памятники архитектуры города'
				},
				{
					date: '1919-1939',
					fact: 'Преподавал художественную фотографию на отделении изящных искусств Университета Стефана Батория; доцент (1939)'
				},
				{
					date: '1919',
					fact: 'Стал одним из основателей и председателем Виленского фотоклуба (в других источниках утверждается, что основал фотоклуб и руководил им с 1927 года); руководил им до начала Второй мировой войны'
				},
				{
					date: '1929-1930',
					fact: 'Был одним из учредителей Польского фотоклуба'
				},
				{
					date: '1935—1939',
					fact: 'Был одним из редакторов журналов «Przegląd Fotograficzny», «Fotograf Polski»'
				},
				{
					date: '1944',
					fact: 'Произошел пожар в фотоателье, большая часть фототеки и коллекции его снимков (около 30 тысяч негативов) сгорела'
				},
				{
					date: '1945',
					fact: 'Переехал в Варшаву. Выполнил около тысячи фотографий разрушенной и восстанавливавшейся Варшавы, около 2 тысяч фотографий западных земель, присоединённых к Польше'
				},
				{
					date: '1947',
					fact: 'Стал учредителем Союза фотохудожников Польши и руководил им до своей смерти'
				}
			],
			works: [
				'Написал ряд книг по технике и искусству фотографии, воспоминания о Фердинанде Рущице (1939), а также стихотворения и новеллы.',
				'Выпустил серию альбомов «Wędrówki fotografa» (I—IX, 1931—1936).',
				'Фотографиями Булгака иллюстрирован путеводитель по городу Юлиуша Клоса, книга о Вильно Ежи Ремера и другие издания.',
				'В 1935 году издал книгу про свое путешествие из Вильно на озеро Нарочь с 38 фотоснимками.'
			]
		},
		dataBE: {
			name: 'Ян Булгак',
			years: '6 кастрычніка 1876 - 4 лютага 1950',
			birthCity: 'Асташын',
			mapCity: 'Вільнюс',
			summary: 'віленскі майстар мастацкай краязнаўчай фатаграфіі, «бацька польскай фатаграфіі», адзін з піянераў польскай мастацкай фатаграфіі, этнограф, фалькларыст',
			info: 'Яго творчасць лічыцца часткай супольнай культурнай спадчыны Беларусі, Літвы і Польшчы. Прыняў удзел у больш чым 170 міжнародных выставах, ганараваўся высокіх узнагарод. Вядомасць атрымаў дзякуючы імпрэсіянісцкім фатаграфіям Вільні (Вільнюс) і ваколіц, іншых літоўскіх мясцовасцяў. Фатаграфіі Булгака, якія перадаюць саму аўру Старога горада і навакольнага ландшафту, адносяць да твораў «непараўнальнай мастацкай каштоўнасці».',
			timeline: [
				{
					date: '1897',
					fact: 'Скончыў класічную гімназію ў Вільні'
				},
				{
					date: '1897—1899',
					fact: 'Паступіў на факультэт філасофіі Ягелонскага ўніверсітэта ў Кракаве. Але абмежаванасць сродкаў прымусіла праз два гады пакінуць вучобу'
				},
				{
					date: '1911',
					fact: 'Пазнаёміўся з Фердынандам Рушчыцам. Зацікавіўся фатаграфіяй. Прайшоў практыку ў Германіі ў вядомага дрэздэнскага партрэтыста Хуга Эрфурта'
				},
				{
					date: '1911',
					fact: 'Віленскі гарадскі магістрат стварыў пасаду гарадскога фатографа, на якую запрасіў Яна Булгака'
				},
				{
					date: '1912',
					fact: 'Адчыніў фотаатэлье ў Вільні'
				},
				{
					date: '1912—1915',
					fact: 'Па замове магістрата фатаграфаваў помнікі архітэктуры горада'
				},
				{
					date: '1919-1939',
					fact: 'Выкладаў мастацкую фатаграфію на аддзяленні прыгожых мастацтваў Універсітэта Стэфана Баторыя; дацэнт (1939)'
				},
				{
					date: '1919',
					fact: 'Стаў адным з заснавальнікаў і старшынёй Віленскага фотаклуба (у іншых крыніцах сцвярджаецца, што заснаваў фотаклуб і кіраваў ім з 1927 года); кіраваў ім да пачатку Другой сусветнай вайны'
				},
				{
					date: '1929-1930',
					fact: 'Быў адным з заснавальнікаў Польскага фотаклуба'
				},
				{
					date: '1935—1939',
					fact: 'Быў адным з рэдактараў часопісаў «Przegląd Fotograficzny», «Fotograf Polski»'
				},
				{
					date: '1944',
					fact: 'Адбыўся пажар у фотаатэлье, вялікая частка фотатэкі і калекцыі яго здымкаў (каля 30 тысяч негатываў) згарэла'
				},
				{
					date: '1945',
					fact: 'Пераехаў у Варшаву. Выканаў каля тысячы фатаграфій разбуранай і аднаўляльнай Варшавы, каля 2 тысяч фатаграфій заходніх зямель, далучаных да Польшчы'
				},
				{
					date: '1947',
					fact: 'Стаў заснавальнікам Саюза фотамастакоў Польшчы і кіраваў ім да сваёй смерці'
				}
			],
			works: [
				'Напісаў шэраг кніг па тэхніцы і мастацтву фатаграфіі, успаміны пра Фердынанда Рошчыца (1939), а таксама вершы і навелы.',
				'Выпусціў серыю альбомаў "Wędrówki fotografa" (i-IX, 1931-1936).',
				'Фатаграфіямі Булгака ілюстраваны даведнік па горадзе Юліуша Клоса, кніга пра Вільна Ежы Ремера і іншыя выданні.',
				'У 1935 годзе выдаў кнігу пра сваё падарожжа з Вільні на возера Нарач з 38 фотаздымкамі.'
			]
		},
		dataEN: {
			name: 'Jan Bułhak',
			years: 'October 6, 1876 - February 4, 1950',
			birthCity: 'Ostashin',
			mapCity: 'Vilnius',
			summary: 'Belarusian and Polish photographer and photo artist, «father of Polish photography», one of the pioneers of Polish art photography',
			info: 'His work is considered part of the joint cultural heritage of Belarus, Lithuania and Poland. He took part in more than 170 international exhibitions, received high awards. He became famous for his impressionist photographs of Wilno (Vilnius) and its surroundings, other Lithuanian areas. His photographs that convey the very aura of the Old City and the surrounding landscape are referred to as works of «incomparable artistic value.»',
			timeline: [
				{
					date: '1897',
					fact: 'Graduated from the classical gymnasium in Wilno'
				},
				{
					date: '1897—1899',
					fact: 'Studied philosophy at the Jagiellonian University in Krakow, but did not graduate because of lack of money'
				},
				{
					date: '1911',
					fact: 'Met Ferdynand Ruszczyc. Became interested in photography. Studied photography in Dresden, Germany, where he received some practical tutoring from the German portrait-painter Hugo Erfurth'
				},
				{
					date: '1911',
					fact: 'Wilno Magistrate (city council) created the position of «city photographer», and Bułhak was asked to take it'
				},
				{
					date: '1912',
					fact: 'Opened a photographic studio in Wilno.'
				},
				{
					date: '1912—1915',
					fact: 'At the request of the Wilno Magistrate he started making a «photographic inventory» of the city and took pictures of its historic landmarks'
				},
				{
					date: '1919-1939',
					fact: 'Taught art photography at the Department of Fine Arts of Stephen Batory University; Associate Professor (1939)'
				},
				{
					date: '1919',
					fact: 'Became one of the founders and chairman of the Wilno Photo Club (other sources claim that he founded and managed a photo club since 1927); led him before the start of World War II'
				},
				{
					date: '1929-1930',
					fact: 'Was one of the founders of the Polish Photo Club'
				},
				{
					date: '1935—1939',
					fact: 'He was one of the editors of the magazines Przegląd Fotograficzny, Fotograf Polski'
				},
				{
					date: '1944',
					fact: 'His studio in Wilno burned down after bombardments; about 30 thousand negatives perished'
				},
				{
					date: '1945',
					fact: 'Jan moved to Warsaw. He completed about a thousand photographs of the destroyed and rebuilding Warsaw, about 2 thousand photographs of Western lands annexed to Poland'
				},
				{
					date: '1947',
					fact: 'He became the founder of the Union of Photographers of Poland and led it until his death'
				}
			],
			works: [
				'Jan Bułhak wrote a number of books on the technique and art of photography, memoirs of Ferdynand Ruszczyc (1939), as well as poems and short stories.',
				'He released a series of albums «Wędrówki fotografa» (I — IX, 1931-1936).',
				'His photographs illustrate a guide to the city by Julijusz Kłos, a book about Wilno by Jerzy Remer and other publications.',
				'In 1935 he published a book about his journey from Wilno to Lake Naroch with 38 photographs.'
			]
		},
		photo: 'https://planetabelarus.by/temp_upload/medialibrary/217/217512e20955764d83ee32cc28e40589.jpg',
		photogallery: [
			'https://www.sb.by/upload/iblock/ca2/ca2ea2092d0ee2175e6e160b21716c09.jpg',
			'https://www.sb.by/upload/iblock/f01/f015ec54abc401369fdc91bd0f034191.jpg',
			'https://www.sb.by/upload/iblock/628/628d325c0214b18574b17b3779ccd094.jpg',
			'https://www.sb.by/upload/iblock/f31/f319451c0b0488b625b9a7b92c2f9c0a.jpg',
			'https://www.sb.by/upload/iblock/f85/f853921936a9e10393d6ee65ebce233f.jpg',
			'https://www.sb.by/upload/iblock/7a2/7a2da49996f3efb30a865195e9d36ec0.jpg'
		],
		video: 'https://www.youtube.com/watch?v=OUl9EEOXAeY'
	},
	{
    id: 3,
    surname: '',
		dataRU: {
			name: '',
			years: '',
			birthCity: '',
			mapCity: '',
			summary: '',
			info: '',
			timeline: [
				{
					date: '',
					fact: ''
				},
				{
					date: '',
					fact: ''
				},
				{
					date: '',
					fact: ''
				},
				{
					date: '',
					fact: ''
				},
				{
					date: '',
					fact: ''
				}
			],
			works: [
				'',
				'',
				''
			]
		},
		dataBE: {
			name: '',
			years: '',
			birthCity: '',
			mapCity: '',
			summary: '',
			info: '',
			timeline: [
				{
					date: '',
					fact: ''
				},
				{
					date: '',
					fact: ''
				},
				{
					date: '',
					fact: ''
				},
				{
					date: '',
					fact: ''
				},
				{
					date: '',
					fact: ''
				}
			],
			works: [
				'',
				'',
				''
			]
		},
		dataEN: {
			name: '',
			years: '',
			birthCity: '',
			mapCity: '',
			summary: '',
			info: '',
			timeline: [
				{
					date: '',
					fact: ''
				},
				{
					date: '',
					fact: ''
				},
				{
					date: '',
					fact: ''
				},
				{
					date: '',
					fact: ''
				},
				{
					date: '',
					fact: ''
				}
			],
			works: [
				'',
				'',
				''
			]
		},
		photo: '',
		photogallery: [
			'',
			'',
			''
		],
		video: ''
	}
];

export default photographersData;