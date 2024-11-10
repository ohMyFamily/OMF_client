import classNames from 'classnames';
import $ from './gradingcard.module.scss';
import ScoreButton from "../Item/ScoreButton";
import Title3 from "../Typography/Title3"
import Caption1 from '../Typography/Caption1';
import Body1 from '../Typography/Body1';
import Call from '../../../assets/svg/Tossface/Call.svg';

interface GradingCardProps {
    title: string;
    src: string;
    number: number;
    answer: string;
}
function GradingCard({number, title, answer, src}: GradingCardProps) {

    return (
        <div className={classNames($.gradingcard)}>

            <div className={classNames($.number)}>
                <Caption1>{number}/10</Caption1>
            </div>

            <div className={classNames($.questionWrapper)}> 
                <img src={Call}/>
                {/* <img className={classNames($.questionImg)} src={src}/> */}

                <Title3>
                    {/* {title} */}
                    어머니와<br/>
                    언제 마지막으로 통화했나요?
                </Title3>
            </div>

            <div className={classNames($.answerWrapper)}>
                <Body1>answer{answer}</Body1>
            </div>

            <div className={classNames($.ScoreButton)}>
            <ScoreButton items={['correct', 'incorrect']}/>
            </div>
        </div>
    )
}

export default GradingCard