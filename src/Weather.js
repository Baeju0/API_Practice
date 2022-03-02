import React, { useEffect, useState } from "react";
import axios from "axios";

function Weather() {

    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(
    //         function(position) {
    //             console.log(position);
    //         },
    //         function(error) {
    //             console.log(error);
    //         }
    //     )
    // })



    // 두번째 시도
    const [weather, setWeather] = useState(null);
    const [icon, setIcon] = useState('');
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);


    // function iconRender() {
    //     var iconRen = 'http://openweathermap.org/img/wn/'+{icon}+'@2x.png';
    //     setIcon(iconRen)
    // }

    useEffect(() => {
        const fetchWeather = async() => {
            try {
                setWeather(null);
                setError(null);

                setLoading(true);
                const response = await axios.get(
                    'https://api.openweathermap.org/data/2.5/weather?q=seoul&lang=kr&appid=4b48e343728fa30415f6df25157c0e0e'
                );
                setWeather(response.data);
                setIcon(response.data.weather[0].icon)
                // console.log(response.data);
                // console.log(response.data.weather[0].icon);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };

        fetchWeather();
    }, []);


    if (loading) return <div>로딩중</div>
    if (error) return <div>에러</div>
    if (!weather) return null;

    return(
        <>

            {/* <div>{weather.weather[0].icon}</div> */}

            {/* <img src = {'http://openweathermap.org/img/wn/'+{icon}+'@2x.png'}/> */}
            
            {/* <img src={iconRender}/> */}
            
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
            <div>{weather.weather[0].main}</div>
            <div>{weather.name}</div>

            {/* Math.floor 소수점 버리기, 켈빈(K) - 273.15 = 섭씨(℃) */}
            <div>{Math.floor(weather.main.temp-273.15)}℃</div>
        </>
    )




// 첫번째 시도
    // const [weather, setWeather] = useState();   
    // const [loading, setLoading] = useState(true);


    // useEffect(()=>{
    //     axios.get('https://api.openweathermap.org/data/2.5/weather?q=seoul&lang=kr&appid=4b48e343728fa30415f6df25157c0e0e')
    //     .then((result)=>{
    //         console.log(result.data.weather);
    //         // setWeather(result.data.weather);
    //     })
    //     .catch(()=> {
    //         console.log('실패...');
    //     })
    // })

    // return(
    //     <div>
    //     use
    //     </div>
    // )
}

export default Weather;