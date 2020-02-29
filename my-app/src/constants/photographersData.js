const photographersData = [
	{
    id: 0,
    surname: 'Anempodistov',
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
		RU: {
			name: 'Ян Бу́лгак',
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
	}
];

export default photographersData;
