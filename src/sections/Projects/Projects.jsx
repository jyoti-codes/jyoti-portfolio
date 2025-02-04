import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/milk_contrak.jpg';
import freshBurger from '../../assets/milk_amcu.jpg';
import hipsster from '../../assets/banking_mcard.jpg';
import fitLift from '../../assets/fitlift.png';
import rems from '../../assets/rems.jpg';
import amcutask from '../../assets/amcutask_ftp.jpeg';
import smsbroker from '../../assets/smsbroker_small.jpg';
import dpn from '../../assets/dpn.png';
import milkcan from '../../assets/milk-can-1.jpg';
import datalog from '../../assets/data_log.jpg';
import jot_thoughts from '../../assets/jot_thoughts.png';
import jobbuzz from '../../assets/jobbuzz.png';
import quizbuzz from '../../assets/quizbuzz.png';
import zippy from '../../assets/zippy.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Professional Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://www.stellapps.com/contrak/"
          h3="Contrak"
          p="Milk Chilling Monitor App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://www.stellapps.com/smart-amcu/"
          h3="smartAMCU"
          p="Automated Rate Calculation"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="MCard"
          p="Banking App"
        />
        <ProjectCard
          src={rems}
          link="https://www.stellapps.com/smart-amcu/"
          h3="REMS"
          p="AMCU Reporting"
        />
        <ProjectCard
          src={amcutask}
          link="https://www.stellapps.com/smart-amcu/"
          h3="AMCUTask"
          p="AMCU FTP Service"
        />
        <ProjectCard
          src={smsbroker}
          link="https://www.stellapps.com/smart-amcu/"
          h3="SMS Broker"
          p="AMCU SMS App"
        />
        <ProjectCard
          src={dpn}
          link="https://www.stellapps.com/smart-amcu/"
          h3="DPN Service"
          p="Device Push Notification Service"
        />
        <ProjectCard
          src={milkcan}
          link="https://www.stellapps.com/smart-amcu/"
          h3="Can Service"
          p="Can collection Service"
        />

        <ProjectCard
          src={datalog}
          link="https://www.stellapps.com/smart-amcu/"
          h3="Data Logger"
          p="Mobile Device Data App"
        />
      </div>

    <hr/>
      <h1 className="sectionTitle">Personal Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={jot_thoughts}
          link="https://github.com/jyoti-codes/JotThoughts"
          h3="Jot Thoughts"
          p="Note taking App"
        />
        <ProjectCard
          src={jobbuzz}
          link="https://github.com/jyoti-codes/jobportalV2"
          h3="Job Buzz"
          p="Job Portal"
        />
        <ProjectCard
          src={quizbuzz}
          link="https://github.com/jyoti-codes/reactJS_Quiz"
          h3="Quiz Buzz"
          p="Quiz Web App"
        />
        <ProjectCard
          src={zippy}
          link="https://github.com/jyoti-codes/FullStackEcommerce_Angular-SpringBoot"
          h3="Zippy"
          p="Ecommerce"
        />
       </div>
    </section>
  );
}

export default Projects;
