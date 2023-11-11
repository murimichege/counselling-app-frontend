import React from 'react'
import CounselingByMajorTable from './Counselingbymajor'
import CounselingStats from './CounselingStats'
import TherapyTable from './TherapyTable'
import CounselingTables from './CounselingTables'
import ServiceAccess from './ServiceAccess'
import PsychologicalTest from './PsychologicalTest'
import NationalityCount from './NationalityCount'
import ReligionCount from './ReligionCount'
import AgeCounseling from './AgeCounseling'
import AttendanceTrend from './AttendanceTrend'
function General() {
  return (
   <>
   <CounselingStats/>
   <TherapyTable/>
   <CounselingTables/>
   <ServiceAccess/>
   <NationalityCount/>
   <ReligionCount/>
   <AgeCounseling/>
   <CounselingByMajorTable/>
   <PsychologicalTest/>
   <AttendanceTrend/>

   </>
  )
}

export default General