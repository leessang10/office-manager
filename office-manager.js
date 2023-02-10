const pickMember = (members) => {
    // 리스트가 없거나 길이가 0일 경우 null을 반환합니다.
    if (!members || members.length === 0) {
        return null;
    }

    // 리스트에서 랜덤으로 원소 하나를 선택합니다.
    const randomIndex = Math.floor(Math.random() * members.length);
    const picked = members[randomIndex];
    // 선택한 원소를 리스트에서 제거합니다.
    members.splice(randomIndex, 1);

    return picked;
}

/* 변경해야하는 변수*/
// 전체 직원 명단
const AllMbers = [
    "문재형",
    "박대희",
    "박병훈",
    "박해영",
    "이규진",
    "이나영",
    "이도걸",
    "임현주",
    "조주형",
    "최광헌",
    "고세빈",
    "지유진"
];
// 오피스 카페 관리자 기간
const dateFrom = '01월 23일'
const dateTo = '02월 03일'
// 오피스 카페 관리자 아직 안 한 직원 명단
const candidates = [
    "문재형",
    "박대희",
    "박병훈",
    "박해영",
    "이규진",
    "이나영",
    "이도걸",
    "임현주",
    "조주형",
    "최광헌",
    "고세빈",
    "지유진"
]


/* 로직 구현*/
const officeManager = pickMember(candidates);
const msg = `@everyone
안녕하세요 오피스 카페 관리자 공지 드립니다!
${dateFrom} ~ ${dateTo} 동안의 오피스 카페 관리자를 안내 드립니다.
:꽃: 
@${officeManager}  :꽃:
오피스카페 관리자는 일주일에 한번 커피 구매가 가능합니다.
[담당자 업무 안내]
1. 오피스 카페의 쓰레기통이 차면 비워주세요
2. 오피스 카페의 선반을 닦아주세요
3. 바닥에 흘려진 커피 자국을 대걸레로 지워주세요
4. 회사 현관의 벨이 울리면 확인해주세요
5. 커피머신의 내부를 청소해주세요
6. 다음 관리자를 선정해주세요
:느낌표:중요.
관리자가 끝나시면 쓰레드에 있는 인원 목록으로 사다리 타기를 진행해서 다음 관리자 1명을 뽑고 공지 부탁 드립니다!!`


console.log("금주의 오카관: ", officeManager);
console.log("남은 오카관 후보: ", candidates);
console.log("===슬랙 공지용 메세지===\n");
console.log(msg);