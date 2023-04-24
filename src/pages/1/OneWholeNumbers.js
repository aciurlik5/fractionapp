// import logo from './logo.svg';
import '../../App.css';
import AudioPlayer from '../../components/AudioPlayer'
import VideoPlayer from '../../components/VideoPlayer'
import QuestionViewerMultiSelect from '../../components/QuestionViewerMultiSelect'
import {useEffect, useState} from 'react';
// eslint-disable-next-line no-unused-vars
// import VideoPlayer from './components/VideoPlayer'
// import QuestionViewerSingleSelect from './components/QuestionViewerSingleSelect'
// import QuestionViewerMultiSelect from './components/QuestionViewerMultiSelect';


function LessonOne() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Count is now: ', count);
      }, [count]);
    
      const handleClick  = event => {
        setCount(count + 1);
      };

      const handleClickBack  = event => {
        setCount(count - 1);
      };

  return (
    <div className="Lesson-Content-Text">
        <p>
            Lesson One: Whole Numbers
        </p>

    {count === 0 &&
    <AudioPlayer
      speakerImage='https://gt-fraction-project-689344193484.s3-accesspoint.us-east-1.amazonaws.com/BugBoy.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMSJHMEUCIHeJOt7zPmaVlHLzogRhYxUixZiMlHd2GRGKTKJDFOuaAiEAnWSUPC472%2FN1EADUz9b9hXYrJj2lHTBFk5C27dhnhAUq5AIIPxACGgw2ODkzNDQxOTM0ODQiDPKg0UiRw3N76cAOlSrBAjsf3fe53eW9DBq1NY%2FAjA7UA2ir%2BaiOkvTff%2BwKJf8HKF%2BzRYGOqp2LTS%2BjvuJYtENNy%2F1ccAcJ%2BgSUUhEoIqlrXxORyxLbWs2x4kdCcOdyx9urk0wMlz8RxitVsk7MJTHr8YhSLCjrdTQdMNKNyLkIgINMhuCRIuMgwC1jgsEmhzxt7B2yrIhs9vG%2BeF7chMbX2mP%2FsBa2QhAd8BJ36Wx9AN%2BW9EyO%2BD8QjdRtFYTGpj9QZy2kgU2Ir8UJcmEH%2BQi9dSYtOroUa%2Finiw9Kn2%2FYelPP4epBys10m5Uo%2BdaJfWQanAB60kVp8anH4X3v0zW%2BiYt3P77ErFNQSWw%2BdoHYQXLLPub84MsBIlMtr4dk0bEwtO47m%2BnFGHfolFrMucHdAwwS79oInEkbbykLwFb4ZOv6GkBIpz8XKGFFnE0nujDRvvOhBjqzAsdKPcDzRt%2FkPGzKLwn98amR4ONNLmET6YwE6Oyw5kcrry%2B3TQxXHmp%2BrvJUDKPUhv0VK%2BJvqSZfe7FssFLvElzuizeshFTggFdJIkv5ZCKcabc3P40%2BKERNq8S7f1b8WdzBhffl3OtxPmyyrwvL3QBHwoHxmyCTG2oOTdS7sThfth99vpHXARvsJL%2FyHeRMpWNfuXkmIZlVG%2B1IYtR4NtrGNH4LkJLi9wT0HGlb51XwWIy9%2FvZC2bpnvHLWtfgDf5EXp3pAfAYoMTvKjk07TTYZ2bChhixQ3RuW4uHiKHOEDZUbIv%2FhyACxsIPL2falK46Rd%2FXHAUb35LC3h322H4t4zyuCE6tlbwseXe39J8lwREEl7QQOxCrjjvERKk1fsUIoVZrxduI59pguR29ffCWE5zM%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230417T060012Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA2BAA5UPGBPOKRU3P%2F20230417%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5bf6f8d96ea18cfb4f2c3dfb5e06ddcfd3693d6be4cdf1dc35cdc4e4c14f15ee'
      audioLink='https://gt-fraction-project-689344193484.s3-accesspoint.us-east-1.amazonaws.com/868b7913-9ab2-49ba-b470-349bc7c9a279.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMSJHMEUCIHeJOt7zPmaVlHLzogRhYxUixZiMlHd2GRGKTKJDFOuaAiEAnWSUPC472%2FN1EADUz9b9hXYrJj2lHTBFk5C27dhnhAUq5AIIPxACGgw2ODkzNDQxOTM0ODQiDPKg0UiRw3N76cAOlSrBAjsf3fe53eW9DBq1NY%2FAjA7UA2ir%2BaiOkvTff%2BwKJf8HKF%2BzRYGOqp2LTS%2BjvuJYtENNy%2F1ccAcJ%2BgSUUhEoIqlrXxORyxLbWs2x4kdCcOdyx9urk0wMlz8RxitVsk7MJTHr8YhSLCjrdTQdMNKNyLkIgINMhuCRIuMgwC1jgsEmhzxt7B2yrIhs9vG%2BeF7chMbX2mP%2FsBa2QhAd8BJ36Wx9AN%2BW9EyO%2BD8QjdRtFYTGpj9QZy2kgU2Ir8UJcmEH%2BQi9dSYtOroUa%2Finiw9Kn2%2FYelPP4epBys10m5Uo%2BdaJfWQanAB60kVp8anH4X3v0zW%2BiYt3P77ErFNQSWw%2BdoHYQXLLPub84MsBIlMtr4dk0bEwtO47m%2BnFGHfolFrMucHdAwwS79oInEkbbykLwFb4ZOv6GkBIpz8XKGFFnE0nujDRvvOhBjqzAsdKPcDzRt%2FkPGzKLwn98amR4ONNLmET6YwE6Oyw5kcrry%2B3TQxXHmp%2BrvJUDKPUhv0VK%2BJvqSZfe7FssFLvElzuizeshFTggFdJIkv5ZCKcabc3P40%2BKERNq8S7f1b8WdzBhffl3OtxPmyyrwvL3QBHwoHxmyCTG2oOTdS7sThfth99vpHXARvsJL%2FyHeRMpWNfuXkmIZlVG%2B1IYtR4NtrGNH4LkJLi9wT0HGlb51XwWIy9%2FvZC2bpnvHLWtfgDf5EXp3pAfAYoMTvKjk07TTYZ2bChhixQ3RuW4uHiKHOEDZUbIv%2FhyACxsIPL2falK46Rd%2FXHAUb35LC3h322H4t4zyuCE6tlbwseXe39J8lwREEl7QQOxCrjjvERKk1fsUIoVZrxduI59pguR29ffCWE5zM%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230417T060503Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA2BAA5UPGBPOKRU3P%2F20230417%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=df04198b2514692855fc98406b5cad3387ed81e9369d55a61114783cb7c78e6b'/>
        
    }


    {count === 1 &&
    <div>
    <AudioPlayer
      speakerImage='https://gt-final-resources.s3.us-east-1.amazonaws.com/BugBoy.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJGMEQCIFs6z%2B13a2DedPp1SE%2BrpiAphzV%2Fak2xf8Z4vn700xniAiBNZIQtQEciYNuWXgvpSeW3MVHUIsXGyHjKKkr5EN%2FQ6yrtAgiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAIaDDY4OTM0NDE5MzQ4NCIMMrlB2ZHvzmWW5XFOKsEC%2FhRfHWK0h0RaGeznWRcouQ5uqvGeYEJs6z23Wz7XkG54%2FP4XeGAYLWVMd9BzNjayncrLRUTnkuM4icoIW1MOVyFAArFpVZNX8tSiUwN%2FqqM3Akcy0UpAkFcOsXhikgGcQBJtetk8Dy4TnAU2uh1GHfQBjHVtYkJk9zdFRpua8CR5oM7q0lAkgZZzt%2FFqxpmrSQNkWjlzcXTbzDhWHOJGbaRj1i6Nv%2FcFqAxDcEumrZwDxoe34ErATfp9qwIg2lu5dVwBEPc9d2l2feWoLAwDzTPpd7ofoHIn05hNjv3XLPSgBmiYFS1d5i9RBNg5jPudze0%2F4ig0nIQkZoSFrJaE53HFOGmtz5G6N8vjN6iLCZNq1QIILDUGP%2FfEPHRG352iOXEhJGJI5Mmg9y5jT8ogOMP1s6q6iCuoedo7HrGalnthMLCMzqEGOrQC14Khs5eP1Ig75YGvSumbXbzmbJ9tEAGAJF3k2aYIufgpfTcRo8jatoutiEe4AhPVLBuVfKVv2mmJaiVFFqs%2FnVwFSkasPO1wDaqZRUKZLYko4Bva4Z%2FsN98m2Wt7qmHBd2vAvB8mVos9EKS9cbXFeUoWsNHnz6oqFBLVkryXueYz5l8Wp1M0hEsF%2BCQUCGRrGpCdYhajrCLXmNNyWpdvlR8DujeJkuFZqWBfPBTeo8Fok2BaX7kLGLrB92ZUKtMCpiXufmRsJhE4ENFFPGJh0EJoSFU506URDW2Fv6b62SNJ1ENd2mu4y%2FZd%2BBUkYKySkk1JzUCZv7HUdzADetrG8jilyxqcZPd4PQLOu9NZ2TbtoPDQ5wkn%2BgqK%2B2lMFracArbdCtQjeb383DA2XSrbd2lZXdM%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230410T034823Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA2BAA5UPGAWV7PPQC%2F20230410%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=26d4b22bd99993f9af8ecff6a1b8e8ad4eb974afabeeb03d3b36435b7966d7bf'
      audioLink='https://gt-final-resources.s3.us-east-1.amazonaws.com/6493f5d4-5631-4695-8952-570cfa01a357.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJGMEQCIFs6z%2B13a2DedPp1SE%2BrpiAphzV%2Fak2xf8Z4vn700xniAiBNZIQtQEciYNuWXgvpSeW3MVHUIsXGyHjKKkr5EN%2FQ6yrtAgiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAIaDDY4OTM0NDE5MzQ4NCIMMrlB2ZHvzmWW5XFOKsEC%2FhRfHWK0h0RaGeznWRcouQ5uqvGeYEJs6z23Wz7XkG54%2FP4XeGAYLWVMd9BzNjayncrLRUTnkuM4icoIW1MOVyFAArFpVZNX8tSiUwN%2FqqM3Akcy0UpAkFcOsXhikgGcQBJtetk8Dy4TnAU2uh1GHfQBjHVtYkJk9zdFRpua8CR5oM7q0lAkgZZzt%2FFqxpmrSQNkWjlzcXTbzDhWHOJGbaRj1i6Nv%2FcFqAxDcEumrZwDxoe34ErATfp9qwIg2lu5dVwBEPc9d2l2feWoLAwDzTPpd7ofoHIn05hNjv3XLPSgBmiYFS1d5i9RBNg5jPudze0%2F4ig0nIQkZoSFrJaE53HFOGmtz5G6N8vjN6iLCZNq1QIILDUGP%2FfEPHRG352iOXEhJGJI5Mmg9y5jT8ogOMP1s6q6iCuoedo7HrGalnthMLCMzqEGOrQC14Khs5eP1Ig75YGvSumbXbzmbJ9tEAGAJF3k2aYIufgpfTcRo8jatoutiEe4AhPVLBuVfKVv2mmJaiVFFqs%2FnVwFSkasPO1wDaqZRUKZLYko4Bva4Z%2FsN98m2Wt7qmHBd2vAvB8mVos9EKS9cbXFeUoWsNHnz6oqFBLVkryXueYz5l8Wp1M0hEsF%2BCQUCGRrGpCdYhajrCLXmNNyWpdvlR8DujeJkuFZqWBfPBTeo8Fok2BaX7kLGLrB92ZUKtMCpiXufmRsJhE4ENFFPGJh0EJoSFU506URDW2Fv6b62SNJ1ENd2mu4y%2FZd%2BBUkYKySkk1JzUCZv7HUdzADetrG8jilyxqcZPd4PQLOu9NZ2TbtoPDQ5wkn%2BgqK%2B2lMFracArbdCtQjeb383DA2XSrbd2lZXdM%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230410T052051Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA2BAA5UPGAWV7PPQC%2F20230410%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9b3cafbeeb809d96f2d93ed19e8fa96ff54c19ee1cab616952cde0887bb9bae6'/>
      
      
    <AudioPlayer
      speakerImage='https://gt-final-resources.s3.us-east-1.amazonaws.com/DAI.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJGMEQCIFs6z%2B13a2DedPp1SE%2BrpiAphzV%2Fak2xf8Z4vn700xniAiBNZIQtQEciYNuWXgvpSeW3MVHUIsXGyHjKKkr5EN%2FQ6yrtAgiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAIaDDY4OTM0NDE5MzQ4NCIMMrlB2ZHvzmWW5XFOKsEC%2FhRfHWK0h0RaGeznWRcouQ5uqvGeYEJs6z23Wz7XkG54%2FP4XeGAYLWVMd9BzNjayncrLRUTnkuM4icoIW1MOVyFAArFpVZNX8tSiUwN%2FqqM3Akcy0UpAkFcOsXhikgGcQBJtetk8Dy4TnAU2uh1GHfQBjHVtYkJk9zdFRpua8CR5oM7q0lAkgZZzt%2FFqxpmrSQNkWjlzcXTbzDhWHOJGbaRj1i6Nv%2FcFqAxDcEumrZwDxoe34ErATfp9qwIg2lu5dVwBEPc9d2l2feWoLAwDzTPpd7ofoHIn05hNjv3XLPSgBmiYFS1d5i9RBNg5jPudze0%2F4ig0nIQkZoSFrJaE53HFOGmtz5G6N8vjN6iLCZNq1QIILDUGP%2FfEPHRG352iOXEhJGJI5Mmg9y5jT8ogOMP1s6q6iCuoedo7HrGalnthMLCMzqEGOrQC14Khs5eP1Ig75YGvSumbXbzmbJ9tEAGAJF3k2aYIufgpfTcRo8jatoutiEe4AhPVLBuVfKVv2mmJaiVFFqs%2FnVwFSkasPO1wDaqZRUKZLYko4Bva4Z%2FsN98m2Wt7qmHBd2vAvB8mVos9EKS9cbXFeUoWsNHnz6oqFBLVkryXueYz5l8Wp1M0hEsF%2BCQUCGRrGpCdYhajrCLXmNNyWpdvlR8DujeJkuFZqWBfPBTeo8Fok2BaX7kLGLrB92ZUKtMCpiXufmRsJhE4ENFFPGJh0EJoSFU506URDW2Fv6b62SNJ1ENd2mu4y%2FZd%2BBUkYKySkk1JzUCZv7HUdzADetrG8jilyxqcZPd4PQLOu9NZ2TbtoPDQ5wkn%2BgqK%2B2lMFracArbdCtQjeb383DA2XSrbd2lZXdM%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230410T035057Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA2BAA5UPGAWV7PPQC%2F20230410%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5e16d256d0e9f542652b101eaad46b50dbe0b27dc41622429a8aaa97b6aed655'
      audioLink='https://gt-final-resources.s3.us-east-1.amazonaws.com/e7595a8e-52ed-46e1-a3f9-eadb4b278140.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJGMEQCIFs6z%2B13a2DedPp1SE%2BrpiAphzV%2Fak2xf8Z4vn700xniAiBNZIQtQEciYNuWXgvpSeW3MVHUIsXGyHjKKkr5EN%2FQ6yrtAgiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAIaDDY4OTM0NDE5MzQ4NCIMMrlB2ZHvzmWW5XFOKsEC%2FhRfHWK0h0RaGeznWRcouQ5uqvGeYEJs6z23Wz7XkG54%2FP4XeGAYLWVMd9BzNjayncrLRUTnkuM4icoIW1MOVyFAArFpVZNX8tSiUwN%2FqqM3Akcy0UpAkFcOsXhikgGcQBJtetk8Dy4TnAU2uh1GHfQBjHVtYkJk9zdFRpua8CR5oM7q0lAkgZZzt%2FFqxpmrSQNkWjlzcXTbzDhWHOJGbaRj1i6Nv%2FcFqAxDcEumrZwDxoe34ErATfp9qwIg2lu5dVwBEPc9d2l2feWoLAwDzTPpd7ofoHIn05hNjv3XLPSgBmiYFS1d5i9RBNg5jPudze0%2F4ig0nIQkZoSFrJaE53HFOGmtz5G6N8vjN6iLCZNq1QIILDUGP%2FfEPHRG352iOXEhJGJI5Mmg9y5jT8ogOMP1s6q6iCuoedo7HrGalnthMLCMzqEGOrQC14Khs5eP1Ig75YGvSumbXbzmbJ9tEAGAJF3k2aYIufgpfTcRo8jatoutiEe4AhPVLBuVfKVv2mmJaiVFFqs%2FnVwFSkasPO1wDaqZRUKZLYko4Bva4Z%2FsN98m2Wt7qmHBd2vAvB8mVos9EKS9cbXFeUoWsNHnz6oqFBLVkryXueYz5l8Wp1M0hEsF%2BCQUCGRrGpCdYhajrCLXmNNyWpdvlR8DujeJkuFZqWBfPBTeo8Fok2BaX7kLGLrB92ZUKtMCpiXufmRsJhE4ENFFPGJh0EJoSFU506URDW2Fv6b62SNJ1ENd2mu4y%2FZd%2BBUkYKySkk1JzUCZv7HUdzADetrG8jilyxqcZPd4PQLOu9NZ2TbtoPDQ5wkn%2BgqK%2B2lMFracArbdCtQjeb383DA2XSrbd2lZXdM%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230410T052524Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA2BAA5UPGAWV7PPQC%2F20230410%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=635aaa995cfd64fb57a46ac61718a7ccf91eaa55568f7bde5ef5204d4ac721d2'/>

    </div> 
}

    {count ===2 &&
     <QuestionViewerMultiSelect
        questions={[{q:{'QuestionText': 'Select all whole numbers', 'QID': 'L1Q', 'CorrectCount': 2}, a:[{'OptionText': '1/2', 'isCorrect': false}, {'OptionText': '50', 'isCorrect': true}, {'OptionText': '.5', 'isCorrect': false},  {'OptionText': '3', 'isCorrect': true}]}, 
        {q:{'QuestionText': 'What number comes directly after four when counting?', 'QID': 'L1Q', 'CorrectCount': 1}, a:[{'OptionText': '5', 'isCorrect': true}, {'OptionText': '6', 'isCorrect': false}, {'OptionText': '3', 'isCorrect': false}]}]}
        /> 
    }  


{count === 3 &&
<div>
    
    <AudioPlayer
      speakerImage='https://gt-final-resources.s3.us-east-1.amazonaws.com/BugBoy.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJGMEQCIFs6z%2B13a2DedPp1SE%2BrpiAphzV%2Fak2xf8Z4vn700xniAiBNZIQtQEciYNuWXgvpSeW3MVHUIsXGyHjKKkr5EN%2FQ6yrtAgiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAIaDDY4OTM0NDE5MzQ4NCIMMrlB2ZHvzmWW5XFOKsEC%2FhRfHWK0h0RaGeznWRcouQ5uqvGeYEJs6z23Wz7XkG54%2FP4XeGAYLWVMd9BzNjayncrLRUTnkuM4icoIW1MOVyFAArFpVZNX8tSiUwN%2FqqM3Akcy0UpAkFcOsXhikgGcQBJtetk8Dy4TnAU2uh1GHfQBjHVtYkJk9zdFRpua8CR5oM7q0lAkgZZzt%2FFqxpmrSQNkWjlzcXTbzDhWHOJGbaRj1i6Nv%2FcFqAxDcEumrZwDxoe34ErATfp9qwIg2lu5dVwBEPc9d2l2feWoLAwDzTPpd7ofoHIn05hNjv3XLPSgBmiYFS1d5i9RBNg5jPudze0%2F4ig0nIQkZoSFrJaE53HFOGmtz5G6N8vjN6iLCZNq1QIILDUGP%2FfEPHRG352iOXEhJGJI5Mmg9y5jT8ogOMP1s6q6iCuoedo7HrGalnthMLCMzqEGOrQC14Khs5eP1Ig75YGvSumbXbzmbJ9tEAGAJF3k2aYIufgpfTcRo8jatoutiEe4AhPVLBuVfKVv2mmJaiVFFqs%2FnVwFSkasPO1wDaqZRUKZLYko4Bva4Z%2FsN98m2Wt7qmHBd2vAvB8mVos9EKS9cbXFeUoWsNHnz6oqFBLVkryXueYz5l8Wp1M0hEsF%2BCQUCGRrGpCdYhajrCLXmNNyWpdvlR8DujeJkuFZqWBfPBTeo8Fok2BaX7kLGLrB92ZUKtMCpiXufmRsJhE4ENFFPGJh0EJoSFU506URDW2Fv6b62SNJ1ENd2mu4y%2FZd%2BBUkYKySkk1JzUCZv7HUdzADetrG8jilyxqcZPd4PQLOu9NZ2TbtoPDQ5wkn%2BgqK%2B2lMFracArbdCtQjeb383DA2XSrbd2lZXdM%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230410T034823Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA2BAA5UPGAWV7PPQC%2F20230410%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=26d4b22bd99993f9af8ecff6a1b8e8ad4eb974afabeeb03d3b36435b7966d7bf'
      audioLink='https://gt-final-resources.s3.us-east-1.amazonaws.com/ec55d096-0fe2-4c69-98c0-0ead478c30f4.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJGMEQCIFs6z%2B13a2DedPp1SE%2BrpiAphzV%2Fak2xf8Z4vn700xniAiBNZIQtQEciYNuWXgvpSeW3MVHUIsXGyHjKKkr5EN%2FQ6yrtAgiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAIaDDY4OTM0NDE5MzQ4NCIMMrlB2ZHvzmWW5XFOKsEC%2FhRfHWK0h0RaGeznWRcouQ5uqvGeYEJs6z23Wz7XkG54%2FP4XeGAYLWVMd9BzNjayncrLRUTnkuM4icoIW1MOVyFAArFpVZNX8tSiUwN%2FqqM3Akcy0UpAkFcOsXhikgGcQBJtetk8Dy4TnAU2uh1GHfQBjHVtYkJk9zdFRpua8CR5oM7q0lAkgZZzt%2FFqxpmrSQNkWjlzcXTbzDhWHOJGbaRj1i6Nv%2FcFqAxDcEumrZwDxoe34ErATfp9qwIg2lu5dVwBEPc9d2l2feWoLAwDzTPpd7ofoHIn05hNjv3XLPSgBmiYFS1d5i9RBNg5jPudze0%2F4ig0nIQkZoSFrJaE53HFOGmtz5G6N8vjN6iLCZNq1QIILDUGP%2FfEPHRG352iOXEhJGJI5Mmg9y5jT8ogOMP1s6q6iCuoedo7HrGalnthMLCMzqEGOrQC14Khs5eP1Ig75YGvSumbXbzmbJ9tEAGAJF3k2aYIufgpfTcRo8jatoutiEe4AhPVLBuVfKVv2mmJaiVFFqs%2FnVwFSkasPO1wDaqZRUKZLYko4Bva4Z%2FsN98m2Wt7qmHBd2vAvB8mVos9EKS9cbXFeUoWsNHnz6oqFBLVkryXueYz5l8Wp1M0hEsF%2BCQUCGRrGpCdYhajrCLXmNNyWpdvlR8DujeJkuFZqWBfPBTeo8Fok2BaX7kLGLrB92ZUKtMCpiXufmRsJhE4ENFFPGJh0EJoSFU506URDW2Fv6b62SNJ1ENd2mu4y%2FZd%2BBUkYKySkk1JzUCZv7HUdzADetrG8jilyxqcZPd4PQLOu9NZ2TbtoPDQ5wkn%2BgqK%2B2lMFracArbdCtQjeb383DA2XSrbd2lZXdM%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230410T054305Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA2BAA5UPGAWV7PPQC%2F20230410%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=64f87f18faaa9bae619dbb4faf7f067d2fd68c2622a977e89d4290d162a85f7d'/>
        
        <br></br>

        Congrats on Mastering Whole Numbers!
    </div>

    
    }



{count === 4 &&
<div>
    
    <VideoPlayer/>
        
    </div>

    
}








<div>

{count < 4 && <div
        style={{textAlign: "right", paddingRight: "15px"}}
        >
            <button
        className='Lesson-Content-Button'
         onClick={() => {
            handleClick();
            }}>Continue</button>
        </div>
}

{count > 0 && <div
        style={{textAlign: "left", paddingLeft: "15px"}}
        >
            <button
        className='Lesson-Content-Button'
         onClick={() => {
            handleClickBack();
            }}>Back</button>
        </div>
}


</div>






  {/*
      <QuestionViewerSingleSelect
      questions={[{q:{'QuestionText': 'Which fraction is bigger than 1/2', 'QID': 'L1Q'}, a:[{'OptionText': '1/4', 'isCorrect': false}, {'OptionText': '2/3', 'isCorrect': true}]}, 
                  {q:{'QuestionText': 'Which fraction is bigger than 1/3', 'QID': 'L1Q'}, a:[{'OptionText': '1/8', 'isCorrect': false}, {'OptionText': '3/3', 'isCorrect': true}]}]}
      />

<QuestionViewerMultiSelect
        questions={[{q:{'QuestionText': 'Which fraction is bigger than 1/2', 'QID': 'L1Q', 'CorrectCount': 1}, a:[{'OptionText': '1/4', 'isCorrect': false}, {'OptionText': '2/3', 'isCorrect': true}]}, 
        {q:{'QuestionText': 'Which fraction is bigger than 1/3', 'QID': 'L1Q', 'CorrectCount': 2}, a:[{'OptionText': '8/8', 'isCorrect': true}, {'OptionText': '3/3', 'isCorrect': true}]}]}
        /> */}
    </div>
  );
}


function continueToNextPage(){
    console.log('doing')
    // setCurrentSlide(currentSlide+1)
 
}

export default LessonOne;
