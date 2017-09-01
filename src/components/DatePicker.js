import React, { Component } from 'react'
import autobind from 'autobind-decorator'
import { format } from 'date-fns'
import frLocale from 'date-fns/locale/fr'

import InfiniteCalendar from 'react-infinite-calendar'
import 'react-infinite-calendar/styles.css'
import Input from 'material-ui/Input'
import Dialog from 'material-ui/Dialog'

const css = {
    container: { display: 'flex', alignItems: 'center' },
    input: { color: 'black' },
    calendar: { width: '100%', height: '100%' }
}

const locale = {
    locale: frLocale,
    headerFormat: 'dddd, D MMM',
    weekdays: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
    weekStartsOn: 1,
    blank: 'Aucune date sélectionnée',
    todayLabel: {
        long: "Aujourd'hui",
        shord: 'Ajd.'
    }
}

class DatePicker extends Component {
    constructor () {
        super()
        this.state = {
            date: '',
            dialogOpen: false
        }
    }

    @autobind
    openCalendar () { this.setState({dialogOpen: true}) }

    @autobind
    closeCalendar () { this.setState({dialogOpen: false}) }

    @autobind
    selectDate (date) {
        console.log(date)
        this.setState({date: format(date, 'ddd Do MMM', { locale: frLocale })})
        this.closeCalendar()
    }

    render () {
        const { label } = this.props
        return (
            <div style={css.container}>
                <Input disabled style={css.input} value={this.state.date} placeholder={label} onClick={this.openCalendar}></Input>
                <Dialog open={this.state.dialogOpen} onRequestClose={this.closeCalendar}>
                    <InfiniteCalendar locale={locale} style={css.calendar} onSelect={this.selectDate}/>
                </Dialog>
            </div>
        )
    }
}

export default DatePicker