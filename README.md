https://openweathermap.org/

Open Weather Map 사이트에 있는 오픈 api 키를 발급

useEffect를 사용하여 해당 컴포넌트(Weather)실행 시 바로 실행되게 함
axios 라이브러리를 이용하여 json문서 요청 링크+키값 입력하여 ajax 요청, get방식으로 json 문서 조회

Loading과 error라는 useState를 만들어 놓음
요청하기 시작할 때, Weather와 Error의 값을 초기화하고 setLoading은 true로 하여 loading값이 참일 때 로딩중 이라는 UI 띄우기
불러오기를 성공했다면 response라는 변수에 데이터 저장하고 setWeahter를 통해 weahter라는 state에 데이터 저장
(데이터가 잘 조회되나 확인을 위해 console.log로 찍어봄)

불러오기 실패 시 error 실행하여 에러라는 UI 띄움

json에 있는 데이터 중 기온과 지역, 날씨 정보와 날씨 정보에 따른 아이콘 가져오기
그 중에 날씨 정보에 따른 아이콘은 icon이라는 useState를 만들어 setIcon를 통해 값을 저장하고

중간에 변수명을 끼울 수 있는(?) <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>으로 url을 감싸는 ``기호와 변수 사용하기 위해 ${}로 입력
원래 사용하던 <img src= {'http://openweathermap.org/img/wn/'+{icon}+'@2x.png'}/> 와 같은 방식은 먹히지 않았음

그리고 기온은 api를 제공해주는 사이트에서 켈빈(K)이라는 단위를 사용했기 때문에, 우리나라에서 사용하는 단위인 섭씨로 바꾸기 위해
(불러온 기온(K)-273.15)로 입력 후 Math.floor함수를 사용하여 소수점은 잘라냄
