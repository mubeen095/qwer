import React from 'react';
import styles from './Course.module.css';

const Course = () => {
  return (
    <div className={styles.container}>
      <h1>Infosys Mock Test</h1>
      <p>
        The Infosys placement exam is a good opportunity for aspiring professionals seeking exciting opportunities.
        Infosys, renowned for its innovative tech solutions and global reach, is a coveted destination for budding
        engineers and tech enthusiasts.
      </p>
      <p>
        Skillvertex has begun the Infosys Mock Test Series 2024 for the aspirants to prepare well for the Examination.
      </p>
      <p>
        By taking an Infosys mock test offered by Skillvertex, you gain a valuable opportunity to assess your readiness
        and hone your capabilities. It provides a realistic simulation of the actual selection process, allowing you to
        experience the potential challenges firsthand.
      </p>
      <h2>Infosys Exam 2024: Overview</h2>
      <p>
        Candidate should refer to the Infosys Overview table before attempting the Mock test. Check out the Overview
        table for reference.
      </p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Infosys Exam 2024</th>
            <th>Information Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Batch</td>
            <td>2024</td>
          </tr>
          <tr>
            <td>Education Qualification</td>
            <td>B.E/B.Tech, M. Tech, and M.Sc graduates in Computer Science/Information Technology</td>
          </tr>
          <tr>
            <td>Backlog</td>
            <td>No active Backlog</td>
          </tr>
          <tr>
            <td>Minimum marks</td>
            <td>65% </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Course;
