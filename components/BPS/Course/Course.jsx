import React from 'react';
import styles from './Course.module.css';

const Course = () => {
  return (
    <div className={styles.courseContainer}>
      <h1>TCS BPS Mock Test </h1>
      <p>
      Tata Consultancy Services (TCS) has announced  Business Process Services (BPS) Hiring to select eligible candidates. The TCS BPS  Examination will assess a candidate's general abilities through tests. Clearing the BPS  is an initial step in the job hiring process at TCS.
      </p>
      <p>Skillvertex has begun the TCS BPS Mock Test Series to help candidates prepare thoroughly for the actual BPS Examination.   </p>
      <h1>TCS BPS Overview</h1>
      <p>
        Candidates should understand the TCS BPS Exam Overview before attempting the BPS Examination by Tata Consultancy Services (TCS). This will help them to prepare well for the examination and provide time for each section of the BPS accordingly.
      </p>
      <h2>Check out the TCS BPS Overview table below:</h2>
      <table className={styles.overviewTable}>
        <tbody>
          <tr>
            <th>Criteria</th>
            <th>Details</th>
          </tr>
          <tr>
            <td>Eligible Courses</td>
            <td>B.Com, BA, BAF, BBI, BBA, BBM, BMS, BSc (Maths, Physics, Chemistry, Botany, Zoology)</td>
          </tr>
          <tr>
            <td>Year of Passing</td>
            <td>2024</td>
          </tr>
          <tr>
            <td>Backlogs</td>
            <td>Should not have any backlogs at the time of appearing for the TCS Selection process</td>
          </tr>
          <tr>
            <td>Course Duration</td>
            <td>The course should be completed within the stipulated duration</td>
          </tr>
          <tr>
            <td>Gap in Education</td>
            <td>Mandatory to declare gaps in education, if any. The overall academic gap should not exceed 24 months until the highest qualification</td>
          </tr>
          <tr>
            <td>Extended Education</td>
            <td>Course to be cleared and completed within the stipulated time duration without any backlogs</td>
          </tr>
          <tr>
            <td>Course Type</td>
            <td>Only Full-Time courses will be considered (Part-Time/Correspondence courses will not be considered). NIOS candidates are eligible if other courses are full-time</td>
          </tr>
          <tr>
            <td>Work Environment</td>
            <td>Comfortable working in 24x7 environment on rotational night shifts</td>
          </tr>
          <tr>
            <td>Experience</td>
            <td>Prior work experience, if any, is to be mandatorily declared and supported with necessary documents</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>Minimum age – 18 years, Maximum age – 28 years</td>
          </tr>
        </tbody>
      </table>
      <h1>TCS BPS Features</h1>
      <p>The important features of the TCS BPS Examination are added here </p>
      <ul>
        <li>BPS(Business Process Services) at TCS - handling and conducting various client business operations. </li>
        <li>TCS's BPS division helps companies manage and run their essential business processes and operations across various functional areas</li>
        <li>The TCS BPS Mock Test Questions are relevant and important for the BPS examination.</li>
        <li>TCS BPS Test Series offered by Skillvertex, shows the scorecard after the candidate attempts the BPS Examination.</li>
        <li>Those who attempt the TCS BPS Mock test will get the performance tracker immediately after the Examination.</li>
        <li>They will also get a detailed solution after selecting the correct answer, with an explanation. </li>
      </ul>
      <h1>Why should you attempt the TCS BPS mock test by Skillvertex?</h1>
      <p>The benefits of attempting the TCS BPS Examination are the following:</p>
      <ul>
        <li>The practice material consists of the most expected and important questions for the exam.</li>
        <li>The TCS BPS  Test Series will help candidates revise the entire syllabus for all the subjects covered in the exam.</li>
        <li>Solving the TCS BPS Mock Tests will improve the problem-solving skills and speed of the candidate's test completion.</li>
        <li>Attempting the TCS BPS Mock Tests will prepare candidates for the actual exam environment and help them assess their level of preparation.</li>
      </ul>
    </div>
  );
}

export default Course;
