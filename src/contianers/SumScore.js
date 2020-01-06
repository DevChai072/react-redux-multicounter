import React from 'react'
import { connect } from 'react-redux'
import SumScoreView from '../components/SumScoreView'

const SumScore = ({counts}) => {

    const allCount = counts.map(item => item.count)
    let sumScore = 0
    if (allCount.length > 0) {
        sumScore = allCount.reduce((total, amount) => total + amount)
    }

    return (
        <SumScoreView sumScore={sumScore}/>
    )
}

const mapStateToProps = (state) =>  ({
	counts: state.counterReducer.multiCounter
})
export default connect(mapStateToProps)(SumScore)