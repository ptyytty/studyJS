const quotes = [    //15개
    {
        quote: "삶이 있는 한 희망은 있다.",
        author: "키케로",
    },
    {
        quote: "산다는 것 그것은 치열한 전투이다.",
        author: "로망로랑",
    },
    {
        quote: "하루에 3시간을 걸으면 7년 후에 지구를 한 바퀴 돌 수 있다.",
        author: "사무엘 존슨",
    },
    {
        quote: "언제나 현재에 집중할 수 있다면 행복할 것이다..",
        author: "파울로 코엘료",
    },
    {
        quote: "신은 용기있는 자를 결코 버리지 않는다.",
        author: "켄러",
    },
    {
        quote: "피할 수 없으면 즐겨라.",
        author: "로버트 엘리엇",
    },
    {
        quote: "먼저 핀 꽃은 먼저 진다. 남보다 먼저 공을 세우려고 조급히 서둘 것이 아니다.",
        author: "채근담",
    },
    {
        quote: "어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다.",
        author: "제임스 오펜하임",
    },
    {
        quote: "행복은 습관이다. 그것을 몸에 지니라.",
        author: "허버드",
    },
    {
        quote: "1퍼센트의 가능성, 그것이 나의 길이다.",
        author: "나폴레옹",
    },
    {
        quote: "만약 우리가 할 수 있는 일을 모두 한다면 우리들은 우리 자신에 깜짝 놀랄 것이다.",
        author: "에디슨",
    },
    {
        quote: "고개 숙이지 마십시오. 세상을 똑바로 정면으로 바라보십시오.",
        author: "헬렌 켈러",
    },
    {
        quote: "고난의 시기에 동요하지 않는 것, 이것은 진정 칭찬받을 만한 뛰어난 인물의 증거다.",
        author: "베토벤",
    },
    {
        quote: "그대의 하루하루를 그대의 마지막 날이라고 생각하라.",
        author: "호라티우스",
    },
    {
        quote: "자신을 내보여라. 그러면 재능이 드러날 것이다.",
        author: "발타사르 그라시안",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;