import React from 'react'
import Calendar from '../../features/reports/components/Calendar'
import { CardLayout } from '../../layouts/CardLayout/CardLayout'
import { NextPageWithLayout } from '../_app'



const Reports: NextPageWithLayout = () => {
  return (
    <div>
        <Calendar></Calendar>
    </div>
  )
}

Reports.getLayout = (page) => <CardLayout>{page}</CardLayout>;

export default Reports;
