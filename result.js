
temp = location.href.split("?");
mbti = temp[1];


document.getElementById("hiddenMbti").value = mbti;
console.log(mbti);

var mbti16 = ["ISFJ","ISFP","ISTJ","ISTP","INFJ","INFP","INTJ","INTP",
"ESFJ","ESFP","ESTJ","ESTP","ENFJ","ENFP","ENTJ","ENTP"];


 ISFP = {sub: "호기심많은 예술가",
    myMbti: "ISFJ",
    explain: "자유로운 표현을 중요시하고 감수성이 풍부하고 예민한 당신! 공감능력이 뛰어나고 남에게 싫은 소리는 안하는 성격이에요. 온화하고 친절하며, 말없이 다정하고 정이 많습니다." ,
    job: ["아동 복지 상담사","의사","배우","인테리어 디자이너","환경 과학자"]};

 ISTP = {sub: "만능재주꾼",
    myMbti: "ISTP",
    explain: "현실감각이 뛰어나며 임기응변에 능합니다. 잔재주가 많고 순간 집중력이 좋아 한 번 해야겠다고 생각하면 바로 추진하는 성격을 갖고 있습니다. 분석을 잘하며 관찰력이 뛰어나다는 특징이 있습니다."
    ,
    job: ["소방관 ","경찰관","파일럿","소프트웨어 엔지니어","조경사"]};

 ISFJ = {sub: "용감한 수호자",
    myMbti: "ISFJ",
    explain: "눈치가 매우빠르고 끈기 있고 성실한 성격입니다. 타인에게는 관대하지만 자신에게는 엄격하고, 표현이 적고 속에 있는 이야기를 잘 하지 않는다는 특징이 있습니다. 새로운 변화는 그닥 좋아하지 않습니다." ,
    job: ["번역가 ","유치원 교사","음악가","치과 위생사","창업가"]};

 ISTJ = {sub: "청렴결백한 논리주의자",
    myMbti: "ISTJ",
    explain: "원리원칙적이고, 계획적이며, 참을성이 강하고 믿음직스러운 성격을 가지고있습니다. 세부적인 것, 올바른 것, 실질적인 절차에 흥미가 많고 즉흥적인 것을 싫어합니다. 신임과 안정성을 꾀하는 일에 두드러집니다."
    ,
    job: ["회계사 ","요리사","세무조사원","도서관 사무장","웹 개발자"]};

 INTP = {sub: "논리적인 사색가",
    myMbti: "INTP",
    explain: "조용하고 과묵하며 이해가 빠르고 높은 직관력을 가지고 있어 논리와 분석으로 문제를 해결하길 좋아합니다. 개인적인 인간관계나 친목회에 별로 관심이 없고, 객관적 비평을 잘합니다. 본인의 지적 호기심을 발휘할 수 있는 순수과학 연구 등의 분야에 관심이 많다는 특징이 있습니다."
    ,
    job: ["성직자","마케팅 분석가","비평가","교수","설계자"]};

 INFP = {sub: "열정적인 중재자",
    myMbti: "INFP",
    explain: "내면의 세계를 추구하고 본인이 원하는 이상향의 세계를 만들어나가는 성향이 있습니다. 공감 능력이 좋아 중재자 역할을 잘하고, 조금 게으르지만 완벽주의를 추구한다는 특징이 있습니다. 상처도 잘받고 감정적인 경향이 있습니다. 공상적이고 호기심이 많은 편입니다."
    ,
    job: ["작가 ","심리학자","건축가","미술가","사진가"]};

INTJ = {sub: "용의주도한 전략가",
    myMbti: "INTJ",
    explain: "상상력이 풍부하며 철두철미한 계획을 세우는 전략가형입니다. 굉장한 개인주의자이며,감정에 휘둘리기 싫어하고, 쓸데없는 곳에 에너지를 낭비하지 않습니다. 야망이 있지만 대외적으로 표현하지 않고, 사람많고 시끄러운 장소는 싫어합니다."
    ,
    job: ["과학자 ","생명공학자","시스템 관리자","고고 생물 학자","엔지니어링"]};


 INFJ = {sub: "선의의 옹호자",
    myMbti: "INFJ",
    explain: "솔직하고 적극적이며 나에 대해 표현하려는 욕구가 강합니다. 단호함과 결단력을 가지고 있고, 책임감이 강하고 진지한 스타일입니다. 가장 흔치 않은 성격유형으로, 인구의 채 1%도 되지 않습니다. 분쟁과 다툼을 싫어하여 피하고자 하는 성향이 있습니다. "
    ,
    job: ["순수예술가","교육 분야 컨설턴트","시인","병리학 의사","언론매체 관련직"]};

 ESFJ= {sub: "사교적인 외교관",
    myMbti: "ESFJ",
    explain: "동정심이 많고 타고난 협력자로서 동료애가 많고 친절합니다.남에게 동조하는 경향이 뛰어나며 사람들과의 상호활동에 힘을 얻습니다. 다른 성향에 비해 월등히 친화력이 높고, 타인의 인정을 받는 것에 아주 민감해합니다. "
    ,
    job: ["영업 담당자","의료 업계 종사자","사회 복지사","홍보 담당자","대출 담당자"]};

 ESTJ= {sub: "엄격한 관리자",
    myMbti: "ESTJ",
    explain: "외향적이고 감정이 잘 드러나 직설적인 언어로 표현하곤 합니다. 모든것이 제자리에 있어야하고 계획이 틀어지는 것을 싫어합니다. 창의력이 다소 부족하지만 목표지향적이고, 자기 관리가 매우 철저한 점이 특징입니다. "
    ,
    job: ["보험 영업 사원","약사","변호사","판사","프로젝트 매니저"]};

 ESFP= {sub: "자유로운 영혼의 연예인",
    myMbti: "ESFP",
    explain: "정이 많고 낙천적인 유형입니다. 다같이 모인 자리에서 분위기를 즐겁고 신나게 만드는 분위기 메이커이고, 사교적이고 활동적인 성격으로 어떤 상황이든 잘 적응합니다. 주위 사람들에게 관심이 매우 많고 사물을 다루는 상식이 풍부합니다. "
    ,
    job: ["아동 복지 상담사","주치의","배우","인테리어 디자이너","환경 과학자"]};

 ENTP= {sub: "뜨거운 논쟁을 즐기는 변론가",
    myMbti: "ENTP",
    explain: "지식 추구에 대한 열망이 강해 박식하고 창의력이 풍부하기 때문에 안목이 넓고 다방면에 관심과 재능이 많습니다. 새로운 일을 시도하는 솔선력이 강하고 논리적이라 어떤 문제에 대한 해결 능력이 뛰어납니다. 사람들의 동향에도 관심이 많습니다. "
    ,
    job: ["기업가","부동산 개발자","광고 디렉터","마케팅 디렉터","정치인"]};

 ESTP= {sub: "모험을 즐기는 사업가",
    myMbti: "ESTP",
    explain: "객관적이고 논리적인 성격을 가져 현실 감각이 강하며 타협책을 모색하고 문제를 해결하는 능력이 뛰어납니다. 센스가 탁월해 어디서든 잘 적응하고, 긴 설명보단 오감으로 보고 듣고 만질 수 있는 삶의 모든 것을 즐깁니다. "
    ,
    job: ["탐정","은행원","투자자","엔터테인먼트 회사원","스포츠 코치"]};

 ENTJ= {sub: "대담한 통솔자",
    myMbti: "ENTJ",
    explain: "열정적이며 자기 주장이 강해 지도력과 통솔력이 뛰어납니다. 효율성을 중요시하여 일처리가 신속하고 정확합니다. 공감능력이 조금 부족하고 감정 표현에 솔직합니다. 또한 자존감, 자기애가 굉장히 높은 mbti 중 하나입니다. "
    ,
    job: ["경영진","변호사","시장 조사 분석가","경영 상담가","벤처 투자가"]};

 ENFP= {sub: "재기발랄한 활동가",
    myMbti: "ENFP",
    explain: "따뜻하고 활기차며 재능이 많고 상상력이 풍부합니다. 다소 충동적인 경향이 있지만 항상 새로운 가능성을 찾고 문제 해결 능력이 좋아 관심있는 일은 뭐든지 해냅니다. 사람들을 잘 다루고 뛰어난 통찰력으로 도움을 주기도 합니다. "
    ,
    job: ["언론인","광고 디렉터","상담가","레스토랑 오너","이벤트 기획자"]};

 ENFJ= {sub: "정의로운 사회운동가",
    myMbti: "ENFJ",
    explain: "따뜻하고 적극적이며, 사교성이 풍부하고 동정심이 많습니다. 이타적인 성향이 매우 강해 화합을 중요시하고, 타인의 반응에 예민해 부드러운 대화를 유도하기도 합니다. 미래의 가능성을 추구하며 편안하게 계획을 제시하고 집단을 이끌어 나가는 리더쉽이 있습니다. "
    ,
    job: ["광고 집행자","홍보 전문가","트레이너","영업 담당자","고용/인사 전문가"]};




var getmbti = [ISFJ,ISFP,ISTJ,ISTP,INFJ,INFP,INTJ,INTP,ESFJ,ESFP,ESTJ,ESTP,ENFJ,ENFP,ENTJ,ENTP];



const sub = document.querySelector("#sub");
const myMbti = document.querySelector("#mbti");
const explain = document.querySelector("#explain");
const job = document.querySelectorAll("label");


// 초기화 영역
for(var i=0;i<16;i++) {
    if (mbti === mbti16[i]) {
      sub.innerText = getmbti[i].sub;
      myMbti.innerText = mbti;
      explain.innerText = getmbti[i].explain;
     
           for(var j=0;j<5;j++) {
             $(job[j]).text(getmbti[i].job[j]);
              document.getElementsByName("job")[j].value = getmbti[i].job[j];
		
          }
	    break;
      }
}




// 체크박스 하나만 체크
function checkOnlyOne(element) {

  const checkboxes
      = document.getElementsByName("job");

  // 다른 체크박스들 모두 초기
  checkboxes.forEach((cb) => {
    cb.checked = false;
  })
  // 선택된 체크박스만 true로 Modify
  element.checked = true;
 
}

// submit 전 체크
function check(){
  const checkboxes
      = document.getElementsByName("job");
 check_var = false;
  checkboxes.forEach((cb) => {
      if(cb.checked == true){ // submit 조건 성립
	str = cb.value.replace(/\s+/g, '');
        document.getElementById("hiddenJob").value = str;
        check_var = true;
      }
	  
      })
	if(check_var == false){
		alert("마음에 드시는 직업을 하나 선택해주세요!");
		return false;
	}
	else{
		return true;
	}
      	
}
