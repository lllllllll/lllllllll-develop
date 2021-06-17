import React from 'react'

const Calendar = () => {
  return (
    <div className="calendar">
      <div className="item">
        <span>Th</span>
        <p>20</p>
      </div>
      <div className="item">
        <span>Fr</span>
        <p>21</p>
      </div>
      <div className="item active">
        <span>Sa</span>
        <p>22</p>
      </div>
      <div className="item">
        <span>Su</span>
        <p>23</p>
      </div>
      <div className="item">
        <span>Mo</span>
        <p>24</p>
      </div>
      <div className="item">
        <span>Tu</span>
        <p>25</p>
      </div>
      <div className="item">
        <span>We</span>
        <p>26</p>
      </div>
    </div>
  )
}

export default Calendar