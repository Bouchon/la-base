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
        short: 'Ajd.'
    }
}

class DatePicker extends Component {
    constructor () {
        super()
        this.state = {
            value: '',
            dialogOpen: false
        }
    }

    formatDate (date) { return date === '' ? '' : format(date, 'ddd Do MMM YYYY', { locale: frLocale }) }

    @autobind
    openCalendar () { this.setState({dialogOpen: true}) }

    @autobind
    closeCalendar () { this.setState({dialogOpen: false}) }

    render () {
        const { label, value, onChange } = this.props
        const displayValue = this.formatDate(value)
        return (
            <div style={css.container}>
                <Input disabled 
                    style={css.input} 
                    value={displayValue} 
                    placeholder={label}
                    onClick={this.openCalendar}></Input>
                <Dialog open={this.state.dialogOpen} onRequestClose={this.closeCalendar}>
                    <InfiniteCalendar 
                        locale={locale} 
                        style={css.calendar} 
                        selected={this.state.value}
                        onSelect={(date) => { 
                            this.closeCalendar(); 
                            this.setState({value: date})
                            onChange(date)} 
                        }/>
                </Dialog>
            </div>
        )
    }
}

export default DatePicker