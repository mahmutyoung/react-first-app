import Card from "../UI/Card";
import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {

    console.log('<Chart> : initiated')
    const filteredByYearMonth = props.dataList
        .filter(item => item.year.toString() === props.filterYear)
        .map(e => {
            const yearMonth = e.year + '0' + e.month;
            return { key: yearMonth, value: e.value };
        })
    console.log(filteredByYearMonth)


    const yearMonthMap = new Map();
    filteredByYearMonth.forEach(item => {
        if (yearMonthMap.get(item.key) === undefined) {
            yearMonthMap.set(item.key, item.value)
        } else {
            yearMonthMap.set(item.key, yearMonthMap.get(item.key) + item.value)
        }
    })


    //The max value of all individual inputs(props.dataList) 
    const initialValues = props.dataList.map(item => item.value);
    const initialMax = Math.max(...initialValues)

    //The max value 
    const maxByYear = Math.max(...yearMonthMap.values())
    console.log(maxByYear)
    const overallMax = Math.max(initialMax, maxByYear)
    console.log(overallMax);


    const list = [
        <ChartBar label='Jan' value={0} key={Math.random().toString()} />,
        <ChartBar label='Feb' value={0} key={Math.random().toString()} />,
        <ChartBar label='Mar' value={0} key={Math.random().toString()} />,
        <ChartBar label='Apr' value={0} key={Math.random().toString()} />,
        <ChartBar label='May' value={0} key={Math.random().toString()} />,
        <ChartBar label='Jun' value={0} key={Math.random().toString()} />,
        <ChartBar label='Jul' value={0} key={Math.random().toString()} />,
        <ChartBar label='Aug' value={0} key={Math.random().toString()} />,
        <ChartBar label='Sep' value={0} key={Math.random().toString()} />,
        <ChartBar label='Oct' value={0} key={Math.random().toString()} />,
        <ChartBar label='Nov' value={0} key={Math.random().toString()} />,
        <ChartBar label='Dec' value={0} key={Math.random().toString()} />];


    for (const x of yearMonthMap.keys()) {
        switch (Number(x) % 100) {
            case 0:
                list[0] = <ChartBar label='Dec' value={yearMonthMap.get(x)} key={x} />
                break;
            case 1:
                list[1] = <ChartBar label='Dec' value={yearMonthMap.get(x)} key={x} />
                break;
            case 2:
                list[2] = <ChartBar label='Dec' value={yearMonthMap.get(x)} key={x} />
                break;
            case 3:
                list[3] = <ChartBar label='Dec' value={yearMonthMap.get(x)} key={x} />
                break;
            case 4:
                list[4] = <ChartBar label='Dec' value={yearMonthMap.get(x)} key={x} />
                break;
            case 5:
                list[5] = <ChartBar label='Dec' value={yearMonthMap.get(x)} key={x} />
                break;
            case 6:
                list[6] = <ChartBar label='Dec' value={yearMonthMap.get(x)} key={x} />
                break;
            case 7:
                list[7] = <ChartBar label='Dec' value={yearMonthMap.get(x)} key={x} />
                break;
            case 8:
                list[8] = <ChartBar label='Dec' value={yearMonthMap.get(x)} key={x} />
                break;
            case 9:
                list[9] = <ChartBar label='Dec' value={yearMonthMap.get(x)} key={x} />
                break;
            case 10:
                list[10] = <ChartBar label='Dec' value={yearMonthMap.get(x)} key={x} />
                break;
            case 11:
                list[11] = <ChartBar label='Dec' value={yearMonthMap.get(x)} key={x} />
                break;
            default:
                break;
        }
    }

    return (<Card className={props.filterYear!=="All"?'chart':'hidden'}>
        {props.filterYear!=="All"?list:''}
    </Card>
    );
}

export default Chart