import React from "react";
import dateFns from "date-fns";
import Modal from 'react-modal';

import Day from '../Day';
import './calendar.css';

Modal.setAppElement(document.getElementById('root'));

class Calendar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentMonth: new Date(),
            currentDate: new Date(),
            modalIsOpen: false,
            modalDate: 0
        };
    }

    openDayModal(e){
        this.setState({modalIsOpen:true, modalDate:e.target.dataset.day});
    }

    closeDayModal=()=>{
        this.setState({modalIsOpen:false});
    }

    renderHeader(){
        const dateFormat = "MMMM YYYY";
        return(
            <div className="header row flex-middle">
              <div className="col col-start">
                <div className="icon noselect" onClick={this.prevMonth}>
                  chevron_left
                </div>
              </div>
              <div className="col col-center">
                <span>
                  {dateFns.format(this.state.currentMonth, dateFormat)}
                </span>
              </div>
              <div className="col col-end" onClick={this.nextMonth}>
                <div className="icon noselect">chevron_right</div>
              </div>
            </div>
        );
    }

    renderDays(){
        const dateFormat = "ddd";
        const days = [];
        let startDate = dateFns.startOfWeek(this.state.currentMonth);
        for (let i = 0; i < 7; i++) {
            days.push(
            <div className="col col-center" key={i}>
                {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
            </div>
            );
        }
        return <div className="days row">{days}</div>;
    }

    renderCells(){
        const { currentMonth, currentDate } = this.state;
        const monthStart = dateFns.startOfMonth(currentMonth);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart);
        const endDate = dateFns.endOfWeek(monthEnd);
        const dateFormat = "D";
        const rows=[];
        let days=[];
        let day=startDate;
        let formattedDate="";
        while(day<=endDate){
            for(let i=0;i<7;i++){
                formattedDate=dateFns.format(day,dateFormat);
                days.push(
                    <div
                        className={`col cell ${
                        !dateFns.isSameMonth(day, monthStart)
                            ? "disabled"
                            : dateFns.isSameDay(day, currentDate) ? "today"
                            : ""
                        }`}
                        key={day}
                        data-day = {day}
                        onClick={this.openDayModal.bind(this)}
                    >
                        <span className="number">{formattedDate}</span>
                    </div>
                );
                day=dateFns.addDays(day,1);
            }
            rows.push(
                <div className="row" key={day}>
                    {days}
                </div>
            );
            days=[];
        }
        return <div className="body">{rows}</div>;
    }

    nextMonth = () => {
        this.setState({
            currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
          });
    };

    prevMonth = () => {
        this.setState({
            currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
          });
    };

    render(){
        return(
            <div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeDayModal}
                    overlayClassName="overlay"
                    className="daymodal"
                > 
                    <Day modalDate={this.state.modalDate}/>
                </Modal>
                <div className="calendar">
                    {this.renderHeader()}
                    {this.renderDays()}
                    {this.renderCells()}
                </div>
            </div>
        )
    }
}

export default Calendar