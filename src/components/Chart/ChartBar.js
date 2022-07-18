import './Chart.css'
const ChartBar=(props)=>{
    let barHeight= props.value+'%' //props.value/props.maxValue * 100 +'%';
    console.log(barHeight)
    return (
        <div className='bar__container'>
            <div className="bar__background">
                <div className="bar__foreground" style={{height:barHeight}}></div>
            </div>
            <label>{props.label}</label>
        </div>
    );
}
export default ChartBar