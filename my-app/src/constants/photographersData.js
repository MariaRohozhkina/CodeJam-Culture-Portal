const photographersData = [
	{
    		id: 0,
		surname: 'Anempodistov',
		places: {
			center: {
				lat: 53.9006,
				lng: 27.5590
			},
		},
		RU: {
			name: 'Михаил Владимирович Анемподистов',
			years: '16 марта 1964 - 24 января 2018',
			birthCity: 'Минск',
			mapCity: 'Минск',
			summary: 'Белорусский художник, дизайнер, поэт, культуролог, искусствовед, фотограф',
			info: 'Работал в жанрах прикладной графики, иллюстрации, плаката, фотографии: начинал с плаката, после заинтересовался графикой, а позже и фотографией. Участвовал в коллективных и персональных выставках в Беларуси и за рубежом.',
			timeline: [
				{
					date: '1979 - 1983',
					fact: 'Минское художественное училище (ныне - Минский государственный художественный колледж имени А. К. Глебова)'
				},
				{
					date: '1989 - 1994',
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
				'В 2011 дебютировал в качестве фотографа с фотовыставкой «Under Ground»: в фотографиях сосредоточился на белорусских овощах, чтобы таким способом открыть более глубокое измерение белорусской культуры. Выбор своей тематики объяснил тем, что белорусы, как овощи, скрывают интересные вещи в себе, не показывают их вовне - нация заглубленных в себя людей: выглядят обычно, а внутри фантастические - под испачканной (от почвы) кожурой картофеля спрятано «золотое солнце».'
			]
		},
		BE: {
			name: 'Міхаіл Уладзіміравіч Анемпадыстаў',
			years: '16 сакавіка 1964 - 24 студзеня 2018',
			birthCity: 'Мінск',
			mapCity: 'Мінск',
			summary: 'Беларускі мастак, дызайнер, паэт, культуролаг, мастацтвазнавец, фатограф',
			info: 'Працаваў ў жанрах ужытковай графікі, ілюстрацыі, плаката, фатаграфіі: пачынаў з плаката, пасля зацікавіўся графікай, а пазней і фатаграфіяй. Удзельнічаў у калектыўных і персанальных выстаўках у Беларусі і за мяжой.',
			timeline: [
				{
					date: '1979 - 1983',
					fact: 'Мінскае мастацкае вучылішча (цяпер - Мінскі дзяржаўны мастацкі каледж імя А. К. Глебава)'
				},
				{
					date: '1989 - 1994',
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
				'У 2011 г. дэбютаваў як фатограф, прэзентаваўшы фотавыстаўку «Under Ground»: у фотапрацах засяродзіўся на беларускай гародніны, каб такім спосабам адкрыць глыбейшае вымярэнне беларускай культуры. Выбар сваёй тэматыкі патлумачыў тым, што беларусы, на думку Анемпадыстава, як гародніна, хаваюць цікавыя рэчы ў сабе, не паказваюць іх навонкі - нацыя заглыбленых у сябе людзей: выглядаюць звычайна, а ўнутры фантастычныя - пад запэцканай (ад глебы) кажурой бульбы схавана «залатое сонца».'
			]
		},
		EN: {
			name: 'Mikhail Anempodistov',
			years: 'March 16, 1964 - January 24, 2018',
			birthCity: 'Minsk',
			mapCity: 'Minsk',
			summary: 'Belarusian artist, designer, poet, culturologist, art critic, photographer',
			info: 'Mikhail worked in the genres of applied graphics, illustration, poster, and photography: he started with a poster, then became interested in graphics, and later in photography. Participated in collective and personal exhibitions in Belarus and abroad.',
			timeline: [
				{
					date: '1979 - 1983',
					fact: 'Minsk art school (now - Minsk State Art College named after A. K. Glebov)'
				},
				{
					date: '1989 - 1994',
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
				'In 2011, he made his debut as a photographer with the photo exhibition «Under Ground»: he focused on Belarusian vegetables in order to open a deeper dimension of Belarusian culture in this way. He explained the choice of his theme by the fact that Belarusians, like vegetables, hide interesting things in themselves, do not show them outside - a nation of people buried in themselves: they look normal, but inside they are fantastic - the «Golden sun» is hidden under the dirty (because of the soil) peel of potatoes».'
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
		places: {
			center: {
				lat: 55.1927,
				lng: 30.2064
			},
		},
		RU: {
			name: 'Владимир Сергеевич Базан',
			years: 'род. 21 октября 1953',
			birthCity: 'Унеча',
			mapCity: 'Витебск',
			summary: 'Белорусский фотограф, фотожурналист',
			info: 'Фотографиям Владимира Базана присущи использование оригинальных приемов композиции, тщательный отбор натурного материала, высокий профессионализм технического исполнения. Центральное место в творчестве занимает репортажная, публицистическая, жанровая фотография.',
			timeline: [
				{
					date: '1978',
					fact: 'Окончил художественно-графический факультет Витебского педагогического института'
				},
				{
					date: '1980 - 1990',
					fact: 'Работал фотографом, корреспондентом, ответственным секретарем в витебской многотиражной газете «Строитель»'
				},
				{
					date: '1990 - 2007',
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
		BE: {
			name: 'Уладзімір Сяргеевіч Базан',
			years: 'нар. 21 кастрычніка 1953',
			birthCity: 'Унеча',
			mapCity: 'Віцебск',
			summary: 'Беларускі фотамастак, фотажурналіст',
			info: 'Фатаграфіям У. Базана ўласцівыя выкарыстанне арыгінальных прыёмаў кампазіцыі, старанны адбор натурнага матэрыялу, высокі прафесіяналізм тэхнічнага выканання. Цэнтральнае месца ў творчасці займае рэпартажная, публіцыстычная, жанравая фатаграфія.',
			timeline: [
				{
					date: '1978',
					fact: 'Скончыў мастацка-графічны факультэт Віцебскага педагагічнага інстытута'
				},
				{
					date: '1980 - 1990',
					fact: 'Працаваў фатографам, карэспандэнтам, адказным сакратаром у віцебскай шматтыражнай газеце «Строитель»'
				},
				{
					date: '1990 - 2007',
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
				'Сярод асноўных работ: серыі «Думай, хлопец!» (1982-2005), «Свята ў праваслаўнай царкве» (1988), «Арменія. Снежань. 1988», «Піянерскі лагер» (1989), «Прыкметы» (1989), «Чарнобыльскі нацюрморт» (1996), «Парыж! Парыж! Я не хачу дадому!» (2001-2007).',
				'Аўтар фотаальбомаў «Віцебск» (2004, 2006), «Нінбург» (2007), «Віцебск» сумесна з А. Глебавым (2007), а таксама кнігі «Марк Шагал і Віцебск» з Л. Хмяльніцкай і А. Вышкам (2007).'
			]
		},
		EN: {
			name: 'Vladimir Bazan',
			years: 'born October 21, 1953',
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
					date: '1980 - 1990',
					fact: 'Photographer, correspondent, executive secretary of Vitebsk large newspaper «Stroitel»'
				},
				{
					date: '1990 - 2007',
					fact: 'Chief editor, designer and photojournalist at the «Vitebsky courier» newspaper'
				},
				{
					date: '1991',
					fact: 'Chief editor of a special issue of the newspaper dedicated to the First Shagalovsky days in Vitebsk'
				},
				{
					date: 'Mid-80s',
					fact: 'Headed the Vitebsk photo club «Vitba»'
				}
			],
			works: [
				'Among the main works: the series «Think, man!»(1982-2005), «Holiday in the Orthodox Church» (1988), «Armenia. December. 1988», «Pioneer camp» (1989), «Omens»(1989), «Chernobyl still life» (1996), «Paris! Paris! I do not want to go home!» (2001-2007).',
				'Vladimir is the author of photo albums «Vitebsk» (2004, 2006), «Ninburg» (2007), «Vitebsk» together with A. Glebov (2007), as well as the book «Mark Chagall and Vitebsk» with L. Khmelnitskaya and A. Vyshka (2007).'
			]
		},
		photo: 'http://art14.com.ua/wp-content/uploads/2017/02/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0-2017-05-25-%D0%B2-13.54.251.png',
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
		places: {
			center: {
				lat: 54.6872,
				lng: 25.2797
			},
		},
		RU: {
			name: 'Ян Булгак',
			years: '6 октября 1876 - 4 февраля 1950',
			birthCity: 'Осташин',
			mapCity: 'Вильнюс',
			summary: 'Белорусский и польский фотограф и фотохудожник, «отец польской фотографии», один из пионеров польской художественной фотографии',
			info: 'Его творчество считается частью совместного культурного наследия Беларуси, Литвы и Польши. Принял участие в более чем 170 международных выставках, удостаивался высоких наград. Известность получил благодаря импрессионистским фотографиям Вильны (Вильнюса) и окрестностей, других литовских местностей. Фотографии Булгака, передающие саму ауру Старого города и окружающего ландшафта, относят к произведениям «несравненной художественной ценности».',
			timeline: [
				{
					date: '1897',
					fact: 'Окончил классическую гимназию в Вильне'
				},
				{
					date: '1897 - 1899',
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
					date: '1912 - 1915',
					fact: 'По заказу магистрата фотографировал памятники архитектуры города'
				},
				{
					date: '1919 - 1939',
					fact: 'Преподавал художественную фотографию на отделении изящных искусств Университета Стефана Батория; доцент (1939)'
				},
				{
					date: '1919',
					fact: 'Стал одним из основателей и председателем Виленского фотоклуба (в других источниках утверждается, что основал фотоклуб и руководил им с 1927 года); руководил им до начала Второй мировой войны'
				},
				{
					date: '1929 - 1930',
					fact: 'Был одним из учредителей Польского фотоклуба'
				},
				{
					date: '1935 - 1939',
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
				'Выпустил серию альбомов «Wędrówki fotografa» (I-IX, 1931-1936).',
				'Фотографиями Булгака иллюстрирован путеводитель по городу Юлиуша Клоса, книга о Вильно Ежи Ремера и другие издания.',
				'В 1935 году издал книгу про свое путешествие из Вильно на озеро Нарочь с 38 фотоснимками.'
			]
		},
		BE: {
			name: 'Ян Булгак',
			years: '6 кастрычніка 1876 - 4 лютага 1950',
			birthCity: 'Асташын',
			mapCity: 'Вільнюс',
			summary: 'Віленскі майстар мастацкай краязнаўчай фатаграфіі, «бацька польскай фатаграфіі», адзін з піянераў польскай мастацкай фатаграфіі, этнограф, фалькларыст',
			info: 'Яго творчасць лічыцца часткай супольнай культурнай спадчыны Беларусі, Літвы і Польшчы. Прыняў удзел у больш чым 170 міжнародных выставах, ганараваўся высокіх узнагарод. Вядомасць атрымаў дзякуючы імпрэсіянісцкім фатаграфіям Вільні (Вільнюс) і ваколіц, іншых літоўскіх мясцовасцяў. Фатаграфіі Булгака, якія перадаюць саму аўру Старога горада і навакольнага ландшафту, адносяць да твораў «непараўнальнай мастацкай каштоўнасці».',
			timeline: [
				{
					date: '1897',
					fact: 'Скончыў класічную гімназію ў Вільні'
				},
				{
					date: '1897 - 1899',
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
					date: '1912 - 1915',
					fact: 'Па замове магістрата фатаграфаваў помнікі архітэктуры горада'
				},
				{
					date: '1919 - 1939',
					fact: 'Выкладаў мастацкую фатаграфію на аддзяленні прыгожых мастацтваў Універсітэта Стэфана Баторыя; дацэнт (1939)'
				},
				{
					date: '1919',
					fact: 'Стаў адным з заснавальнікаў і старшынёй Віленскага фотаклуба (у іншых крыніцах сцвярджаецца, што заснаваў фотаклуб і кіраваў ім з 1927 года); кіраваў ім да пачатку Другой сусветнай вайны'
				},
				{
					date: '1929 - 1930',
					fact: 'Быў адным з заснавальнікаў Польскага фотаклуба'
				},
				{
					date: '1935 - 1939',
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
				'Выпусціў серыю альбомаў «Wędrówki fotografa» (i-IX, 1931-1936).',
				'Фатаграфіямі Булгака ілюстраваны даведнік па горадзе Юліуша Клоса, кніга пра Вільна Ежы Ремера і іншыя выданні.',
				'У 1935 годзе выдаў кнігу пра сваё падарожжа з Вільні на возера Нарач з 38 фотаздымкамі.'
			]
		},
		EN: {
			name: 'Jan Bulhak',
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
					date: '1897 - 1899',
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
					date: '1912 - 1915',
					fact: 'At the request of the Wilno Magistrate he started making a «photographic inventory» of the city and took pictures of its historic landmarks'
				},
				{
					date: '1919 - 1939',
					fact: 'Taught art photography at the Department of Fine Arts of Stephen Batory University; Associate Professor (1939)'
				},
				{
					date: '1919',
					fact: 'Became one of the founders and chairman of the Wilno Photo Club (other sources claim that he founded and managed a photo club since 1927); led him before the start of World War II'
				},
				{
					date: '1929 - 1930',
					fact: 'Was one of the founders of the Polish Photo Club'
				},
				{
					date: '1935 - 1939',
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
				'He released a series of albums «Wędrówki fotografa» (I - IX, 1931-1936).',
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
		surname: 'Dashkevich',
		places: {
			center: {
				lat: 53.9006,
				lng: 27.5590
			},
		},
		RU: {
			name: 'Лев Урбанович Дашкевич',
			years: '12 февраля 1882 - 4 декабря 1957',
			birthCity: 'Минск',
			mapCity: 'Минск',
			summary: 'Белорусский фотохудожник, ученый, изобретатель, публицист, педагог',
			info: 'Происходил из шляхетского рода герба «Лелива». Лев Дашкевич первым в Беларуси разработал и стал читать курс лекций по фотографии (в Минском институте народного образования), был одним из первых представителей пикторальной (живописной) фотографии, работал в разных трудоемких фототехниках. В сентябре-декабре 2002 г. в Национальном музее истории и культуры Беларуси состоялась выставка произведений Дашкевича «Очарованный Беларусью».',
			timeline: [
				{
					date: '1882 - 1896',
					fact: 'Учился в Минской мужской гимназии и Виленском общежитии-канквице'
				},
				{
					date: '1903',
					fact: 'Поступил на медицинский факультет Варшавского университета. Через год за участие в студенческой забастовке арестован и исключен из университета без права поступления в вузы Российской империи'
				},
				{
					date: '1906 - 1911',
					fact: 'Учился во Франции - на факультете филологии (La faculté de lettres) Университета Бургундии (Дижон). В 1908 - 1909 учился на фотографическом отделении Высшей школы графических искусств в Париже, в 1911 начал печататься в научных изданиях (La Nature. Paris)'
				},
				{
					date: '1911 - 1920',
					fact: 'Жил в Закавказье, работал преподавателем французского языка, физики, естествознания и других предметов в гимназиях Эрывани (Ереван), Елизаветполя (сейчас Гянджа, Азербайджан), Тифлиса (Тбилиси). Ездил по региону в качестве фотографа Комиссии по описанию местностей и племен Кавказа. В 1918 служил государственным фотографом правительства Азербайджанской республики'
				},
				{
					date: '1920',
					fact: 'Вернулся в Минск. С октября читал лекции по мировой литературе и фотографии в Минском институте народного образования. С декабря преподавал французский язык в Белорусском политехническом институте'
				},
				{
					date: '1921',
					fact: 'Работал в Научно-терминологической комиссии Наркомпроса БССР (естественная секция)'
				},
				{
					date: '1923',
					fact: 'В мае-июне участвовал в этнографической экспедиции в Игуменском и Борисовском уездах'
				},
				{
					date: '1923 - 1924',
					fact: 'Научный фотограф на медицинском факультете БГУ'
				},
				{
					date: '1930',
					fact: '21 июля арестован ГПУ БССР по делу «Союза освобождения Беларуси». Освобожден в сентябре'
				},
				{
					date: '1930 - 1941',
					fact: 'Работал в Минском Доме техники, на географическом факультете БГУ, 1-й клинике Минского мединститута, Институте теоретической и клинической медицины АН БССР'
				},
				{
					date: '1941 - 1944',
					fact: 'Жил в эвакуации в г. Фрунзе (ныне Бишкек, Кыргызстан), работал в медицинских учреждениях'
				},
				{
					date: '1944',
					fact: 'В сентябре вернулся в Минск. Работал в Институте теоретической медицины и Институте физиологии'
				}
			],
			works: [
				'Фотографические работы Дашкевича печатались в изданиях: Азбукин М. «Географ Европы» (1924), Громыко М. «Начальная Географ» (1926), «Чатырохстолецьце белорусской печати» (1926), Богданович М. «Произведения». Т. 1 (1927-28), «Современное белорусское искусство» (1929), «Беларусь Советская: Фотоальбом» (1931), «IV Всебелорусская художественная выставка» (1931), «Красная Беларусь» (1930).',
				'Участвовал в Первой Всебелорусской выставке краеведческих фотографий и зарисовок (1928), в выставке в Дрездене (Германия, 1930).',
				'Помимо профессионального увлечения фотографией, Лев Урбанович занимался научными исследованиями в области рентгенографии, изучал влияние биологического ультрафиолета на трофику и регенерацию тканей, в результате разработав уникальную методику ускоренного заживления ран.'
			]
		},
		BE: {
			name: 'Леў Урбанавіч Дашкевіч',
			years: '12 лютага 1882 - 4 снежня 1957',
			birthCity: 'Мінск',
			mapCity: 'Мінск',
			summary: 'Беларускі фотамастак, навуковец, вынаходнік, публіцыст, педагог',
			info: 'Паходзіў з шляхецкага роду герба «Ляліва». Леў Дашкевіч першым у Беларусі распрацаваў і стаў чытаць курс лекцый па фатаграфіі (у Мінскім інстытуце народнай адукацыі), быў адным з першых прадстаўнікоў піктаральнай (маляўнічай) фатаграфіі, працаваў у розных працаёмкіх фотатэхніках. У верасні-снежні 2002 г. у Нацыянальным музеі гісторыі і культуры Беларусі адбылася выстаўка твораў Дашкевіча «Зачараваны Беларуссю».',
			timeline: [
				{
					date: '1882 - 1896',
					fact: 'Вучыўся ў Мінскай мужчынскай гімназіі і Віленскім інтэрнаце-канквіце'
				},
				{
					date: '1903',
					fact: 'Паступіў на медыцынскі факультэт Варшаўскага ўніверсітэта. Праз год за ўдзел у студэнцкай забастоўцы арыштаваны і выключаны з універсітэта без права паступлення ў ВНУ Расійскай імперыі'
				},
				{
					date: '1906 - 1911',
					fact: 'Вучыўся ў Францыі - на факультэце філалогіі (La faculté de lettres) Універсітэта Бургундыі (Дыжон). У 1908 - 1909 займаўся на фатаграфічным аддзяленні Вышэйшай школы графічных мастацтваў у Парыжы. У 1911 пачаў друкавацца ў навуковых выданнях (La Nature. Paris)'
				},
				{
					date: '1911 - 1920',
					fact: 'Жыў у Закаўказзі, працаваў выкладчыкам французскай мовы, фізікі, прыродазнаўства і іншых прадметаў у гімназіях Эрывані (Ерэван), Елізаветполя (цяпер Гянджа, Азербайджан), Тыфліса (Тбілісі). Ездзіў па рэгіёне ў якасці фатографа Камісіі па апісанні мясцовасцей і плямён Каўказа. У 1918 служыў дзяржаўным фатографам урада Азербайджанскай рэспублікі'
				},
				{
					date: '1920',
					fact: 'Вярнуўся ў Менск. З кастрычніка чытаў курсы лекцый па сусветнай літаратуры і фатаграфіі ў Менскім інстытуце народнай адукацыі. Са снежня выкладаў французскую мову ў Беларускім політэхнічным інстытуце'
				},
				{
					date: '1921',
					fact: 'Працаваў у Навукова-тэрміналагічнай камісіі Наркамасветы БССР (прыродазнаўчая секцыя)'
				},
				{
					date: '1923',
					fact: 'У маі-чэрвені удзельнічаў у этнаграфічнай экспедыцыі ў Ігуменскім і Барысаўскім паветах'
				},
				{
					date: '1923 - 1924',
					fact: 'Навуковы фатограф на медыцынскім факультэце БДУ'
				},
				{
					date: '1930',
					fact: 'Арыштаваны ДПУ БССР 21 ліпеня па справе «Саюза вызвалення Беларусі». Вызвалены ў верасні'
				},
				{
					date: '1930 - 1941',
					fact: 'Працаваў у Менскім Доме тэхнікі, на геаграфічным факультэце БДУ, 1-й клініцы Менскага медінстытута, Інстытуце тэарэтычнай і клінічнай медыцыны АН БССР'
				},
				{
					date: '1941 - 1944',
					fact: 'Жыў у эвакуацыі ў г. Фрунзэ (цяпер Бішкек, Кыргызстан), працаваў у медыцынскіх установах'
				},
				{
					date: '1944',
					fact: 'У верасні вярнуўся ў Мінск. Працаваў у Інстытуце тэарэтычнай медыцыны і Інстытуце фізіялогіі'
				}
			],
			works: [
				'Фатаграфічныя працы Дашкевіча друкаваліся ў выданнях: Азбукін М. «Географія Эўропы» (1924), Грамыка М. «Пачатковая географія» (1926), «Чатырохстолецьце беларускага друку» (1926), Багдановіч М. «Творы». Т. 1 (1927-28), «Сучаснае беларускае мастацтва» (1929), «Беларусь Савецкая: Фотаальбом» (1931), «IV Усебеларуская мастацкая выстаўка» (1931), час. «Чырвоная Беларусь» (1930).',
				'Удзельнічаў у Першай Усебеларускай выстаўцы краязнаўчых фатаграфій і замалёвак (1928), у выстаўцы ў Дрэздэне (Германія, 1930).',
				'Акрамя прафесійнага захаплення фатаграфіяй, Леў Урбановіч займаўся навуковымі даследаваннямі ў галіне рэнтгенаграфіі, вывучаў уплыў біялагічнай ультрафіялету на трофіку і рэгенерацыю тканін, у выніку распрацаваўшы унікальную методыку паскоранага гаення ран.'
			]
		},
		EN: {
			name: 'Lev Dashkevich',
			years: 'February 12, 1882 - December 4, 1957',
			birthCity: 'Minsk',
			mapCity: 'Minsk',
			summary: 'Belarusian photographer, scientist, inventor, publicist, and teacher',
			info: 'A descendant from one of the szlachta families, Leliwa coat of arms. Lev Dashkevich was the first in Belarus to develop and teach a course of lectures on photography (at the Minsk Institute of public education), was one of the first representatives of pictorial (pictorial) photography, and worked in various labor-intensive photo techniques. In September-December 2002, the national Museum of history and culture of Belarus hosted an exhibition of his works «Charmed by Belarus».',
			timeline: [
				{
					date: '1882 - 1896',
					fact: 'Studied at the Minsk gymnasium and the Vilnius hostel-conquise'
				},
				{
					date: '1903',
					fact: 'Entered the medical faculty of the University of Warsaw. A year later, he took part in a student strike. He was arrested and expelled from the University without the right to enter higher education institutions of the Russian Empire'
				},
				{
					date: '1906 - 1911',
					fact: 'Studied in France, the faculty of Philology (La faculté de lettres) of the University of Burgundy (Dijon). In 1908 - 1909 he studied at the photographic Department of the Higher school of graphic arts in Paris. In 1911 his works began to be published in scientific publications (La Nature. Paris)'
				},
				{
					date: '1911 - 1920',
					fact: 'Lived in Transcaucasia, worked as a teacher of French, physics, natural science, and other subjects in high schools in Eryvani (Yerevan), Elizavetpol (now Ganja, Azerbaijan), and Tiflis (Tbilisi). He traveled around the region as a photographer for The Commission on the description of localities and tribes of the Caucasus. In 1918 he served as state photographer of the government of the Republic of Azerbaijan'
				},
				{
					date: '1920',
					fact: 'Returned to Minsk. Since October, he has lectured on world literature and photography at the Minsk Institute of public education. Since December he has been teaching French at the Belarusian Polytechnic Institute'
				},
				{
					date: '1921',
					fact: 'Worked in The scientific and terminological Commission of the people\'s Commissariat of the BSSR (natural section)'
				},
				{
					date: '1923',
					fact: 'In May-June he participated in an ethnographic expedition in the Igumen and Borisov districts'
				},
				{
					date: '1923 - 1924',
					fact: 'Scientific photographer at the medical faculty of BSU'
				},
				{
					date: '1930',
					fact: 'On July 21, he was arrested by the BSSR GPU in the case of the «Union for the liberation of Belarus». He was released in September'
				},
				{
					date: '1930 - 1941',
					fact: 'Worked in the Minsk house of technology, at the geographical faculty of the BSU, the 1st clinic of the Minsk medical Institute, the Institute of theoretical and clinical medicine of the BSSR Academy of Sciences'
				},
				{
					date: '1941 - 1944',
					fact: 'Lived in evacuation in Frunze (now Bishkek, Kyrgyzstan), worked in medical institutions'
				},
				{
					date: '1944',
					fact: 'In September he returned to Minsk. He worked at the Institute of theoretical medicine and the Institute of physiology'
				}
			],
			works: [
				'His photographic works were published in Azbukin M. «Geography of Europe» (1924), Gromyko M. «Initial Geography» (1926), «Quatercentenary of the Belarusian press» (1926), Bogdanovich M. «Works». Vol. 1 (1927-28), «Modern Belarusian art» (1929), «Soviet Belarus: Photo Album» (1931), «IV all-Belarusian art exhibition» (1931), «Red Belarus» (1930).',
				'He participated in the First all-Belarusian exhibition of local history photographs and sketches (1928), in the exhibition in Dresden (Germany, 1930).',
				'In addition to his professional passion for photography, Lev Urbanovich was engaged in scientific research in the field of radiography, studied the effect of biological ultraviolet light on trophism and tissue regeneration, and as a result developed a unique technique for accelerated wound healing.'
			]
		},
		photo: 'https://www.lazim.az/images/news/22d7717b21c99494e756931e8c047741.jpg',
		photogallery: [
			'https://sxodim.com/uploads/astana/2016/09/201_576b90b8-1200x800.jpg',
			'http://minsknews.by/wp-content/uploads/2016/06/----2-copy-2.jpg',
			'https://img.pravda.ru/image/article/9/7/7/341977.jpeg',
			'https://img.pravda.ru/image/article/9/7/8/341978.jpeg',
			'https://israelperson.co.il/uploads/images/users/2/0febd16ba7385a54241156737865a411.jpg',
			'https://planetabelarus.by/upload/medialibrary/332/332e8c20f0021355e7c75e2c88530c83.jpg',
			'https://israelperson.co.il/uploads/images/users/2/b64d87171a74ea15de01c21344355c4a.jpg'
		],
		video: 'https://www.tvr.by/upload/video/12101802_(2).mp4'
	},
	{
    		id: 4,
    		surname: 'Kachan',
		places: {
			center: {
				lat: 51.9906,
				lng: 25.3668
			},
		},
		RU: {
			name: 'Вадим Аркадьевич Качан',
			years: 'род. 8 октября 1958',
			birthCity: 'Залядынье',
			mapCity: 'Минск',
			summary: 'Современный белорусский фотограф, преподаватель фотографии',
			info: 'Родился в деревне Залядынье Ивановского района Брестской области. Является членом творческих союзов: Белорусский союз дизайнеров, БОО «Фотоискусство», Союз фотохудожников России. Участвовал в проекте Photo Manifesto: Contemporary Photography in the USSR (Фотоманифест. Современная фотография в СССР), в выставке в Центральном выставочном зале в Москве «Манеж» посвященной 150-летию фотографии, а также в ряде клубных фотовыставок в Беларуси и в других выставочных проектах.',
			timeline: [
				{
					date: '1980',
					fact: 'Закончил Белорусский технологический институт им. С. М. Кирова в Минске'
				},
				{
					date: '1980 - 1990',
					fact: 'Являлся членом фотоклуба «Вечерний Минск»'
				},
				{
					date: '1991 - 2003',
					fact: 'Активно фотографией не занимался'
				},
				{
					date: '2003',
					fact: 'Возвратился в фотографию персональной выставкой «Осколки» в галерее «NOVA» (Минск)'
				},
				{
					date: '2003',
					fact: 'Стал одним из организаторов и первым председателем Белорусского Общественного объединения «Фотоискусство» (творческий союз)'
				},
				{
					date: '2003 - ...',
					fact: 'Активно участвует в коллективных выставках в разных странах, проходит ряд его персональных выставок: в Беларуси, России и Польше'
				},
				{
					date: '2007',
					fact: 'Начал преподавать фотографию'
				}
			],
			works: [
				'В 1980-1990 создаются серии и проекты как документальных работ - «Фототандем», «Праздник города», «Свет и тени», так и фотомонтажных фотографий - «ХХ-век», «Ассоциации», «Свадебные мгновения», «Предчувствие судьбы» и др.',
				'С 2003 года - серии цифровой документальной фотографии: «Люди Египта», «Портрет с портретом», «Прогулки по городу», «Город и люди» и др., а также серии цифровых монтажных работ: «Внутренние миры», «Фантазии Египта», «Жалюзи» и др.',
				'Было издано четыре авторских фотоальбома: «Фотографии прошлых лет», «Люди Египта», «Лица», «Минск. Город и люди».',
				'Фотоальбом Вадима Качана «Фотографии прошлых лет» (2005 г.) - первое в современной Беларуси издание альбома-книги, посвященное творчеству фотохудожника. В него вошли как фотографии автора, выполненные в 80-х годах прошлого столетия, так и его рассказы «Puzzles прошлых лет».'
			]
		},
		BE: {
			name: 'Вадзім Аркадзьевіч Качан',
			years: 'нар. 8 кастрычніка 1958',
			birthCity: 'Залядынне',
			mapCity: 'Мінск',
			summary: 'Сучасны беларускі фатограф, выкладчык фотаздымкі',
			info: 'Нарадзіўся ў вёсцы Залядынне Іванаўскага раёна Брэсцкай вобласці. З\'яўляецца членам творчых саюзаў: Беларускі саюз дызайнераў, БГА «Фотамастацтва», Саюз фотамастакоў Расіі. Удзельнічаў у праекце Photo Manifesto: Contemporary Photography in the USSR (Фотаманифест. Сучасная фатаграфія ў СССР), у выставе ў Цэнтральнай выставачнай зале ў Маскве «Манеж» прысвечанай 150-годдзю фатаграфіі, а таксама ў шэрагу клубных фотавыставаў у Беларусі і ў іншых выставачных праектах.',
			timeline: [
				{
					date: '1980',
					fact: 'Скончыў Беларускі тэхналагічны інстытут ім. С. М. Кірава ў Мінску'
				},
				{
					date: '1980 - 1990',
					fact: 'З\'яўляўся членам фотаклуба «Вячэрні Мінск»'
				},
				{
					date: '1991 - 2003',
					fact: 'Актыўна фатаграфіяй не займаўся'
				},
				{
					date: '2003',
					fact: 'Вярнуўся ў фатаграфію персанальнай выставай «аскепкі» ў галерэі «NOVA» (Мінск)'
				},
				{
					date: '2003',
					fact: 'Стаў адным з арганізатараў і першым старшынём Беларускага Грамадскага аб\'яднання «Фотамастацтва» (творчы саюз)'
				},
				{
					date: '2003 - ...',
					fact: 'Актыўна ўдзельнічае ў калектыўных выставах у розных краінах, праходзіць шэраг яго персанальных выстаў: у Беларусі, Расіі і Польшчы'
				},
				{
					date: '2007',
					fact: 'Пачаў выкладаць фатаграфію'
				}
			],
			works: [
				'У 1980-1990 ствараюцца серыі і праекты як дакументальных работ - «Фотатандэм», «Свята горада», «Святло і цені», так і фотамантажных фатаграфій - «ХХ-стагоддзе», «Асацыяцыі», Вясельныя імгненні», «Прадчуванне лёсу» і інш.',
				'З 2003 года-серыі лічбавай дакументальнай фатаграфіі: «Людзі Егіпта», «Партрэт з партрэтам», «Прагулкі па горадзе», «Горад і людзі» і інш., а таксама серыі лічбавых мантажных работ: «Унутраныя светы», «Фантазіі Егіпта», «Жалюзі» і інш.',
				'Было выдадзена чатыры аўтарскіх фотаальбома: «Фатаграфіі мінулых гадоў», «Людзі Егіпта», «Асобы», «Мінск. Горад і людзі».',
				'Фотаальбом Вадзіма Качана «Фотаздымкі мінулых гадоў» (2005 г.) - першае ў сучаснай Беларусі выданне альбома-кнігі, прысвечанае творчасці фотамастака. У яго ўвайшлі як фатаграфіі аўтара, выкананыя ў 80-х гадах мінулага стагоддзя, так і яго апавяданні «Puzzles мінулых гадоў».'
			]
		},
		EN: {
			name: 'Vadim Kachan',
			years: 'born October 8, 1958',
			birthCity: 'Zaliadynnie',
			mapCity: 'Minsk',
			summary: 'Modern Belarusian photographer, photography teacher',
			info: 'He was born in the village of Zaliadynnie in the Ivanovo district of the Brest region. He is a member of creative unions: the Belarusian Union of designers, photo Art, and the Union of Russian photo artists. Participated in the project Photo Manifesto: Contemporary Photography in the USSR (Photomanifesto. Modern photography in the USSR), in an exhibition at the Central exhibition hall in Moscow «Manege» dedicated to the 150th anniversary of photography, as well as in a number of club photo exhibitions in Belarus and other exhibition projects.',
			timeline: [
				{
					date: '1980',
					fact: 'Graduated from the Belarusian Institute of technology. S. M. Kirov in Minsk'
				},
				{
					date: '1980 - 1990',
					fact: 'Was a member of the «Evening Minsk» photo club'
				},
				{
					date: '1991 - 2003',
					fact: 'Was not actively engaged in photography'
				},
				{
					date: '2003',
					fact: 'Returned to photography with a personal exhibition «Shards» in the NOVA gallery (Minsk)'
				},
				{
					date: '2003',
					fact: 'Became of the organizers and the first Chairman of the Belarusian Public Association «photo art» (creative Union)'
				},
				{
					date: '2003 - ...',
					fact: 'Actively participates in collective exhibitions in different countries, and has a number of personal exhibitions in Belarus, Russia, and Poland'
				},
				{
					date: '2007',
					fact: 'Started teaching photography'
				}
			],
			works: [
				'In 1980-1990, series and projects were created as documentary works - «Phototandem», «city Holiday», «Light and shadows», and photomontage photos - «XX-century», «Associations», «Wedding moments», «Premonition of fate», etc.',
				'Since 2003 he made a series of digital documentary photography: «People of Egypt», «Portrait with portrait», «Walking around the city», «City and people», etc., as well as a series of digital installation works: «Inner worlds», «Fantasies of Egypt», «Blinds», etc.',
				'Four author\'s photo albums were published: «Photos of past years», «People of Egypt», «Faces», «Minsk. The city and the people».',
				'Vadim Kachan\'s photo album «Photos of past years» (2005) is the first edition of the album-book dedicated to the work of the photographer in modern Belarus. It includes both photos of the author from the 80s and his stories «Puzzles of previous years».'
			]
		},
		photo: 'http://wiki.znyata.com/files/kachan_vadim.jpg',
		photogallery: [
			'http://vadimkachan.by/wp-content/uploads/2013/11/185_8501_RT8%D1%821.jpg',
			'http://vadimkachan.by/wp-content/uploads/2013/12/2Q3A3557.jpg',
			'http://vadimkachan.by/wp-content/uploads/2013/11/179_7974_RT8%D0%B81.jpg',
			'http://vadimkachan.by/wp-content/uploads/2013/12/2Q3A5600c.jpg',
			'http://vadimkachan.by/wp-content/uploads/2013/11/186_8662-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg',
			'http://vadimkachan.by/wp-content/uploads/2013/11/148_4837gotcb.jpg',
			'http://vadimkachan.by/wp-content/uploads/2014/03/2Q3A4157v2-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8Fv3.jpg',
			'http://vadimkachan.by/wp-content/uploads/2014/06/009.jpg'
		],
		video: 'https://www.youtube.com/watch?v=osrFPceBMKk'
	},
	{
    		id: 5,
		surname: 'Sapogov',
		places: {
			center: {
				lat: 52.0997,
				lng: 23.7637
			},
		},
		RU: {
			name: 'Владимир Сапогов',
			years: '4 июля 1952 - 11 марта 2012',
			birthCity: 'Брест',
			mapCity: 'Минск',
			summary: 'Белорусский фотограф, участник движения за независимость Беларуси',
			info: 'Фотографировал в 1980-е годы праздники, которые организовывались молодежным национально-ориентированным объединением «Талака», первые митинги в Куропатах, антикоммунистические митинги начала 1990-х, путч 1991 года, в 1996-2000 - массовые митинги в Минске. Также автор фотопортретов белорусских литераторов, художников, политиков среди которых Анатолий Сыс, Полина Кочеткова, Алесь Беляцкий, Юрий Захаренко, Игорь Герменчук, Зенон Позняк, Михаил Кукобака, Сергей Наумчик, Николай Статкевич, Майя Кляшторная, Лявон Борщевский, Виктор Гончар, Анатолий Сидоревич.',
			timeline: [
				{
					date: '1952 - ...',
					fact: 'Воспитывался в детском доме в Бресте, учился в Москве. Работал на БАМе, на киностудии «Беларусьфильм», в фотолаборатории Минского тракторного завода'
				},
				{
					date: '1980-е',
					fact: 'Присоединился к возрожденческому движению'
				},
				{
					date: '1996 - 2000',
					fact: 'Фотографировал массовые митинги в Минске'
				},
				{
					date: '1998 - 2000',
					fact: 'Сотрудничал с изданием правозащитного центра «Весна» - бюллетенем «право на свободу»'
				},
				{
					date: '1998',
					fact: '2 декабря был задержан милицией возле спецприемника на 1-м переулке Окрестина в Минске, когда хотел фотографировать выход из спецприемника политика Вячеслава Сивчика и активиста правозащитного центра «Весна» Вадима Конопацкого'
				}
			],
			works: [
				'Выставки: «100 фотографий Владимира Сапогова» к 30-летию объединения «Талака» (Минск, декабрь 2015),',
				'«Праздники, которые пробуждали национальное сознание» (Орша, июнь 2016),',
				'«От культурных акций, до акций политического протеста» (Чернигов, галерея современного искусства «Пласт-арт», июль-август 2016),',
				'«Праздник белорусской воинской славы» (Орша-Минск, август-сентябрь 2016).'
			]
		},
		BE: {
			name: 'Уладзімір Сапагоў',
			years: '4 ліпеня 1952 - 11 сакавіка 2012',
			birthCity: 'Брэст',
			mapCity: 'Мінск',
			summary: 'Беларускі фатограф, удзельнік руху за незалежнасць Беларусі',
			info: 'Фатаграфаваў у 1980-я гады святы, якія арганізоўваліся маладзёжным нацыянальна-арыентаваным аб\'яднаннем «Талака», першыя мітынгі ў Курапатах, антыкамуністычныя мітынгі пачатку 1990-х, путч 1991 года, у 1996-2000 - масавыя мітынгі ў Мінску. Таксама аўтар фотапартрэтаў беларускіх літаратараў, мастакоў, палітыкаў сярод якіх Анатоль Сыс, Паліна Качаткова, Алесь Бяляцкі, Юрый Захаранка, Ігар Гермянчук, Зянон Пазняк, Міхась Кукабака, Сяргей Навумчык, Мікалай Статкевіч, Мая Кляшторная, Лявон Баршчэўскі, Віктар Ганчар, Анатоль Сідарэвіч.',
			timeline: [
				{
					date: '1952 - ...',
					fact: 'Выхоўваўся ў дзіцячым доме ў Брэсце, вучыўся ў Маскве. Працаваў на БАМе, на кінастудыі «Беларусьфільм», у фоталабараторыі Мінскага трактарнага завода'
				},
				{
					date: '1980-я',
					fact: 'Далучыўся да адраджэнскага руху'
				},
				{
					date: '1996 - 2000',
					fact: 'Фатаграфаваў масавыя мітынгі ў Мінску'
				},
				{
					date: '1998 - 2000',
					fact: 'Супрацоўнічаў з выданнем Праваабарончага цэнтру «Вясна» - бюлетэнем «Права на Волю»'
				},
				{
					date: '1998',
					fact: '2 снежня быў затрыманы міліцыяй каля спецпрыёмніка на 1-м завулку Акрэсціна ў Мінску, калі хацеў фатаграфаваць выхад са спецпрыёмніка палітыка Вячаслава Сіўчыка і актывіста праваабарончага цэнтру «Вясна» Вадзіма Канапацкага'
				}
			],
			works: [
				'Выставы: «100 фотаздымкаў Уладзіміра Сапагова» да 30-годдзя аб\'яднання «Талака» (Мінск, снежань 2015),',
				'«Святы, якія абуджалі нацыянальную свядомасць» (Орша, чэрвень 2016),',
				'«Ад культурніцкіх акцый, да акцый палітычнага пратэсту» (Чарнігаў, галерэя сучаснага мастацтва «Пласт-арт», ліпень-жнівень 2016),',
				'«Свята Беларускай Вайсковай славы» (Орша-Мінск, жнівень-верасень 2016).'
			]
		},
		EN: {
			name: 'Vladimir Sapogov',
			years: 'July 4, 1952 - March 11, 2012',
			birthCity: 'Brest',
			mapCity: 'Minsk',
			summary: 'Belarusian photographer, participated in the movement for the independence of Belarus',
			info: 'In the 1980s, he photographed holidays organized by the Talaka youth national-oriented Association, the first meetings in Kurapaty, anti-Communist meetings in the early 1990s, the 1991 putsch, and mass meetings in Minsk in 1996-2000. He is also the author of photo portraits of Belarusian writers, artists, and politicians, including Anatoly Sys, Polina Kochetkova, Ales Bialiatski, Yuri Zakharenko, Igor hermenchuk, Zenon Poznyak, Mikhail Kukobaka, Sergey Naumchik, Nikolai Statkevich, Maya Klyashtornaya, Lyavon Borschevsky, Viktor Gonchar, and Anatoly Sidorevich.',
			timeline: [
				{
					date: '1952 - ...',
					fact: 'He was raised in an orphanage in Brest and studied in Moscow. He worked at BAM, at the Belarusfilm film Studio, and in the darkroom of the Minsk tractor plant'
				},
				{
					date: '1980s',
					fact: 'Joined the Renaissance movement'
				},
				{
					date: '1996 - 2000',
					fact: 'Photographed mass meetings in Minsk'
				},
				{
					date: '1998 - 2000',
					fact: 'Collaborated with the publication of the human rights center «Viasna» - the Bulletin «right to freedom»'
				},
				{
					date: '1998',
					fact: 'On December 2 he was detained by the police near a special detention center on the 1st street of Okrestin in Minsk, when he wanted to took photos of politician Vyacheslav Sivchik and human rights activist Vadim Konopatsky leaving the center'
				}
			],
			works: [
				'Exhibitions: «100 photos of Vladimir Sapogov» for the 30th anniversary of the Talaka Association (Minsk, December 2015),',
				'«Holidays that awakened the national consciousness» (Orsha, June 2016),',
				'«From cultural actions to political protest actions» (Chernihiv, Plast-art gallery of modern art, July-August 2016),',
				'«Celebration of Belarusian military glory» (Orsha-Minsk, August-September 2016).'
			]
		},
		photo: 'https://img.tyt.by/n/balay/09/1/sapahou_light.jpg',
		photogallery: [
			'https://gdb.currenttime.tv/3B1B5634-6930-4E04-92AF-162F9B8AB583_w1600_mw1600_q70_s.jpg',
			'https://img.tyt.by/n/balay/0c/3/---_00200.jpg',
			'https://img.tyt.by/n/balay/0d/7/---_00202.jpg',
			'https://img.tyt.by/n/balay/05/5/---_00254.jpg',
			'https://img.tyt.by/n/balay/0d/6/---_00236.jpg',
			'https://img.tyt.by/n/balay/02/d/---_00237.jpg',
			'https://img.tyt.by/n/balay/07/1/---_00213.jpg'
		],
		video: ''
	},
	{
    		id: 6,
		surname: 'Shmerling',
		places: {
			center: {
				lat: 55.1927,
				lng: 30.2064
			},
		},
		RU: {
			name: 'Михаил Маркович Шмерлинг',
			years: 'род. 07 декабря 1946',
			birthCity: 'Витебск',
			mapCity: 'Минск',
			summary: 'Белорусский фотохудожник, член Союза журналистов Беларуси',
			info: 'Родился в семье профессионального фотографа. Работает в разных жанрах художественной фотографии. Получил первую премию на Всесоюзной выставке «Фотографика-71» (1971), медаль лауреата на международной выставке «Человек и Земля» (г. Плателяй, Литва, 1973). Награжден почетными дипломами фотосалонов в Румынии (1971, 1973), Англии (1974).',
			timeline: [
				{
					date: '1967',
					fact: 'Окончил Минское полиграфическое училище'
				},
				{
					date: '1976',
					fact: 'Член Союза журналистов Беларуси'
				},
				{
					date: '1969 - 1983',
					fact: 'Работал в Витебском областном краеведческом музее'
				},
				{
					date: '1986 - 1991',
					fact: 'Работал на производственном объединении «Мастацтва»'
				},
				{
					date: '1991 - 2007',
					fact: 'Работал в редакции областной газеты «Народнае слова»'
				}
			],
			works: [
				'Среди произведений: «Браславский мотив» (1982), «Художник Ф. Гумен» (1985), «Народная артистка СССР С. Станюта» (1990), «Вечер» (1991), «Актриса Наталья Аладка» (1992).',
				'«Летучка» (2000), «Художник Г. Шутов» (2001), «Афганцы» (2005), «Позади целый век...» (2007).',
				'Серии «Старый Витебск» (1971–1975), «Театр» (1975–1985), «Ветераны. Месяц май» (1975–2007), «Художники» (2010) и др.'
			]
		},
		BE: {
			name: 'Міхаіл Маркавіч Шмерлінг',
			years: 'нар. 7 снежня 1946',
			birthCity: 'Віцебск',
			mapCity: 'Мінск',
			summary: 'Беларускі фотамастак, член Саюза журналістаў Беларусі',
			info: 'Міхаіл нарадзіўся ў сям\'і прафесійнага фатографа. Працуе ў розных жанрах мастацкай фатаграфіі. Атрымаў першую прэмію на Усесаюзнай выставе «Фотаграфіка-71» (1971), медаль лаўрэата на міжнароднай выставе «Чалавек і Зямля» (г. Платэляй, Літва, 1973). Узнагароджаны ганаровымі дыпломамі фотасалонаў ў Румыніі (1971, 1973), Англіі (1974).',
			timeline: [
				{
					date: '1967',
					fact: 'Скончыў Мінскае паліграфічнае вучылішча'
				},
				{
					date: '1976',
					fact: 'Член Саюза журналістаў Беларусі'
				},
				{
					date: '1969 - 1983',
					fact: 'Працаваў у Віцебскім абласным краязнаўчым музеі'
				},
				{
					date: '1986 - 1991',
					fact: 'Працаваў на вытворчым аб\'яднанні «Мастацтва»'
				},
				{
					date: '1991 - 2007',
					fact: 'Працаваў у рэдакцыі абласной газеты «Народнае слова»'
				}
			],
			works: [
				'Сярод твораў: «Браслаўскі матыў» (1982), «Мастак Ф. Гумен» (1985) «Народная артыстка СССР С. Станюта» (1990) «Вечар» (1991), «Актрыса Наталля Аладка» (1992).',
				'«Лятучка» (2000), «Мастак Г. Шутаў» (2001) «Афганцы»(2005), «Ззаду цэлае стагоддзе...» (2007).',
				'Серыі «Стары Віцебск» (1971-1975), «Тэатр» (1975-1985), «Ветэраны. Месяц май» (1975-2007), «Мастакі» (2010) і інш.'
			]
		},
		EN: {
			name: 'Mikhail Shmerling',
			years: 'born December 7, 1946',
			birthCity: 'Vitebsk',
			mapCity: 'Minsk',
			summary: 'Belarusian photo artist, member of the Union of Journalists of Belarus',
			info: 'Mikhail was born in the family of a professional photographer. He works in different genres of art photography. He received the first prize at the All-Union Exhibition «Photograph-71» (1971), the medal of the winner at the international exhibition «Man and Earth» (Plateliai, Lithuania, 1973). He was awarded honorary diplomas of photo shops in Romania (1971, 1973), England (1974).',
			timeline: [
				{
					date: '1967',
					fact: 'Graduated from Minsk Polygraphic School'
				},
				{
					date: '1976',
					fact: 'Member of the Union of Journalists of Belarus'
				},
				{
					date: '1969 - 1983',
					fact: 'Worked in the Vitebsk Regional Museum of Local Lore'
				},
				{
					date: '1986 - 1991',
					fact: 'Worked at the Mastastva production association'
				},
				{
					date: '1991 - 2007',
					fact: 'Worked in the editorial office of the regional newspaper Narodnaye Slova'
				}
			],
			works: [
				'Among his works: «Braslav Motive» (1982), «Artist F. Gumen» (1985), «People\'s Artist of the USSR S. Stanyuta» (1990), «Evening» (1991), «Actress Natalya Aladka» (1992).',
				'«Flying» (2000), «Artist G. Shutov» (2001), «Afghans» (2005), «A century has passed...» (2007).',
				'Series «Old Vitebsk» (1971-1975), «Theater» (1975-1985), «Veterans. The month of May» (1975–2007), «Artists» (2010), etc.'
			]
		},
		photo: 'http://vitvesti.by/images/177-11/shmerling.jpg',
		photogallery: [
			'http://painters.vlib.by/images/sampledata/Shmerling/gallery/Shmerling-M-Afganets.jpg',
			'http://painters.vlib.by/images/sampledata/Shmerling/gallery/Shmerling-M-Bez-nazvaniya.jpg',
			'http://painters.vlib.by/images/sampledata/Shmerling/gallery/Shmerling-M-Chasy-pik.jpg',
			'http://painters.vlib.by/images/sampledata/Shmerling/gallery/Shmerling-M-Grigorij-Borodulin.jpg',
			'http://painters.vlib.by/images/sampledata/Shmerling/gallery/Shmerling-M-Indyuki.jpg',
			'http://painters.vlib.by/images/sampledata/Shmerling/gallery/Shmerling-M-Khudozhnik-G-Shutov.jpg',
			'http://painters.vlib.by/images/sampledata/Shmerling/gallery/Shmerling-M-Malchik-iz-Kozhuhova.jpg'
		],
		video: 'https://www.youtube.com/watch?v=Rh5e-qcdmdQ'
	}
];

export default photographersData;
